import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Resource } from "@/data/learningPaths";
import { FileText, Video, Code, FileCode, ExternalLink } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

const getIcon = (type: Resource['type']) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-4 w-4 sm:h-5 sm:w-5" />;
    case 'video':
      return <Video className="h-4 w-4 sm:h-5 sm:w-5" />;
    case 'code':
      return <Code className="h-4 w-4 sm:h-5 sm:w-5" />;
    case 'article':
      return <FileCode className="h-4 w-4 sm:h-5 sm:w-5" />;
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

const getTypeColor = (type: Resource['type']) => {
  switch (type) {
    case 'pdf':
      return 'bg-red-500/10 text-red-600 dark:text-red-400';
    case 'video':
      return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
    case 'code':
      return 'bg-green-500/10 text-green-600 dark:text-green-400';
    case 'article':
      return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
  }
};

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="group hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/20 h-full flex flex-col">
      <CardHeader className="pb-2 sm:pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className={`p-2 sm:p-3 rounded-lg ${getTypeColor(resource.type)} group-hover:scale-105 transition-transform`}>
            {getIcon(resource.type)}
          </div>
          <a 
            href={resource.fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-md hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
            title="Open resource"
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </a>
        </div>
        <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold line-clamp-2 mt-2">
          {resource.title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm line-clamp-3">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <div className="flex items-center justify-between">
          <span className={`text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(resource.type)}`}>
            {getTypeLabel(resource.type)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
