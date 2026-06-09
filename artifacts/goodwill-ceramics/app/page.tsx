import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Collections from "@/components/Collections";
import Gallery from "@/components/Gallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Collections />
      <Gallery />
      <QuoteForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
