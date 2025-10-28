import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Resource } from "@/data/learningPaths";
import { Download, FileText, Video, Code, FileCode } from "lucide-react";
import { toast } from "sonner";

interface ResourceCardProps {
  resource: Resource;
}

const getIcon = (type: Resource['type']) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-5 w-5" />;
    case 'video':
      return <Video className="h-5 w-5" />;
    case 'code':
      return <Code className="h-5 w-5" />;
    case 'article':
      return <FileCode className="h-5 w-5" />;
  }
};

const getTypeLabel = (type: Resource['type']) => {
  switch (type) {
    case 'pdf':
      return 'PDF Document';
    case 'video':
      return 'Video Tutorial';
    case 'code':
      return 'Code Files';
    case 'article':
      return 'Article';
  }
};

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const handleDownload = () => {
    // Create a blob for the download
    const content = `${resource.title}\n\n${resource.description}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resource.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success(`Downloaded ${resource.title}`);
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50 hover:border-primary/20">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
            {getIcon(resource.type)}
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
            {resource.size}
          </span>
        </div>
        <CardTitle className="text-lg font-semibold">
          {resource.title}
        </CardTitle>
        <CardDescription className="text-sm">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-primary">
            {getTypeLabel(resource.type)}
          </span>
          <Button 
            size="sm"
            onClick={handleDownload}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
