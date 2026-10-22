import { Phone, Mail, MapPin, Clock, Heart, ArrowUp, Star, Navigation, ExternalLink } from 'lucide-react';
import { schoolInfo, navLinks, branches } from '@/data/content';

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
                                    alt="Kalai Kids — Velachery and Adambakkam"
                                    className="h-14 sm:h-16 w-auto max-w-[260px] sm:max-w-[300px] object-contain"
                                />
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed mb-5 font-500">
                            Welcome to Kalai Kids, a safe, caring, and joyful learning environment where
                            children learn, play, and grow with confidence across our Velachery and Adambakkam campuses.
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-700 text-amber-300 border border-white/10">
                                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                                <span>5.0 Star Rating (45+ Reviews)</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/20 text-xs font-700 text-brand-300 border border-brand-500/30">
                                <span>2 Campuses in Chennai</span>
                            </div>
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

                    {/* Programs & Offerings (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-800 text-white text-base mb-4 tracking-tight">
                            Programs & Courses
                        </h4>
                        <div className="space-y-3.5 text-xs text-slate-400">
                            <div>
                                <span className="font-800 text-brand-300 text-[11px] uppercase tracking-wider block mb-1">
                                    Preschool Age Groups
                                </span>
                                <ul className="space-y-1 text-slate-300">
                                    <li>• Play Group (2 – 3 yrs)</li>
                                    <li>• Pre KG (3 – 4 yrs)</li>
                                    <li>• Junior KG (4 – 5 yrs)</li>
                                    <li>• Senior KG (5 – 6 yrs)</li>
                                    <li>• Extended Daycare (Till 7:30 PM)</li>
                                </ul>
                            </div>
                            <div>
                                <span className="font-800 text-amber-300 text-[11px] uppercase tracking-wider block mb-1">
                                    After School Classes
                                </span>
                                <p className="text-slate-300 leading-relaxed text-[11px]">
                                    Tuition · Hindi · Phonics · Abacus · Vedic Math · Handwriting · Drawing · Classical Dance · Carnatic Music
                                </p>
                            </div>
                            <div>
                                <span className="font-800 text-rose-300 text-[11px] uppercase tracking-wider block mb-1">
                                    Special Course (For Ladies)
                                </span>
                                <p className="text-slate-300 leading-relaxed text-[11px]">
                                    Montessori Teacher Training (Flexible Batches)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2 Campuses & Contact (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-800 text-white text-base mb-4 tracking-tight">
                            Our 2 Chennai Campuses
                        </h4>

                        <div className="space-y-3.5 text-xs sm:text-sm">
                            {/* Branch 1 */}
                            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <span className="font-800 text-brand-300 text-xs uppercase tracking-wider">
                                        Campus 1 · Velachery
                                    </span>
                                    <a
                                        href="https://maps.app.goo.gl/5ekzVdWxFbyvLuLv7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 font-700"
                                    >
                                        <Navigation className="w-3 h-3" />
                                        <span>Map Link</span>
                                    </a>
                                </div>
                                <p className="text-slate-300 text-xs leading-relaxed">
                                    No. 11, Lakshmi Nagar 2nd Main Road, Velachery, Chennai 600042
                                </p>
                            </div>

                            {/* Branch 2 */}
                            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <span className="font-800 text-brand-300 text-xs uppercase tracking-wider">
                                        Campus 2 · Adambakkam
                                    </span>
                                    <a
                                        href="https://maps.app.goo.gl/iW7uWzVgLfrknykf9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 font-700"
                                    >
                                        <Navigation className="w-3 h-3" />
                                        <span>Map Link</span>
                                    </a>
                                </div>
                                <p className="text-slate-300 text-xs leading-relaxed">
                                    No. 74, Ramkrishna Nagar, 1st Main Rd, Adambakkam, Chennai 600088
                                </p>
                            </div>

                            {/* Working Hours & Phone */}
                            <div className="pt-2 flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-slate-300 text-xs">
                                    <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                                    <span>Mon – Sat: 8:30 AM – 7:30 PM (Sunday Closed)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                                    <a
                                        href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                                        className="text-white hover:text-brand-400 font-800 text-sm transition-colors"
                                    >
                                        {schoolInfo.phone}
                                    </a>
                                    <span className="text-xs text-slate-500">| Landline: {schoolInfo.altPhone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 font-500">
                        © {new Date().getFullYear()} Kalai Kids. Made with
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                        for little learners in Velachery & Adambakkam, Chennai
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
