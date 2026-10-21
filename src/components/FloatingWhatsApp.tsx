import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { schoolInfo } from '@/data/content';

export function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show a helpful welcoming tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello Kalai Kids! I am looking for preschool & daycare admission details for my child (Velachery / Adambakkam campus). Please share more information.'
  );

  const whatsappUrl = `https://wa.me/919043755433?text=${whatsappMessage}`;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* Friendly pop-in tooltip badge */}
      {showTooltip && !dismissed && (
        <div className="relative bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-100 p-3.5 max-w-[260px] animate-fade-in-up transition-all drop-shadow-xl hidden sm:block">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-800 text-slate-900">Admissions Team Online</p>
          </div>
          <p className="text-xs text-slate-600 font-500 leading-snug">
            Questions on admissions for our Velachery or Adambakkam campus? Chat directly with us!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-800 text-emerald-600 hover:text-emerald-700 mt-2"
          >
            <span>Start WhatsApp Chat →</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kalai Kids on WhatsApp (+91 90437 55433)"
        className="group relative flex items-center gap-3 p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Pulsing beacon ring around button */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping -z-10 pointer-events-none duration-1000" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white flex-shrink-0" />

        {/* Expandable Label on Desktop Hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-800 text-sm tracking-wide group-hover:max-w-xs transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 pr-0 group-hover:pr-2 hidden md:inline-block">
          Chat with Us
        </span>

        {/* Mobile/Badge Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
        </span>
      </a>
    </aside>
  );
}
