import PressGallery from "@/components/PressGallery";
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
      <PressGallery />
      <MusicSection />
      <AboutPressBook />
      <Footer />
    
      {/* Store Links */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center">Store</h2>
        <p className="mt-3 text-center text-white/70">
          Buy KP singles and shop merch.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href="/singles" className="rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold">Singles</h3>
            <p className="mt-2 text-sm text-white/70">Buy & download KP singles with a secure link.</p>
            <div className="mt-5 inline-flex rounded-xl bg-pink-500 px-5 py-2 font-semibold">Shop Singles</div>
          </a>
          <a href="/merch" className="rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold">Merch</h3>
            <p className="mt-2 text-sm text-white/70">T-shirts, hats, bundles and more.</p>
            <div className="mt-5 inline-flex rounded-xl bg-pink-500 px-5 py-2 font-semibold">Shop Merch</div>
          </a>
        </div>
      </section>

</main>
  );
}
