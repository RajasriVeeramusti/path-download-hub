import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { learningPaths, LearningPath } from "@/data/learningPaths";
import { PathCard } from "@/components/PathCard";
import { ResourceCard } from "@/components/ResourceCard";
import { PathHeader } from "@/components/PathHeader";
import { ArchitectureView } from "@/components/ArchitectureView";
import { DomainGuidance } from "@/components/DomainGuidance";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, GraduationCap, Layout, LogOut, Download, Compass, FolderOpen } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [activeTab, setActiveTab] = useState<string>("paths");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        setTimeout(() => setIsLoading(false), 300);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  if (!user || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="p-5 rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-2xl animate-pulse-glow">
              <GraduationCap className="h-14 w-14 text-primary-foreground" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse" />
          </div>
          <p className="text-muted-foreground font-medium text-lg animate-pulse">Loading your learning paths...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/3 to-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-card/70 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-background/50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
              <div className="relative group/logo">
                <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-xl group-hover/logo:shadow-primary/30 transition-shadow duration-300">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] hover:animate-gradient-shift truncate">
                SmartLearn Trail
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {selectedPath && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPath(null)}
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-xs sm:text-sm transition-all duration-300 group/back"
                >
                  <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-1.5 group-hover/back:-translate-x-0.5 transition-transform duration-300" />
                  <span className="hidden sm:inline font-medium">All Paths</span>
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-primary/30 hover:bg-destructive/10 hover:border-destructive/50 hover:text-destructive text-xs sm:text-sm transition-all duration-300"
              >
                <LogOut className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-1.5" />
                <span className="hidden sm:inline font-medium">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 lg:py-14">
        {!selectedPath ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 sm:mb-10 lg:mb-14">
              <TabsList className="bg-card/90 backdrop-blur-xl border border-border/50 shadow-xl p-1.5 rounded-2xl">
                <TabsTrigger 
                  value="paths" 
                  className="text-xs sm:text-sm rounded-xl px-4 sm:px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <BookOpen className="mr-1.5 sm:mr-2 h-4 w-4" />
                  <span className="font-medium">Learning Paths</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="architecture"
                  className="text-xs sm:text-sm rounded-xl px-4 sm:px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Layout className="mr-1.5 sm:mr-2 h-4 w-4" />
                  <span className="font-medium">Architecture</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="paths" className="mt-0">
              {/* Hero Section */}
              <div className="text-center mb-10 sm:mb-14 lg:mb-18 animate-fade-in px-2">
                <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 text-primary mb-5 sm:mb-7 shadow-lg border border-primary/20 backdrop-blur-sm">
                  <BookOpen className="h-4 w-4 animate-bounce-soft" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">Choose Your Learning Path</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight tracking-tight">
                  Personalized Learning
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Select a learning path and access curated resources tailored to your journey
                </p>
              </div>

              {/* Learning Paths Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                {learningPaths.map((path, index) => (
                  <div 
                    key={path.id} 
                    className="animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
                  >
                    <PathCard 
                      path={path} 
                      onSelect={setSelectedPath}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="mt-0">
              <ArchitectureView />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="animate-fade-in">
            {/* Selected Path Header */}
            <div className="mb-8 sm:mb-10 lg:mb-14">
              <PathHeader path={selectedPath} />
            </div>

            {/* Path Content Tabs */}
            <Tabs defaultValue="guidance" className="w-full">
              <div className="flex justify-center mb-8 sm:mb-10">
                <TabsList className="bg-card/90 backdrop-blur-xl border border-border/50 shadow-xl p-1.5 rounded-2xl">
                  <TabsTrigger 
                    value="guidance" 
                    className="text-xs sm:text-sm rounded-xl px-4 sm:px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Compass className="mr-1.5 sm:mr-2 h-4 w-4" />
                    <span className="font-medium">Learning Guide</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="resources"
                    className="text-xs sm:text-sm rounded-xl px-4 sm:px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <FolderOpen className="mr-1.5 sm:mr-2 h-4 w-4" />
                    <span className="font-medium">Resources</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="guidance" className="mt-0">
                <DomainGuidance path={selectedPath} />
              </TabsContent>

              <TabsContent value="resources" className="mt-0 animate-fade-in">
                {/* Resources by Content Type */}
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-8 sm:mb-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 gradient-text">Available Resources</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Curated learning materials organized by content type</p>
                  </div>
                  
                  {/* Group resources by contentType */}
                  {(() => {
                    const groupedResources = selectedPath.resources.reduce((acc, resource) => {
                      if (!acc[resource.contentType]) {
                        acc[resource.contentType] = [];
                      }
                      acc[resource.contentType].push(resource);
                      return acc;
                    }, {} as Record<string, typeof selectedPath.resources>);

                    const handleDownloadContentType = (contentType: string, resources: typeof selectedPath.resources) => {
                      let content = `${contentType}\n${'='.repeat(contentType.length)}\n\n`;
                      
                      resources.forEach((resource, index) => {
                        content += `Topic ${index + 1}: ${resource.title}\n`;
                        content += `${'-'.repeat(resource.title.length + 9)}\n`;
                        content += `Description: ${resource.description}\n`;
                        content += `Link: ${resource.fileUrl}\n\n`;
                      });
                      
                      const blob = new Blob([content], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = `${contentType.replace(/\s+/g, '_')}.txt`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      URL.revokeObjectURL(url);
                      
                      toast.success(`Downloaded ${contentType}`);
                    };

                    return Object.entries(groupedResources).map(([contentType, resources], groupIndex) => (
                      <div 
                        key={contentType} 
                        className="mb-8 sm:mb-10 lg:mb-14 animate-fade-in-up opacity-0" 
                        style={{ animationDelay: `${groupIndex * 0.1}s`, animationFillMode: 'forwards' }}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 sm:mb-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card/80 to-muted/50 backdrop-blur-xl border border-border/50 shadow-lg">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="text-3xl sm:text-4xl p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">📚</div>
                            <div>
                              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">{contentType}</h4>
                              <span className="text-xs sm:text-sm text-muted-foreground font-medium">{resources.length} topics available</span>
                            </div>
                          </div>
                          <Button
                            size="default"
                            onClick={() => handleDownloadContentType(contentType, resources)}
                            className="w-full sm:w-auto gradient-btn text-sm font-semibold px-6"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download All
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                          {resources.map((resource, index) => (
                            <div 
                              key={resource.id} 
                              className="animate-fade-in opacity-0" 
                              style={{ animationDelay: `${(groupIndex * 0.1) + (index * 0.05)}s`, animationFillMode: 'forwards' }}
                            >
                              <ResourceCard resource={resource} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 mt-16 sm:mt-20 lg:mt-24 py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-transparent via-card/50 to-muted/30 backdrop-blur-xl">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
              <div className="relative group">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-xl group-hover:shadow-primary/30 transition-shadow duration-300">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                SmartLearn Trail
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto px-4 leading-relaxed">
              Empowering learners worldwide with curated educational resources
            </p>
          </div>
          <div className="text-center text-xs sm:text-sm text-muted-foreground/70">
            <p>© 2025 SmartLearn Trail. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
