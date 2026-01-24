import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MusicSection } from "@/components/MusicSection";
import { AboutPressBook } from "@/components/AboutPressBook";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <MouseGlow />
      </div>
      <Navbar />
      <Hero />
      <MusicSection />
      <AboutPressBook />
      <Footer />
    </main>
  );
}
