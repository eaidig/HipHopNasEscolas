import React from 'react';

interface GothicLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
}

export const GothicLogo: React.FC<GothicLogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const isHero = size === 'hero';
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  return (
    <div className="flex flex-col items-center justify-center text-center select-none group w-full" id="mano-ordai-logo">
      {/* Geometric Balance Top Ornament */}
      <div className="flex items-center justify-center gap-3 mb-2 opacity-90 group-hover:opacity-100 transition-opacity w-full max-w-xl mx-auto">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-400/60 to-zinc-400"></span>
        <span className="text-[10px] sm:text-xs tracking-[0.45em] uppercase text-zinc-400 font-sans font-semibold shrink-0">
          URUGUAIANA • RS • BRASIL
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-zinc-400/60 to-zinc-400"></span>
      </div>

      {/* Main Display Headline */}
      <div className="relative w-full max-w-5xl mx-auto px-2">
        <h1
          className={`font-gothic uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 font-black leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] transition-all ${
            isHero
              ? 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7.5rem] 2xl:text-[8.5rem] tracking-wider sm:tracking-widest w-full py-1'
              : isLg
              ? 'text-4xl sm:text-5xl md:text-6xl tracking-wider'
              : isSm
              ? 'text-2xl sm:text-3xl tracking-wide'
              : 'text-3xl sm:text-4xl tracking-wider'
          }`}
        >
          MANO ORDAI
        </h1>
      </div>

      {/* Geometric Subtitle & Tagline */}
      {showSubtitle && (
        <div className="flex items-center justify-center gap-3 mt-3 w-full max-w-xl mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-zinc-700"></div>
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-zinc-300 px-3.5 py-1 bg-zinc-900/90 rounded-full border border-zinc-800 shadow-sm shrink-0">
            HIP HOP • HISTÓRIA & EDUCAÇÃO POPULAR
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-zinc-700 to-zinc-700"></div>
        </div>
      )}
    </div>
  );
};
