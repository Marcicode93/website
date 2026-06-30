import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
