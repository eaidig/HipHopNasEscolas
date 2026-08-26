import React from 'react';
import { Disc, Award, FileText, Music, ExternalLink, Disc3, Layers } from 'lucide-react';
import { TRACKS, ARTIST_INFO } from '../data/portfolioData';
import { Track } from '../types';

interface DiscographySectionProps {
  onPlayTrack?: (track: Track) => void;
  onOpenLyrics: (track: Track) => void;
  currentPlayingId?: string | null;
}

export const DiscographySection: React.FC<DiscographySectionProps> = ({
  onOpenLyrics
}) => {
  return (
    <section
      id="discografia"
      className="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#0c0d12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
            <Disc3 className="w-3.5 h-3.5 text-[#1DB954]" />
            <span>DISCOGRAFIA OFICIAL & SPOTIFY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            EP SOBREVIVENDO & OBRAS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Uma paisagem sonora autoral onde o rap se funde ao samba de terreiro, à gaita tradicionalista gaúcha e à energia crua da guitarra punk.
          </p>
        </div>

        {/* Highlighted Album Card with Spotify Embed */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10 mb-14 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Spotify Official Player Embed */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-black">
                <iframe
                  title="Spotify Player - Mano Ordai EP Sobrevivendo"
                  style={{ borderRadius: '16px', minHeight: '352px', border: 'none' }}
                  src="https://open.spotify.com/embed/album/0FQt3RJ1XyD3QqQE0X1ztw?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="mt-3.5 flex items-center justify-between text-xs text-zinc-400 font-sans px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1DB954]"></span>
                  EP Completo no Spotify
                </span>
                <a
                  href={ARTIST_INFO.spotifyAlbumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1DB954] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Abrir aplicativo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Album Concept & Story */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/40 text-[10px] font-sans uppercase font-bold tracking-wider rounded-md">
                  EP Oficial • 2024
                </span>
                <span className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-sans uppercase tracking-wider rounded-md border border-zinc-700">
                  5 Faixas Autorais
                </span>
                <span className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-sans uppercase tracking-wider rounded-md border border-zinc-700">
                  Multi-instrumentista
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                O Manifesto Sonoro da Fronteira
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                O EP <strong>Sobrevivendo</strong> marca a consolidação fonográfica de Mano Ordai. Cada uma das faixas atua como um capítulo conceitual sobre a negritude, a memória da Fronteira Oeste e a superação das agruras sociais.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <span className="text-xs font-bold text-zinc-200 uppercase tracking-tight font-sans block mb-1">
                    Instrumentação Real
                  </span>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Arranjos com bateria acústica, contrabaixo, percussão de terreiro, guitarra e gaita gaúcha.
                  </p>
                </div>

                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-tight font-sans block mb-1">
                    Reconhecimento
                  </span>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Faixa "Lanceiros" eleita a Melhor Letra no tradicional Festival Alegretense da Canção.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={ARTIST_INFO.spotifyAlbumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  <Disc3 className="w-4 h-4" />
                  <span>Seguir Mano Ordai no Spotify</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Track Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Guia de Faixas & Poesia
              </h4>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Conheça a história e acesse as letras completas de cada canção
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-sans text-zinc-400 uppercase tracking-wider">
              {TRACKS.length} Faixas Disponíveis
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {TRACKS.map((track, index) => {
              return (
                <div
                  key={track.id}
                  id={`track-card-${track.id}`}
                  className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between backdrop-blur-sm group"
                >
                  <div>
                    {/* Header line */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 font-mono text-zinc-300 text-sm font-bold flex items-center justify-center">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h5 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                            {track.title}
                          </h5>
                          <span className="text-xs text-zinc-400 block font-sans">
                            {track.subtitle || track.theme}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded border border-zinc-700">
                        {track.duration}
                      </span>
                    </div>

                    {/* Award Badge if any */}
                    {track.award && (
                      <div className="my-2 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs font-sans text-amber-300 font-medium">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>{track.award}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-sans">
                      {track.description}
                    </p>

                    {/* Instruments */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {track.instruments.map((inst) => (
                        <span
                          key={inst}
                          className="text-[10px] font-sans uppercase tracking-wider bg-zinc-950/80 text-zinc-400 px-2.5 py-0.5 rounded border border-zinc-800"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Controls */}
                  <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between gap-3">
                    <a
                      href={track.spotifyUrl || ARTIST_INFO.spotifyAlbumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`btn-spotify-track-${track.id}`}
                      className="px-3.5 py-2 bg-zinc-800 hover:bg-[#1DB954] text-zinc-200 hover:text-black rounded-lg text-xs font-sans font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Disc3 className="w-3.5 h-3.5" />
                      <span>No Spotify</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    <button
                      id={`btn-lyrics-track-${track.id}`}
                      onClick={() => onOpenLyrics(track)}
                      className="px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-sans text-zinc-300 hover:text-white uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Ver Letra</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
