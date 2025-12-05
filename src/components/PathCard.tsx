import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LearningPath } from "@/data/learningPaths";
import { ArrowRight, BookOpen } from "lucide-react";

interface PathCardProps {
  path: LearningPath;
  onSelect: (path: LearningPath) => void;
}

export const PathCard = ({ path, onSelect }: PathCardProps) => {
  return (
    <Card className="group glass glass-hover card-hover cursor-pointer h-full flex flex-col overflow-hidden relative">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-2 sm:pb-3 relative z-10">
        <div className="flex items-start justify-between">
          <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 group-hover:scale-110 group-hover:animate-float transition-transform duration-300">
            {path.icon}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            <BookOpen className="h-3 w-3" />
            <span>{path.resources.length}</span>
          </div>
        </div>
        <CardTitle className="text-base sm:text-lg lg:text-xl font-bold gradient-text line-clamp-1">
          {path.title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {path.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="mt-auto pt-0 relative z-10">
        <div className="mb-2 sm:mb-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-muted-foreground">{path.resources.length} resources</span>
          </div>
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary font-medium text-[10px] sm:text-xs border border-primary/20">
            Complete
          </span>
        </div>
        <Button 
          onClick={() => onSelect(path)}
          size="sm"
          className="w-full group/btn gradient-btn shadow-md text-xs sm:text-sm overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center justify-center w-full">
            Explore Path
            <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
