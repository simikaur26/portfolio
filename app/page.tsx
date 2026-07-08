import HomeIntro from "@/components/HomeIntro";
import WorkSection from "@/components/WorkSection";
import IndustryScroll from "@/components/IndustryScroll";
import HorizontalTimeline from "@/components/HorizontalTimeline";
import AboutStrip from "@/components/AboutStrip";

export default function Home() {
  return (
    <main>
      <HomeIntro />
      <WorkSection />
      <IndustryScroll />
      <HorizontalTimeline />
      <AboutStrip />
    </main>
  );
}
