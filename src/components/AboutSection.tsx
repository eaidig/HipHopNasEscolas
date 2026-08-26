import React, { useState } from 'react';
import { Flame, Sparkles, BookOpen, GraduationCap, ShieldAlert, Heart, Calendar, ChevronRight, UserCheck } from 'lucide-react';
import { PILLARS, TIMELINE_EVENTS, ARTIST_INFO } from '../data/portfolioData';
import { PlaceholderImage } from './PlaceholderImage';

export const AboutSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS[0].id);
  const activePillar = PILLARS.find(p => p.id === activePillarId) || PILLARS[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Flame': return Flame;
      case 'Sparkles': return Sparkles;
      case 'BookOpen': return BookOpen;
      case 'GraduationCap': return GraduationCap;
      case 'ShieldAlert': return ShieldAlert;
      default: return Heart;
    }
  };

  return (
    <section
      id="trajetoria"
      className="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#090a0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-zinc-300" />
            <span>BIOGRAFIA & MATRIZES CULTURAIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            QUEM É O MANO ORDAI?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Nascido em Uruguaiana em 1973, Mano Ordai traz a vivência de um homem negro de 53 anos que encontrou na contracultura sua voz. Músico, historiador pela PUC-RS e agitador cultural.
          </p>
        </div>

        {/* Pillars of Identity Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
          {PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isSelected = pillar.id === activePillarId;

            return (
              <button
                key={pillar.id}
                id={`btn-pillar-${pillar.id}`}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-4 rounded-xl text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-100 text-zinc-950 shadow-lg font-bold scale-[1.02]'
                    : 'bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-zinc-950' : 'text-zinc-400'
                    }`}
                  />
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-zinc-950"></span>
                  )}
                </div>
                <h4
                  className={`text-xs uppercase tracking-tight leading-snug font-sans ${
                    isSelected ? 'text-zinc-950 font-bold' : 'text-zinc-200'
                  }`}
                >
                  {pillar.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Showcase */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10 mb-14 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Slot */}
            <div className="lg:col-span-5 h-[280px] sm:h-[340px] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-inner">
              <PlaceholderImage
                type={
                  activePillar.id === 'raizes'
                    ? 'portrait-stage'
                    : activePillar.id === 'afropunk'
                    ? 'skate-afropunk'
                    : activePillar.id === 'lanceiros'
                    ? 'lanceiros'
                    : activePillar.id === 'educador'
                    ? 'school-talk'
                    : 'portrait-stage'
                }
                title={activePillar.title}
                badgeText={activePillar.subtitle}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-sans tracking-wider text-zinc-400 uppercase font-semibold">
                {activePillar.subtitle}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                {activePillar.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                {activePillar.description}
              </p>

              {activePillar.quote && (
                <blockquote className="p-4 bg-zinc-950/80 rounded-xl border-l-4 border-zinc-400 border border-zinc-800/80 text-sm sm:text-base italic text-zinc-200 font-serif">
                  {activePillar.quote}
                </blockquote>
              )}

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {activePillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-800/80 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-sans uppercase tracking-wider"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Resistance & Artistry */}
        <div className="mt-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-sans tracking-widest text-zinc-400 uppercase font-bold block mb-1">
              MARCOS CRONOLÓGICOS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              A LINHA DO TEMPO NO ASFALTO
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div
                key={event.year}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-white font-mono">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-sans text-zinc-400 uppercase tracking-wider bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
                      FASE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-tight mb-2">
                    {event.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manifesto Quote Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center relative shadow-lg">
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-zinc-200 font-serif italic leading-relaxed">
              "{ARTIST_INFO.manifestoShort}"
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-[1px] w-8 bg-zinc-700"></span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-bold">
                MANO ORDAI • MANIFESTO VIVO
              </span>
              <span className="h-[1px] w-8 bg-zinc-700"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
