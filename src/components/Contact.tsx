import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Navigation, MessageCircle, HeartHandshake } from 'lucide-react';
import { schoolInfo, schoolHours } from '@/data/content';
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
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsappUrl = () => {
    const lines = [
      `*New Admission Enquiry — Kalai Kids Velachery*`,
      ``,
      `*Parent Name:* ${form.parentName.trim()}`,
      `*Child Name & Age:* ${form.childName.trim()}`,
      `*Contact Phone:* ${form.phone.trim()}`,
      form.email.trim() ? `*Email:* ${form.email.trim()}` : null,
      `*Program:* ${form.program}`,
      form.message.trim() ? `*Special Requirements:* ${form.message.trim()}` : null,
      ``,
      `Kindly share admission process, fee structure, and schedule our campus visit. Thank you!`,
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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-800 text-brand-600 uppercase tracking-widest mb-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            Admissions & Enquiries
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Enroll Your Child in Kalai Kids
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-500">
            Admissions open for 2026–27! Fill out the form below or contact us directly to schedule a friendly campus visit in Lakshmi Nagar, Velachery.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Map (5 cols) */}
          <div ref={ref} className={`lg:col-span-5 flex flex-col gap-6 reveal ${visible ? 'visible' : ''}`}>
            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* Phone */}
              <a
                href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 hover:shadow-lg transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-700 text-slate-400 uppercase tracking-wider">Call Directly</p>
                  <p className="text-base font-800 text-slate-800">{schoolInfo.phone}</p>
                  <p className="text-xs text-slate-500 font-500">Landline: {schoolInfo.altPhone}</p>
                </div>
              </a>

              {/* WhatsApp Quick Action */}
              <a
                href={`https://wa.me/919043755433?text=${encodeURIComponent(
                  'Hello Kalai Kids Velachery, I would like to enquire about preschool & daycare admissions.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-700 text-emerald-700 uppercase tracking-wider">WhatsApp Message</p>
                  <p className="text-sm font-800 text-emerald-950">Chat with Admissions Team</p>
                  <p className="text-xs text-emerald-700 font-500">Instant response during working hours</p>
                </div>
              </a>

              {/* School Hours */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-700 text-slate-400 uppercase tracking-wider">Operating Hours</p>
                  <p className="text-sm font-800 text-slate-800">Mon – Sat · 8:30 AM – 7:30 PM</p>
                  <p className="text-xs text-slate-500 font-500">Sunday Closed</p>
                </div>
              </div>
            </div>

            {/* Address Card & Map Link */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-700 text-slate-400 uppercase tracking-wider mb-1">Campus Location</p>
                  <p className="text-sm font-600 text-slate-700 leading-relaxed">
                    {schoolInfo.address}
                  </p>
                </div>
              </div>
              <a
                href={schoolInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-700 text-brand-600 hover:text-brand-700 transition-colors mt-1"
              >
                <Navigation className="w-4 h-4" />
                Open Directions in Google Maps
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-60 relative bg-slate-100">
              <iframe
                title="Kalai Kids Velachery Location"
                src={schoolInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
                    Enquiry Routed to WhatsApp!
                  </h3>
                  <p className="text-slate-600 max-w-md text-sm font-500 leading-relaxed mb-6">
                    Thank you! Your child's details have been formatted and sent to Kalai Kids Velachery at <strong className="text-slate-900">+91 90437 55433</strong>. Uma Ma'am and our admissions team will respond shortly.
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
                        setForm({ parentName: '', childName: '', phone: '', email: '', program: '', message: '' });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-700 font-700 underline px-3 py-2"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-100">
                    <HeartHandshake className="w-5 h-5 text-brand-500" />
                    <span className="font-display font-800 text-slate-800 text-lg">
                      Quick Admission Enquiry
                    </span>
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
                    <span>Automatically connects you to Kalai Kids (+91 90437 55433) on WhatsApp</span>
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
