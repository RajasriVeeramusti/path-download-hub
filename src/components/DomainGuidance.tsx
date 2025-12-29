import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, Clock, Target, Lightbulb, Briefcase, 
  BookOpen, Rocket, MapPin, ArrowRight, Star, TrendingUp, 
  Code, CheckCircle, Zap, Users, Trophy, Layers
} from "lucide-react";
import { getGuidanceForPath } from "@/data/domainGuidance";
import { LearningPath } from "@/data/learningPaths";

interface DomainGuidanceProps {
  path: LearningPath;
}

export const DomainGuidance = ({ path }: DomainGuidanceProps) => {
  const guidance = getGuidanceForPath(path.id);
  
  if (!guidance) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Intermediate': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Advanced': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'bg-emerald-500/20 text-emerald-400';
      case 'Medium': return 'bg-amber-500/20 text-amber-400';
      case 'Low': return 'bg-rose-500/20 text-rose-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'required': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      case 'recommended': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'optional': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPhaseColor = (index: number) => {
    const colors = [
      'from-violet-500 to-purple-600',
      'from-blue-500 to-cyan-500',
      'from-emerald-500 to-teal-500',
      'from-amber-500 to-orange-500',
      'from-rose-500 to-pink-500',
      'from-indigo-500 to-blue-600',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Hero Overview Section */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-3xl" />
        
        <CardHeader className="relative pb-2">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="relative">
              <div className="text-6xl sm:text-7xl p-4 bg-gradient-to-br from-card to-muted rounded-2xl shadow-xl border border-border/50">
                {path.icon}
              </div>
              <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-primary to-secondary rounded-full">
                <Rocket className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <Badge variant="outline" className={`mb-3 ${getDifficultyColor(guidance.difficulty)}`}>
                  <Target className="h-3 w-3 mr-1" />
                  {guidance.difficulty} Level
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                  {path.title} Mastery Guide
                </CardTitle>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {guidance.overview}
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="relative pt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-violet-500/20">
                  <Clock className="h-5 w-5 text-violet-400" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Duration</span>
              </div>
              <p className="font-bold text-lg sm:text-xl">{guidance.totalDuration}</p>
            </div>
            
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Weekly</span>
              </div>
              <p className="font-bold text-lg sm:text-xl">{guidance.weeklyCommitment}</p>
            </div>
            
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-emerald-500/20">
                  <Layers className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Phases</span>
              </div>
              <p className="font-bold text-lg sm:text-xl">{guidance.milestones.length} Milestones</p>
            </div>
            
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-amber-500/20">
                  <Trophy className="h-5 w-5 text-amber-400" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Careers</span>
              </div>
              <p className="font-bold text-lg sm:text-xl">{guidance.careerPaths.length} Paths</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabbed Content */}
      <Tabs defaultValue="roadmap" className="w-full">
        <TabsList className="w-full sm:w-auto flex flex-wrap gap-1 bg-card/80 backdrop-blur-sm border border-border/50 p-1.5 rounded-xl h-auto">
          <TabsTrigger value="roadmap" className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground rounded-lg">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" />
            Roadmap
          </TabsTrigger>
          <TabsTrigger value="prerequisites" className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground rounded-lg">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" />
            Prerequisites
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground rounded-lg">
            <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" />
            Tips
          </TabsTrigger>
          <TabsTrigger value="careers" className="flex-1 sm:flex-none text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground rounded-lg">
            <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" />
            Careers
          </TabsTrigger>
        </TabsList>

        {/* Enhanced Roadmap Tab */}
        <TabsContent value="roadmap" className="mt-6">
          <div className="space-y-6">
            {/* Roadmap Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Rocket className="h-4 w-4" />
                <span className="text-sm font-medium">Your Learning Journey</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Complete Roadmap</h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Follow these {guidance.milestones.length} phases to master {path.title}. Each phase builds on the previous one.
              </p>
            </div>

            {/* Milestone Cards */}
            <div className="relative">
              {/* Connection Line for Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />
              
              <div className="space-y-6 lg:space-y-8">
                {guidance.milestones.map((milestone, index) => (
                  <div 
                    key={milestone.id}
                    className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Phase Number - Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getPhaseColor(index)} flex items-center justify-center shadow-lg border-4 border-background`}>
                        <span className="font-bold text-white text-lg">{index + 1}</span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`lg:w-[45%] ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                        <div className={`absolute inset-0 bg-gradient-to-br ${getPhaseColor(index)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        <CardHeader className="pb-3">
                          <div className="flex items-start gap-4">
                            {/* Phase Number - Mobile */}
                            <div className={`lg:hidden flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getPhaseColor(index)} flex items-center justify-center shadow-lg`}>
                              <span className="font-bold text-white">{index + 1}</span>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {milestone.estimatedTime}
                                </Badge>
                                <Badge variant="outline" className="bg-muted/50 border-muted-foreground/30 text-muted-foreground text-xs">
                                  Phase {index + 1}
                                </Badge>
                              </div>
                              <CardTitle className="text-lg sm:text-xl font-bold">
                                {milestone.title}
                              </CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                          
                          {/* Skills Grid */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Zap className="h-4 w-4 text-amber-400" />
                              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills You'll Learn</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {milestone.skills.map((skill, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="secondary" 
                                  className="text-xs bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                >
                                  <CheckCircle className="h-3 w-3 mr-1 text-emerald-400" />
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden lg:block lg:w-[45%]" />
                  </div>
                ))}
              </div>
            </div>

            {/* What's Next Section */}
            <Card className="mt-8 bg-gradient-to-r from-primary/10 via-card to-secondary/10 border-primary/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-1">Ready to Start?</h4>
                    <p className="text-sm text-muted-foreground">
                      Check out the Resources tab for curated learning materials, or explore career opportunities to see where this path can take you.
                    </p>
                  </div>
                  <ArrowRight className="hidden sm:block h-6 w-6 text-primary animate-pulse" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Prerequisites Tab */}
        <TabsContent value="prerequisites" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Prerequisites List */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl">Before You Start</CardTitle>
                    <p className="text-sm text-muted-foreground">Foundation knowledge needed</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {guidance.prerequisites.map((prereq) => (
                  <div 
                    key={prereq.id}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all"
                  >
                    <Badge variant="outline" className={`flex-shrink-0 capitalize ${getImportanceColor(prereq.importance)}`}>
                      {prereq.importance}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base mb-1">{prereq.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{prereq.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Project Ideas */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl">Project Ideas</CardTitle>
                    <p className="text-sm text-muted-foreground">Build these to practice</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {guidance.projectIdeas.map((idea, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center text-violet-400 font-bold group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{idea}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Study Tips Tab */}
        <TabsContent value="tips" className="mt-6">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 mb-4">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-medium">Expert Advice</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Study Tips for Success</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Follow these proven strategies to maximize your learning efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guidance.studyTips.map((tip, index) => (
              <Card 
                key={tip.id}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500" />
                
                <CardContent className="relative p-5">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tip.icon}
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Careers Tab */}
        <TabsContent value="careers" className="mt-6">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Your Future</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Career Opportunities</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore exciting career paths you can pursue after mastering {path.title}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {guidance.careerPaths.map((career, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-base sm:text-lg">{career.title}</h4>
                    </div>
                    <Badge className={`text-xs ${getDemandColor(career.demand)}`}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {career.demand}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {career.description}
                  </p>
                  
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <Star className="h-5 w-5 text-emerald-400" />
                    <span className="font-bold text-emerald-400">{career.salary}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Tips */}
          <Card className="mt-6 bg-gradient-to-r from-primary/5 via-card to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Career Pro Tip</h4>
                  <p className="text-sm text-muted-foreground">
                    Build a strong portfolio with 3-5 quality projects. Employers value demonstrated skills over certificates. 
                    Network on LinkedIn and contribute to open source to stand out from other candidates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
