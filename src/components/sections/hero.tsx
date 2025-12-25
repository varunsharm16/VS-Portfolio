"use client";

import React, { useEffect, useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className={`relative h-screen flex flex-col overflow-hidden bg-[#E0F2FE] scroll-mt-[72px] ${inter.className}`}>

        {/* Ambience Overlay */}
        <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background: 'radial-gradient(circle at center, #E0F2FE 0%, #ffffff 70%)'
        }} />


        {/* Background Video (Kept for the "Isomorphic" aesthetic) */}
        <div className="absolute inset-0 z-20 flex items-end justify-end pointer-events-none">
          <div className="w-full h-[100%] md:h-[110%] lg:h-[120%] aspect-video relative">
            <video
              ref={videoRef}
              src="https://storage.googleapis.com/isomorphiclabs-website-public-artifacts/videos/home/home_hero.webm"
              className="w-full h-full object-contain object-right-bottom opacity-80"
              muted
              loop
              playsInline
              autoPlay
              aria-hidden="true"
              title="Abstract background animation"
            />

          </div>
        </div>

        {/* Grid Layout Container */}
        <div className="relative z-10 w-full flex-1 flex flex-col pt-[72px]">
          <div className="container mx-auto px-5 md:px-10 flex-grow flex items-center py-8 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full border border-black rounded-[24px] md:rounded-[40px] overflow-hidden bg-transparent backdrop-blur-[2px]">
              
              {/* Top Left: Headline Box */}
              <div className="border-b md:border-r border-black p-6 md:p-10 lg:p-12 flex flex-col justify-center min-h-[300px] md:min-h-[450px]">
                <h1 className="text-[50px] sm:text-[70px] lg:text-[90px] font-light leading-[0.9] tracking-[-0.03em] text-black">
                  Engineer<br />Intelligent<br />Systems
                </h1>
              </div>

              {/* Top Right: Empty Spacer */}
              <div className="border-b border-black hidden md:block" />

                {/* Bottom Left: Mission Paragraph Box */}
                <div className="md:border-r border-black p-6 md:p-10 lg:p-12 flex flex-col justify-center min-h-[200px] md:min-h-[350px]">
                  <div className="max-w-[480px]">
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] text-[#4D4D4D] font-normal !whitespace-pre-line">I’m a Biochemistry student, founder, and developer who loves building at the intersection of AI and life sciences. I care about thoughtful systems, clear design, and tools that actually help people do their best work.

                </p>
                  </div>
                </div>

                {/* Bottom Right: Empty Spacer */}
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </section>);

}