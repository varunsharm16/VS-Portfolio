"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const IsomorphismInteractive = () => {
  return (
    <section className="relative w-full py-[120px] lg:py-[160px] bg-white overflow-hidden border-t border-black/5">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, #E0F2FE 0%, #FFFFFF 70%)',
            opacity: 0.8
          }}
        />
      
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-[42%] flex flex-col items-start order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-8 select-none" aria-label="Isomorphism">
              <div className="w-[6px] h-[6px] bg-black" />
              <span className="font-mono text-[12px] font-semibold tracking-[0.15em] uppercase leading-none text-black">
                Digital Symmetry
              </span>
            </div>
            
            <p className="font-sans text-[18px] md:text-[20px] leading-[1.6] text-[#4D4D4D] mb-12 tracking-tight max-w-[540px]">
              The core of my work is the belief that there is an underlying symmetry between elegant software and high-performance business needs. By harnessing modular architecture and predictive UI patterns, I build systems that are not just tools, but extensions of human capability.
            </p>
            
            <a 
              href="#projects" 
              className="group flex items-center border border-black rounded-[4px] transition-all duration-300 hover:bg-black hover:text-white"
            >
              <div className="px-6 py-2.5 border-r border-black group-hover:border-white transition-colors">
                <span className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase">
                  Explore Systems
                </span>
              </div>
              <div className="px-3.5 py-2.5 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </div>

          <div className="w-full lg:w-[58%] order-1 lg:order-2">
            <div className="relative aspect-square w-full rounded-[24px] border border-black/10 bg-white/40 backdrop-blur-[8px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.02)] group">
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000 1px, transparent 1px),
                    linear-gradient(to bottom, #000 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12">
                <div className="absolute w-[50%] h-[50%] bg-[#89CFF0] rounded-full blur-[120px] opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-1000" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-8">
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a062c24f-3c7a-46bd-9b91-80d790751d15-isomorphiclabs-com/assets/svgs/6852c6310ec24d34b26b409a_UI_20Icons_20-_20vision-4.svg" 
                      alt="Scientific Visualization Asset"
                      className="w-24 h-24 md:w-32 md:h-32 opacity-30 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-70 group-hover:grayscale-0"
                    />
                    <div className="absolute -top-6 -right-6 w-4 h-4 rounded-full bg-[#89CFF0] opacity-40 blur-[1px] animate-pulse" />
                  </div>
                  
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 group-hover:text-black/60 transition-colors">
                      System Architecture
                    </div>
                    <div className="h-px w-10 bg-black/10 group-hover:bg-black/20 group-hover:w-16 transition-all duration-500" />
                    <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/20">
                      VS_ARCH_LATTICE_V2
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-500">
                <div className="font-mono text-[9px] uppercase tracking-widest">Status: Ready</div>
                <div className="font-mono text-[9px] uppercase tracking-widest">Core: Rust/TS</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5" />
    </section>
  );
};

export default IsomorphismInteractive;
