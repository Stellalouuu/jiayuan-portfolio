import { AboutSection } from "@/components/portfolio/AboutSection";
import { EngineeringSection } from "@/components/portfolio/EngineeringSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { ProductWork } from "@/components/portfolio/ProductWork";

export default function Home() {
  return (
    <div id="top">
      <PortfolioNav />
      <main>
        <HeroSection />
        <ProductWork />
        <EngineeringSection />
        <AboutSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}
