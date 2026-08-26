import React, { useState } from 'react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, FileCheck, Building2, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { CREDENTIALS } from '../data/portfolioData';
import { CredentialItem } from '../types';

interface CredentialsSectionProps {
  onSelectCredential?: (cred: CredentialItem) => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ onSelectCredential }) => {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);

  const handleOpenDetail = (cred: CredentialItem) => {
    setSelectedCred(cred);
    if (onSelectCredential) onSelectCredential(cred);
  };

  return (
    <section
      id="credenciais"
      className="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#090a0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            <span>RIGOR ACADÊMICO & VALIDAÇÃO OFICIAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            COMPROVAÇÃO & CREDENCIAIS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            A união entre o conhecimento acadêmico formal e a vivência da cultura urbana: diplomas, certificações federais pelo MinC e formações pela Unipampa e PUC-RS.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              onClick={() => handleOpenDetail(cred)}
              className="group cursor-pointer bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700 text-[10px] font-sans text-zinc-300 font-semibold uppercase tracking-wide">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                    {cred.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {cred.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                  {cred.title}
                </h3>

                {/* Institution */}
                <div className="mt-2.5 flex items-center gap-2 text-xs text-zinc-300 font-sans">
                  <Building2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{cred.institution}</span>
                </div>

                {/* Document Subtitle */}
                <p className="text-[11px] font-mono text-zinc-400 mt-2.5 bg-zinc-950/80 p-2.5 rounded-lg border border-zinc-800/80">
                  {cred.documentTitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed font-sans line-clamp-3">
                  {cred.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-xs font-sans">
                {cred.hours ? (
                  <span className="font-mono text-zinc-400">
                    CH: {cred.hours}
                  </span>
                ) : (
                  <span className="text-zinc-400 uppercase font-medium">Graduação</span>
                )}

                <span className="uppercase text-zinc-300 group-hover:text-white tracking-wider font-semibold flex items-center gap-1">
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Box: Ponto de Cultura Pampa Crew */}
        <div className="mt-12 p-6 sm:p-8 bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-[11px] font-sans tracking-wider text-zinc-400 font-semibold uppercase block">
                Reconhecimento Federal Oficial (Janeiro 2026)
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Ponto de Cultura Pampa Crew (MinC)
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                Coordenado por Maria Luiza e com liderança artística de Mano Ordai, o coletivo <strong>Pampa Crew</strong> foi formalmente certificado pelo Ministério da Cultura como Ponto de Cultura focado na difusão da cultura urbana, preparando apresentações pelo Brasil e turnê internacional.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-zinc-950/80 rounded-xl border border-zinc-800">
              <Award className="w-9 h-9 text-amber-400 mb-2" />
              <span className="font-sans text-xs text-white uppercase tracking-wider font-bold">
                Ministério da Cultura
              </span>
              <span className="text-xs text-zinc-400 font-sans mt-1">
                Ponto de Cultura Certificado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Credential Details Modal */}
      {selectedCred && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[10px] font-sans font-bold uppercase tracking-wider rounded-md border border-zinc-700">
                {selectedCred.type}
              </span>
              <button
                onClick={() => setSelectedCred(null)}
                className="text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                ✕ Fechar
              </button>
            </div>

            <h3 className="text-xl font-black uppercase tracking-tight text-white">
              {selectedCred.title}
            </h3>

            <div className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
              <p className="text-xs text-zinc-300 font-medium font-sans">
                Instituição: {selectedCred.institution}
              </p>
              <p className="text-xs text-zinc-400 font-mono">
                {selectedCred.documentTitle}
              </p>
              {selectedCred.hours && (
                <p className="text-xs text-zinc-400 font-mono">
                  Carga Horária: {selectedCred.hours}
                </p>
              )}
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              {selectedCred.description}
            </p>

            <div className="pt-3 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setSelectedCred(null)}
                className="px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors shadow-sm"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
