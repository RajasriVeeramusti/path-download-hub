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
import { ArrowLeft, BookOpen, GraduationCap, Layout, LogOut } from "lucide-react";
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
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-[var(--shadow-card)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary shadow-[var(--shadow-glow)] animate-pulse">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SmartLearn Trail
              </h1>
            </div>
            <div className="flex items-center gap-2">
              {selectedPath && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedPath(null)}
                  className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Paths
                </Button>
              )}
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!selectedPath ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-card)] p-1">
                <TabsTrigger 
                  value="paths" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Learning Paths
                </TabsTrigger>
                <TabsTrigger 
                  value="architecture"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
                >
                  <Layout className="mr-2 h-4 w-4" />
                  Architecture
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="paths" className="mt-0">
              {/* Hero Section */}
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 shadow-[var(--shadow-card)]">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm font-medium">Choose Your Learning Path</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Personalized Learning
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Select a learning path and download curated resources tailored to your journey
                </p>
              </div>

              {/* Learning Paths Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {learningPaths.map((path, index) => (
                  <div key={path.id} style={{ animationDelay: `${index * 0.1}s` }}>
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
            <div className="mb-12">
              <PathHeader path={selectedPath} />
            </div>

            {/* Resources Grid */}
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Available Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedPath.resources.map((resource, index) => (
                  <div key={resource.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ResourceCard resource={resource} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20 py-12 bg-gradient-to-b from-card/30 to-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SmartLearn Trail
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Empowering learners worldwide with curated educational resources
            </p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 SmartLearn Trail. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
