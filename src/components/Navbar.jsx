import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto relative z-50">
          <div className="font-display-lg text-headline-md tracking-tighter text-primary">DIEGO HERRERA</div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#music">Music</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#tours">Tours</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
            <button className="bg-primary text-on-primary px-6 py-2 font-label-md text-label-md rounded-none scale-95 active:opacity-80 transition-transform uppercase tracking-widest">Book Now</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-opacity duration-300 md:hidden flex flex-col items-center justify-center gap-10 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <a onClick={closeMenu} className="font-display-lg text-display-md text-on-surface hover:text-primary transition-colors" href="#music">Music</a>
        <a onClick={closeMenu} className="font-display-lg text-display-md text-on-surface hover:text-primary transition-colors" href="#tours">Tours</a>
        <a onClick={closeMenu} className="font-display-lg text-display-md text-on-surface hover:text-primary transition-colors" href="#about">About</a>
        <button onClick={closeMenu} className="bg-primary text-on-primary px-10 py-4 mt-4 font-label-md text-label-lg rounded-none uppercase tracking-widest">Book Now</button>
      </div>
    </>
  );
};

export default Navbar;
