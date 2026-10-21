import { Info } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function VideoTour() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="tour" className="section-py bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-mint-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-ocean-100/50 rounded-full blur-3xl -z-10" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-700 text-brand-500 uppercase tracking-wider mb-3">
            <span className="w-8 h-1 bg-brand-400 rounded-full" />
            Virtual Tour
            <span className="w-8 h-1 bg-brand-400 rounded-full" />
          </span>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-slate-800 leading-tight">
            A Glimpse into Kalai Kids
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Experience our vibrant campuses, interactive classrooms, and the joyful environment where learning comes alive.
          </p>
        </div>

        {/* Video Player */}
        <div ref={ref} className={`max-w-4xl mx-auto relative reveal ${visible ? 'visible' : ''}`}>
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white bg-slate-900 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/O-L2H7Q5wO8?autoplay=0&controls=1&rel=0&showinfo=0&modestbranding=1"
              title="Kalai Kids Preschool Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-6 inline-flex items-start sm:items-center gap-3 p-4 bg-brand-50 border border-brand-100 rounded-2xl w-full">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
              <Info className="w-4 h-4 text-brand-600" />
            </div>
            <p className="text-sm text-slate-700 font-500">
              <span className="font-700 text-brand-700">Campus Note:</span> Parents are warmly invited to visit either of our campuses in <strong>Velachery</strong> (Lakshmi Nagar) or <strong>Adambakkam</strong> (Ramkrishna Nagar) for a live walk-through and teacher interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
