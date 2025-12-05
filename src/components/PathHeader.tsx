import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LearningPath } from "@/data/learningPaths";
import { Download, FileText, Video, Code, FileCode, Sparkles } from "lucide-react";
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
    toast.loading("Generating PDF...", { id: "pdf-download" });
    
    setTimeout(() => {
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

      // Group resources by type
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

      Object.entries(resourcesByType).forEach(([type, resources]) => {
        if (yPosition > pageHeight - margin - 40) {
          pdf.addPage();
          yPosition = margin;
        }
        
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.text(typeLabels[type] || type, margin, yPosition);
        yPosition += 12;

        resources.forEach((resource, index) => {
          if (yPosition > pageHeight - margin - 35) {
            pdf.addPage();
            yPosition = margin;
          }

          pdf.setFontSize(13);
          pdf.setFont("helvetica", "bold");
          const titleText = `${index + 1}. ${resource.title}`;
          const titleTextLines = pdf.splitTextToSize(titleText, maxWidth);
          titleTextLines.forEach((line: string) => {
            pdf.text(line, margin, yPosition);
            yPosition += 7;
          });

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
      toast.success(`Downloaded ${path.title} learning path!`, { id: "pdf-download" });
    }, 500);
  };

  const statItems = [
    { type: 'pdf', icon: FileText, label: 'PDFs', color: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' },
    { type: 'video', icon: Video, label: 'Videos', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
    { type: 'code', icon: Code, label: 'Code', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    { type: 'article', icon: FileCode, label: 'Articles', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
  ];

  return (
    <div className="relative">
      {/* Background decorations */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[2rem] blur-3xl -z-10 opacity-50" />
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl -z-10 animate-pulse-glow" />
      
      <Card className="glass border-2 border-primary/20 shadow-xl overflow-hidden animate-fade-in">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Path Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left w-full lg:w-auto">
              <div className="relative">
                <div className="text-5xl sm:text-6xl lg:text-7xl animate-float">{path.icon}</div>
                <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 gradient-text leading-tight">
                  {path.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                  {path.description}
                </p>
                
                {/* Resource Stats */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  {statItems.map(({ type, icon: Icon, label, color }) => (
                    resourceCounts[type] ? (
                      <div key={type} className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${color} border text-xs sm:text-sm font-medium transition-all hover:scale-105`}>
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{resourceCounts[type]} {label}</span>
                      </div>
                    ) : null
                  ))}
                </div>
              </div>
            </div>

            {/* Download All Button */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto flex-shrink-0">
              <Button
                size="lg"
                onClick={handleDownloadAll}
                className="w-full sm:w-auto gradient-btn shadow-lg hover:shadow-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold group animate-pulse-glow"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                Download Entire Path
              </Button>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span className="px-2 py-0.5 rounded-full bg-muted">
                  {path.resources.length} resources
                </span>
                <span>•</span>
                <span>{totalSize.toFixed(1)} MB</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
