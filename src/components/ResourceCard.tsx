import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Resource } from "@/data/learningPaths";
import { FileText, Play, BookOpen, Terminal, ExternalLink, ArrowUpRight } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

const getIcon = (type: Resource['type']) => {
  const iconClass = "h-5 w-5 sm:h-6 sm:w-6";
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
        bg: 'bg-rose-500/10 group-hover:bg-rose-500/20',
        text: 'text-rose-500 dark:text-rose-400',
        border: 'border-rose-500/30',
        glow: 'group-hover:shadow-rose-500/20',
        gradient: 'from-rose-500 to-orange-500',
        ring: 'ring-rose-500/20',
      };
    case 'video':
      return {
        bg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
        text: 'text-violet-500 dark:text-violet-400',
        border: 'border-violet-500/30',
        glow: 'group-hover:shadow-violet-500/20',
        gradient: 'from-violet-500 to-purple-500',
        ring: 'ring-violet-500/20',
      };
    case 'code':
      return {
        bg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
        text: 'text-emerald-500 dark:text-emerald-400',
        border: 'border-emerald-500/30',
        glow: 'group-hover:shadow-emerald-500/20',
        gradient: 'from-emerald-500 to-teal-500',
        ring: 'ring-emerald-500/20',
      };
    case 'article':
      return {
        bg: 'bg-sky-500/10 group-hover:bg-sky-500/20',
        text: 'text-sky-500 dark:text-sky-400',
        border: 'border-sky-500/30',
        glow: 'group-hover:shadow-sky-500/20',
        gradient: 'from-sky-500 to-blue-500',
        ring: 'ring-sky-500/20',
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
      className="block h-full group"
    >
      <Card className={`glass glass-hover h-full flex flex-col overflow-hidden relative cursor-pointer hover:shadow-2xl ${styles.glow} transition-all duration-500`}>
        {/* Animated top accent */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${styles.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Corner decoration */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`} />
        
        <CardHeader className="pb-3 sm:pb-4">
          <div className="flex items-start justify-between gap-3">
            <div className={`relative p-3 sm:p-4 rounded-2xl ${styles.bg} ${styles.text} ${styles.border} border-2 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}>
              {getIcon(resource.type)}
              {/* Pulse ring */}
              <div className={`absolute inset-0 rounded-2xl ring-2 ${styles.ring} opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity`} />
            </div>
            <div className={`p-2 rounded-xl ${styles.bg} opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500 ${styles.text}`}>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          <CardTitle className="text-base sm:text-lg lg:text-xl font-bold line-clamp-2 mt-3 group-hover:text-primary transition-colors duration-300">
            {resource.title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm line-clamp-2 min-h-[2.75rem] leading-relaxed">
            {resource.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="mt-auto pt-0">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${styles.gradient} text-white shadow-md`}>
              {getTypeLabel(resource.type)}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
              <span className="font-medium">Open</span>
              <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
