import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroImage = '/banner-final.png';

const stats = [
  { value: '15+', label: 'Años en escena' },
  { value: '100+', label: 'Conciertos' },
  { value: '5', label: 'Continentes' },
];

const Hero = () => {
  const heroRef       = useRef(null);
  const bgRef         = useRef(null);
  const badgeRef      = useRef(null);
  const line1Ref      = useRef(null);
  const line2Ref      = useRef(null);
  const accentLineRef = useRef(null);
  const subtitleRef   = useRef(null);
  const ctaRef        = useRef(null);
  const statsRef      = useRef(null);
  const scrollRef     = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg   = bgRef.current;

    const allEls = [
      badgeRef.current,
      line1Ref.current,
      line2Ref.current,
      accentLineRef.current,
      subtitleRef.current,
      ctaRef.current,
      statsRef.current,
      scrollRef.current,
    ];

    // ── Initial states ────────────────────────────────────────────
    gsap.set(badgeRef.current,  { opacity: 0, y: 14 });
    gsap.set(line1Ref.current,  { opacity: 0, y: 28 });
    gsap.set(line2Ref.current,  { opacity: 0, y: 28 });
    gsap.set(accentLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(subtitleRef.current,   { opacity: 0, y: 14 });
    gsap.set(ctaRef.current,        { opacity: 0, y: 14 });
    gsap.set(statsRef.current,      { opacity: 0, y: 14 });
    gsap.set(scrollRef.current,     { opacity: 0 });

    // ── Entrance timeline ─────────────────────────────────────────
    const tl = gsap.timeline({ delay: 0.2 });

    tl
      .to(badgeRef.current,      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
      .to(line1Ref.current,      { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out' }, '-=0.35')
      .to(line2Ref.current,      { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out' }, '-=0.85')
      .to(accentLineRef.current, { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.6')
      .to(subtitleRef.current,   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .to(ctaRef.current,        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .to(statsRef.current,      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .to(scrollRef.current,     { opacity: 1, duration: 0.6 }, '-=0.3');

    // ── Parallax ──────────────────────────────────────────────────
    gsap.to(bg, {
      y: '-15%',
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end:   'bottom top',
        scrub: 1.5,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.set(allEls, { clearProps: 'all' });
    };
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end pb-16 md:justify-center md:pb-0 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          alt="Diego Herrera performing saxophone"
          className="w-full h-full object-cover object-center will-change-transform"
          src={heroImage}
        />

        {/* Noise texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
            backgroundSize: '200px',
          }}
        />

        {/* Desktop: gradient left → right so image shows on the right */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-background/90 via-background/35 to-transparent" />

        {/* Mobile: gradient bottom → top */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

        {/* Subtle primary glow behind left content */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 55%, rgba(146,31,93,0.12) 0%, transparent 55%)' }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        <div className="max-w-[560px]">

          {/* Badge */}
          <div ref={badgeRef} className="flex items-center gap-3 mb-7">
            <div className="w-6 h-[1.5px] bg-primary" />
            <span
              className="font-label-md text-label-md text-white uppercase"
              style={{ letterSpacing: '0.22em' }}
            >
              Saxofonista · Músico de Sesión
            </span>
          </div>

          {/* Title — each line has overflow:hidden for the reveal */}
          <h1 className="mb-5" style={{ letterSpacing: '-0.03em' }}>
            <span
              ref={line1Ref}
              className="block text-on-surface will-change-transform"
              style={{ fontSize: 'clamp(68px, 9vw, 118px)', fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: 1.1 }}
            >
              Diego
            </span>
            <span
              ref={line2Ref}
              className="block text-primary will-change-transform"
              style={{ fontSize: 'clamp(68px, 9vw, 118px)', fontFamily: 'Manrope, sans-serif', fontWeight: 700, lineHeight: 1.1 }}
            >
              Herrera
            </span>
          </h1>

          {/* Animated accent line */}
          <div
            ref={accentLineRef}
            className="h-[1.5px] mb-6 will-change-transform"
            style={{ background: 'linear-gradient(to right, #921F5D, rgba(146,31,93,0.15), transparent)' }}
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-label-md text-label-md text-on-surface-variant mb-10 will-change-transform"
            style={{ letterSpacing: '0.28em' }}
          >
            THE SOUL OF THE SAXOPHONE
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-3 mb-12 will-change-transform">
            <button className="group flex items-center justify-center gap-2 bg-primary text-on-primary px-7 py-3.5 font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all w-full md:w-auto">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
              LISTEN NOW
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 font-label-md text-label-md hover:border-white hover:bg-white/10 active:scale-95 transition-all w-full md:w-auto">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                calendar_month
              </span>
              TOUR DATES
            </button>
          </div>

          {/* Stats — desktop only */}
          <div ref={statsRef} className="hidden md:flex items-center gap-8 will-change-transform">
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="w-[1px] h-9 bg-outline-variant" />}
                <div>
                  <div
                    className="text-on-surface leading-none mb-1"
                    style={{ fontSize: '28px', fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-label-md text-[11px] text-on-surface-variant" style={{ letterSpacing: '0.12em' }}>
                    {stat.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        ref={scrollRef}
        className="hidden md:flex absolute bottom-8 md:left-auto md:right-margin-desktop md:translate-x-0 flex-col items-center gap-2 will-change-transform"
      >
        <span
          className="font-label-md text-[9px] text-on-surface-variant"
          style={{ letterSpacing: '0.35em', writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          SCROLL
        </span>
        <div className="w-[1px] h-10 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-primary to-transparent animate-scroll-line" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
