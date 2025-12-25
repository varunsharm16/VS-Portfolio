"use client";

import React from 'react';
import Image from 'next/image';

const VisionCTA = () => {
  return (
    <section className="section py-[80px] md:py-[120px] lg:py-[160px] relative overflow-hidden bg-white">
      <div className="container max-w-[1440px] mx-auto px-10">
        <div className="s-cta relative rounded-[20px] overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center bg-[#e0f2fe] border border-black/5">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
              alt="High-tech geometric background"
              fill
              className="object-cover object-right md:object-center pointer-events-none opacity-40"
              priority />

          </div>

          {/* Ambience Overlay */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#e0f2fe]/90 via-[#e0f2fe]/60 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 w-full px-8 md:px-16 py-16 md:py-20 flex flex-col justify-between h-full">
            <div className="cta_module max-w-[700px]">
              <div className="cta_module-top mb-12 md:mb-16">
                {/* Dot Tag */}
                <div className="dot_tag flex items-center gap-2 mb-6" aria-label="our mission">
                  <div className="dot_tag-dot w-2 h-2 bg-black shrink-0" />
                  <div className="text-mono-tag text-[12px] font-medium uppercase tracking-[0.1em] font-mono leading-none flex gap-1">
                    <span>MY</span>
                    <span>MISSION</span>
                  </div>
                </div>

                {/* Headline */}
                <h2
                  className="text-[36px] md:text-[56px] lg:text-[72px] font-light leading-[1.1] tracking-[-0.02em] text-black text-balance !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line"
                  style={{ fontFamily: 'var(--font-display)' }}>Build a future where the science empowers the person.


                </h2>
              </div>

              {/* Action Button */}
              <div className="cta_module-bottom">
                <a
                  href="mailto:varunvvsm@gmail.com"
                  className="group inline-flex items-center bg-transparent border border-black rounded-full transition-all duration-300 hover:bg-black/5 overflow-hidden">

                  <div className="cta_label px-8 py-4 border-r border-black">
                    <span
                      className="text-[13px] font-medium uppercase tracking-[0.1em] text-black"
                      style={{ fontFamily: 'var(--font-mono)' }}>

                      Get in touch
                    </span>
                  </div>
                  <div className="cta_icon px-5 py-4 flex items-center justify-center">
                    <div className="cta-icon_embed transform transition-transform duration-300 group-hover:translate-x-1">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 10H16.5M16.5 10L11.5 5M16.5 10L11.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default VisionCTA;