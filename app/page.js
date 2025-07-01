import Hero from "./components/herosection/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import FAQ from "./components/faq/FAQ";
import ContactForm from "./components/contact/ContactForm";

export default function HomePage() {
  return (
    <main className="space-y-16">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <ContactForm />
    </main>
  );
}
