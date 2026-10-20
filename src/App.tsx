import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Hours from '@/components/Hours';
import Programs from '@/components/Programs';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Hours />
        <Programs />
        <Features />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
