import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Resource } from "@/data/learningPaths";
import { FileText, Video, Code, FileCode } from "lucide-react";

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
  return (
    <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50 hover:border-primary/20">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
            {getIcon(resource.type)}
          </div>
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
        </div>
      </CardContent>
    </Card>
  );
};
