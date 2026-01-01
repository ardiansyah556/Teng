import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandVision from "@/components/BrandVision";
import SocialMatrix from "@/components/SocialMatrix";
import FairLaunch from "@/components/FairLaunch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Brand Vision Section */}
        <BrandVision />

        {/* Social Matrix Section */}
        <SocialMatrix />

        {/* Fair Launch Section */}
        <FairLaunch />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
