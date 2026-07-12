import React, { useEffect, useRef } from 'react';
const heroImage = '/DH_hero_desktop_V.png';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    // Entrance Animations
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }

    const subTimer = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    const ctaTimer = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = '1';
        ctaRef.current.style.transform = 'translateY(0)';
      }
    }, 600);

    // Particle Emitter Logic
    const container = particlesContainerRef.current;
    const symbols = ["♪","♫","♬","♩"];
    let isActive = true;
    const tl = gsap.timeline({ repeat: -1 });

    function createNote() {
      if (!isActive || !container) return;
      
      const note = document.createElement("div");
      // Tailwind classes replicating the user's CSS for notes
      note.className = "absolute text-[#D69B2D] text-[24px] opacity-0 select-none drop-shadow-[0_0_8px_rgba(214,155,45,0.4)]";
      note.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

      // Initial position (left side, representing the saxophone bell)
      // Using responsive percentages or bounds similar to the user's code
      let startX = gsap.utils.random(120, 320);
      
      // On mobile, the saxophone is positioned slightly differently due to object-[25%_center]
      if (window.innerWidth < 768) {
          startX = gsap.utils.random(40, 150);
      }

      gsap.set(note, {
        x: startX,
        y: gsap.utils.random(window.innerHeight * 0.45, window.innerHeight * 0.75),
        scale: gsap.utils.random(0.7, 1.4),
        rotation: gsap.utils.random(-20, 20)
      });

      container.appendChild(note);

      gsap.timeline({
        onComplete() {
          if (note.parentNode) {
            note.remove();
          }
        }
      })
      .to(note, {
        opacity: 1,
        duration: 0.4
      })
      .to(note, {
        x: "+=" + gsap.utils.random(-100, 100),
        y: "-=" + gsap.utils.random(180, 350),
        rotation: "+=" + gsap.utils.random(-80, 80),
        scale: "+=0.5",
        opacity: 0,
        ease: "power1.out",
        duration: gsap.utils.random(4, 7)
      });
    }

    gsap.set(container, { perspective: 1000 });

    tl.call(createNote)
      .to({}, { duration: 0.35 });

    // Additional spontaneous notes
    const delayCalls = gsap.utils.toArray(new Array(10)).map((_, i) => {
      return gsap.delayedCall(i * 0.6, () => {
        const tickerFunc = () => {
          if (Math.random() < 0.02 && isActive) {
            createNote();
          }
        };
        gsap.ticker.add(tickerFunc);
        return tickerFunc; // return to remove later
      });
    });

    return () => {
      isActive = false;
      clearTimeout(subTimer);
      clearTimeout(ctaTimer);
      tl.kill();
      // Since it's hard to track all individual ticker functions, we just flag isActive = false
    };
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col justify-end pb-16 md:justify-center md:pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Diego Herrera performing saxophone" className="w-full h-full object-cover object-[25%_center] md:object-center grayscale-[20%] brightness-[0.7]" src={heroImage} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:bg-gradient-to-t md:from-background md:via-transparent md:to-transparent"></div>
      </div>
      
      {/* Music Particles Container */}
      <div ref={particlesContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10"></div>
      
      <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full md:flex md:justify-end">
        <div className="max-w-2xl mt-10 md:mt-20">
          <h1 ref={titleRef} className="font-display-lg text-[64px] md:text-[120px] leading-[0.9] text-primary mb-4 tracking-tighter opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            Diego<br/>Herrera
          </h1>
          <p ref={subtitleRef} className="font-headline-md text-headline-md text-on-surface-variant mb-8 tracking-widest uppercase opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
            The Soul of the Saxophone
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out">
            <button className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md hover:brightness-110 transition-all w-full md:w-auto">LISTEN NOW</button>
            <button className="border border-primary text-primary px-8 py-4 font-label-md text-label-md hover:bg-primary/10 transition-all w-full md:w-auto">TOUR DATES</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
