import { useState } from "react";
import { learningPaths, LearningPath } from "@/data/learningPaths";
import { PathCard } from "@/components/PathCard";
import { ResourceCard } from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SmartLearn Trail
              </h1>
            </div>
            {selectedPath && (
              <Button
                variant="outline"
                onClick={() => setSelectedPath(null)}
                className="border-primary/30 hover:bg-primary/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Paths
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!selectedPath ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Choose Your Learning Path</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Personalized Learning
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Select a learning path and download curated resources tailored to your journey
              </p>
            </div>

            {/* Learning Paths Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {learningPaths.map((path) => (
                <PathCard 
                  key={path.id} 
                  path={path} 
                  onSelect={setSelectedPath}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Selected Path Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="text-6xl mb-4">{selectedPath.icon}</div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {selectedPath.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                {selectedPath.description}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                <span className="text-sm font-medium">
                  {selectedPath.resources.length} Resources Available
                </span>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {selectedPath.resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20 py-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 SmartLearn Trail. Empowering learners worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
