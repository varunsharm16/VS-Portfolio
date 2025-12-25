"use client";

import { useState } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SHARED_TRANSITION = {
  duration: 0.8,
  ease: [0.23, 1, 0.32, 1] as any
};

interface NewsCardProps {
  title: string;
  imageSrc: string;
  category: string;
  fileUrl?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const NewsCard = ({ title, imageSrc, category, fileUrl, isSelected, onClick }: NewsCardProps) => {
  return (
    <motion.div
      layout
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className="group flex flex-col gap-4 w-full cursor-pointer py-6">

      <motion.div
        layout
        className={`relative aspect-[16/9] overflow-hidden rounded-[1rem] bg-[#f5f5f5] ${isSelected ? 'ring-2 ring-black ring-offset-4' : ''}`}>

          <NextImage
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw" />

            <motion.div layout="position" className="absolute bottom-3 left-3 z-10">
              {fileUrl ? (
                <a 
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.parent !== window) {
                      e.preventDefault();
                      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: fileUrl } }, "*");
                    }
                  }}
                  className="flex px-2 py-0.5 items-center justify-center rounded-md border border-black/10 bg-[#E0F2FE] hover:bg-blue-200 transition-colors cursor-pointer">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-black !whitespace-pre-line">
                    {category} ↗
                  </span>
                </a>
              ) : (
                <div className="flex px-2 py-0.5 items-center justify-center rounded-md border border-black/10 bg-[#E0F2FE]">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-black !whitespace-pre-line">
                    {category}
                  </span>
                </div>
              )}
            </motion.div>
      </motion.div>
      <div className="flex flex-col">
        <motion.h3
          layout="position"
          className="text-[20px] font-medium leading-[1.2] tracking-tight text-current line-clamp-2 !whitespace-pre-line">

          {title}
        </motion.h3>
        <motion.div layout="position" className="mt-4 flex items-center gap-2 group/btn">
          <span className="font-mono text-[10px] uppercase tracking-wider font-medium">
            {isSelected ? 'Close Details' : 'View Details'}
          </span>
          <div className={`w-6 h-[1px] bg-current transition-all duration-300 ${isSelected ? 'w-12' : 'group-hover/btn:w-10'}`} />
        </motion.div>
      </div>
    </motion.div>);

};

const ProjectDetail = ({ project }: {project: any;}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={SHARED_TRANSITION}
      className="w-full border-t border-current/10 pt-12 mt-12 overflow-hidden">

      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div layout className="lg:w-1/4">
          {project.fileUrl ? (
            <a 
              href={project.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f5f5f5] group transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                // Ensure the link opens in the parent window if in an iframe
                if (window.parent !== window) {
                  e.preventDefault();
                  window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: project.fileUrl } }, "*");
                }
              }}
            >
                <NextImage
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <div className="flex flex-col items-center gap-2">
                        <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em] font-bold">
                          View {
                            project.fileUrl.includes('github.com') ? 'GitHub Repo' :
                            project.category.toLowerCase().includes('report') ? 'Lab Report' : 
                            project.category.toLowerCase().includes('paper') ? 'Term Paper' : 
                            project.category.toLowerCase().includes('review') ? 'Literature Review' : 
                            project.category.toLowerCase().includes('project') ? 'Project Report' : 
                            'Project File'
                          }
                        </span>
                    <div className="h-[1px] w-8 bg-white/50" />
                  </div>
                </div>
            </a>
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f5f5f5] group transition-all duration-300">
                <NextImage
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] pointer-events-none">
                  <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em] font-bold">
                    File Coming Soon
                  </span>
                </div>
            </div>
          )}
        </motion.div>
        
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
          { label: "What", items: project.details.what },
          { label: "How", items: project.details.how },
          { label: "Result", items: project.details.result }].
          map((col) =>
          <motion.div layout="position" key={col.label} className="flex flex-col gap-4">
              <h4 className="font-mono text-[12px] uppercase tracking-widest opacity-50">
                {col.label}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.items.map((item: string, i: number) =>
              <li key={i} className="flex gap-3 text-[14px] leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                    <span className="!whitespace-pre-line">{item}</span>
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>);

};

const LatestNewsGrid = () => {
  const [expandedCategory, setExpandedCategory] = useState<'academic' | 'personal' | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const handleCategoryClose = () => {
    setExpandedCategory(null);
    setSelectedProjectIndex(null);
  };

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
  };

  const academicProjects = [
  {
    title: "DNA Barcoding With 16S rRNA Lab",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-24-at-9.14.58-AM-1766592939967.png?width=8000&height=8000&resize=contain",
    fileUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/BIOC_301_Lab_Report_1_By__Varun_Sharma-1766598567129.pdf",
    category: "LAB REPORT",
    details: {
      what: ["full 16S rRNA DNA barcoding pipeline to identify an unknown environmental isolate.", "End‑to‑end workflow from culture to Sanger sequencing and database‑driven taxonomic ID."],
      how: ["Cultured environmental isolate, performed EtNa‑based genomic DNA extraction with silica‑column cleanup and quantitative UV QC.", "Amplified ~1.5 kb 16S rRNA locus (8F/1492A), validated by agarose gel electrophoresis, and sequenced with Sanger.", "Assembled and curated reads using Benchling/MAFFT, then queried NCBI rRNA/ITS with BLASTn for species‑level assignment."],
      result: ["Obtained 55.5 ng/µL high‑quality DNA meeting NAPS Sanger requirements.", "Achieved >99.9% identity, 0.0 E‑value match to Bacillus stercoris with a single, well‑characterized variable‑region indel.", "Demonstrated lab‑grade proficiency in microbial barcoding, QC, sequence curation, and database‑driven identification."]
    }
  },
    {
      title: "Structural and Functional Analysis of Hb Thionville",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-24-at-9.30.42-AM-1766594818622.png?width=8000&height=8000&resize=contain",
      fileUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Hb-Project-Final-By_-Varun-Sharma-1-1766599120287.pdf",
      category: "TERM PAPER",
    details: {
      what: ["Structural and functional analysis of the Hemoglobin Thionville variant compared to Hb A and Hb Bassett.", "Focus on how N‑terminal acetylation and sequence changes alter histidine–heme geometry and oxygen‑binding behavior."],
      how: [
      "Retrieved PDB structures for Hb A (3KMF), Hb Thionville (1BAB), and Hb Bassett (1R1Y) and visualized them in PyMOL.",
      "Measured proximal and distal histidine–Fe2+ distances and heme pocket geometry across variants.",
      "Interpreted structural differences in the context of known hemoglobinopathies and allosteric regulation."],

      result: [
      "Found shorter proximal His–Fe2+ bond in Thionville (2.2 Å) vs. Hb A (2.4 Å) and shorter distal His–Fe2+ distance (3.9 Å) vs. 4.3 Å, indicating a tighter, more constrained heme pocket.",
      "Linked these geometric changes and N-terminal acetylation to stabilization of the T-state and reduced oxygen affinity relative to Hb A.",
      "Demonstrated proficiency in protein visualization, structural measurement, and clinical interpretation of hemoglobin variants."]

    }
  },
  {
    title: "tRNA Import & aaRS Localization in Mitochondria",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-24-at-9.52.14-AM-1766596054531.png?width=8000&height=8000&resize=contain",
    fileUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/BIOL-200-Science-Communication-Summary-Paper-By_-Varun-Sharma-1-1766599253921.pdf",
    category: "LITERATURE REVIEW",
    details: {
      what: ["Summary-based literature review on tRNA import and aminoacyl-tRNA synthetase (aaRS) localization in plant mitochondria, focusing on Silene species.", "Examined how loss of mitochondrial tRNA genes is compensated by nuclear-encoded tRNA import and retargeting of aaRSs."],
      how: ["Synthesized findings from multiple primary papers on mt-tRNA loss, dual-targeted aaRSs, and transit peptides in angiosperms.", "Analyzed key figures (e.g., fluorescent colocalization of GlnRS transit peptides and mitochondria, localization-prediction heatmaps) to interpret changes in aaRS localization across species.", "Framed results in terms of translation regulation in a tripartite system (nucleus, plastid, mitochondrion) and evolutionary adaptation."],
      result: ["Clarified how nuclear-encoded tRNAs and dual-targeted aaRSs maintain mitochondrial protein synthesis despite extensive mt-tRNA gene loss.", "Highlighted evolutionary patterns in aaRS/tRNA origin and targeting with implications for crop bioengineering and stress-resilience design.", "Demonstrated skills in literature synthesis, figure-driven analysis, and scientific writing in mitochondrial genetics and evolutionary biology."]
    }
  },
      {
          title: "Predicting Player Demand With Time Series and KNN Regression",
          imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-24-at-10.29.43-AM-1766597403806.png?width=8000&height=8000&resize=contain",
          fileUrl: "https://github.com/varunsharm16/DSCI-100-Final-Project",
          category: "TERM PROJECT",
    details: {
      what: ["Team data science project to predict simultaneous player demand for an online game using time-series session data.", "Goal: estimate average concurrent players per hour to inform server capacity and licensing decisions."],
      how: [
      "Joined 1,535 session records with 196 player profiles, engineered features for hour-of-day and experience level, and performed EDA in R.",
      "Trained k-nearest neighbors regression models with scaled predictors, using 10-fold cross-validation to tune k over odd values from 1 to 9.",
      "Selected k=9 based on lowest cross-validated RMSE (2.62 players), then evaluated on a held-out test set."],

      result: [
      "Final model achieved test RMSE of 2.94 players and MAE of 2.31 players for hourly demand predictions.",
      "Identified peak activity window between 2:00–4:00 AM, with the highest predicted load at 3:00 AM (~4.6 concurrent players on average).",
      "Produced an interactive R Markdown report with recommendations for aligning server resources to predicted high-demand hours."]

    }
  }];


  const personalProjects = [
    {
      title: "Personal Portfolio: Varun Sharma",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766609069105.png?width=8000&height=8000&resize=contain",
      fileUrl: "https://github.com/varunsharm16/VS-Portfolio",
      category: "DEVELOPMENT",
      details: {
        what: ["High-performance portfolio built with Next.js 15.", "Interactive Project Archive with seamless category transitions.", "Typography-focused design optimized for professional branding."],
        how: ["Leveraged Framer Motion for fluid layout-projection animations.", "Architected with Tailwind CSS for a minimal design system.", "Integrated App Router & Server Components for near-instant loads."],
        result: ["99 Performance score with 0.8s LCP and 0ms Total Blocking Time.", "Perfect 0.0 CLS score ensuring visual stability.", "Validated SEO and Accessibility (89+) for a professional digital identity."]
      }
    },
    {
      title: "Homer: Supercharge Interior Design (In Progress)",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/JPEG-image-49A3-A1C2-20-0-1766543876043.jpeg?width=8000&height=8000&resize=contain",
      fileUrl: "https://github.com/varunsharm16/Homer",
      category: "SPATIAL AI",
      details: {
        what: ["AI-driven interior design platform for spatial visualization.", "Real-time furniture placement and material swap engine.", "Multimodal AI interface processing text commands, images, and floor plans through a unified pipeline."],
        how: ["Built with React Three Fiber—a declarative 3D engine enabling 60fps rendering with React's component model.", "Zustand store with selective subscriptions, reducing re-renders by isolating scene state from UI components.", "Memoized hooks (useMemo, useCallback) for O(1) surface selection lookups, avoiding full scene traversal.", "Edge runtime serverless functions on Vercel for sub-100ms cold starts on AI inference."],
        result: ["Developed interactive 3D viewport with click-to-select surfaces and orbit camera controls.", "Designed extensible Scene DSL schema supporting rooms, walls, openings, objects, and materials—architected for versioning.", "Integrated GPT-4o vision API for floor plan parsing, converting 2D images into structured 3D scene data."]
      }
    },
    {
      title: "Flick AI: The AI Basketball Coach (In Progress)",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/flick-logo-1766543796072.png?width=8000&height=8000&resize=contain",
      fileUrl: "https://github.com/varunsharm16/Flick-",
      category: "COMPUTER VISION",
      details: {
        what: ["AI-powered basketball coach providing real-time form analysis.", "Computer vision pipeline for shot tracking and mechanics feedback.", "Personalized training programs based on performance data."],
        how: ["Implemented MediaPipe for high-precision skeletal pose estimation.", "Engineered a custom computer vision model for ball trajectory analysis.", "Integrating performance tracking for personalized feedback."],
        result: ["Ongoing validation of shot detection in controlled environments.", "Refining form analysis accuracy through active beta user testing.", "Iterating on real-time feedback latency and logic systems."]
      }
    },
    {
      title: "Nex-mol (a PyMOL AI Assistant) (In Progress)",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/JPEG-image-4EC7-B7C4-DA-0-1766544502208.jpeg?width=8000&height=8000&resize=contain",
      fileUrl: "https://github.com/varunsharm16/pymol_ai_assistant",
      category: "MOLECULAR GRAPHICS",
      details: {
        what: ["AI-assistant for PyMOL reducing visualization workflow from 10 commands to 1 prompt.", "Handles all 20 standard amino acids with intelligent residue selection.", "Publication-quality 300 DPI export with a single command."],
        how: ["Three-tier async architecture: React → FastAPI → PyMOL with correlation-ID message tracking.", "Bidirectional WebSocket IPC with automatic reconnection and 8s ACK timeout.", "Constrained LLM output (temp=0.1) for deterministic function calling."],
        result: ["Successfully reduced typical visualization workflow to natural language prompts.", "Implementing a security-first design with external API key storage and localhost-only binding.", "Developing type-safe TypeScript frontend with Zustand state management."]
      }
    }
  ];


  const categories = [
  { id: 'academic', title: 'Academic Projects', projects: academicProjects, color: 'bg-black text-white' },
  { id: 'personal', title: 'Personal Projects', projects: personalProjects, color: 'bg-[#f5f5f5] text-black border border-black/5' }];


  return (
    <section id="projects" className="bg-background py-[120px] md:py-[160px] border-t border-black scroll-mt-[72px] overflow-hidden">
      <div className="container mx-auto px-10 max-w-[1440px]">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black"></div>
            <span className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-foreground">
              {expandedCategory ? `${expandedCategory} Projects` : "Project Archive"}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-6 min-h-[600px] w-full">
          <AnimatePresence>
            {expandedCategory && <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={handleCategoryClose}
              className={`absolute top-1/2 -translate-y-1/2 z-50 p-4 hover:scale-110 transition-transform duration-300 ${expandedCategory === 'academic' ? 'right-0' : 'left-0'}`}>

                {expandedCategory === 'academic' ?
              <ArrowLeft className="w-20 h-20 stroke-[0.5px] text-foreground" /> :

              <ArrowRight className="w-20 h-20 stroke-[0.5px] text-foreground" />
              }
              </motion.button>
            }
          </AnimatePresence>

          {categories.map((cat) => {
            const isExpanded = expandedCategory === cat.id;
            const isHidden = expandedCategory !== null && expandedCategory !== cat.id;

            return (
              <motion.div
                key={cat.id}
                layout
                transition={SHARED_TRANSITION}
                onClick={() => !isExpanded && setExpandedCategory(cat.id as any)}
                className={`relative overflow-hidden rounded-[2rem] cursor-pointer group flex flex-col p-12 ${cat.color} ${isExpanded ? 'cursor-default' : 'h-[400px] md:h-[600px]'}`}
                style={{
                  flex: isExpanded ? '1 1 calc(100% - 160px)' : isHidden ? '0 0 0px' : '1 1 50%',
                  opacity: isHidden ? 0 : 1,
                  pointerEvents: isHidden ? 'none' : 'auto'
                }}>

                <div className="flex flex-col h-full w-full">
                  <div className="flex justify-between items-start">
                    <motion.h2
                      layout="position"
                      transition={SHARED_TRANSITION}
                      className={`font-light tracking-tight leading-none ${isExpanded ? 'text-[48px] md:text-[80px] mb-12' : 'text-[32px] md:text-[48px]'}`}>

                      {cat.title}
                    </motion.h2>
                  </div>

                  <AnimatePresence>
                    {expandedCategory === null && <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="mt-auto flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:gap-6">

                        <span className="font-mono text-[12px] uppercase tracking-wider">Explore Archive</span>
                        <div className="flex-1 h-[1px] bg-current origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-1000" />
                      </motion.div>
                    }
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {isExpanded && <motion.div
                      key="expanded-content"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={SHARED_TRANSITION}
                      className="flex flex-col w-full">

                        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                          {cat.projects.map((project, idx) =>
                        <NewsCard
                          key={idx}
                          title={project.title}
                          imageSrc={project.imageSrc}
                          category={project.category}
                          fileUrl={project.fileUrl}
                          isSelected={selectedProjectIndex === idx}
                          onClick={() => handleProjectClick(idx)} />

                        )}
                        </motion.div>

                        <AnimatePresence mode="wait">
                          {selectedProjectIndex !== null && <ProjectDetail
                          key={`detail-${selectedProjectIndex}`}
                          project={cat.projects[selectedProjectIndex]} />

                        }
                        </AnimatePresence>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

};

export default LatestNewsGrid;
