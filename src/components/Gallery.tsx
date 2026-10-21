import { useState, useRef, useEffect } from 'react';
import {
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    Sparkles,
    Layers,
    Smartphone,
    Quote,
    CheckCircle2,
    Info,
} from 'lucide-react';
import { galleryImages, GalleryItem } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
    const { ref, visible } = useScrollReveal();
    const [lightbox, setLightbox] = useState<number | null>(null);
    const [activeTag, setActiveTag] = useState<string>('All');
    const [viewMode, setViewMode] = useState<'bento' | 'reel'>('bento');
    const reelRef = useRef<HTMLDivElement>(null);

    const categories = [
        { id: 'All', label: 'All Photos', count: galleryImages.length },
        {
            id: 'Celebrations',
            label: 'Annual Day & Events',
            count: galleryImages.filter((img) => img.tag === 'Celebrations').length,
        },
        {
            id: 'Classroom',
            label: 'Classroom & Montessori',
            count: galleryImages.filter((img) => img.tag === 'Classroom').length,
        },
        {
            id: 'Storytelling',
            label: 'Storytelling & Speech',
            count: galleryImages.filter((img) => img.tag === 'Storytelling').length,
        },
        {
            id: 'Art & Craft',
            label: 'Art & Painting',
            count: galleryImages.filter((img) => img.tag === 'Art & Craft').length,
        },
        {
            id: 'Play Area',
            label: 'Indoor Play & Games',
            count: galleryImages.filter((img) => img.tag === 'Play Area').length,
        },
    ];

    const filteredImages =
        activeTag === 'All'
            ? galleryImages
            : galleryImages.filter((img) => img.tag === activeTag);

    const openLightbox = (index: number) => setLightbox(index);
    const closeLightbox = () => setLightbox(null);

    const nextImage = () =>
        setLightbox((prev) => (prev === null ? null : (prev + 1) % filteredImages.length));

    const prevImage = () =>
        setLightbox((prev) =>
            prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
        );

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightbox === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox, filteredImages]);

    // Reel horizontal scroll helpers
    const scrollReel = (direction: 'left' | 'right') => {
        if (reelRef.current) {
            const scrollAmount = direction === 'left' ? -320 : 320;
            reelRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const featuredItem = filteredImages.find((img) => img.isFeatured) || filteredImages[0];
    const gridItems =
        activeTag === 'All' || activeTag === 'Celebrations'
            ? filteredImages.filter((img) => img.id !== featuredItem?.id)
            : filteredImages;

    return (
        <section
            id="gallery"
            className="section-py bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden"
        >
            {/* Decorative ambient blurred glow */}
            <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-amber-100/30 rounded-full blur-[130px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-100/25 rounded-full blur-[140px] -z-10 pointer-events-none" />

            <div className="section-container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-700 uppercase tracking-wider mb-3">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                        <span>Campus Life & Moments of Joy</span>
                    </div>

                    <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.14] tracking-tight">
                        Real Moments, Real Smiles at <span className="gradient-text">Kalai Kids Home</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-500">
                        From our grand 9th Annual Day stage celebrations to joyful daily storytelling circles,
                        explore how our little learners play, create, and shine.
                    </p>
                </div>

                {/* Controls Bar: Category Filter Pills + View Switcher */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    {/* Scrollable Category Filter Pills for touch / mobile & desktop */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full md:w-auto no-scrollbar scroll-smooth">
                        {categories.map((c) => {
                            const isActive = activeTag === c.id;
                            return (
                                <button
                                    key={c.id}
                                    onClick={() => setActiveTag(c.id)}
                                    className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-700 transition-all ${isActive
                                            ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
                                        }`}
                                >
                                    <span>{c.label}</span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-800 ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                                            }`}
                                    >
                                        {c.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop & Mobile View Mode Switcher */}
                    <div className="hidden sm:flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-full border border-slate-200/70 text-xs font-700 self-end md:self-auto">
                        <button
                            onClick={() => setViewMode('bento')}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${viewMode === 'bento'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            <Layers className="w-3.5 h-3.5 text-brand-600" />
                            <span>Mosaic View</span>
                        </button>
                        <button
                            onClick={() => setViewMode('reel')}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${viewMode === 'reel'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            <Smartphone className="w-3.5 h-3.5 text-brand-600" />
                            <span>Swipe Reel</span>
                        </button>
                    </div>
                </div>

                {/* View 1: Creative Bento Mosaic Showcase (Default) */}
                {viewMode === 'bento' && (
                    <div ref={ref} className={`space-y-6 reveal ${visible ? 'visible' : ''}`}>
                        {/* HERO FEATURED CARD: Real Kalai Kids 9th Annual Day Celebration */}
                        {(activeTag === 'All' || activeTag === 'Celebrations') && featuredItem && (
                            <div
                                onClick={() => {
                                    const idx = filteredImages.findIndex((img) => img.id === featuredItem.id);
                                    openLightbox(idx >= 0 ? idx : 0);
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label={`Open photo: ${featuredItem.title}`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        const idx = filteredImages.findIndex((img) => img.id === featuredItem.id);
                                        openLightbox(idx >= 0 ? idx : 0);
                                    }
                                }}
                                className="group relative rounded-[2.25rem] sm:rounded-[2.75rem] overflow-hidden bg-slate-900 cursor-pointer shadow-2xl shadow-brand-900/10 border-2 border-white aspect-[16/10] sm:aspect-[21/9] max-h-[460px] transition-all duration-500 hover:shadow-brand-500/20"
                            >
                                <img
                                    src={featuredItem.url}
                                    alt={featuredItem.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                                />

                                {/* Ambient dynamic gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300" />

                                {/* Top Badges */}
                                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between gap-2 z-10">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white text-[11px] font-800 shadow-md">
                                            <Sparkles className="w-3.5 h-3.5 fill-white" />
                                            <span>Featured Event</span>
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-[11px] font-700 border border-white/20">
                                            ★ 9th Annual Day Celebration
                                        </span>
                                    </div>

                                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-slate-900 transition-all shadow-md">
                                        <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                </div>

                                {/* Bottom Story & Caption */}
                                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
                                    <div className="max-w-2xl">
                                        <span className="text-xs font-700 uppercase tracking-widest text-brand-300 block mb-1">
                                            Kalai Kids Home · Annual Day
                                        </span>
                                        <h3 className="font-display font-800 text-xl sm:text-2xl md:text-3xl text-white leading-tight mb-1.5 drop-shadow-sm">
                                            {featuredItem.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-200 font-500 leading-snug line-clamp-2">
                                            {featuredItem.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Asymmetric Responsive Grid for Other Photos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                            {gridItems.map((img) => {
                                const originalIndex = filteredImages.findIndex((item) => item.id === img.id);

                                return (
                                    <div
                                        key={img.id}
                                        onClick={() => openLightbox(originalIndex)}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`Open photo: ${img.title}`}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                openLightbox(originalIndex);
                                            }
                                        }}
                                        className="group relative rounded-3xl overflow-hidden bg-slate-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 aspect-[4/3] border-2 border-white hover:-translate-y-1"
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Dark gradient for text legibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                                        {/* Top Tag & Badge */}
                                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 gap-2">
                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                <span className="text-[10px] font-800 uppercase px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-slate-800 shadow-xs">
                                                    {img.tag}
                                                </span>
                                                {img.badge && (
                                                    <span className="text-[10px] font-800 px-2 py-0.5 rounded-full bg-brand-500/95 text-white backdrop-blur-md shadow-xs">
                                                        {img.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/20 flex-shrink-0">
                                                <Maximize2 className="w-3.5 h-3.5" />
                                            </div>
                                        </div>

                                        {/* Bottom Metadata */}
                                        <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                                            <h4 className="font-display font-800 text-white text-base sm:text-lg leading-tight drop-shadow-sm mb-0.5">
                                                {img.title}
                                            </h4>
                                            <p className="text-[11px] sm:text-xs text-slate-200 font-500 leading-snug line-clamp-1">
                                                {img.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* View 2: Touch-Friendly Horizontal Swipe Reel (Great for Mobile Demos!) */}
                {viewMode === 'reel' && (
                    <div className="relative">
                        {/* Reel Navigation Arrows for desktop testers */}
                        <div className="hidden sm:flex items-center justify-between absolute -top-12 right-0 gap-2 z-10">
                            <button
                                onClick={() => scrollReel('left')}
                                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 shadow-xs"
                                aria-label="Previous photos"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scrollReel('right')}
                                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 shadow-xs"
                                aria-label="Next photos"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Horizontal Snap Reel */}
                        <div
                            ref={reelRef}
                            className="flex items-center gap-5 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 no-scrollbar scroll-smooth"
                        >
                            {filteredImages.map((img, i) => (
                                <div
                                    key={img.id}
                                    onClick={() => openLightbox(i)}
                                    className="flex-shrink-0 w-[280px] sm:w-[340px] snap-center group relative rounded-[2rem] overflow-hidden bg-slate-900 cursor-pointer shadow-lg aspect-[3/4] border-2 border-white transition-transform hover:-translate-y-1.5 duration-300"
                                >
                                    <img
                                        src={img.url}
                                        alt={img.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                                    {/* Top Badge */}
                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <span className="text-[10px] font-800 uppercase px-2.5 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm">
                                                {img.tag}
                                            </span>
                                            {img.badge && (
                                                <span className="text-[10px] font-800 px-2 py-0.5 rounded-full bg-brand-500 text-white shadow-sm">
                                                    {img.badge}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-[10px] font-700 text-white/90 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full flex-shrink-0">
                                            {i + 1} / {filteredImages.length}
                                        </span>
                                    </div>

                                    {/* Bottom Info */}
                                    <div className="absolute bottom-5 left-5 right-5 z-10">
                                        <h4 className="font-display font-800 text-white text-lg leading-tight mb-1">
                                            {img.title}
                                        </h4>
                                        <p className="text-xs text-slate-200 font-500 leading-snug line-clamp-2 mb-3">
                                            {img.subtitle}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-700 text-brand-300 group-hover:text-white transition-colors">
                                            <Maximize2 className="w-3.5 h-3.5" />
                                            <span>Tap to view full screen</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-xs text-slate-500 font-600 mt-2 sm:hidden">
                            ← Swipe horizontally to explore photos →
                        </p>
                    </div>
                )}

                {/* Real Parent Praise Quote Banner Linking to Annual Day */}
                <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-50/80 via-brand-50/50 to-rose-50/60 border border-amber-200/60 shadow-sm flex flex-col md:flex-row items-center gap-5 justify-between">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Quote className="w-5 h-5 fill-white" />
                        </div>
                        <div>
                            <p className="text-slate-800 text-sm sm:text-base font-600 italic leading-relaxed">
                                "My daughter is studying in Kalai kids... My parents and in-laws who saw the annual
                                day function were overwhelmed by all the kids' performance. We wish to thank the Head
                                mistress and all the teachers and staff!"
                            </p>
                            <p className="text-xs font-800 text-brand-700 mt-2 uppercase tracking-wide">
                                — Catherene Dhevakirubai C · Verified Parent Review
                            </p>
                        </div>
                    </div>

                    <a
                        href="#testimonials"
                        className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-xs font-700 text-slate-800 hover:text-brand-600 border border-slate-200 shadow-xs hover:shadow-sm transition-all"
                    >
                        <span>Read All 37 Parent Reviews</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>

            {/* Advanced Fullscreen Lightbox with Touch Support & Thumbnail Strip */}
            {lightbox !== null && filteredImages[lightbox] && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Top Bar: Title & Close Button */}
                    <div
                        className="flex items-center justify-between text-white z-20 pb-3 border-b border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-800 px-2.5 py-0.5 rounded-full bg-brand-500 text-white uppercase tracking-wider">
                                    {filteredImages[lightbox].tag}
                                </span>
                                <span className="text-xs text-white/60 font-600">
                                    {lightbox + 1} of {filteredImages.length}
                                </span>
                            </div>
                            <h3 className="font-display font-800 text-base sm:text-xl text-white mt-1 leading-snug">
                                {filteredImages[lightbox].title}
                            </h3>
                        </div>

                        <button
                            onClick={closeLightbox}
                            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                            aria-label="Close full view"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Center Stage: Main Image with Prev / Next Triggers */}
                    <div
                        className="relative flex-1 flex items-center justify-center py-2 sm:py-4 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Prev Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-brand-500 text-white flex items-center justify-center transition-all border border-white/20 shadow-lg"
                            aria-label="Previous photo"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Image Container */}
                        <div className="max-h-[62vh] sm:max-h-[68vh] max-w-5xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black/40 flex items-center justify-center">
                            <img
                                src={filteredImages[lightbox].url}
                                alt={filteredImages[lightbox].alt}
                                className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain select-none"
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-brand-500 text-white flex items-center justify-center transition-all border border-white/20 shadow-lg"
                            aria-label="Next photo"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Bottom Bar: Subtitle and Thumbnail Strip */}
                    <div
                        className="z-20 pt-3 border-t border-white/10 flex flex-col items-center gap-3"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="text-white/80 text-xs sm:text-sm text-center font-500 max-w-xl line-clamp-1">
                            {filteredImages[lightbox].subtitle}
                        </p>

                        {/* Thumbnail Ribbon */}
                        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 no-scrollbar">
                            {filteredImages.map((img, idx) => (
                                <button
                                    key={img.id}
                                    onClick={() => setLightbox(idx)}
                                    className={`relative w-12 h-10 sm:w-14 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${idx === lightbox
                                            ? 'ring-2 ring-brand-400 scale-105 opacity-100'
                                            : 'opacity-40 hover:opacity-80'
                                        }`}
                                >
                                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
