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
    <Card className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/80">
      <CardHeader>
        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
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
        <Button 
          onClick={() => onSelect(path)}
          className="w-full group/btn bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
        >
          View Resources
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
