import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhatsAppCTA />
      <Portfolio />
      <Technologies />
      <Testimonial />
      <Partners />
      <AboutMe />
      <ContactForm />
      <Footer />
    </main>
  );
}
