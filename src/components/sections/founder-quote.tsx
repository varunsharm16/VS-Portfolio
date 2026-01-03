"use client";

import Image from 'next/image';

const FounderQuote = () => {
  return (
    <section className="bg-white py-[120px] md:py-[140px] lg:py-[180px] relative overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-[2.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-24">

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="max-w-[760px] pt-4">
              <p className="text-[#4D4D4D] font-sans text-xl leading-[1.4] tracking-[-0.01em]">
                Across these projects, the common thread is using biology, data, and software to ask meaningful questions and build things that actually make a difference. As some would say, "move the needle". The work leans on clear methods and interpretable results, whether that means barcoding bacteria, looking at hemoglobin variants, modeling player gaming demand, or exploring every single frame of a jump shot to find out how to improve it. Looking ahead, the plan is to keep building at this intersection of experimental science and engineering, ideally with people who enjoy that mix as much as I do. If anything here sounds close to what you’re working on, I’d love to keep the conversation going.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="flex flex-col items-center w-full max-w-[480px]">
              <div className="relative w-full aspect-[0.82] bg-white">
                <Image
                  src="/varun-portrait.jpg"
                  alt="Portrait of Varun Sharma"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale-[0.05] contrast-[1.02]"
                  priority
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 40%, transparent 92%), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 40%, transparent 92%), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskComposite: 'source-in',
                    maskComposite: 'intersect'
                  }}
                />
              </div>
              <div className="mt-8 border border-black px-[16px] py-[10px] text-[11px] md:text-[12px] font-medium font-mono uppercase tracking-[0.12em] leading-none whitespace-nowrap">
                A Picture of Me
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/5" />
    </section>
  );

};

export default FounderQuote;
