"use client";

import React from 'react';

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const footerNavigation = {
    links: [
      { label: "Home", href: "/" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Expertise", href: "#expertise" },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com/in/varun-sharma-vvs" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Email", href: "mailto:hello@varunsharma.com" },
    ]
  };
  
  return (
    <footer className="bg-[#333333] pt-12 pb-24 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2.2fr_2.4fr] border border-white/10 rounded-[1.25rem] overflow-hidden font-mono text-white">
          
          {/* Copyright Section */}
          <div className="flex items-center justify-center p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 bg-[#333333]">
            <span className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-white/90 leading-relaxed text-center">
              © {currentYear} VARUN SHARMA
            </span>
          </div>

          {/* Nav Column 1 */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-[#333333]">
            {footerNavigation.links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex-1 flex items-center px-6 py-[1.15rem] text-[11px] md:text-[12px] uppercase tracking-[0.12em] hover:bg-white/5 transition-colors whitespace-nowrap ${
                  i < footerNavigation.links.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Nav Column 2 */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-[#333333]">
            {footerNavigation.social.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex-1 flex items-center px-6 py-[1.15rem] text-[11px] md:text-[12px] uppercase tracking-[0.12em] hover:bg-white/5 transition-colors whitespace-nowrap ${
                  i < footerNavigation.social.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Location Section */}
          <div className="flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 bg-[#333333]">
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-10 leading-none">
              LOCATION
            </span>
            <div className="flex flex-col space-y-3">
              <span className="text-[12px] text-white/80 tracking-[0.05em] leading-normal">
                Bangalore, India
              </span>
              <span className="text-[12px] text-white/80 tracking-[0.05em] leading-normal">
                Timezone: GMT+5:30
              </span>
            </div>
          </div>

          {/* Availability Section */}
          <div className="flex flex-col p-8 md:p-10 bg-[#333333]">
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-10 leading-none">
              AVAILABILITY
            </span>
            <div className="flex flex-col space-y-3">
              <span className="text-[12px] text-white/80 tracking-[0.05em] leading-normal">
                Open for collaboration
              </span>
              <span className="text-[12px] text-white/80 tracking-[0.05em] leading-normal">
                Available from March 2025
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
