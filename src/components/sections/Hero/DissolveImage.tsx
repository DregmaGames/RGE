import React from 'react';
import { cn } from '../../../utils/cn';

interface DissolveImageProps {
  imageUrl: string;
  className?: string;
}

export function DissolveImage({ imageUrl, className }: DissolveImageProps) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      {/* Base Image Layer */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat",
          "transition-opacity duration-700"
        )}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Dissolve Layers */}
      <div className="absolute inset-0">
        {/* Vertical Dissolve */}
        <div className={cn(
          "absolute inset-0",
          "bg-gradient-to-b",
          "from-transparent via-cyber-black/80 to-cyber-black"
        )} />

        {/* Radial Dissolve */}
        <div className={cn(
          "absolute inset-0",
          "bg-[radial-gradient(circle_at_center,_transparent_0%,_#080808_70%)]"
        )} />

        {/* Edge Dissolve */}
        <div className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-cyber-black via-transparent to-cyber-black",
          "opacity-60"
        )} />
      </div>

      {/* Neon Accent Layer */}
      <div className={cn(
        "absolute inset-0",
        "bg-gradient-to-b from-neon-blue/5 via-transparent to-transparent",
        "opacity-30",
        "mix-blend-overlay"
      )} />

      {/* Noise Texture */}
      <div className={cn(
        "absolute inset-0",
        "opacity-[0.15]",
        "mix-blend-overlay",
        "[background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]"
      )} />
    </div>
  );
}