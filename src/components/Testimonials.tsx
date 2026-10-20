import { useState, useMemo } from 'react';
import { Star, Quote, Heart, CheckCircle2, Search, Sparkles, Filter } from 'lucide-react';
import { testimonials, schoolInfo } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Reviews (22)' },
    { id: 'speech', label: 'Speech & Language' },
    { id: 'care', label: 'Loving Care & Uma Ma’am' },
    { id: 'habits', label: 'Habits & Manners' },
    { id: 'eager', label: 'Kids Love School' },
  ];

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((t) => {
      // Category filter
      let matchesCat = true;
      if (activeCategory === 'speech') {
        matchesCat = t.text.toLowerCase().includes('speech') || t.text.toLowerCase().includes('tamil') || t.text.toLowerCase().includes('speaking') || t.text.toLowerCase().includes('communication');
      } else if (activeCategory === 'care') {
        matchesCat = t.text.toLowerCase().includes('uma') || t.text.toLowerCase().includes('kalai') || t.text.toLowerCase().includes('caring') || t.text.toLowerCase().includes('attention');
      } else if (activeCategory === 'habits') {
        matchesCat = t.text.toLowerCase().includes('habit') || t.text.toLowerCase().includes('discipline') || t.text.toLowerCase().includes('academic') || t.text.toLowerCase().includes('read');
      } else if (activeCategory === 'eager') {
        matchesCat = t.text.toLowerCase().includes('happy') || t.text.toLowerCase().includes('every day') || t.text.toLowerCase().includes('excited') || t.text.toLowerCase().includes('loves');
      }

      // Search filter
      const matchesSearch =
        searchQuery.trim() === '' ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.child && t.child.toLowerCase().includes(searchQuery.toLowerCase())) ||
        t.text.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedList = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 6);

  return (
    <section id="testimonials" className="section-py bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            Verified Parent Reviews
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight">
            5.0 Out of 5 Stars — Loved by Velachery Parents
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-500">
            Read real, heartfelt stories from parents whose little ones are learning, speaking fluently,
            and thriving at Kalai Kids.
          </p>
        </div>

        {/* Big Overall Google Reviews Scorecard */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-900/5">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Score (4 cols) */}
            <div className="md:col-span-4 text-center md:border-r md:border-slate-100 md:pr-6">
              <p className="font-display font-800 text-6xl text-slate-900 tracking-tight leading-none mb-2">
                5.0
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-800 text-slate-800">
                37 Google Reviews
              </p>
              <span className="inline-block mt-2 text-xs font-700 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                100% 5-Star Ratings
              </span>
            </div>

            {/* Middle Rating Bars (5 cols) */}
            <div className="md:col-span-5 space-y-1.5">
              {[
                { star: 5, pct: '100%', count: 37 },
                { star: 4, pct: '0%', count: 0 },
                { star: 3, pct: '0%', count: 0 },
                { star: 2, pct: '0%', count: 0 },
                { star: 1, pct: '0%', count: 0 },
              ].map((row) => (
                <div key={row.star} className="flex items-center gap-3 text-xs font-600 text-slate-600">
                  <span className="w-3 text-right">{row.star}</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
                  <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: row.pct }}
                    />
                  </div>
                  <span className="w-8 text-slate-400 text-right">{row.count}</span>
                </div>
              ))}
            </div>

            {/* Right Trust Highlights (3 cols) */}
            <div className="md:col-span-3 flex flex-col gap-2.5 text-xs font-600 text-slate-600 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
              <div className="flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Speech & Fluency</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Uma Ma'am's Care</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Good Habits & Manners</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Kids Love Going Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.id);
                  setShowAll(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-700 transition-all ${
                  activeCategory === c.id
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search parent or child..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-brand-400 bg-white"
            />
          </div>
        </div>

        {/* Review Cards Grid */}
        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${visible ? 'visible' : ''}`}>
          {displayedList.map((t, i) => {
            const hasSpecialMention =
              t.text.toLowerCase().includes('uma') || t.text.toLowerCase().includes('kalai');

            return (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 card-hover shadow-lg shadow-slate-900/5 flex flex-col justify-between"
                style={{ transitionDelay: `${(i % 6) * 70}ms` }}
              >
                {/* Decorative quote icon */}
                <div className="absolute top-5 right-5 text-slate-100 pointer-events-none group-hover:text-brand-100 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>

                <div>
                  {/* Top: Stars and Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-700 text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
                      {t.tag}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 relative z-10 font-500">
                    "{t.text}"
                  </p>

                  {/* Teacher Mention Badge */}
                  {hasSpecialMention && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-[11px] font-700 mb-4 border border-rose-100">
                      <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                      <span>Special mention: Teacher Care</span>
                    </div>
                  )}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-amber-500 flex items-center justify-center text-white font-800 text-xs shadow-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-700 text-slate-900 text-sm leading-tight">{t.name}</p>
                      <p className="text-xs text-slate-500 font-500">
                        {t.child ? `Child: ${t.child}` : t.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-500">{t.timeAgo}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Collapse Button */}
        {filteredTestimonials.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary text-sm font-700 px-8 py-3.5 shadow-sm"
            >
              {showAll ? 'Show Fewer Reviews' : `Read All ${filteredTestimonials.length} Reviews`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
