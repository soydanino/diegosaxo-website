import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroImage = '/banner-final.png';

const Hero = () => {
  const heroRef               = useRef(null);
  const bgRef                 = useRef(null);
  const titleRef              = useRef(null);
  const subtitleRef           = useRef(null);
  const ctaRef                = useRef(null);
  useEffect(() => {
    const hero    = heroRef.current;
    const bg      = bgRef.current;
    const textEls = [titleRef.current, subtitleRef.current, ctaRef.current];

    // ── Entrance animations ───────────────────────────────────────
    gsap.set(textEls, { opacity: 0, y: 30 });

    const entranceTl = gsap.timeline({ delay: 0.3 });
    entranceTl
      .to(titleRef.current,    { opacity: 1, y: 0, duration: 1,   ease: 'power3.out' })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.65')
      .to(ctaRef.current,      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.65');

    // ── Parallax: image moves slower than scroll ──────────────────
    gsap.to(bg, {
      y: '-18%',
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end:   'bottom top',
        scrub: 1.5,
      },
    });

    // ── Text fades out as user scrolls away ───────────────────────
    gsap.to(textEls, {
      y:       -55,
      opacity: 0,
      ease:    'none',
      stagger: 0.05,
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end:   '45% top',
        scrub: 1,
      },
    });

    return () => {
      entranceTl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <header ref={heroRef} className="relative min-h-screen flex flex-col justify-end pb-16 md:justify-center md:pb-0 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          alt="Diego Herrera performing saxophone"
          className="w-full h-full object-cover object-center brightness-[0.75] will-change-transform"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Text content */}
      <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full md:flex md:justify-end">
        <div className="max-w-2xl mt-10 md:mt-20">
          <h1 ref={titleRef} className="font-display-lg text-[64px] md:text-[120px] leading-[0.9] text-primary mb-4 tracking-tighter will-change-transform">
            Diego<br />Herrera
          </h1>
          <p ref={subtitleRef} className="font-headline-md text-headline-md text-on-surface-variant mb-8 tracking-widest uppercase will-change-transform">
            The Soul of the Saxophone
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4 will-change-transform">
            <button className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md hover:brightness-110 transition-all w-full md:w-auto">LISTEN NOW</button>
            <button className="border border-primary text-primary px-8 py-4 font-label-md text-label-md hover:bg-primary/10 transition-all w-full md:w-auto">TOUR DATES</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
