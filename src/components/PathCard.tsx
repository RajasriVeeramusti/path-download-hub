import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LearningPath } from "@/data/learningPaths";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

interface PathCardProps {
  path: LearningPath;
  onSelect: (path: LearningPath) => void;
}

export const PathCard = ({ path, onSelect }: PathCardProps) => {
  return (
    <Card className="group glass glass-hover card-hover cursor-pointer h-full flex flex-col overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="h-4 w-4 text-primary/50 animate-bounce-soft" />
      </div>
      
      {/* Top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-3 sm:pb-4 relative z-10">
        <div className="flex items-start justify-between">
          <div className="relative">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:animate-float transition-transform duration-500 filter group-hover:drop-shadow-lg">
              {path.icon}
            </div>
            {/* Glow effect under icon */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-muted/80 text-muted-foreground text-xs opacity-80 group-hover:opacity-100 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
            <BookOpen className="h-3 w-3" />
            <span className="font-medium">{path.resources.length}</span>
          </div>
        </div>
        <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text line-clamp-1 group-hover:tracking-wide transition-all duration-300">
          {path.title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-2 min-h-[2.75rem] leading-relaxed">
          {path.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="mt-auto pt-0 relative z-10">
        <div className="mb-3 sm:mb-4 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
            </div>
            <span className="text-muted-foreground font-medium">{path.resources.length} resources</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold text-[10px] sm:text-xs border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
            Ready
          </span>
        </div>
        <Button 
          onClick={() => onSelect(path)}
          size="sm"
          className="w-full group/btn gradient-btn shadow-lg text-xs sm:text-sm overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center justify-center w-full font-semibold">
            Explore Path
            <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
