import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Interests from "@/components/sections/interests";
import Vision from "@/components/sections/vision";
import FounderQuote from "@/components/sections/founder-quote";
import LatestNewsGrid from "@/components/sections/latest-news-grid";
import FooterView from "@/components/sections/footer-v2";

export const metadata: Metadata = {
  title: "Varun Sharma Portfolio",
  description: "Personal portfolio of Varun Sharma, a biochemistry student and developer building at the intersection of AI and life sciences. Explore projects on intelligent systems and biology.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Introduction />
      <section id="about-me" className="scroll-mt-[72px]">
        <Interests />
        <Vision />
      </section>
      <LatestNewsGrid />
      <FounderQuote />
      <FooterView />
    </main>
  );
}
