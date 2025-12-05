import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LearningPath } from "@/data/learningPaths";
import { ArrowRight } from "lucide-react";

interface PathCardProps {
  path: LearningPath;
  onSelect: (path: LearningPath) => void;
}

export const PathCard = ({ path, onSelect }: PathCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/80 hover:scale-[1.02] animate-fade-in h-full flex flex-col">
      <CardHeader className="pb-2 sm:pb-3">
        <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
          {path.icon}
        </div>
        <CardTitle className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent line-clamp-1">
          {path.title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
          {path.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <div className="mb-2 sm:mb-3 flex items-center justify-between text-xs sm:text-sm">
          <span className="text-muted-foreground">{path.resources.length} resources</span>
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-primary/10 text-primary font-medium text-[10px] sm:text-xs">
            Complete Bundle
          </span>
        </div>
        <Button 
          onClick={() => onSelect(path)}
          size="sm"
          className="w-full group/btn bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-md text-xs sm:text-sm"
        >
          View Resources
          <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
