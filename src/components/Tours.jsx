import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Tours = () => {
  useScrollReveal('tours');

  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest" id="tours">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">Upcoming Events</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Catch Diego live in performance across the globe's most iconic jazz venues.</p>
        </div>
        
        <div className="space-y-0">
          <div className="tour-row scroll-reveal flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 px-4 transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 mb-6 md:mb-0">
              <div className="font-display-lg text-headline-md text-secondary-container min-w-[120px]">Oct 15</div>
              <div className="space-y-1">
                <h4 className="font-headline-md text-headline-md text-on-surface">Blue Note</h4>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">New York, NY</p>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto">
              <div className="hidden lg:block font-body-md text-on-surface-variant italic">Sold Out Soon</div>
              <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-3 font-label-md text-label-md uppercase tracking-widest hover:scale-105 transition-transform">Tickets</button>
            </div>
          </div>
          
          <div className="tour-row scroll-reveal flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 px-4 transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 mb-6 md:mb-0">
              <div className="font-display-lg text-headline-md text-secondary-container min-w-[120px]">Nov 2</div>
              <div className="space-y-1">
                <h4 className="font-headline-md text-headline-md text-on-surface">Ronnie Scott's</h4>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">London, UK</p>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto">
              <div className="hidden lg:block font-body-md text-on-surface-variant italic">Evening Session</div>
              <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-3 font-label-md text-label-md uppercase tracking-widest hover:scale-105 transition-transform">Tickets</button>
            </div>
          </div>
          
          <div className="tour-row scroll-reveal flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 px-4 transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 mb-6 md:mb-0">
              <div className="font-display-lg text-headline-md text-secondary-container min-w-[120px]">Dec 12</div>
              <div className="space-y-1">
                <h4 className="font-headline-md text-headline-md text-on-surface">Blue Note Tokyo</h4>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Tokyo, JP</p>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto">
              <div className="hidden lg:block font-body-md text-on-surface-variant italic">Limited Seating</div>
              <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-3 font-label-md text-label-md uppercase tracking-widest hover:scale-105 transition-transform">Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
