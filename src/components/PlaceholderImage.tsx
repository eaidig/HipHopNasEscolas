import React from 'react';
import { Mic, Music, GraduationCap, Video, Users, Shield, Sparkles } from 'lucide-react';

interface PlaceholderImageProps {
  type: 'portrait-stage' | 'skate-afropunk' | 'school-talk' | 'studio-mic' | 'pampa-crew' | 'lanceiros' | 'museu-hiphop';
  title?: string;
  className?: string;
  customSrc?: string;
  badgeText?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  type,
  title,
  className = '',
  customSrc,
  badgeText
}) => {
  if (customSrc) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 ${className}`}>
        <img
          src={customSrc}
          alt={title || 'Mano Ordai'}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {badgeText && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded border border-amber-500/40 text-[11px] font-urban text-amber-300 tracking-wider">
            {badgeText}
          </div>
        )}
      </div>
    );
  }

  // Curated artistic vector illustration slots reflecting the slides
  const renderVisual = () => {
    switch (type) {
      case 'portrait-stage':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-2xl"></div>
            
            {/* Stylized Avatar Silhouette with sunglasses and beard */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-2 border-zinc-500 shadow-2xl flex items-center justify-center mb-3">
              <Mic className="w-10 h-10 text-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]" />
              <div className="absolute -bottom-1 -right-1 bg-black border border-amber-500 px-2 py-0.5 rounded-full text-[9px] font-urban text-amber-300">
                MANO ORDAI
              </div>
            </div>
            <h4 className="font-gothic text-lg text-chrome tracking-wide">
              {title || 'Voz da Fronteira & Palco'}
            </h4>
            <p className="text-xs text-zinc-400 mt-1 max-w-[240px] line-clamp-2">
              Batuque, história e atitude visceral na cena do Rio Grande do Sul
            </p>
          </div>
        );

      case 'skate-afropunk':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-[#18181b] to-zinc-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:12px_12px] opacity-25"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-zinc-800/90 border border-zinc-600 flex items-center justify-center mb-3 shadow-lg transform -rotate-3">
                <Sparkles className="w-9 h-9 text-amber-400" />
              </div>
              <span className="font-urban tracking-widest text-amber-400 text-xs uppercase font-bold mb-1">
                Pioneiro Anos 80
              </span>
              <h4 className="font-gothic text-lg text-white">
                {title || 'Skate & Contracultura Afro-Punk'}
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Dead Kennedys • Suicidal Tendencies • Inocentes
              </p>
            </div>
          </div>
        );

      case 'school-talk':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#121216] via-zinc-900 to-black flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-amber-600/20 to-amber-950/40 border border-amber-500/40 flex items-center justify-center mb-3">
              <GraduationCap className="w-10 h-10 text-amber-400" />
            </div>
            <span className="font-urban tracking-widest text-amber-400 text-xs uppercase font-bold mb-1">
              Projeto Pioneiro Desde 2013
            </span>
            <h4 className="font-gothic text-lg text-chrome">
              {title || 'Hip Hop nas Escolas & FASE'}
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Educação popular, conscientização racial e resiliência
            </p>
          </div>
        );

      case 'lanceiros':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-red-950/40 via-zinc-900 to-black flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-xl bg-zinc-800/80 border border-red-500/40 flex items-center justify-center mb-3">
              <Shield className="w-10 h-10 text-red-400" />
            </div>
            <span className="font-urban tracking-widest text-red-400 text-xs uppercase font-bold mb-1">
              Melhor Letra Alegrete
            </span>
            <h4 className="font-gothic text-lg text-white">
              {title || 'Lanceiros Negros de Porongos'}
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Gaita gaúcha, guitarra distorcida e memória ancestral
            </p>
          </div>
        );

      case 'pampa-crew':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-[#1c1917] to-black flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-amber-500/60 flex items-center justify-center mb-3">
              <Users className="w-10 h-10 text-amber-300" />
            </div>
            <span className="font-urban tracking-widest text-amber-400 text-xs uppercase font-bold mb-1">
              MinC Certificado 2026
            </span>
            <h4 className="font-gothic text-lg text-chrome">
              {title || 'Ponto de Cultura Pampa Crew'}
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Gestão comunitária e difusão da cultura urbana
            </p>
          </div>
        );

      case 'museu-hiphop':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-xl bg-zinc-800/80 border border-zinc-600 flex items-center justify-center mb-3">
              <Video className="w-10 h-10 text-zinc-300" />
            </div>
            <span className="font-urban tracking-widest text-zinc-400 text-xs uppercase font-bold mb-1">
              Porto Alegre • RS
            </span>
            <h4 className="font-gothic text-lg text-chrome">
              {title || 'Museu do Hip Hop RS'}
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Memória viva e preservação da história da cultura de rua
            </p>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-6 text-center">
            <Music className="w-10 h-10 text-amber-400 mb-2" />
            <h4 className="font-gothic text-lg text-chrome">{title || 'Mano Ordai'}</h4>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl border border-zinc-800 group hover:border-zinc-600 transition-all duration-300 ${className}`}>
      {renderVisual()}
      {badgeText && (
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded border border-amber-500/40 text-[11px] font-urban text-amber-300 tracking-wider">
          {badgeText}
        </div>
      )}
      <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none"></div>
    </div>
  );
};
