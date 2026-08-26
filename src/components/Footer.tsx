import React from 'react';
import { ArrowUp, Youtube, Music, ShieldCheck, Heart, MapPin, Disc } from 'lucide-react';
import { GothicLogo } from './GothicLogo';
import { ARTIST_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#08090c] text-zinc-400 pt-16 pb-28 sm:pb-16 border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-zinc-800">
          {/* Logo & Manifesto */}
          <div className="md:col-span-6 space-y-3 text-center md:text-left">
            <GothicLogo size="sm" showSubtitle={false} />
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto md:mx-0 font-sans leading-relaxed">
              O portfólio oficial de Mano Ordai: skatista, historiador, educador popular e agente cultural que transformou dor em potência coletiva.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 text-[10px] font-sans text-zinc-400 uppercase tracking-wide">
                <MapPin className="w-3 h-3 text-zinc-300" />
                Uruguaiana • RS • Brasil
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 text-[10px] font-sans text-zinc-300 uppercase tracking-wide font-semibold">
                <ShieldCheck className="w-3 h-3 text-zinc-300" />
                Ponto de Cultura Pampa Crew (MinC)
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-sans uppercase tracking-wider text-white font-bold mb-3">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#trajetoria" className="hover:text-white transition-colors">Biografia & Trajetória</a></li>
              <li><a href="#documentario" className="hover:text-white transition-colors">Doc: Hip Hop nas Escolas</a></li>
              <li><a href="#discografia" className="hover:text-white transition-colors">EP Sobrevivendo & Músicas</a></li>
              <li><a href="#credenciais" className="hover:text-white transition-colors">Certificações & MinC</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Booking & Palestras</a></li>
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center space-y-3">
            <a
              href={ARTIST_INFO.youtubeDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-sans tracking-wide rounded-xl border border-zinc-800 flex items-center gap-2 transition-all shadow-sm"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>Canal no YouTube</span>
            </a>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-sans font-semibold tracking-wide cursor-pointer"
              title="Voltar ao Topo"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4 font-sans">
          <p>© {new Date().getFullYear()} Mano Ordai. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 tracking-wide text-zinc-400">
            Design & Portfólio Artístico Oficial
          </p>
        </div>
      </div>
    </footer>
  );
};
