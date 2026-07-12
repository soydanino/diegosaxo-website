import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Music = () => {
  useScrollReveal('music');

  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto" id="music">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-lg text-secondary-container tracking-tight mb-2">Latest Releases</h2>
        <div className="w-20 h-1 bg-secondary-container"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="scroll-reveal spotify-card-hover bg-surface-container-low p-6 border-t-2 border-primary-container shadow-2xl">
          <div className="mb-6 aspect-square overflow-hidden bg-surface-container-high relative group">
            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" alt="Close-up artistic shot of a golden saxophone with warm dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaBk_-idMFSi2iqXIqtEbu6eOD6FD_BqChdgmwQu4lxP78Wt0Esm_ODEuqpEGzeW-uZCQ-H4-wp_MgECrydE8I62cXEAGagClm0wQTrkPl6hfvNwG-xAGUOO76C4Hwcb4HuWifkGs3_W9UZ2prSt9tmjWOwELUitSvFiTUTEetTljYp_Zkn-2k17JWD9AMjfkkCn6hIPSbOsboklLqfpgmHxI7rluP61KWv8dpPbXVfaLejDhxEW6HWQ" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>play_circle</span>
            </div>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">Midnight Blue</h3>
          <p className="font-label-md text-label-md text-on-surface-variant mb-6">Original Composition • 2024</p>
          <div className="h-[80px] bg-black/40 rounded flex items-center justify-center text-on-surface-variant italic text-sm">
            Spotify Embed Placeholder
          </div>
        </div>
        
        <div className="scroll-reveal spotify-card-hover bg-surface-container-low p-6 border-t-2 border-secondary-container shadow-2xl">
          <div className="mb-6 aspect-square overflow-hidden bg-surface-container-high relative group">
            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" alt="Atmospheric abstract jazz photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg9L1wM7nyjIu-Ev1PL3w0JTlcJL0_3YkkgzKF3vSPDYVAEuEhq5JpaCh5woJTp3l8NKFRUiTUXfTlR_I4MJibjx313hNNhZTWPADLpjxhSV-5gMyv-tjGMrYlsLRa0dAfk4mkDoxl09QiFNfLo96KTAAUFRAqaknRbuQefC5njtoJKkvpriefzGsu2trm5ixCFNI0tUoDsMFmnEBI70pZAIwZuv5KLmztcDZEovQFxKlePtViW7cE2g" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>play_circle</span>
            </div>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">Harlem Echoes</h3>
          <p className="font-label-md text-label-md text-on-surface-variant mb-6">Live Recording • 2023</p>
          <div className="h-[80px] bg-black/40 rounded flex items-center justify-center text-on-surface-variant italic text-sm">
            Spotify Embed Placeholder
          </div>
        </div>
        
        <div className="scroll-reveal spotify-card-hover bg-surface-container-low p-6 border-t-2 border-primary-container shadow-2xl">
          <div className="mb-6 aspect-square overflow-hidden bg-surface-container-high relative group">
            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" alt="A portrait of a male saxophonist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSqqa0ATJTf66poBvPHlonZTlzObYMqo_2YEeXod-0AcC543nhcVMX2Y9R4edbtcqD6H_ylG2dJWBo4XobFyCCcHXMnr0j_NI6uRSfIgdFNQJwu6R_oFnSx4hNhFajpbPGtqC-fkTF1xliHzfmhCgVPjBTOpWelnaG1SUuAOKFCSX57UatzdN9Ka0QWnGgJZbgGdQFB94CxBoojpXAr5ZeDVNlZ-v0K3FxNnG4j-NcqJgz-xK6T_CBBw" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>play_circle</span>
            </div>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">Velvet Nocturne</h3>
          <p className="font-label-md text-label-md text-on-surface-variant mb-6">Collaboration • 2023</p>
          <div className="h-[80px] bg-black/40 rounded flex items-center justify-center text-on-surface-variant italic text-sm">
            Spotify Embed Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
