"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const DotTag = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-2 mb-6" aria-label={label}>
      <div className="w-1.5 h-1.5 bg-black" />
      <div className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-black">
        {label}
      </div>
    </div>
  );
};

const ActionButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      className="group inline-flex items-center border border-black rounded-full overflow-hidden hover:bg-black transition-colors duration-300"
    >
      <div className="px-6 py-2.5 border-r border-black group-hover:border-white transition-colors duration-300">
        <span className="font-mono text-[12px] font-medium uppercase tracking-[0.05em] text-black group-hover:text-white transition-colors duration-300">
          {label}
        </span>
      </div>
      <div className="px-3 py-2.5 flex items-center justify-center">
        <ArrowRight 
          size={14} 
          className="text-black group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
        />
      </div>
    </a>
  );
};

interface CategoryCardProps {
  tag: string;
  title: string;
  buttonLabel: string;
  href: string;
}

const CategoryCard = ({ tag, title, buttonLabel, href }: CategoryCardProps) => {
  return (
    <div className="flex flex-col justify-between p-10 border border-black rounded-[24px] bg-white h-full min-h-[360px]">
      <div className="cta-card_top">
        <DotTag label={tag} />
        <div className="cta-card_title">
          <h3 className="text-[32px] md:text-[38px] font-light leading-[1.1] tracking-[0.01em] text-black text-balance">
            {title}
          </h3>
        </div>
      </div>
      <div className="mt-12">
        <ActionButton href={href} label={buttonLabel} />
      </div>
    </div>
  );
};

const CategoryCards = () => {
  const cards = [
    {
      tag: "CORE EXPERTISE",
      title: "Synthesizing Molecular Biochemistry with Full-Stack Engineering to build high-performance systems.",
      buttonLabel: "View Expertise",
      href: "#expertise",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-10 max-w-[1440px]">
        <div className="grid grid-cols-1 gap-5">
          {cards.map((card, index) => (
            <CategoryCard
              key={index}
              tag={card.tag}
              title={card.title}
              buttonLabel={card.buttonLabel}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
