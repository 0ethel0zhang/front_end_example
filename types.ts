export interface VideoProps {
  thumbnailUrl: string;
  videoUrl?: string; // Optional: if we want to use an actual video source
  title: string;
  isLocked?: boolean;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
