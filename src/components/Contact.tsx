import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Navigation, MessageCircle, HeartHandshake, Star, Building2, ExternalLink } from 'lucide-react';
import { schoolInfo, branches } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { WhatsAppIcon } from '@/components/FloatingWhatsApp';

const programsList = [
  'Playgroup (1.5 – 2.5 yrs)',
  'Pre-KG / Nursery (2.5 – 3.5 yrs)',
  'Junior KG (3.5 – 4.5 yrs)',
  'Senior KG (4.5 – 5.5 yrs)',
  'Extended Daycare & Crèche (Till 7:30 PM)',
];

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [selectedBranchId, setSelectedBranchId] = useState<'velachery' | 'adambakkam'>('velachery');
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    branch: 'velachery',
    program: '',
    message: '',
  });

  const activeBranch = branches.find((b) => b.id === selectedBranchId) || branches[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getBranchLabel = (id: string) => {
    if (id === 'velachery') return 'Velachery Campus (Lakshmi Nagar)';
    if (id === 'adambakkam') return 'Adambakkam Campus (Ramkrishna Nagar)';
    return 'Either / Both Campuses';
  };

  const buildWhatsappUrl = () => {
    const campusLabel = getBranchLabel(form.branch);
    const lines = [
      `*New Admission Enquiry — Kalai Kids (${form.branch === 'velachery' ? 'Velachery' : form.branch === 'adambakkam' ? 'Adambakkam' : 'Chennai'})*`,
      ``,
      `*Parent Name:* ${form.parentName.trim()}`,
      `*Child Name & Age:* ${form.childName.trim()}`,
      `*Contact Phone:* ${form.phone.trim()}`,
      form.email.trim() ? `*Email:* ${form.email.trim()}` : null,
      `*Preferred Campus:* ${campusLabel}`,
      `*Program of Interest:* ${form.program}`,
      form.message.trim() ? `*Questions / Notes:* ${form.message.trim()}` : null,
      ``,
      `Kindly share admission details, fee structure, and schedule a campus visit. Thank you!`,
    ]
      .filter((line) => line !== null)
      .join('\n');

    return `https://wa.me/919043755433?text=${encodeURIComponent(lines)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsappUrl();
    setLastWhatsappUrl(url);
    setSubmitted(true);

    // Automatically redirect / open WhatsApp with all enquiry data pre-filled
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
  };

  return (
    <section id="contact" className="section-py bg-gradient-to-b from-slate-50 via-brand-50/20 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            2 Campuses in Chennai · Admissions Open
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Visit Our Campuses or Apply Online
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-500">
            Kalai Kids welcomes you at our two convenient locations in <strong className="text-slate-800">Velachery</strong> and <strong className="text-slate-800">Adambakkam</strong>. Select a campus below to view directions, map, and contact info.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Dual Branch Cards & Map (5 cols) */}
          <div ref={ref} className={`lg:col-span-5 flex flex-col gap-6 reveal ${visible ? 'visible' : ''}`}>

            {/* Campus Selector Tabs */}
            <div className="bg-white p-2 rounded-2xl border border-slate-200/90 shadow-sm">
              <p className="text-[11px] font-800 text-slate-400 uppercase tracking-wider px-2 py-1 mb-1">
                Select Campus to View Map & Info
              </p>
              <div className="grid grid-cols-2 gap-2">
                {branches.map((b) => {
                  const isSelected = selectedBranchId === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => {
                        setSelectedBranchId(b.id);
                        setForm((prev) => ({ ...prev, branch: b.id }));
                      }}
                      className={`text-left p-3 rounded-xl transition-all border ${isSelected
                        ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/25 scale-[1.02]'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/70'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-800 uppercase tracking-wider px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                          {b.id === 'velachery' ? 'Branch 1' : 'Branch 2'}
                        </span>
                        <div className="flex items-center gap-0.5">
                          <Star className={`w-3 h-3 ${isSelected ? 'fill-amber-300 text-amber-300' : 'fill-amber-400 text-amber-400'}`} />
                          <span className={`text-xs font-700 ${isSelected ? 'text-white' : 'text-slate-700'}`}>{b.rating}</span>
                        </div>
                      </div>
                      <p className={`font-display font-800 text-sm leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {b.id === 'velachery' ? 'Velachery' : 'Adambakkam'}
                      </p>
                      <p className={`text-[11px] mt-0.5 truncate ${isSelected ? 'text-brand-100' : 'text-slate-500'}`}>
                        {b.area}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Campus Detail Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-brand-200/80 shadow-lg shadow-brand-500/5 relative overflow-hidden">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-800 mb-1.5 border border-brand-100">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{activeBranch.campusTitle}</span>
                  </div>
                  <h3 className="font-display font-800 text-xl text-slate-900">
                    {activeBranch.name}
                  </h3>
                  <p className="text-xs text-brand-600 font-600 mt-0.5">
                    {activeBranch.tagline}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-800 border border-amber-200/80">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{activeBranch.rating} ({activeBranch.reviewCount} Reviews)</span>
                  </span>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-3 pt-3 border-t border-slate-100 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-700 text-slate-400 uppercase tracking-wider">Campus Address</p>
                    <p className="font-600 text-slate-800 leading-snug mt-0.5">
                      {activeBranch.address}
                    </p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-700 text-slate-400 uppercase tracking-wider">Campus Hours</p>
                    <p className="text-xs sm:text-sm font-700 text-slate-800">
                      {activeBranch.hours} · Sunday Closed
                    </p>
                  </div>
                </div>

                {/* Direct Google Maps Action Button */}
                <div className="pt-2">
                  <a
                    href={activeBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-700 text-sm shadow-md transition-all hover:scale-[1.01]"
                  >
                    <Navigation className="w-4 h-4 text-brand-300" />
                    <span>Open in Google Maps ({activeBranch.shortName})</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed for Active Branch */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-64 relative bg-slate-100">
              <iframe
                title={`${activeBranch.name} Location`}
                src={activeBranch.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <a
                href={`tel:${activeBranch.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 hover:shadow-lg transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-700 text-slate-400 uppercase tracking-wider">Direct Admissions Helpline</p>
                  <p className="text-base font-800 text-slate-800">{activeBranch.phone}</p>
                  {activeBranch.altPhone && (
                    <p className="text-xs text-slate-500 font-500">Landline: {activeBranch.altPhone}</p>
                  )}
                </div>
              </a>

              {/* WhatsApp Quick Action */}
              <a
                href={`https://wa.me/919043755433?text=${encodeURIComponent(
                  `Hello Kalai Kids! I would like to enquire about preschool & daycare admissions for ${activeBranch.shortName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-700 text-emerald-700 uppercase tracking-wider">WhatsApp Admissions</p>
                  <p className="text-sm font-800 text-emerald-950">Chat with Uma Ma’am & Team</p>
                  <p className="text-xs text-emerald-700 font-500">Instant response during working hours</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right: Admission Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-7 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-display font-800 text-2xl text-slate-900 mb-2">
                    Enquiry Formatted for WhatsApp!
                  </h3>
                  <p className="text-slate-600 max-w-md text-sm font-500 leading-relaxed mb-6">
                    Thank you! Your child's details for <strong className="text-slate-900">{getBranchLabel(form.branch)}</strong> have been routed to Kalai Kids admissions at <strong className="text-slate-900">+91 90437 55433</strong>. Uma Ma'am and our faculty will respond shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center">
                    <a
                      href={lastWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-800 text-sm shadow-md transition-all hover:scale-105"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          parentName: '',
                          childName: '',
                          phone: '',
                          email: '',
                          branch: selectedBranchId,
                          program: '',
                          message: '',
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-700 font-700 underline px-3 py-2"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <HeartHandshake className="w-5 h-5 text-brand-500" />
                      <span className="font-display font-800 text-slate-800 text-lg">
                        Quick Admission Enquiry
                      </span>
                    </div>
                    <span className="text-xs font-700 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Academic Year 2026–27
                    </span>
                  </div>

                  {/* Campus Selection in Form */}
                  <div>
                    <label className="block text-xs font-700 text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Preferred Campus <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <label className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${form.branch === 'velachery'
                        ? 'border-brand-500 bg-brand-50/70 text-brand-900 font-700 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 font-500'
                        }`}>
                        <input
                          type="radio"
                          name="branch"
                          value="velachery"
                          checked={form.branch === 'velachery'}
                          onChange={handleChange}
                          className="accent-brand-600"
                        />
                        <div className="text-xs">
                          <p className="font-700 leading-tight">Velachery</p>
                          <p className="text-[10px] text-slate-500">Lakshmi Nagar</p>
                        </div>
                      </label>

                      <label className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${form.branch === 'adambakkam'
                        ? 'border-brand-500 bg-brand-50/70 text-brand-900 font-700 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 font-500'
                        }`}>
                        <input
                          type="radio"
                          name="branch"
                          value="adambakkam"
                          checked={form.branch === 'adambakkam'}
                          onChange={handleChange}
                          className="accent-brand-600"
                        />
                        <div className="text-xs">
                          <p className="font-700 leading-tight">Adambakkam</p>
                          <p className="text-[10px] text-slate-500">Ramkrishna Nagar</p>
                        </div>
                      </label>

                      <label className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${form.branch === 'any'
                        ? 'border-brand-500 bg-brand-50/70 text-brand-900 font-700 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 font-500'
                        }`}>
                        <input
                          type="radio"
                          name="branch"
                          value="any"
                          checked={form.branch === 'any'}
                          onChange={handleChange}
                          className="accent-brand-600"
                        />
                        <div className="text-xs">
                          <p className="font-700 leading-tight">Either Campus</p>
                          <p className="text-[10px] text-slate-500">Open to Both</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-700 text-slate-700 uppercase tracking-wider mb-1.5">
                        Parent’s Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={form.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Deepa Jayakumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm font-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-700 text-slate-700 uppercase tracking-wider mb-1.5">
                        Child’s Name & Age <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="childName"
                        required
                        value={form.childName}
                        onChange={handleChange}
                        placeholder="e.g. Adhvik, 2.5 yrs"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm font-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-700 text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98400 12345"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm font-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-700 text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm font-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-700 text-slate-700 uppercase tracking-wider mb-1.5">
                      Program of Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="program"
                      required
                      value={form.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm font-500 bg-white"
                    >
                      <option value="">Select a Program</option>
                      {programsList.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-700 text-slate-700 uppercase tracking-wider mb-1.5">
                      Questions or Special Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your child's speech development, preferred timing, or daycare needs..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm font-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-[#25D366] to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white font-800 text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white text-white flex-shrink-0" />
                    <span>Submit Enquiry & Send via WhatsApp</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>

                  <p className="text-xs text-slate-500 text-center font-600 pt-1 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Connects directly to Kalai Kids Admissions (+91 90437 55433)</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
