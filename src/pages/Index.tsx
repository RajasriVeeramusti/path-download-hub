import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { learningPaths, LearningPath } from "@/data/learningPaths";
import { PathCard } from "@/components/PathCard";
import { ResourceCard } from "@/components/ResourceCard";
import { PathHeader } from "@/components/PathHeader";
import { ArchitectureView } from "@/components/ArchitectureView";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, GraduationCap, Layout, LogOut, Download } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [activeTab, setActiveTab] = useState<string>("paths");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-primary to-secondary shadow-lg flex-shrink-0">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent truncate">
                SmartLearn Trail
              </h1>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {selectedPath && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPath(null)}
                  className="border-primary/30 hover:bg-primary/10 text-xs sm:text-sm"
                >
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                  <span className="hidden sm:inline">All Paths</span>
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-primary/30 hover:bg-primary/10 text-xs sm:text-sm"
              >
                <LogOut className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        {!selectedPath ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
              <TabsList className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-md p-1">
                <TabsTrigger 
                  value="paths" 
                  className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground"
                >
                  <BookOpen className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">Learning </span>Paths
                </TabsTrigger>
                <TabsTrigger 
                  value="architecture"
                  className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground"
                >
                  <Layout className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Architecture
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="paths" className="mt-0">
              {/* Hero Section */}
              <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in px-2">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6 shadow-md">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm font-medium">Choose Your Learning Path</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                  Personalized Learning
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Select a learning path and download curated resources tailored to your journey
                </p>
              </div>

              {/* Learning Paths Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
                {learningPaths.map((path, index) => (
                  <div key={path.id} style={{ animationDelay: `${index * 0.05}s` }}>
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
          <>
            {/* Selected Path Header */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <PathHeader path={selectedPath} />
            </div>

            {/* Resources by Content Type */}
            <div className="max-w-7xl mx-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">Available Resources by Content Type</h3>
              
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

                return Object.entries(groupedResources).map(([contentType, resources]) => (
                  <div key={contentType} className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-2xl sm:text-3xl">📚</span>
                        <div>
                          <h4 className="text-base sm:text-lg lg:text-xl font-semibold">{contentType}</h4>
                          <span className="text-xs sm:text-sm text-muted-foreground">{resources.length} topics</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleDownloadContentType(contentType, resources)}
                        className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-xs sm:text-sm"
                      >
                        <Download className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                        Download {contentType}
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                      {resources.map((resource, index) => (
                        <div key={resource.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                          <ResourceCard resource={resource} />
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-12 sm:mt-16 lg:mt-20 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-card/30 to-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SmartLearn Trail
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto px-4">
              Empowering learners worldwide with curated educational resources
            </p>
          </div>
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            <p>© 2025 SmartLearn Trail. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
