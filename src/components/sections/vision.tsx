import React from 'react';

const Vision = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F8F8]">
      <div className="container mx-auto px-10 max-w-[1440px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-black"></div>
              <span className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-foreground">
                Vision
              </span>
            </div>
          </div>
          <div className="md:w-3/4">
            <p className="text-[24px] md:text-[32px] font-light leading-snug tracking-tight text-foreground max-w-[900px]">
              I want to work alongside <span className="font-medium">innovative</span>, <span className="font-medium">bold</span>, and <span className="font-medium">highly driven research labs</span>, <span className="font-medium">biotech teams</span>, and <span className="font-medium">founders</span> who are building the <span className="font-medium">next generation of tools for understanding and treating disease</span>. My goal is to contribute at the intersection of <span className="font-medium">rigorous biology</span>, careful <span className="font-medium">computation</span>, and <span className="font-medium">practical engineering</span>, helping teams <span className="font-medium">design systems that scientists and clinicians can trust and use effectively</span>. More broadly, my mission is to <span className="font-medium">advance science and technology</span> in ways that <span className="font-medium">empower individuals</span> by giving them better tools, <span className="font-medium">clearer insight</span>, and <span className="font-medium">greater agency</span> in high-stakes settings. Over time, I hope to help <span className="font-medium">build and collaborate with teams</span> that translate <span className="font-medium">strong research and engineering</span> into practical platforms that move ideas <span className="font-medium">from the lab into the real world faster and more responsibly</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
