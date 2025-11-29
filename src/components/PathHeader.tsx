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
    const titleLines = pdf.splitTextToSize(path.title, maxWidth);
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
    yPosition += 10;

    // Resources with clickable links
    path.resources.forEach((resource, index) => {
      if (yPosition > pageHeight - margin - 30) {
        pdf.addPage();
        yPosition = margin;
      }

      // Resource number and title
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      const titleText = `${index + 1}. ${resource.title}`;
      const titleTextLines = pdf.splitTextToSize(titleText, maxWidth);
      titleTextLines.forEach((line: string) => {
        pdf.text(line, margin, yPosition);
        yPosition += 8;
      });

      // Description
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.text("Description: ", margin, yPosition);
      const descText = pdf.splitTextToSize(resource.description, maxWidth - 30);
      descText.forEach((line: string, i: number) => {
        pdf.text(line, margin + (i === 0 ? 30 : 0), yPosition);
        yPosition += 6;
      });

      // Link (clickable)
      pdf.setTextColor(0, 0, 255);
      pdf.textWithLink("Link: " + resource.fileUrl, margin, yPosition, { url: resource.fileUrl });
      pdf.setTextColor(0, 0, 0);
      yPosition += 10;
    });

    pdf.save(`${path.title.replace(/\s+/g, '_')}_Learning_Path.pdf`);
    toast.success(`Downloaded ${path.title} learning path as PDF`);
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
