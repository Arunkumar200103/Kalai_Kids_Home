import { Phone, Mail, MapPin, Clock, Heart, ArrowUp, Star } from 'lucide-react';
import { schoolInfo, navLinks, schoolHours } from '@/data/content';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-amber-400 to-rose-400" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & About Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <div className="bg-white rounded-2xl p-2.5 sm:p-3 inline-block shadow-md">
                <img
                  src="/kalai_logo_clean.png"
                  alt="Kalai Kids Home Montessori School Velachery"
                  className="h-10 sm:h-12 w-auto max-w-[220px] sm:max-w-[260px] object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-5 font-500">
              Welcome to our Kids Preschool, a safe, caring, and joyful learning environment where
              children learn, play, and grow with confidence in Lakshmi Nagar, Velachery.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-700 text-amber-300 border border-white/10">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>5.0 Star Rating (37 Reviews)</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-800 text-white text-base mb-4 tracking-tight">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-800 text-white text-base mb-4 tracking-tight">
              Programs Offered
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>• Playgroup (1.5 – 2.5 yrs)</li>
              <li>• Pre-KG / Nursery (2.5 – 3.5 yrs)</li>
              <li>• Junior KG / LKG (3.5 – 4.5 yrs)</li>
              <li>• Senior KG / UKG (4.5 – 5.5 yrs)</li>
              <li>• Extended Daycare (Till 7:30 PM)</li>
              <li>• Basic Academics & Storytelling</li>
              <li>• Art, Craft & Action Rhymes</li>
            </ul>
          </div>

          {/* Contact & Hours Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-800 text-white text-base mb-4 tracking-tight">
              Contact & Hours
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-1" />
                <span className="leading-snug">{schoolInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Mon – Sat: 8:30 AM – 7:30 PM</span>
              </li>
              <li>
                <a
                  href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 text-white hover:text-brand-400 font-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  {schoolInfo.phone}
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-500 pl-6 block">
                  Landline: {schoolInfo.altPhone}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 font-500">
            © {new Date().getFullYear()} Kalai Kids Velachery. Made with
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            for little learners in Velachery, Chennai
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-700 text-slate-300 hover:text-brand-400 transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
