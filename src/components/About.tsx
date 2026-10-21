import { CheckCircle2, Heart, Sparkles, BookOpen, Music, Palette, Trophy, Users } from 'lucide-react';
import { aboutImages, aboutContent, schoolInfo } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const activityHighlights = [
  { icon: BookOpen, title: 'Basic Academics', desc: 'Alphabet phonics, number curiosity & early writing readiness' },
  { icon: Sparkles, title: 'Storytelling & Speech', desc: 'Engaging story circles that build rapid Tamil & English fluency' },
  { icon: Palette, title: 'Art and Craft', desc: 'Finger painting, coloring, paper craft & sensory exploration' },
  { icon: Music, title: 'Music & Action Rhymes', desc: 'Rhythm, songs, and body movement for joy and coordination' },
  { icon: Trophy, title: 'Games & Motor Skills', desc: 'Indoor games, balance, hand-eye coordination & active play' },
  { icon: Users, title: 'Social & Communication', desc: 'Sharing, making friends, expressing feelings & confidence' },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section-py bg-white relative overflow-hidden">
      {/* Decorative gradient blur backdrops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sunshine-200/30 to-brand-100/30 rounded-full blur-3xl -z-10 animate-spin-slow" />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-mint-200/20 to-ocean-100/20 rounded-full blur-3xl -z-10 animate-spin-slow"
        style={{ animationDirection: 'reverse' }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images composition: 5 cols */}
          <div ref={ref} className={`lg:col-span-5 relative reveal ${visible ? 'visible' : ''}`}>
            <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
              {/* Primary Image with blob shape */}
              <div className="blob-shape-2 overflow-hidden glass-card p-2 shadow-2xl shadow-brand-900/10">
                <div className="w-full h-full blob-shape-2 overflow-hidden aspect-[4/3] relative">
                  <img
                    src={aboutImages.main}
                    alt="Kalai Kids Home Kindergarten Convocation & Graduation Day Celebration"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent mix-blend-overlay" />
                </div>
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-52 h-44 sm:h-52 blob-shape overflow-hidden glass-panel p-2 shadow-xl animate-float hidden sm:block z-20">
                <img
                  src={aboutImages.secondary}
                  alt="Kalai Kids Home Annual Day Cultural Dance Performance"
                  className="w-full h-full object-cover blob-shape"
                />
              </div>

              {/* Experience & Rating Badge */}
              <div
                className="absolute -top-6 -left-4 sm:-left-6 glass-panel rounded-3xl p-4 sm:p-5 shadow-xl text-center w-36 animate-float z-30"
                style={{ animationDelay: '1s' }}
              >
                <div className="bg-gradient-to-br from-amber-400 to-brand-500 rounded-2xl p-2.5 shadow-inner text-white">
                  <p className="font-display font-800 text-3xl leading-none">5.0 ★</p>
                  <p className="text-[10px] font-700 uppercase tracking-wider mt-1">45+ Reviews</p>
                </div>
                <p className="text-[11px] font-700 text-slate-700 mt-2">2 Campuses in Chennai</p>
              </div>
            </div>
          </div>

          {/* Content: 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-2">
                <span className="w-8 h-1 bg-brand-500 rounded-full" />
                About Kalai Kids Home
              </span>
              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight">
                A Safe, Caring & Joyful Start to Learning
              </h2>
            </div>

            {/* Official About Text specified by User */}
            <div className="p-6 rounded-3xl bg-brand-50/50 border border-brand-100 shadow-sm relative">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-500">
                "{aboutContent.mainDescription}"
              </p>
            </div>

            {/* Key Focus Activities Grid */}
            <div>
              <h3 className="font-display font-700 text-slate-800 text-lg mb-3">
                Key Learning & Development Areas
              </h3>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {activityHighlights.map((act, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-brand-200 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-xs text-brand-600">
                      <act.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-700 text-slate-800">{act.title}</h4>
                      <p className="text-xs text-slate-500 font-500 leading-snug">{act.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors acknowledgement */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100/80">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-xs font-800 uppercase tracking-wider text-rose-700">Dedicated Educators</p>
                <p className="text-sm font-700 text-slate-800">
                  {aboutContent.teachersMentioned}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
