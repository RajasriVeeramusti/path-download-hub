import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Resource } from "@/data/learningPaths";
import { FileText, Video, Code, FileCode, ExternalLink, Play, BookOpen, Terminal } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

const getIcon = (type: Resource['type']) => {
  const iconClass = "h-4 w-4 sm:h-5 sm:w-5";
  switch (type) {
    case 'pdf':
      return <FileText className={iconClass} />;
    case 'video':
      return <Play className={iconClass} />;
    case 'code':
      return <Terminal className={iconClass} />;
    case 'article':
      return <BookOpen className={iconClass} />;
  }
};

const getTypeLabel = (type: Resource['type']) => {
  switch (type) {
    case 'pdf':
      return 'PDF';
    case 'video':
      return 'Video';
    case 'code':
      return 'Code';
    case 'article':
      return 'Article';
  }
};

const getTypeStyles = (type: Resource['type']) => {
  switch (type) {
    case 'pdf':
      return {
        bg: 'bg-red-500/10 group-hover:bg-red-500/20',
        text: 'text-red-600 dark:text-red-400',
        border: 'border-red-500/20',
        glow: 'group-hover:shadow-red-500/20',
      };
    case 'video':
      return {
        bg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-500/20',
        glow: 'group-hover:shadow-purple-500/20',
      };
    case 'code':
      return {
        bg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-500/20',
        glow: 'group-hover:shadow-emerald-500/20',
      };
    case 'article':
      return {
        bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-500/20',
        glow: 'group-hover:shadow-blue-500/20',
      };
  }
};

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const styles = getTypeStyles(resource.type);
  
  return (
    <a 
      href={resource.fileUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className={`group glass glass-hover h-full flex flex-col overflow-hidden relative cursor-pointer hover:shadow-lg ${styles.glow} transition-all duration-300`}>
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${styles.bg} ${styles.text.replace('text-', 'bg-').replace('/10', '')} opacity-50 group-hover:opacity-100 transition-opacity`} />
        
        <CardHeader className="pb-2 sm:pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className={`p-2 sm:p-3 rounded-xl ${styles.bg} ${styles.text} ${styles.border} border group-hover:scale-105 transition-all duration-300`}>
              {getIcon(resource.type)}
            </div>
            <div className={`p-1.5 sm:p-2 rounded-lg ${styles.bg} opacity-0 group-hover:opacity-100 transition-all duration-300 ${styles.text}`}>
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>
          </div>
          <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold line-clamp-2 mt-2 group-hover:text-primary transition-colors">
            {resource.title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm line-clamp-2 min-h-[2.5rem]">
            {resource.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="mt-auto pt-0">
          <div className="flex items-center justify-between">
            <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${styles.bg} ${styles.text} ${styles.border} border`}>
              {getTypeLabel(resource.type)}
            </span>
            <span className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
              Click to open →
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
