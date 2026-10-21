import { Star, MapPin, ArrowRight, Heart, Sparkles, PhoneCall, Palette, BookOpen } from 'lucide-react';
import { schoolInfo, heroImages, stats } from '@/data/content';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 sm:pt-36 pb-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/30 via-white to-slate-50/50">
      {/* Refined ambient background glowing orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[55%] h-[55%] bg-gradient-to-br from-amber-200/30 via-brand-200/20 to-rose-200/20 blur-[130px] rounded-full animate-spin-slow pointer-events-none" />
      <div
        className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-bl from-ocean-200/20 via-mint-200/20 to-amber-100/20 blur-[120px] rounded-full animate-spin-slow pointer-events-none"
        style={{ animationDirection: 'reverse' }}
      />

      <div className="section-container grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10 w-full">
        {/* Left content: 7 cols */}
        <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-in-up">
          {/* Premium Glass Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-200/70 shadow-xs w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-700 text-slate-700 uppercase tracking-wider">
              Kalai Kids · 2 Campuses
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-xs font-700 text-brand-600">Velachery & Adambakkam</span>
          </div>

          {/* Heading with elegant typography */}
          <div>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight">
              <span className="sr-only">Kalai Kids Home — Preschool & Daycare in Velachery & Adambakkam, Chennai. </span>
              Where Children <span className="gradient-text">Learn, Play & Grow</span> with Confidence
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-500 max-w-2xl">
            A safe, caring, and joyful early learning home in <strong className="text-slate-800 font-700">Velachery</strong> and <strong className="text-slate-800 font-700">Adambakkam</strong>, Chennai.
            Through fun activities, storytelling, creative arts, and individual care from loving mentors,
            we build a strong, happy foundation for your child's future.
          </p>

          {/* Clean Vector Feature Highlights */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-xs font-600 shadow-xs">
              <Palette className="w-3.5 h-3.5 text-brand-500" />
              <span>Creative Arts & Crafts</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-xs font-600 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-ocean-600" />
              <span>Storytelling & Speech Fluency</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-xs font-600 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Foundational Academics</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#contact"
              className="btn-primary group px-7 py-3.5 text-base shadow-xl shadow-brand-500/25 w-full sm:w-auto font-700"
            >
              <span>Enroll Your Child</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
            
            <a
              href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full text-base font-700 text-slate-800 bg-white border border-slate-200 hover:border-brand-300 hover:bg-brand-50/50 shadow-sm transition-all w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4 text-brand-600" />
              <span>Call Admissions</span>
            </a>

            <a
              href="#about"
              className="inline-flex justify-center items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-700 text-slate-600 hover:text-brand-600 transition-colors"
            >
              <span>Explore Programs ↓</span>
            </a>
          </div>

          {/* Location and Rating Meta Bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-700 text-slate-800">
                5.0 Rating <span className="text-slate-500 font-500">(45+ Reviews · 2 Branches)</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-600">
              <a
                href="https://maps.app.goo.gl/5ekzVdWxFbyvLuLv7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                <span>Velachery (Lakshmi Nagar)</span>
              </a>
              <a
                href="https://maps.app.goo.gl/iW7uWzVgLfrknykf9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                <span>Adambakkam (Ramkrishna Nagar)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right image composition: 5 cols */}
        <div className="lg:col-span-5 relative w-full animate-fade-in mt-6 lg:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] mx-auto h-[380px] sm:h-[460px] lg:h-[520px]">
            {/* Main Primary Image — Real Kalai Kids Annual Day Photo */}
            <div className="absolute inset-0 right-6 bottom-8 sm:right-10 sm:bottom-10 blob-shape overflow-hidden glass-card p-2 animate-float z-10 shadow-2xl shadow-brand-900/15">
              <div className="w-full h-full blob-shape overflow-hidden relative">
                <img
                  src={heroImages.main}
                  alt="Kalai Kids Home Montessori School 9th Annual Day Celebration"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                {/* Authentic Celebration Badge */}
                <div className="absolute bottom-3 left-4 right-4 z-20 hidden sm:block">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-700 border border-white/20 shadow-md">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Kalai Kids 9th Annual Day</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping secondary image: Real Kindergarten Graduation Day */}
            <div
              className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 w-36 sm:w-48 lg:w-56 h-36 sm:h-48 lg:h-56 blob-shape-2 overflow-hidden glass-panel p-2 shadow-2xl animate-float z-20"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="w-full h-full blob-shape-2 overflow-hidden relative">
                <img
                  src={heroImages.secondary}
                  alt="Kalai Kids Home Kindergarten Convocation & Graduation Day"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 hidden sm:block">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-700 border border-white/20">
                    Graduation Day
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping top-right image: Real Cultural Dance Performance */}
            <div
              className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-28 sm:w-36 lg:w-40 h-28 sm:h-36 lg:h-40 rounded-3xl rotate-6 overflow-hidden glass-panel p-1.5 shadow-xl animate-float z-0"
              style={{ animationDelay: '2.4s' }}
            >
              <img
                src={heroImages.tertiary}
                alt="Kalai Kids Home Cultural Dance Performance on Stage"
                className="w-full h-full object-cover rounded-[1.25rem]"
              />
            </div>

            {/* Floating Loving Mentors Badge */}
            <div
              className="absolute top-1/3 -right-4 sm:-right-8 glass-panel rounded-2xl p-3 sm:p-4 flex items-center gap-3 animate-float z-30 shadow-xl"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-500/30">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-800 text-slate-900 leading-tight">Loving Mentors</p>
                <p className="text-[10px] sm:text-xs font-700 text-brand-600">Uma Ma’am & Team</p>
              </div>
            </div>

            {/* Floating Speech & Confidence Badge */}
            <div
              className="absolute -top-4 left-6 glass-panel rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 animate-float z-30 shadow-lg"
              style={{ animationDelay: '1.8s' }}
            >
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
              </div>
              <div>
                <p className="text-xs font-800 text-slate-800">Fluent Speech</p>
                <p className="text-[10px] font-700 text-slate-500">Tamil & English</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elevated Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 glass-panel border-t border-white/70 z-20">
        <div className="section-container py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 divide-x divide-slate-200/60">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-2 sm:px-4">
                <p className="font-display font-800 text-2xl sm:text-3xl text-slate-900 mb-0.5">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-800 font-700 tracking-tight leading-snug">
                  {stat.label}
                </p>
                <p className="text-[11px] text-brand-600 font-600 mt-0.5 hidden sm:block">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
