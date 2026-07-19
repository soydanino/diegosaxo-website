import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#music',    label: 'Music',    icon: 'music_note',     section: 'music'    },
  { href: '#tours',    label: 'Tours',    icon: 'calendar_month', section: 'tours'    },
  { href: '#projects', label: 'Projects', icon: 'play_circle',    section: 'projects' },
  { href: '#reels',    label: 'Reels',    icon: 'reel',           section: 'reels',   desktopOnly: true },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled]           = useState(false);

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
        aria-label="Main navigation"
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
        {NAV_LINKS.map(({ href, label, section }) => (
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
            {label}
          </a>
        ))}

        {/* CTA */}
        <a
          href="mailto:booking@diegoherrera.com"
          className={`ml-2 bg-primary text-on-primary py-2.5 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all whitespace-nowrap rounded-[9999px] ${scrolled ? 'px-6' : 'px-8'}`}
        >
          Book Now
        </a>
      </nav>

      {/* ── Mobile: bottom navigation bar ────────────────────────── */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container/85 backdrop-blur-2xl border-t border-outline-variant/25"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="flex items-center justify-around px-1 pt-2 pb-1">
          {/* Home */}
          <MobileTab
            href="#"
            label="Home"
            icon="home"
            active={isHome}
          />

          {NAV_LINKS.filter(l => !l.desktopOnly).map(({ href, label, icon, section }) => (
            <MobileTab
              key={section}
              href={href}
              label={label}
              icon={icon}
              active={activeSection === section}
            />
          ))}

          {/* Book */}
          <MobileTab
            href="mailto:booking@diegoherrera.com"
            label="Book"
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
