import React, { useState } from 'react';
import { Image, Eye, Filter, Sparkles, MapPin, Maximize2 } from 'lucide-react';
import { PHOTOS } from '../data/portfolioData';
import { PhotoItem } from '../types';
import { PlaceholderImage } from './PlaceholderImage';

interface PhotoGallerySectionProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Fotos' },
    { id: 'palco', label: 'Palco & Shows' },
    { id: 'educacao', label: 'Educação & Oficinas' },
    { id: 'skate', label: 'Skate & Afro-Punk' },
    { id: 'museu', label: 'Museu do Hip Hop RS' },
  ];

  const filteredPhotos = activeCategory === 'todos'
    ? PHOTOS
    : PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section
      id="galeria"
      className="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#090a0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
            <Image className="w-3.5 h-3.5 text-zinc-300" />
            <span>REGISTROS VISUAIS & DOCUMENTAÇÃO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            GALERIA DE FOTOS & RUAS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Imagens que documentam a caminhada de Mano Ordai entre os palcos, as salas de aula, as pistas de skate e as instituições de cultura.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`btn-photo-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-zinc-100 text-zinc-950 font-bold shadow-md scale-105'
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group cursor-pointer bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              {/* Image Visual Slot */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
                <PlaceholderImage
                  type={photo.placeholderSvgType}
                  title={photo.title}
                  badgeText={photo.categoryLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <div className="p-3 bg-white text-zinc-950 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Caption */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-sans mb-2 uppercase tracking-wider">
                    <span className="text-zinc-300 font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {photo.location}
                    </span>
                    <span className="font-mono text-zinc-400">{photo.year}</span>
                  </div>

                  <h3 className="text-base font-bold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                    {photo.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-sans">
                    {photo.caption}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-sans">
                  <span className="text-zinc-300 group-hover:text-white uppercase tracking-wider font-semibold">
                    Ampliar Registro
                  </span>
                  <span className="text-zinc-400">{photo.categoryLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
