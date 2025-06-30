import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <main className="space-y-16">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  );
}
