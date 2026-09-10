import HeroCarousel from "@/components/home/HeroCarousel";
import LoveTheme from "@/components/home/NexusTheme";
import StatsSection from "@/components/home/StatsSection";
import AboutPreview from "@/components/home/AboutPreview";
import ConferenceTeaser from "@/components/home/ConferenceTeaser";
import RotaryBanner from "@/components/home/RotaryBanner";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <RotaryBanner />
      <LoveTheme />
      <StatsSection />
      <AboutPreview />
      <ConferenceTeaser />
    </>
  );
}
