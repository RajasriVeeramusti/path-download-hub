import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Resource } from "@/data/learningPaths";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
}

// Extract YouTube video ID from various URL formats
const getYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Check if URL is a YouTube video
const isYouTubeUrl = (url: string): boolean => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

export const VideoPlayerModal = ({ resource, isOpen, onClose }: VideoPlayerModalProps) => {
  if (!resource) return null;

  const youtubeId = getYouTubeVideoId(resource.fileUrl);
  const isYouTube = isYouTubeUrl(resource.fileUrl);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-violet-500/30">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="flex items-center gap-3 text-lg sm:text-xl">
            <div className="p-2 rounded-xl bg-violet-500/20 text-violet-500">
              <Play className="h-5 w-5" />
            </div>
            <span className="line-clamp-1">{resource.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-4">
          {isYouTube && youtubeId ? (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/20">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={resource.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <div className="p-6 rounded-full bg-violet-500/20 text-violet-500">
                <Play className="h-12 w-12" />
              </div>
              <p className="text-muted-foreground text-center max-w-md">
                This video is hosted externally. Click below to watch it on the original platform.
              </p>
              <Button
                asChild
                className="gap-2 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
              >
                <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Open Video
                </a>
              </Button>
            </div>
          )}
          
          <p className="mt-4 text-sm text-muted-foreground">
            {resource.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
