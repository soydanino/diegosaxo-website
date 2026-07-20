import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#music',    en: 'Music',    es: 'Música',    icon: 'music_note',     section: 'music'    },
  { href: '#tours',    en: 'Tours',    es: 'Giras',     icon: 'calendar_month', section: 'tours'    },
  { href: '#projects', en: 'Projects', es: 'Proyectos', icon: 'play_circle',    section: 'projects' },
  { href: '#reels',    en: 'Reels',    es: 'Reels',     icon: 'reel',           section: 'reels',   desktopOnly: true },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled]           = useState(false);
  const [language, setLanguage]           = useState('en');

  useEffect(() => {
    const syncLanguage = (event) => setLanguage(event.detail);
    setLanguage(document.documentElement.lang === 'es' ? 'es' : 'en');
    window.addEventListener('site-language-change', syncLanguage);
    return () => window.removeEventListener('site-language-change', syncLanguage);
  }, []);

  const toggleLanguage = () => {
    window.setSiteLanguage?.(language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ section }) => document.getElementById(section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isHome = activeSection === null;

  return (
    <>
      {/* ── Desktop: pill navbar ─────────────────────────────────── */}
      <nav
        aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}
        className={`hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-1 border transition-all duration-500 rounded-[9999px] ${
          scrolled
            ? 'px-3 py-2 bg-surface-container/90 backdrop-blur-2xl border-outline-variant/60 shadow-xl shadow-black/40'
            : 'px-8 py-2 bg-surface-container/55 backdrop-blur-md border-outline-variant/30 shadow-lg shadow-black/20'
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className={`font-display-lg text-[14px] tracking-tighter text-white py-2.5 mr-1 whitespace-nowrap hover:opacity-75 transition-all duration-500 ${scrolled ? 'px-3' : 'px-4'}`}
        >
          DIEGO HERRERA
        </a>

        <span className="w-px h-4 bg-outline-variant/50 mx-1 shrink-0" />

        {/* Links */}
        {NAV_LINKS.map(({ href, en, es, section }) => (
          <a
            key={section}
            href={href}
            className={`py-2.5 font-label-md text-label-md whitespace-nowrap transition-all duration-500 rounded-[9999px] ${
              scrolled ? 'px-5' : 'px-7'
            } ${
              activeSection === section
                ? 'bg-primary/15 text-primary'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/70'
            }`}
          >
            {language === 'es' ? es : en}
          </a>
        ))}

        {/* CTA */}
        <a
          href="mailto:contact@diegosaxo.com"
          className={`ml-2 bg-primary text-on-primary py-2.5 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all whitespace-nowrap rounded-[9999px] ${scrolled ? 'px-6' : 'px-8'}`}
        >
          {language === 'es' ? 'Reservar ahora' : 'Book Now'}
        </a>

        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish'}
          className="ml-1 px-3 py-2 text-[11px] font-semibold tracking-wider text-on-surface-variant hover:text-primary transition-colors rounded-[9999px] border border-outline-variant/50"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </nav>

      {/* Desktop: back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={language === 'es' ? 'Volver al inicio' : 'Back to top'}
        className={`hidden md:flex fixed right-6 bottom-6 z-50 w-11 h-11 items-center justify-center rounded-full bg-surface-container/90 backdrop-blur-xl border border-outline-variant/50 text-on-surface-variant hover:text-primary hover:border-primary/60 hover:-translate-y-1 shadow-xl shadow-black/30 transition-all duration-300 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
          arrow_upward
        </span>
      </button>

      {/* ── Mobile: bottom navigation bar ────────────────────────── */}
      <nav
        aria-label={language === 'es' ? 'Navegación móvil' : 'Mobile navigation'}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container/85 backdrop-blur-2xl border-t border-outline-variant/25"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish'}
          className="absolute right-3 bottom-full mb-3 bg-surface-container/90 backdrop-blur-xl border border-outline-variant/50 text-on-surface px-3 py-2 rounded-[9999px] text-[11px] font-semibold tracking-wider shadow-lg"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        <div className="flex items-center justify-around px-1 pt-2 pb-1">
          {/* Home */}
          <MobileTab
            href="#"
            label={language === 'es' ? 'Inicio' : 'Home'}
            icon="home"
            active={isHome}
          />

          {NAV_LINKS.filter(l => !l.desktopOnly).map(({ href, en, es, icon, section }) => (
            <MobileTab
              key={section}
              href={href}
              label={language === 'es' ? es : en}
              icon={icon}
              active={activeSection === section}
            />
          ))}

          {/* Book */}
          <MobileTab
            href="mailto:contact@diegosaxo.com"
            label={language === 'es' ? 'Reservar' : 'Book'}
            icon="mail"
            active={false}
            highlight
          />
        </div>
      </nav>
    </>
  );
};

const MobileTab = ({ href, label, icon, active, highlight = false }) => (
  <a
    href={href}
    className={`flex flex-col items-center justify-center gap-0.5 min-w-[52px] py-1 px-2 transition-all duration-200 ${
      highlight
        ? 'text-primary'
        : active
          ? 'text-primary'
          : 'text-on-surface-variant'
    }`}
  >
    {/* Icon with indicator pill */}
    <span className="relative flex items-center justify-center">
      <span
        className={`absolute inset-0 -inset-x-3 rounded-[9999px] transition-all duration-300 ${
          active ? 'bg-primary/15' : 'bg-transparent'
        }`}
      />
      <span
        className={`material-symbols-outlined relative transition-all duration-200 ${
          active ? 'text-[24px]' : 'text-[22px]'
        }`}
        style={{
          fontVariationSettings: active || highlight
            ? "'FILL' 1, 'wght' 400"
            : "'FILL' 0, 'wght' 300",
        }}
      >
        {icon}
      </span>
    </span>
    <span className={`font-label-md text-[10px] tracking-wide transition-all duration-200 ${active ? 'font-semibold' : ''}`}>
      {label}
    </span>
  </a>
);

export default Navbar;
