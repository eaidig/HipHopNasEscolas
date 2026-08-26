import React from 'react';
import { X, FileText, Youtube, Image, MapPin, Award, Music, ExternalLink } from 'lucide-react';
import { Track, VideoItem, PhotoItem } from '../types';
import { PlaceholderImage } from './PlaceholderImage';
import { ARTIST_INFO } from '../data/portfolioData';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'lyrics' | 'video' | 'photo' | null;
  trackData?: Track | null;
  videoData?: VideoItem | null;
  photoData?: PhotoItem | null;
}

export const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  type,
  trackData,
  videoData,
  photoData
}) => {
  if (!isOpen || !type) return null;

  return (
    <div
      id="global-media-modal"
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-zinc-800 rounded-full border border-zinc-700 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal: LYRICS */}
        {type === 'lyrics' && trackData && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-zinc-800 text-zinc-200 rounded-xl border border-zinc-700">
                <FileText className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-400 font-semibold block">
                  Letra Oficial • {trackData.album}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  {trackData.title}
                </h3>
              </div>
            </div>

            {trackData.award && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-sans text-amber-300">
                <Award className="w-3.5 h-3.5" />
                <span>{trackData.award}</span>
              </div>
            )}

            <div className="p-4 sm:p-5 bg-zinc-950 rounded-xl border border-zinc-800 text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans space-y-2 max-h-72 overflow-y-auto">
              {trackData.fullLyrics ? (
                trackData.fullLyrics.map((line, idx) => (
                  <p key={idx} className={line.startsWith('[') ? 'text-white font-bold uppercase tracking-wider mt-3 pl-2 border-l-2 border-zinc-400' : ''}>
                    {line}
                  </p>
                ))
              ) : (
                <p className="italic text-zinc-400">{trackData.lyricsExcerpt}</p>
              )}
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-sans">
                Composição: Mano Ordai
              </span>
              <a
                href={trackData.spotifyUrl || ARTIST_INFO.spotifyAlbumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Music className="w-3.5 h-3.5" />
                <span>Ouvir no Spotify</span>
              </a>
            </div>
          </div>
        )}

        {/* Modal: VIDEO */}
        {type === 'video' && videoData && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20">
                <Youtube className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-400 font-semibold block">
                  {videoData.categoryLabel} • {videoData.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  {videoData.title}
                </h3>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoData.youtubeId}?autoplay=1&rel=0`}
                title={videoData.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {videoData.description}
            </p>
          </div>
        )}

        {/* Modal: PHOTO */}
        {type === 'photo' && photoData && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pr-8">
              <span className="px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700 text-zinc-300 text-[10px] font-sans font-semibold uppercase tracking-wider">
                {photoData.categoryLabel}
              </span>
              <span className="text-xs text-zinc-400 font-sans flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {photoData.location} ({photoData.year})
              </span>
            </div>

            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <PlaceholderImage
                type={photoData.placeholderSvgType}
                title={photoData.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold uppercase tracking-tight text-white">
              {photoData.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {photoData.caption}
            </p>

            <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between font-sans">
              <span>Portfólio Oficial Mano Ordai</span>
              <span className="text-zinc-300 font-semibold">Fotografia & Memória</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
