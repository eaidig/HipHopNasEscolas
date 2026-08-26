import React from 'react';
import { Play, Youtube, Video, ExternalLink, Sparkles } from 'lucide-react';
import { VIDEOS, ARTIST_INFO } from '../data/portfolioData';
import { VideoItem } from '../types';

interface AudiovisualSectionProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const AudiovisualSection: React.FC<AudiovisualSectionProps> = ({ onSelectVideo }) => {
  return (
    <section
      id="audiovisual"
      className="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#0c0d12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
            <Video className="w-3.5 h-3.5 text-red-400" />
            <span>PRODUÇÃO AUDIOVISUAL & MULTIMÍDIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            VÍDEOS & REGISTROS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Documentários, apresentações ao vivo, intervenções nas escolas e produções do Ponto de Cultura Pampa Crew.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-200 group flex flex-col justify-between shadow-lg backdrop-blur-sm"
            >
              {/* Thumbnail / Video Preview Slot */}
              <div
                className="relative aspect-video bg-zinc-950 overflow-hidden cursor-pointer border-b border-zinc-800"
                onClick={() => onSelectVideo(video)}
              >
                {/* Background visual mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Youtube className="w-12 h-12 text-red-500/60 mx-auto mb-2 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-xs uppercase font-semibold tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {video.title}
                    </span>
                  </div>
                </div>

                {/* Play overlay button */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all">
                  <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white text-black flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-black/80 backdrop-blur-md rounded-lg border border-zinc-700/80 text-[10px] font-sans text-zinc-200 uppercase tracking-wider font-semibold">
                  {video.categoryLabel}
                </div>

                <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-md text-[10px] font-mono text-zinc-300">
                  {video.duration}
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-sans mb-1.5 uppercase tracking-wider">
                    <span className="text-zinc-200 font-bold">{video.year}</span>
                    <span className="font-mono text-zinc-400">HD 1080p</span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
                    {video.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                  <button
                    id={`btn-open-video-${video.id}`}
                    onClick={() => onSelectVideo(video)}
                    className="px-4 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl text-xs font-sans font-bold tracking-wider uppercase flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Reproduzir Vídeo</span>
                  </button>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                    title="Assistir no YouTube"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
