import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const HeaderNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Documentário', href: '#documentario' },
    { name: 'Discografia', href: '#discografia' },
    { name: 'Audiovisual', href: '#audiovisual' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Credenciais', href: '#credenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0d]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg py-3'
          : 'bg-[#0a0a0d]/80 backdrop-blur-sm border-b border-zinc-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Clean Branding */}
        <a href="#hero" className="flex flex-col group py-0.5">
          <span className="font-gothic text-2xl sm:text-3xl tracking-wider uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 font-black group-hover:from-white group-hover:to-zinc-100 transition-all leading-tight">
            Mano Ordai
          </span>
          <span className="text-[10px] tracking-wider uppercase text-zinc-400 font-sans font-medium">
            Rap da Fronteira & Educação Popular
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-wider font-sans font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors py-1 relative hover:underline decoration-zinc-500 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="btn-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0f14] border-t border-zinc-800 px-4 py-4 space-y-1 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-xs font-sans uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

