import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, FileText, Download, Youtube, Instagram, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { ARTIST_INFO } from '../data/portfolioData';

export const BookingContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    eventType: 'palestra-escola',
    city: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showRiderModal, setShowRiderModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Olá Mano Ordai! Gostaria de agendar uma proposta para ${
        formData.eventType === 'palestra-escola'
          ? 'Palestra do Projeto Hip Hop nas Escolas'
          : formData.eventType === 'show'
          ? 'Show Musical / EP Sobrevivendo'
          : formData.eventType === 'oficina'
          ? 'Oficina de Rima & Cultura Urbana'
          : formData.eventType === 'capacitacao-docente'
          ? 'Capacitação Docente em Relações Étnico-Raciais (ERER)'
          : 'Projeto Cultural / Ponto de Cultura'
      }. Meu nome é ${formData.name || 'Contratante'} de ${formData.city || 'minha cidade'}.`
    );
    return `https://api.whatsapp.com/send?phone=${ARTIST_INFO.whatsappNumber}&text=${text}`;
  };

  return (
    <section
      id="contato"
      className="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#0c0d12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-300" />
            <span>CONTRATAÇÃO, AGENDAMENTOS & DIÁLOGO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            CONTATO & BOOKING
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Agende palestras do projeto <strong>Hip Hop nas Escolas</strong>, shows musicais do EP Sobrevivendo, oficinas práticas e formações docentes para sua escola, festival ou instituição.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-7 bg-zinc-900/70 border border-zinc-800 rounded-2xl space-y-5 shadow-lg backdrop-blur-sm">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                  Canais de Atendimento Direto
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1">
                  Atendimento para prefeituras, escolas públicas e privadas, universidades, festivais, casas de show e unidades socioeducativas.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3.5 p-3.5 bg-zinc-950/80 rounded-xl border border-zinc-800/80">
                  <div className="p-2.5 bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-700/60">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-400 font-medium block">
                      Localização / Base
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {ARTIST_INFO.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 bg-zinc-950/80 rounded-xl border border-zinc-800/80">
                  <div className="p-2.5 bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-700/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-400 font-medium block">
                      E-mail Profissional
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {ARTIST_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 bg-zinc-950/80 rounded-xl border border-zinc-800/80">
                  <div className="p-2.5 bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-700/60">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-400 font-medium block">
                      Gestão Coletiva
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {ARTIST_INFO.pampaCrew}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Rider & Press Kit Download Card */}
            <div className="p-6 bg-zinc-900/70 border border-zinc-800 rounded-2xl flex items-center justify-between gap-4 shadow-md">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  Material Técnico & Release
                </span>
                <h4 className="text-base font-bold uppercase tracking-tight text-white">
                  Rider Técnico & Clipping
                </h4>
                <p className="text-xs text-zinc-400 mt-1 font-sans">
                  Mapa de palco, canais de som e especificações para eventos.
                </p>
              </div>

              <button
                id="btn-open-rider-modal"
                onClick={() => setShowRiderModal(true)}
                className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-xl border border-zinc-700 transition-all shrink-0 cursor-pointer"
                title="Visualizar Rider Técnico"
              >
                <FileText className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-zinc-900/70 border border-zinc-800 rounded-2xl shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    Proposta de Agendamento
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-0.5">
                    Preencha os dados para receber disponibilidade de agenda e orçamento.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-zinc-400" />
              </div>

              {submitted ? (
                <div className="p-8 bg-zinc-950/80 rounded-xl border border-zinc-800 text-center space-y-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-full border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white">
                    Proposta Enviada com Sucesso!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto font-sans leading-relaxed">
                    Obrigado pelo contato! A equipe de Mano Ordai e do Ponto de Cultura Pampa Crew retornará em breve com todas as informações.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        institution: '',
                        email: '',
                        phone: '',
                        eventType: 'palestra-escola',
                        city: '',
                        date: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl font-sans font-bold text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Event Type Selector */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      Modalidade do Evento / Proposta
                    </label>
                    <select
                      id="input-event-type"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                    >
                      <option value="palestra-escola">
                        Palestra: Projeto Hip Hop nas Escolas (Fundamental / Médio / FASE)
                      </option>
                      <option value="show">
                        Show Musical: EP Sobrevivendo & Lanceiros (Banda ou Pocket)
                      </option>
                      <option value="oficina">
                        Oficina Prática: Rima, Beat, Percussão & Elementos da Cultura
                      </option>
                      <option value="capacitacao-docente">
                        Formação de Professores: Educação para Relações Étnico-Raciais (ERER)
                      </option>
                      <option value="ponto-cultura">
                        Consultoria & Articulação de Pontos de Cultura (MinC)
                      </option>
                      <option value="outro">
                        Outro / Entrevista / Parceria Cultural
                      </option>
                    </select>
                  </div>

                  {/* Grid 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                        Instituição / Escola / Coletivo
                      </label>
                      <input
                        id="input-institution"
                        type="text"
                        placeholder="Ex: E.E.E.M. Emílio Zuñeda"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                        E-mail de Contato *
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        required
                        placeholder="(55) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                        Cidade / Estado *
                      </label>
                      <input
                        id="input-city"
                        type="text"
                        required
                        placeholder="Ex: Alegrete / RS"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                        Data Prevista (Opcional)
                      </label>
                      <input
                        id="input-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                      Detalhes da Proposta / Mensagem
                    </label>
                    <textarea
                      id="input-message"
                      rows={3}
                      placeholder="Descreva a quantidade de alunos/público, formato do espaço ou objetivo da atividade..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-950 text-white rounded-xl border border-zinc-800 px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-500"
                    ></textarea>
                  </div>

                  <button
                    id="btn-submit-booking-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-md cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Enviando Proposta...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Solicitação de Proposta</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rider Técnico Modal */}
      {showRiderModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[10px] font-sans font-bold uppercase tracking-wider rounded-md border border-zinc-700">
                Rider Técnico & Mapa de Palco
              </span>
              <button
                onClick={() => setShowRiderModal(false)}
                className="text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                ✕ Fechar
              </button>
            </div>

            <h3 className="text-xl font-black uppercase tracking-tight text-white">
              MANO ORDAI • ESPECIFICAÇÕES TÉCNICAS
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 font-sans">
              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                  1. PALESTRA & OFICINA "HIP HOP NAS ESCOLAS"
                </h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-400 text-xs sm:text-sm">
                  <li>01 Microfone sem fio / headset com pedestal</li>
                  <li>01 Caixa de som amplificada com entrada P10 / XLR / Bluetooth</li>
                  <li>01 Projetor multimídia / Datashow + cabo HDMI (para exibição de trechos do documentário)</li>
                </ul>
              </div>

              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                  2. SHOW MUSICAL COMPLETO (EP SOBREVIVENDO & LANCEIROS)
                </h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-400 text-xs sm:text-sm">
                  <li>02 Microfones vocais (Shure SM58 ou similar)</li>
                  <li>01 Linha stereo para playback / Beats</li>
                  <li>01 Microfone para acordeon / gaita gaúcha</li>
                  <li>01 Amplificador de guitarra + 01 amplificador de contrabaixo</li>
                  <li>02 Caixas de retorno de palco (Monitores)</li>
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex justify-between items-center">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-sans uppercase tracking-wider text-white rounded-xl border border-zinc-700 flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-zinc-300" />
                <span>Imprimir / Salvar PDF</span>
              </button>

              <button
                onClick={() => setShowRiderModal(false)}
                className="px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
