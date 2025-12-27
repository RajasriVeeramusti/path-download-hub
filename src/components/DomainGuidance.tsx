import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, Clock, Target, Lightbulb, Briefcase, 
  CheckCircle2, Circle, BookOpen, Rocket, MapPin, 
  ArrowRight, Star, TrendingUp, Code
} from "lucide-react";
import { DomainGuidance as DomainGuidanceType, getGuidanceForPath } from "@/data/domainGuidance";
import { LearningPath } from "@/data/learningPaths";

interface DomainGuidanceProps {
  path: LearningPath;
}

export const DomainGuidance = ({ path }: DomainGuidanceProps) => {
  const guidance = getGuidanceForPath(path.id);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);
  
  if (!guidance) return null;

  const toggleMilestone = (milestoneId: string) => {
    setCompletedMilestones(prev => 
      prev.includes(milestoneId) 
        ? prev.filter(id => id !== milestoneId)
        : [...prev, milestoneId]
    );
  };

  const progressPercentage = (completedMilestones.length / guidance.milestones.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-600 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-600 border-red-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'bg-green-500/20 text-green-600';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-600';
      case 'Low': return 'bg-red-500/20 text-red-600';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'required': return 'bg-red-500/20 text-red-600 border-red-500/30';
      case 'recommended': return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30';
      case 'optional': return 'bg-green-500/20 text-green-600 border-green-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Overview Section */}
      <Card className="glass border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <CardHeader className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-4xl sm:text-5xl">{path.icon}</div>
            <div className="flex-1">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl gradient-text mb-2">
                {path.title} Learning Guide
              </CardTitle>
              <p className="text-sm sm:text-base text-muted-foreground">{guidance.overview}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 text-center">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-semibold text-sm sm:text-base">{guidance.totalDuration}</p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 text-center">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-secondary" />
              <p className="text-xs text-muted-foreground">Difficulty</p>
              <Badge variant="outline" className={`${getDifficultyColor(guidance.difficulty)} text-xs mt-1`}>
                {guidance.difficulty}
              </Badge>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 text-center">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-accent" />
              <p className="text-xs text-muted-foreground">Weekly Hours</p>
              <p className="font-semibold text-sm sm:text-base">{guidance.weeklyCommitment}</p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 text-center">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Milestones</p>
              <p className="font-semibold text-sm sm:text-base">{guidance.milestones.length} Steps</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabbed Content */}
      <Tabs defaultValue="roadmap" className="w-full">
        <TabsList className="w-full sm:w-auto grid grid-cols-4 sm:flex gap-1 bg-card/80 border border-border/50 p-1 rounded-xl">
          <TabsTrigger value="roadmap" className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Roadmap</span>
          </TabsTrigger>
          <TabsTrigger value="prerequisites" className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Prerequisites</span>
          </TabsTrigger>
          <TabsTrigger value="tips" className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground">
            <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Study Tips</span>
          </TabsTrigger>
          <TabsTrigger value="careers" className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground">
            <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Careers</span>
          </TabsTrigger>
        </TabsList>

        {/* Roadmap Tab */}
        <TabsContent value="roadmap" className="mt-6">
          <Card className="glass border-border/50">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Rocket className="h-5 w-5 text-primary" />
                    Your Learning Roadmap
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Track your progress through {guidance.milestones.length} key milestones
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-2xl font-bold gradient-text">{Math.round(progressPercentage)}%</p>
                    <p className="text-xs text-muted-foreground">Complete</p>
                  </div>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-2 mt-4" />
            </CardHeader>
            <CardContent className="space-y-4">
              {guidance.milestones.map((milestone, index) => {
                const isCompleted = completedMilestones.includes(milestone.id);
                return (
                  <div 
                    key={milestone.id}
                    className={`relative p-4 sm:p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                      isCompleted 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-card/50 border-border/50 hover:border-primary/30 hover:bg-primary/5'
                    }`}
                    onClick={() => toggleMilestone(milestone.id)}
                  >
                    {/* Connection Line */}
                    {index < guidance.milestones.length - 1 && (
                      <div className={`absolute left-7 sm:left-8 top-full w-0.5 h-4 ${
                        isCompleted ? 'bg-green-500' : 'bg-border'
                      }`} />
                    )}
                    
                    <div className="flex gap-3 sm:gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
                        isCompleted 
                          ? 'bg-green-500 text-white' 
                          : 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                          <span className="font-bold text-sm sm:text-base">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                          <h4 className={`font-semibold text-sm sm:text-base ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                            {milestone.title}
                          </h4>
                          <Badge variant="outline" className="w-fit text-xs bg-primary/10 border-primary/30">
                            <Clock className="h-3 w-3 mr-1" />
                            {milestone.estimatedTime}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3">{milestone.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.skills.map((skill, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-[10px] sm:text-xs bg-secondary/50"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Prerequisites Tab */}
        <TabsContent value="prerequisites" className="mt-6">
          <div className="grid gap-4 sm:gap-6">
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Before You Start
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Make sure you have these foundations covered
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {guidance.prerequisites.map((prereq) => (
                  <div 
                    key={prereq.id}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <div className={`flex-shrink-0 px-2 py-1 rounded-md text-[10px] sm:text-xs font-medium capitalize border ${getImportanceColor(prereq.importance)}`}>
                      {prereq.importance}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">{prereq.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{prereq.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Project Ideas */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Code className="h-5 w-5 text-secondary" />
                  Project Ideas
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Practice with these hands-on projects
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {guidance.projectIdeas.map((idea, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-sm">{idea}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Study Tips Tab */}
        <TabsContent value="tips" className="mt-6">
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Expert Study Tips
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Maximize your learning with these proven strategies
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {guidance.studyTips.map((tip, index) => (
                  <div 
                    key={tip.id}
                    className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                      {tip.icon}
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{tip.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Careers Tab */}
        <TabsContent value="careers" className="mt-6">
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Briefcase className="h-5 w-5 text-primary" />
                Career Opportunities
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Explore potential career paths after completing this learning path
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guidance.careerPaths.map((career, index) => (
                  <div 
                    key={index}
                    className="p-4 sm:p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-semibold text-sm sm:text-base">{career.title}</h4>
                      <Badge className={`text-[10px] sm:text-xs ${getDemandColor(career.demand)}`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {career.demand} Demand
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">{career.description}</p>
                    <div className="flex items-center gap-2 text-primary">
                      <Star className="h-4 w-4" />
                      <span className="font-medium text-sm">{career.salary}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
