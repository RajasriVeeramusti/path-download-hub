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
    <Card className="group hover:shadow-[var(--shadow-elevated)] transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/80 hover:scale-105 animate-fade-in">
      <CardHeader>
        <div className="text-5xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          {path.icon}
        </div>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {path.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {path.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{path.resources.length} resources</span>
          <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-medium text-xs">
            Complete Bundle
          </span>
        </div>
        <Button 
          onClick={() => onSelect(path)}
          className="w-full group/btn bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-[var(--shadow-card)]"
        >
          View Resources
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
