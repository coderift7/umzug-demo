import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import ScrollVideo from "@/components/ScrollVideo";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <ScrollVideo />
        <Services />
        <About />
        <Testimonials />
        <ServiceArea />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
