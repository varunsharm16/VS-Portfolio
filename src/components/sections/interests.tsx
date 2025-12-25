import React from 'react';

const Interests = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-10 max-w-[1440px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-black"></div>
              <span className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-foreground">
                Interests
              </span>
            </div>
          </div>
          <div className="md:w-3/4">
            <p className="text-[24px] md:text-[32px] font-light leading-snug tracking-tight text-foreground max-w-[900px]">
              I am interested in <span className="font-medium">genetics</span>, <span className="font-medium">oncology</span>, and <span className="font-medium">biotechnology</span> that combine <span className="font-medium">experimental biology</span>, <span className="font-medium">data-driven analysis</span>, and <span className="font-medium">engineering</span>. My current work centres on building <span className="font-medium">web</span>, <span className="font-medium">3D</span>, and <span className="font-medium">AI-enabled tools</span>, such as <span className="font-medium">molecular visualization</span>, <span className="font-medium">interactive design interfaces</span>, and <span className="font-medium">computer-vision</span> applications, that make complex systems easier to explore and reason about. I am drawn to projects that keep a <span className="font-medium">strong biological foundation</span> while still caring about <span className="font-medium">interpretability</span> and <span className="font-medium">sound methods</span>. I am especially interested in building <span className="font-medium">reliable tools and workflows</span> that translate <span className="font-medium">data into insight</span> for real <span className="font-medium">research</span> and <span className="font-medium">applied biomedical settings</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
