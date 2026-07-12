import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-base px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto py-section-gap-mobile md:py-section-gap-desktop">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="font-display-lg text-headline-md text-primary">DIEGO HERRERA</div>
          <div className="flex gap-6 mt-2">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">radio</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-label-md text-label-md">
          <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#music">Music</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#tours">Tours</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#about">About</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact</a>
        </div>
        <div className="font-label-md text-label-md text-on-surface-variant text-center md:text-right mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} DIEGO HERRERA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
