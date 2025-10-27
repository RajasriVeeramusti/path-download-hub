import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LearningPath } from "@/data/learningPaths";
import { Download, FileText, Video, Code, FileCode } from "lucide-react";
import { toast } from "sonner";

interface PathHeaderProps {
  path: LearningPath;
}

export const PathHeader = ({ path }: PathHeaderProps) => {
  const totalSize = path.resources.reduce((acc, resource) => {
    const size = parseFloat(resource.size);
    const unit = resource.size.split(' ')[1];
    return acc + (unit === 'MB' ? size : size / 1024);
  }, 0);

  const resourceCounts = path.resources.reduce((acc, resource) => {
    acc[resource.type] = (acc[resource.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleDownloadAll = () => {
    toast.success(`Preparing to download entire ${path.title} path...`, {
      description: `Total size: ${totalSize.toFixed(1)} MB • ${path.resources.length} files`,
      duration: 5000,
    });
    
    // Simulate bundle download
    setTimeout(() => {
      toast.success('Download started!', {
        description: 'Your learning path bundle is being prepared.',
      });
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl -z-10" />
      
      <Card className="border-2 border-primary/20 shadow-[var(--shadow-elevated)] bg-gradient-to-br from-card via-card to-muted/30 animate-fade-in">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Path Info */}
            <div className="flex items-center gap-6">
              <div className="text-7xl animate-bounce">{path.icon}</div>
              <div>
                <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {path.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {path.description}
                </p>
                
                {/* Resource Stats */}
                <div className="flex flex-wrap gap-3">
                  {resourceCounts.pdf && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">{resourceCounts.pdf} PDFs</span>
                    </div>
                  )}
                  {resourceCounts.video && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary text-sm">
                      <Video className="h-4 w-4" />
                      <span className="font-medium">{resourceCounts.video} Videos</span>
                    </div>
                  )}
                  {resourceCounts.code && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm">
                      <Code className="h-4 w-4" />
                      <span className="font-medium">{resourceCounts.code} Code</span>
                    </div>
                  )}
                  {resourceCounts.article && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm">
                      <FileCode className="h-4 w-4" />
                      <span className="font-medium">{resourceCounts.article} Articles</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Download All Button */}
            <div className="flex flex-col items-center gap-3">
              <Button
                size="lg"
                onClick={handleDownloadAll}
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all duration-300 shadow-[var(--shadow-glow)] px-8 py-6 text-lg font-semibold group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Entire Path
              </Button>
              <span className="text-sm text-muted-foreground">
                Total: {totalSize.toFixed(1)} MB
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
