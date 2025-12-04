import Hero from "./components/herosection/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Credentials from "./components/credentials/Credentials";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/faq/FAQ";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Credentials />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
