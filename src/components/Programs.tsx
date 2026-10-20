import { Baby, Palette, BookOpen, GraduationCap, HeartHandshake, Check, ArrowRight } from 'lucide-react';
import { programs } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby,
  Palette,
  BookOpen,
  GraduationCap,
  HeartHandshake,
};

const colorMap: Record<string, { text: string; border: string; chip: string; icon: string; bgHover: string }> = {
  rose: {
    text: 'text-rose-600',
    border: 'hover:border-rose-300',
    chip: 'bg-rose-100 text-rose-700',
    icon: 'bg-rose-50 text-rose-600 border border-rose-200',
    bgHover: 'group-hover:bg-rose-50/40',
  },
  brand: {
    text: 'text-brand-600',
    border: 'hover:border-brand-300',
    chip: 'bg-brand-100 text-brand-700',
    icon: 'bg-brand-50 text-brand-600 border border-brand-200',
    bgHover: 'group-hover:bg-brand-50/40',
  },
  ocean: {
    text: 'text-ocean-600',
    border: 'hover:border-ocean-300',
    chip: 'bg-ocean-100 text-ocean-700',
    icon: 'bg-ocean-50 text-ocean-600 border border-ocean-200',
    bgHover: 'group-hover:bg-ocean-50/40',
  },
  mint: {
    text: 'text-mint-600',
    border: 'hover:border-mint-300',
    chip: 'bg-mint-100 text-mint-700',
    icon: 'bg-mint-50 text-mint-600 border border-mint-200',
    bgHover: 'group-hover:bg-mint-50/40',
  },
  sunshine: {
    text: 'text-amber-600',
    border: 'hover:border-amber-300',
    chip: 'bg-amber-100 text-amber-800',
    icon: 'bg-amber-50 text-amber-600 border border-amber-200',
    bgHover: 'group-hover:bg-amber-50/40',
  },
};

export default function Programs() {
  const { ref, visible } = useScrollReveal();

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            Our Programs
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight">
            Programs for Every Stage of Early Childhood
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-500">
            From playful sensory exploration for toddlers to primary school readiness and extended daycare,
            each stage is thoughtfully guided with loving care.
          </p>
        </div>

        {/* Programs Grid */}
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
                    <h3 className="font-display font-800 text-2xl text-slate-900 leading-tight">
                      {program.name}
                    </h3>
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
    </section>
  );
}
