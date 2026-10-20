import { HeartHandshake, Sparkles, Clock, ShieldCheck, Palette, Smile } from 'lucide-react';
import { features } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartHandshake,
  Sparkles,
  Clock,
  ShieldCheck,
  Palette,
  Smile,
};

const colorMap: Record<string, { iconText: string; iconBg: string; borderHover: string; pill: string }> = {
  rose: {
    iconText: 'text-rose-600',
    iconBg: 'bg-rose-50 border-rose-200',
    borderHover: 'group-hover:border-rose-300',
    pill: 'bg-rose-500',
  },
  brand: {
    iconText: 'text-brand-600',
    iconBg: 'bg-brand-50 border-brand-200',
    borderHover: 'group-hover:border-brand-300',
    pill: 'bg-brand-500',
  },
  sunshine: {
    iconText: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-200',
    borderHover: 'group-hover:border-amber-300',
    pill: 'bg-amber-500',
  },
  ocean: {
    iconText: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    borderHover: 'group-hover:border-blue-300',
    pill: 'bg-blue-500',
  },
  mint: {
    iconText: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200',
    borderHover: 'group-hover:border-emerald-300',
    pill: 'bg-emerald-500',
  },
};

export default function Features() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="features" className="section-py bg-white relative overflow-hidden">
      {/* Dynamic blurred orbs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-brand-100/30 to-transparent rounded-full blur-[80px] -z-10 animate-spin-slow pointer-events-none" />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-rose-100/25 to-ocean-100/25 rounded-full blur-[90px] -z-10 animate-spin-slow pointer-events-none"
        style={{ animationDirection: 'reverse' }}
      />

      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            Why Choose Kalai Kids
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight">
            Everything Your Child Needs to Flourish
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-500">
            Backed by glowing parent reviews and over 10 years of trusted care in Velachery,
            we ensure a joyful, safe, and stimulating space where every child shines.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 reveal ${visible ? 'visible' : ''}`}>
          {features.map((feature, i) => {
            const colors = colorMap[feature.color] || colorMap.brand;
            const Icon = iconMap[feature.icon] || Sparkles;

            return (
              <div
                key={i}
                className={`group relative glass-card rounded-[2rem] p-7 sm:p-8 border-2 border-slate-100 ${colors.borderHover} card-hover overflow-hidden bg-white/90 flex flex-col justify-between`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10 shadow-xs`}
                  >
                    <Icon className={`w-7 h-7 ${colors.iconText}`} />
                  </div>

                  <h3 className="font-display font-800 text-xl text-slate-900 mb-3 relative z-10 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-500 relative z-10">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`mt-6 h-1 w-12 rounded-full ${colors.pill} opacity-30 group-hover:w-full group-hover:opacity-100 transition-all duration-700 relative z-10`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
