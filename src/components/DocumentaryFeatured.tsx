import React, { useState } from 'react';
import { Youtube, Play, ShieldAlert, GraduationCap, Users, BookOpen, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

export const DocumentaryFeatured: React.FC = () => {
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  return (
    <section
      id="documentario"
      className="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#090a0e] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>AUDIOVISUAL & EDUCAÇÃO SOCIAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            DOCUMENTÁRIO: HIP HOP NAS ESCOLAS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            A jornada de superação, educação popular e resistência que transformou o sofrimento em potência coletiva para a juventude da fronteira.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="max-w-5xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-sm">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800">
            {isPlayingInline ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${ARTIST_INFO.youtubeDocId}?autoplay=1&rel=0`}
                title="Documentário Hip Hop Nas Escolas - Mano Ordai"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex flex-col items-center justify-center p-6 text-center">
                {/* Center Play Button */}
                <button
                  id="btn-play-doc-inline"
                  onClick={() => setIsPlayingInline(true)}
                  className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 hover:bg-white text-zinc-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 group cursor-pointer"
                  aria-label="Assistir Documentário Hip Hop nas Escolas"
                >
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-current translate-x-1" />
                </button>

                <div className="relative z-10 mt-6 max-w-xl">
                  <span className="font-sans tracking-widest text-[11px] uppercase text-zinc-400 font-semibold block mb-1">
                    Direção & Registro Histórico
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    Hip Hop Nas Escolas: A Voz da Resiliência
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-sans">
                    Com Mano Ordai, estudantes da rede pública e equipe do Ponto de Cultura Pampa Crew.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Player Footer Bar */}
          <div className="p-4 sm:p-5 bg-zinc-950/70 rounded-xl border border-zinc-800/80 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                <Youtube className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-sans">
                  Documentário Completo no YouTube
                </h4>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  Canal Oficial Mano Ordai • Obra de livre acesso educacional
                </p>
              </div>
            </div>

            <a
              href={ARTIST_INFO.youtubeDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-xl text-xs font-sans font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Assistir no YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Narrative & Impact Breakdown */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Card 1: Gênese do Projeto */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  Origem Social
                </span>
                <span className="text-[10px] font-mono text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 font-medium">
                  2013
                </span>
              </div>
              <h4 className="text-base font-bold uppercase tracking-tight text-white">
                Da Dor à Potência
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-sans">
                Após ser vítima de uma prisão injusta decorrente do racismo institucional, Mano Ordai converteu a experiência em compromisso social. Ao progredir para o semiaberto em 2013, fundou o projeto <strong>Hip Hop nas Escolas</strong>.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-zinc-800 text-[10px] text-zinc-400 font-sans uppercase tracking-wider font-semibold">
              Superando as Chagas do Cárcere
            </div>
          </div>

          {/* Card 2: Ação nas Escolas & FASE */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  Comunidade
                </span>
                <span className="text-[10px] font-mono text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 font-medium">
                  Rede Pública
                </span>
              </div>
              <h4 className="text-base font-bold uppercase tracking-tight text-white">
                Salas de Aula & FASE
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-sans">
                Palestras, oficinas de rima e rodas de conversa nas escolas municipais e estaduais de Alegrete e Uruguaiana, além de atuação essencial na Fundação de Atendimento Sócio-Educativo (FASE).
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-zinc-800 text-[10px] text-zinc-400 font-sans uppercase tracking-wider font-semibold">
              Conscientização da Juventude
            </div>
          </div>

          {/* Card 3: Formação de Educadores */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  Extensão Universitária
                </span>
                <span className="text-[10px] font-mono text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 font-medium">
                  UNIPAMPA
                </span>
              </div>
              <h4 className="text-base font-bold uppercase tracking-tight text-white">
                Capacitação Docente
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-sans">
                Selecionado pela Universidade Federal do Pampa para atuar na formação de professores em Relações Étnico-Raciais (ERER), levando a pedagogia do hip hop para debate em salas de aula do estado.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-zinc-800 text-[10px] text-zinc-400 font-sans uppercase tracking-wider font-semibold">
              Formação Docente Continuada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
