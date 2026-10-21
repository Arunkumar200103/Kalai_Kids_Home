import { useEffect, useState } from 'react';
import { Menu, X, Phone, Clock, Star, MapPin, Building2 } from 'lucide-react';
import { navLinks, schoolInfo, branches } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Check school opening status: Mon-Sat 8:30 AM to 7:30 PM
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const hour = now.getHours();
    const min = now.getMinutes();
    const currentDec = hour + min / 60;
    
    // Open if Mon-Sat (1 to 6) and between 8.5 (8:30) and 19.5 (19:30)
    const open = day !== 0 && currentDec >= 8.5 && currentDec < 19.5;
    setIsOpenNow(open);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 py-2 sm:py-2.5 border-b border-brand-100/50'
          : 'bg-white/90 backdrop-blur-sm py-2.5 sm:py-3 border-b border-slate-100'
      }`}
    >
      {/* Top Professional Info Bar */}
      <div className="section-container pb-2 mb-2 border-b border-slate-100/80">
        {/* Desktop View (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-between gap-3 text-xs">
          {/* Left: Operating Hours with glowing indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-700 border border-emerald-200/80 shadow-xs">
            <span className="relative flex h-2 w-2">
              {isOpenNow && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  isOpenNow ? 'bg-emerald-500' : 'bg-slate-400'
                }`}
              />
            </span>
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {isOpenNow ? 'Open Now' : 'Closed'} · Mon–Sat 8:30 AM – 7:30 PM
            </span>
          </div>

          {/* Middle: 2 Branches Badge with Logo Icon */}
          <button
            type="button"
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 hover:bg-brand-100 text-brand-800 font-700 border border-brand-200/80 shadow-xs transition-colors"
          >
            <img src="/logo-icon.png" alt="Kalai Kids Home" className="w-4 h-4 object-contain rounded-sm" />
            <span>2 Campuses: Velachery & Adambakkam</span>
          </button>

          {/* Right: Rating badge & Direct Call */}
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-900 font-700 border border-amber-200/80 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 flex-shrink-0" />
              <span>5.0 Rated (45+ Reviews)</span>
            </div>

            <a
              href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-700 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white" />
              <span>Call: {schoolInfo.phone}</span>
            </a>
          </div>
        </div>

        {/* Tablet View (640px to 1023px) */}
        <div className="hidden sm:flex lg:hidden items-center justify-between text-xs gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-700 border border-emerald-200">
            <span
              className={`w-2 h-2 rounded-full ${
                isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
              }`}
            />
            <span>Mon–Sat 8:30 AM – 7:30 PM</span>
          </div>

          <button
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-700 text-xs border border-slate-200 transition-colors"
          >
            <img src="/logo-icon.png" alt="Kalai Kids Home" className="w-3.5 h-3.5 object-contain rounded-sm" />
            <span>Velachery & Adambakkam</span>
          </button>

          <a
            href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white font-700 text-xs shadow-xs"
          >
            <Phone className="w-3 h-3 fill-white" />
            <span>{schoolInfo.phone}</span>
          </a>
        </div>

        {/* Mobile View (< 640px): Clean, single-line, perfectly balanced */}
        <div className="flex sm:hidden items-center justify-between gap-2">
          {/* Status badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-700 border border-emerald-200/80 text-[11px] shadow-2xs">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
              }`}
            />
            <span>{isOpenNow ? 'Open Now' : 'Closed'}</span>
            <span className="text-emerald-500/60 font-600">·</span>
            <span className="text-emerald-700">8:30 AM – 7:30 PM</span>
          </div>

          {/* 2 Campuses Badge with Logo Icon */}
          <button
            type="button"
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-700 border border-slate-200/80 text-[11px] transition-colors shadow-2xs flex-shrink-0"
          >
            <img src="/logo-icon.png" alt="Kalai Kids Home" className="w-3.5 h-3.5 object-contain rounded-sm" />
            <span>2 Campuses</span>
          </button>
        </div>
      </div>

      <nav className="section-container flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group text-left py-0.5"
          aria-label="Kalai Kids Home"
        >
          <img
            src="/kalai_logo_clean.png"
            alt="Kalai Kids Home — Velachery and Adambakkam"
            className="h-9 sm:h-11 md:h-12 w-auto max-w-[170px] sm:max-w-[250px] md:max-w-[300px] object-contain group-hover:scale-[1.02] transition-transform duration-300 drop-shadow-xs"
          />
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 rounded-full text-sm font-600 text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary text-sm shadow-md shadow-brand-500/25 px-5 py-2.5 font-700 hover:scale-105 transition-transform"
          >
            Admissions Open
          </button>
        </div>

        {/* Mobile & Tablet Actions (Unified baseline alignment) */}
        <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
          <a
            href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-700 text-xs border border-brand-200/80 transition-colors shadow-2xs"
            aria-label={`Call ${schoolInfo.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
            <span className="font-800">Call</span>
          </a>

          <button
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center justify-center h-9 px-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-800 text-xs shadow-sm shadow-brand-500/20 transition-all active:scale-95"
          >
            Apply
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center border border-slate-200/80 bg-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden section-container mt-2">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/15 p-5 border border-slate-100 animate-fade-in-up">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <img
                src="/kalai_logo_clean.png"
                alt="Kalai Kids Home"
                className="h-8 w-auto object-contain"
              />
              <span className="inline-flex items-center gap-1 text-xs font-700 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                5.0 (45+ Reviews)
              </span>
            </div>

            {/* 2 Branches Notice in Mobile Menu */}
            <div className="p-3 mb-3 bg-brand-50/70 rounded-2xl border border-brand-100 text-xs">
              <p className="font-800 text-brand-900 mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-brand-600" />
                <span>2 Campuses in Chennai</span>
              </p>
              <div className="flex flex-col gap-1 text-slate-600 font-600">
                <span>• Branch 1: Lakshmi Nagar 2nd Main Rd, Velachery</span>
                <span>• Branch 2: Ramkrishna Nagar 1st Main Rd, Adambakkam</span>
              </div>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-2.5 rounded-2xl text-sm font-600 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-100 text-sm font-700 text-slate-800"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                Call {schoolInfo.phone}
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-sm w-full py-3 font-700"
              >
                Apply for Admission 2026–27
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
