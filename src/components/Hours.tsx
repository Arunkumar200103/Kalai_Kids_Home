import { useState, useEffect } from 'react';
import { Clock, CheckCircle2, XCircle, MapPin, Phone, ShieldCheck, Sun, Moon } from 'lucide-react';
import { schoolHours, schoolInfo } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hours() {
  const { ref, visible } = useScrollReveal();
  const [currentDayName, setCurrentDayName] = useState('');
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const day = now.getDay();
    setCurrentDayName(days[day]);

    const hour = now.getHours();
    const min = now.getMinutes();
    const currentDec = hour + min / 60;
    
    // Open if Mon-Sat (1-6) and between 8:30 (8.5) and 19:30 (19.5)
    const open = day !== 0 && currentDec >= 8.5 && currentDec < 19.5;
    setIsOpenNow(open);
  }, []);

  return (
    <section id="hours" className="section-py bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            School & Daycare Hours
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Flexible Timings for Working Parents
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Kalai Kids Home offers extended preschool and daycare hours from morning to evening across both our
            Velachery and Adambakkam campuses, providing a safe second home for your child.
          </p>
        </div>

        {/* Content Box */}
        <div ref={ref} className={`max-w-4xl mx-auto reveal ${visible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Left Status Card (5 cols) */}
            <div className="md:col-span-5 bg-gradient-to-br from-brand-500 via-brand-600 to-amber-600 rounded-[2.5rem] p-7 sm:p-8 text-white flex flex-col justify-between shadow-2xl shadow-brand-500/25 relative overflow-hidden">
              {/* Background decorative patterns */}
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/10 blur-xl" />
              <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-black/10 blur-xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-800 uppercase tracking-wider mb-6">
                  <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-300 animate-pulse' : 'bg-rose-300'}`} />
                  {isOpenNow ? 'Open Now' : 'Closed Now'}
                </div>

                <h3 className="font-display font-800 text-2xl sm:text-3xl leading-snug mb-3">
                  8:30 AM – 7:30 PM
                </h3>
                <p className="text-brand-100 text-sm leading-relaxed mb-6 font-500">
                  Full day support from morning school sessions to evening extended daycare & crèche facility.
                </p>

                <div className="space-y-3 pt-4 border-t border-white/20 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <Sun className="w-4 h-4 text-amber-200" />
                    <span>Morning Preschool: 8:30 AM – 12:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Moon className="w-4 h-4 text-amber-200" />
                    <span>Extended Daycare: Till 7:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-200" />
                    <span>Sunday: Closed (Family Time)</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-6 mt-6 border-t border-white/20 relative z-10">
                <a
                  href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-brand-700 font-700 text-sm hover:bg-brand-50 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  Call to Schedule Visit
                </a>
              </div>
            </div>

            {/* Right Timetable Card (7 cols) */}
            <div className="md:col-span-7 bg-white rounded-[2.5rem] p-7 sm:p-8 border border-slate-100 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-600" />
                    <span className="font-display font-700 text-slate-800 text-lg">Weekly Schedule</span>
                  </div>
                  <span className="text-xs font-700 text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Today is {currentDayName || 'Monday'}
                  </span>
                </div>

                {/* Day-by-day table */}
                <div className="divide-y divide-slate-100">
                  {schoolHours.map((item) => {
                    const isToday = item.day === currentDayName;
                    return (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
                          isToday
                            ? 'bg-brand-50/80 font-700 text-brand-900 border border-brand-200/60'
                            : 'text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {item.isOpenDay ? (
                            <CheckCircle2 className={`w-4 h-4 ${isToday ? 'text-brand-600' : 'text-emerald-500'}`} />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-400" />
                          )}
                          <span className={`text-sm ${isToday ? 'font-800 text-slate-900' : 'font-600'}`}>
                            {item.day}
                          </span>
                          {isToday && (
                            <span className="text-[10px] font-800 uppercase px-1.5 py-0.5 rounded bg-brand-500 text-white ml-1">
                              Today
                            </span>
                          )}
                        </div>

                        <span
                          className={`text-sm ${
                            !item.isOpenDay
                              ? 'text-slate-400 font-500'
                              : isToday
                              ? 'text-brand-700 font-800'
                              : 'text-slate-700 font-600'
                          }`}
                        >
                          {item.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Location Note */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>2 Campuses in Chennai:</strong> No. 11, Lakshmi Nagar 2nd Main Rd (Velachery) & No. 74, Ramkrishna Nagar 1st Main Rd (Adambakkam). Parents are welcome to visit anytime during open hours!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
