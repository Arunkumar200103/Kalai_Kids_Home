import { useState } from 'react';
import {
  Baby,
  Palette,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Check,
  ArrowRight,
  Languages,
  Sparkles,
  Calculator,
  Brain,
  PenTool,
  Music,
  Award,
  Users,
  Clock,
  CheckCircle2,
  PhoneCall,
  Sparkle,
} from 'lucide-react';
import { programs, afterSchoolClasses, specialCourse, schoolInfo } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { WhatsAppIcon } from '@/components/FloatingWhatsApp';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby,
  Palette,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Languages,
  Sparkles,
  Calculator,
  Brain,
  PenTool,
  Music,
  Award,
  Users,
};

const colorMap: Record<
  string,
  { text: string; border: string; chip: string; icon: string; bgHover: string; dot: string }
> = {
  rose: {
    text: 'text-rose-600',
    border: 'hover:border-rose-300',
    chip: 'bg-rose-100 text-rose-700',
    icon: 'bg-rose-50 text-rose-600 border border-rose-200',
    bgHover: 'group-hover:bg-rose-50/40',
    dot: 'bg-rose-500',
  },
  brand: {
    text: 'text-brand-600',
    border: 'hover:border-brand-300',
    chip: 'bg-brand-100 text-brand-700',
    icon: 'bg-brand-50 text-brand-600 border border-brand-200',
    bgHover: 'group-hover:bg-brand-50/40',
    dot: 'bg-brand-500',
  },
  ocean: {
    text: 'text-ocean-600',
    border: 'hover:border-ocean-300',
    chip: 'bg-ocean-100 text-ocean-700',
    icon: 'bg-ocean-50 text-ocean-600 border border-ocean-200',
    bgHover: 'group-hover:bg-ocean-50/40',
    dot: 'bg-ocean-500',
  },
  mint: {
    text: 'text-mint-600',
    border: 'hover:border-mint-300',
    chip: 'bg-mint-100 text-mint-700',
    icon: 'bg-mint-50 text-mint-600 border border-mint-200',
    bgHover: 'group-hover:bg-mint-50/40',
    dot: 'bg-mint-500',
  },
  sunshine: {
    text: 'text-amber-600',
    border: 'hover:border-amber-300',
    chip: 'bg-amber-100 text-amber-800',
    icon: 'bg-amber-50 text-amber-600 border border-amber-200',
    bgHover: 'group-hover:bg-amber-50/40',
    dot: 'bg-amber-500',
  },
};

type TabType = 'all' | 'preschool' | 'afterschool' | 'special';

export default function Programs() {
  const { ref, visible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const showPreschool = activeTab === 'all' || activeTab === 'preschool';
  const showAfterSchool = activeTab === 'all' || activeTab === 'afterschool';
  const showSpecial = activeTab === 'all' || activeTab === 'special';

  const teacherTrainingWhatsappUrl = `https://wa.me/919043755433?text=${encodeURIComponent(
    'Hi Kalai Kids, I am interested in knowing more about the Montessori Teacher Training Course for Ladies (Curriculum, Batch Timings & Fee details). Kindly share the information.'
  )}`;

  return (
    <section id="programs" className="section-py bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-r from-ocean-100/40 to-brand-100/30 rounded-full blur-[110px] -z-10 animate-spin-slow pointer-events-none" />
      <div
        className="absolute bottom-20 right-0 w-[450px] h-[450px] bg-gradient-to-l from-rose-100/40 to-sunshine-100/40 rounded-full blur-[110px] -z-10 animate-spin-slow pointer-events-none"
        style={{ animationDirection: 'reverse' }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            Our Programs & Courses
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight">
            Programs Designed for Every Stage of Learning
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-500">
            From joyful early childhood milestones (Ages 2 – 6) to skill-enriching After School Classes
            and professional Montessori Teacher Training for Ladies, discover the right program at Kalai Kids.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 p-1.5 rounded-2xl sm:rounded-full bg-slate-100/90 border border-slate-200/80 w-fit mx-auto shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-700 transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-white/80'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>All Offerings</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preschool')}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-700 transition-all ${
                activeTab === 'preschool'
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-white/80'
              }`}
            >
              <Baby className="w-4 h-4" />
              <span>Age Groups (2 – 6 yrs)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('afterschool')}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-700 transition-all ${
                activeTab === 'afterschool'
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-white/80'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>After School (9 Classes)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('special')}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-700 transition-all ${
                activeTab === 'special'
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-white/80'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Teacher Training (For Ladies)</span>
            </button>
          </div>
        </div>

        {/* SECTION 1: PRESCHOOL & AGE GROUPS */}
        {showPreschool && (
          <div className="mb-20 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-800 uppercase tracking-wider mb-2 border border-brand-100">
                  <Baby className="w-3.5 h-3.5" />
                  <span>Early Childhood Foundations</span>
                </div>
                <h3 className="font-display font-800 text-2xl sm:text-3xl text-slate-900">
                  Preschool Age Groups & Kindergarten
                </h3>
                <p className="text-sm text-slate-500 font-500 mt-1">
                  Structured developmental curricula tailored specifically for each age band (2 to 6 years).
                </p>
              </div>
              <span className="text-xs font-700 text-slate-400">
                5 Programs Available · Both Campuses
              </span>
            </div>

            {/* Preschool Grid */}
            <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-7 reveal ${visible ? 'visible' : ''}`}>
              {programs.map((program, i) => {
                const colors = colorMap[program.color] || colorMap.brand;
                const Icon = iconMap[program.icon] || Baby;

                return (
                  <div
                    key={program.id}
                    className={`group glass-card rounded-[2.25rem] p-7 sm:p-8 border-2 border-slate-100 ${colors.border} card-hover relative flex flex-col justify-between overflow-hidden bg-white/90`}
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    {/* Number Watermark */}
                    <span className="absolute top-4 right-6 font-display font-800 text-6xl text-slate-100 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                      0{i + 1}
                    </span>

                    <div>
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Title & Age */}
                      <div className="mb-3 relative z-10">
                        <h4 className="font-display font-800 text-2xl text-slate-900 leading-tight">
                          {program.name}
                        </h4>
                        <span className={`inline-block text-xs font-800 px-3 py-1 rounded-full ${colors.chip} uppercase tracking-wider mt-2`}>
                          {program.ageRange}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-500 relative z-10">
                        {program.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2.5 mb-6 relative z-10 border-t border-slate-100 pt-4">
                        {program.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-xs text-slate-700 font-600">
                            <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-2 border-t border-slate-100/70 relative z-10">
                      <a
                        href="#contact"
                        className={`inline-flex items-center justify-between w-full text-sm font-700 ${colors.text} py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-brand-50 transition-colors`}
                      >
                        <span>Apply for {program.name}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: AFTER SCHOOL CLASSES */}
        {showAfterSchool && (
          <div className="mb-20 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ocean-50 text-ocean-700 text-xs font-800 uppercase tracking-wider mb-2 border border-ocean-100">
                  <Sparkles className="w-3.5 h-3.5 text-ocean-500" />
                  <span>Skill Enrichment & Creative Arts</span>
                </div>
                <h3 className="font-display font-800 text-2xl sm:text-3xl text-slate-900">
                  After School Classes
                </h3>
                <p className="text-sm text-slate-500 font-500 mt-1">
                  Tuition, languages, mental math, handwriting, and classical performing arts guided by experienced tutors.
                </p>
              </div>

              {/* Quick Tags Summary */}
              <div className="hidden lg:flex flex-wrap gap-1.5 max-w-md justify-end">
                {afterSchoolClasses.map((c) => (
                  <span
                    key={c.id}
                    className="text-[11px] font-700 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {c.title}
                  </span>
                ))}
              </div>
            </div>

            {/* After School 9 Classes Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {afterSchoolClasses.map((item, i) => {
                const colors = colorMap[item.color] || colorMap.brand;
                const Icon = iconMap[item.icon] || Sparkles;

                return (
                  <div
                    key={item.id}
                    className={`group glass-card rounded-[2rem] p-6 sm:p-7 border-2 border-slate-100 ${colors.border} card-hover bg-white/95 flex flex-col justify-between relative overflow-hidden`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {/* Top Row: Icon + Badge */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${colors.icon} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[11px] font-800 px-3 py-1 rounded-full ${colors.chip} uppercase tracking-wider`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Category */}
                      <div className="mb-2.5">
                        <span className="text-[11px] font-700 text-slate-400 uppercase tracking-wider block mb-0.5">
                          {item.category}
                        </span>
                        <h4 className="font-display font-800 text-xl text-slate-900">
                          {item.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-500 mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5 border-t border-slate-100 pt-3.5">
                        {item.highlights.map((h, k) => (
                          <li key={k} className="flex items-start gap-2 text-xs text-slate-700 font-600">
                            <Check className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-2 border-t border-slate-100/70">
                      <a
                        href="#contact"
                        className={`inline-flex items-center justify-between w-full text-xs sm:text-sm font-700 ${colors.text} py-2 px-3.5 rounded-xl bg-slate-50 group-hover:bg-brand-50 transition-colors`}
                      >
                        <span>Enquire for {item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 3: SPECIAL COURSE - MONTESSORI TEACHER TRAINING FOR LADIES */}
        {showSpecial && (
          <div className="animate-fade-in">
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-7 sm:p-10 lg:p-14 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
              {/* Decorative Glow Orbs */}
              <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-amber-500/20 via-brand-500/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-500/15 via-ocean-500/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                {/* Course Header Banner */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-800 uppercase tracking-widest shadow-sm">
                    <Sparkle className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>Special Course · Exclusively for Ladies</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-700 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{specialCourse.batchInfo}</span>
                  </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Heading, Subtitle & Description (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <h3 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.12] tracking-tight">
                      {specialCourse.title}
                    </h3>
                    <p className="text-base sm:text-lg text-amber-300 font-700">
                      {specialCourse.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-400">
                      {specialCourse.description}
                    </p>

                    {/* Target Audience Pill */}
                    <div className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl bg-white/5 border border-white/10 w-fit text-xs sm:text-sm text-slate-200 font-600">
                      <Users className="w-4 h-4 text-brand-400 flex-shrink-0" />
                      <span>{specialCourse.targetAudience}</span>
                    </div>

                    {/* Career Outcomes */}
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-800 block mb-2.5">
                        Career & Professional Outcomes:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {specialCourse.careerOutcomes.map((career, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 text-xs font-700 bg-white/10 text-slate-200 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs"
                          >
                            <Award className="w-3.5 h-3.5 text-amber-400" />
                            <span>{career}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action CTAs */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-4">
                      <a
                        href={teacherTrainingWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-[#25D366] to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white font-800 text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-brand-50 hover:text-brand-700 font-800 text-sm shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        <span>Apply via Admission Form</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <a
                        href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-700 text-sm border border-white/20 transition-colors"
                      >
                        <PhoneCall className="w-4 h-4 text-amber-400" />
                        <span>Call: {schoolInfo.phone}</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: 6 Features Grid (5 cols) */}
                  <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                    {specialCourse.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-400/30">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="font-display font-700 text-white text-sm">
                              {h.title}
                            </h5>
                            <p className="text-xs text-slate-300 leading-snug mt-1 font-400">
                              {h.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
