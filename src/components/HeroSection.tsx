import React from 'react';
import { Play, Sparkles, Video, Disc3, ShieldCheck, MapPin, Award, BookOpen, ExternalLink } from 'lucide-react';
import { GothicLogo } from './GothicLogo';
import { ARTIST_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onPlayFeatureTrack?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] pt-28 sm:pt-32 pb-16 flex flex-col justify-center items-center overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-[#0a0a0d] via-[#0f1117] to-[#0a0a0d]"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[250px] bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Badges in clean refined pill layout */}
      <div className="z-10 mb-6 flex flex-wrap items-center justify-center gap-2.5 px-4 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/90 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-300 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          Uruguaiana • Fronteira Oeste • RS
        </span>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-zinc-900/90 rounded-full border border-[#1DB954]/30 text-[11px] font-sans tracking-wide text-zinc-200 font-semibold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1DB954]" />
          Ponto de Cultura Pampa Crew (MinC)
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/90 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-300 shadow-sm">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          Melhor Letra no Festival Alegretense
        </span>
      </div>

      {/* Main Center Stage Branding */}
      <div className="z-10 max-w-4xl mx-auto px-4 text-center">
        <GothicLogo size="hero" showSubtitle={true} />

        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-zinc-200 max-w-3xl mx-auto leading-snug">
          A interseção viva entre o <span className="text-white font-semibold underline decoration-zinc-500 underline-offset-4">asfalto</span>, a{' '}
          <span className="text-zinc-400 italic">
            história
          </span>{' '}
          e o <span className="text-white font-semibold">batuque</span>.
        </p>

        <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Músico multi-instrumentista, historiador graduado pela PUC-RS, educador social e criador do projeto{' '}
          <strong className="text-zinc-200">Hip Hop nas Escolas</strong>. Transformando a vivência da rua e a memória negra em educação e emancipação coletiva.
        </p>

        {/* Action Call to Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={ARTIST_INFO.spotifyAlbumUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-hero-listen-spotify"
            className="px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-sans text-xs md:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Disc3 className="w-4 h-4" />
            <span>Ouvir EP no Spotify</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href="#documentario"
            id="btn-hero-doc"
            className="px-6 py-3 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-sans text-xs md:text-sm font-semibold tracking-wider uppercase rounded-xl flex items-center gap-2 transition-all shadow-sm"
          >
            <Video className="w-4 h-4 text-red-400" />
            <span>Assistir Documentário</span>
          </a>

          <a
            href="#trajetoria"
            className="px-5 py-3 bg-zinc-900/40 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200 font-sans text-xs md:text-sm tracking-wider uppercase rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-zinc-400" />
            <span>Ver Trajetória</span>
          </a>
        </div>
      </div>

      {/* Hero Visual Showcase Cards */}
      <div className="z-10 w-full max-w-6xl mx-auto px-4 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Box 1 - Museu do Hip Hop */}
          <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group backdrop-blur-sm shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  Memória & Cultura Viva
                </span>
                <span className="text-[10px] font-sans text-zinc-300 uppercase bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700 font-medium">
                  Porto Alegre • RS
                </span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Museu do Hip Hop RS
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-sans">
                Preservação e celebração da memória viva da cultura hip hop no Rio Grande do Sul, unindo a capital e a Fronteira Oeste.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-sans uppercase tracking-wider">
              <span>Portfólio Oficial</span>
              <span className="text-zinc-200 font-semibold">Espaço de Memória</span>
            </div>
          </div>

          {/* Box 2 - Afro-Punk & Skate */}
          <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group backdrop-blur-sm shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  Contracultura & Asfalto
                </span>
                <span className="text-[10px] font-sans text-zinc-300 uppercase bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700 font-medium">
                  Anos 80
                </span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Pioneirismo no Skate & Som
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-sans">
                A postura libertária do punk rock e do skate dos anos 80 unida à ancestralidade do samba e à força do rap combativo.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-sans uppercase tracking-wider">
              <span>Uruguaiana • RS</span>
              <span className="text-zinc-200 font-semibold">Pioneiro 80's</span>
            </div>
          </div>

          {/* Box 3 - Lanceiros Negros & Canção */}
          <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group backdrop-blur-sm shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  Obra Premiada
                </span>
                <span className="text-[10px] font-sans text-amber-400 uppercase bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 font-bold">
                  1º Lugar
                </span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Lanceiros de Porongos
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-sans">
                Vencedor de Melhor Letra no Festival Alegretense da Canção. Fusão histórica entre a gaita gaúcha e a guitarra distorcida.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-sans uppercase tracking-wider">
              <span>Festival da Canção</span>
              <span className="text-amber-400 font-bold">Melhor Letra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
