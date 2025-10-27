import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FolderOpen, Download, CheckCircle, Users, Database } from "lucide-react";

export const ArchitectureView = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Platform Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how SmartLearn Trail delivers personalized learning experiences
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <Card className="relative overflow-hidden group hover:shadow-[var(--shadow-elevated)] transition-all duration-300 animate-fade-in">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <CardHeader>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">1. Choose Your Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Select from 10+ specialized learning paths tailored to different tech careers and interests
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  Personalized Selection
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative overflow-hidden group hover:shadow-[var(--shadow-elevated)] transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full" />
              <CardHeader>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">2. Explore Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse curated resources including PDFs, videos, code samples, and interactive tutorials
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-secondary font-medium">
                  <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full" />
                  Curated Content
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative overflow-hidden group hover:shadow-[var(--shadow-elevated)] transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
              <CardHeader>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-primary w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">3. Download & Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download individual resources or entire path bundles to learn at your own pace
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-accent font-medium">
                  <div className="h-1 w-12 bg-gradient-to-r from-accent to-primary rounded-full" />
                  Flexible Access
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Flow Visualization */}
          <Card className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Learning Journey Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-6">
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[var(--shadow-glow)]">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-center">User Interest</p>
                  <p className="text-sm text-muted-foreground text-center">Define learning goals</p>
                </div>

                <div className="hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary" />
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="p-4 rounded-full bg-gradient-to-br from-secondary to-accent shadow-[var(--shadow-glow)]">
                    <FolderOpen className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-center">Path Selection</p>
                  <p className="text-sm text-muted-foreground text-center">Choose specialized track</p>
                </div>

                <div className="hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-16 bg-gradient-to-r from-secondary to-accent" />
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="p-4 rounded-full bg-gradient-to-br from-accent to-primary shadow-[var(--shadow-glow)]">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-center">Resource Access</p>
                  <p className="text-sm text-muted-foreground text-center">Download materials</p>
                </div>

                <div className="hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-primary" />
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[var(--shadow-glow)]">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-center">Achievement</p>
                  <p className="text-sm text-muted-foreground text-center">Complete learning goals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-sm text-muted-foreground">Learning Paths</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                40+
              </div>
              <p className="text-sm text-muted-foreground">Total Resources</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                4
              </div>
              <p className="text-sm text-muted-foreground">Content Types</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-sm text-muted-foreground">Free Access</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
