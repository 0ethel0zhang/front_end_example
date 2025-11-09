import React, { useState } from 'react';
import { Play, Lock } from 'lucide-react';
import { VideoProps } from '../types';

export const VideoPlayer: React.FC<VideoProps> = ({
  thumbnailUrl,
  title,
  isLocked = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isLocked) {
      setIsPlaying(true);
    }
  };

  if (isPlaying) {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-zinc-800 bg-black relative animate-fade-in">
        {/* Placeholder for actual video embed. Replace src with actual video URL (YouTube/Vimeo/MP4) */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/lxrwzpMJwVY?autoplay=1&rel=0&modestbranding=1"
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className={`group relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-zinc-800 bg-zinc-900 ${
        !isLocked ? 'cursor-pointer' : 'cursor-not-allowed'
      }`}
      onClick={handlePlay}
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnailUrl}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-700 ${
          !isLocked ? 'group-hover:scale-105' : 'opacity-50 grayscale'
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        {isLocked ? (
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-950/80 backdrop-blur-sm border border-zinc-800">
            <Lock className="w-8 h-8 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300">
              Purchase to unlock full tutorial
            </span>
          </div>
        ) : (
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        )}
      </div>

      {/* Title Badge */}
      <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-sm font-medium text-white border border-white/10">
        {title}
      </div>
    </div>
  );
};
