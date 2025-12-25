import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projectItems = [
{
  title: "Nex-mol (a PyMOL AI-assistant) (In Progress)",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/JPEG-image-4EC7-B7C4-DA-0-1766544502208.jpeg?width=8000&height=8000&resize=contain",
  link: "https://github.com/varunsharm16/pymol_ai_assistant"
},
{
  title: "Flick AI: The AI Basketball Coach (In Progress)",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/flick-logo-1766543796072.png?width=8000&height=8000&resize=contain",
  link: "https://github.com/varunsharm16/Flick-"
},
{
  title: "Homer: Supercharge Interior Design (In Progress)",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/JPEG-image-49A3-A1C2-20-0-1766543876043.jpeg?width=8000&height=8000&resize=contain",
  link: "https://github.com/varunsharm16/Homer"
}];


export default function Introduction() {
  return (
    <section id="experience" className="py-[120px] md:py-[160px] bg-background scroll-mt-[72px]">
      <div className="container px-10 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="space-y-6 text-[#4D4D4D] font-sans text-xl leading-[1.4] tracking-[-0.01em]">
              <p className="whitespace-pre-line">
                I build tools where biochemistry, AI, and product thinking meet. As a 4th-year Biochemistry student and self-taught developer, I care less about "hello world" demos and more about real systems people can use, like 3D molecular viewers, AI-assisted design tools, and agents that make technical work feel lighter.
              </p>
              <p className="whitespace-pre-line !whitespace-pre-line">Most of what I work on starts from a simple question: what would actually help a researcher, founder, or student move faster without cutting corners? That's led me to projects like a next-gen molecular graphics tool, an AI-powered interior design app, and a basketball shot analysis app; all built with modern tech stacks.

              </p>
              <p className="whitespace-pre-line">
                Right now I'm focused on sharpening my fundamentals in 3D graphics, computer vision, and product development, while learning how great teams ship things that last. I enjoy collaborating with people who are curious, opinionated about their craft, and excited to build tools that make hard work feel a little more playful!
              </p>
            </div>
          </div>

          {/* Right Column: Selected Work */}
          <div className="lg:col-span-5 xl:col-start-8 xl:col-span-5">
            <div className="flex flex-col h-full">
              {/* Feed Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-black" />
                  <span className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-black whitespace-pre-line">CURRENT PROJECTS</span>
                </div>
              </div>

              {/* Work Cards List */}
              <div className="space-y-4">
                {projectItems.map((item, index) =>
                <Link
                  key={index}
                  href={item.link}
                  className="group flex items-center justify-between p-5 md:p-6 rounded-[20px] border border-black/5 hover:border-black/20 transition-all bg-white">

                    <div className="pr-6">
                      <p className="text-[16px] md:text-[18px] font-normal leading-[1.3] text-black line-clamp-2 whitespace-pre-line">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex-shrink-0 relative w-[100px] h-[64px] overflow-hidden rounded-lg">
                      <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="100px" />

                    </div>
                  </Link>
                )}
                
                <div className="pt-4 flex justify-center">
                  <a
                    href="https://github.com/varunsharm16"
                    target="_blank"
                    className="group flex items-center overflow-hidden rounded-[0.5rem] border border-black text-[13px] font-medium transition-all hover:bg-black hover:text-white">

                    <span className="font-mono uppercase tracking-[0.1em] px-6 py-3.5">
                      GitHub Repository
                    </span>
                    <span className="flex items-center justify-center border-l border-black px-4 py-3.5 transition-colors group-hover:border-white/20">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>);

}