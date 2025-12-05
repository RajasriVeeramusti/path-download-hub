import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LearningPath } from "@/data/learningPaths";
import { Download, FileText, Video, Code, FileCode } from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";

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
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Title
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    const titleLines = pdf.splitTextToSize(`${path.title} Learning Path`, maxWidth);
    titleLines.forEach((line: string) => {
      pdf.text(line, margin, yPosition);
      yPosition += 10;
    });
    yPosition += 5;

    // Description
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    const descLines = pdf.splitTextToSize(path.description, maxWidth);
    descLines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.text(line, margin, yPosition);
      yPosition += 7;
    });
    yPosition += 15;

    // Group resources by type for better organization
    const resourcesByType = path.resources.reduce((acc, resource) => {
      if (!acc[resource.type]) {
        acc[resource.type] = [];
      }
      acc[resource.type].push(resource);
      return acc;
    }, {} as Record<string, typeof path.resources>);

    const typeLabels: Record<string, string> = {
      pdf: '📄 PDF Resources',
      video: '🎥 Video Resources',
      code: '💻 Code Resources',
      article: '📝 Article Resources'
    };

    // Iterate through each resource type
    Object.entries(resourcesByType).forEach(([type, resources]) => {
      // Section header
      if (yPosition > pageHeight - margin - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text(typeLabels[type] || type, margin, yPosition);
      yPosition += 12;

      // Resources in this type
      resources.forEach((resource, index) => {
        if (yPosition > pageHeight - margin - 35) {
          pdf.addPage();
          yPosition = margin;
        }

        // Resource number and title
        pdf.setFontSize(13);
        pdf.setFont("helvetica", "bold");
        const titleText = `${index + 1}. ${resource.title}`;
        const titleTextLines = pdf.splitTextToSize(titleText, maxWidth);
        titleTextLines.forEach((line: string) => {
          pdf.text(line, margin, yPosition);
          yPosition += 7;
        });

        // Description
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        const descText = pdf.splitTextToSize(resource.description, maxWidth - 5);
        descText.forEach((line: string) => {
          if (yPosition > pageHeight - margin) {
            pdf.addPage();
            yPosition = margin;
          }
          pdf.text(line, margin + 5, yPosition);
          yPosition += 5;
        });

        // Link (clickable)
        if (yPosition > pageHeight - margin - 10) {
          pdf.addPage();
          yPosition = margin;
        }
        pdf.setTextColor(0, 102, 204);
        pdf.setFont("helvetica", "italic");
        const linkText = resource.fileUrl.length > 60 
          ? resource.fileUrl.substring(0, 60) + '...' 
          : resource.fileUrl;
        pdf.textWithLink(`🔗 ${linkText}`, margin + 5, yPosition, { url: resource.fileUrl });
        pdf.setTextColor(0, 0, 0);
        yPosition += 10;
      });
      
      yPosition += 8;
    });

    pdf.save(`${path.title.replace(/\s+/g, '_')}_Learning_Path.pdf`);
    toast.success(`Downloaded ${path.title} learning path as PDF`);
  };

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl -z-10" />
      
      <Card className="border-2 border-primary/20 shadow-lg bg-gradient-to-br from-card via-card to-muted/30 animate-fade-in overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Path Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left w-full lg:w-auto">
              <div className="text-5xl sm:text-6xl lg:text-7xl">{path.icon}</div>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                  {path.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                  {path.description}
                </p>
                
                {/* Resource Stats */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  {resourceCounts.pdf && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-primary/10 text-primary text-xs sm:text-sm">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="font-medium">{resourceCounts.pdf} PDFs</span>
                    </div>
                  )}
                  {resourceCounts.video && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-secondary/10 text-secondary text-xs sm:text-sm">
                      <Video className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="font-medium">{resourceCounts.video} Videos</span>
                    </div>
                  )}
                  {resourceCounts.code && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-accent/10 text-accent text-xs sm:text-sm">
                      <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="font-medium">{resourceCounts.code} Code</span>
                    </div>
                  )}
                  {resourceCounts.article && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-muted text-foreground text-xs sm:text-sm">
                      <FileCode className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="font-medium">{resourceCounts.article} Articles</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Download All Button */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto flex-shrink-0">
              <Button
                size="lg"
                onClick={handleDownloadAll}
                className="w-full sm:w-auto bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all duration-300 shadow-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold group"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                Download Entire Path
              </Button>
              <span className="text-xs sm:text-sm text-muted-foreground">
                Total: {totalSize.toFixed(1)} MB
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
