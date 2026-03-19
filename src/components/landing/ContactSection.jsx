import React, { useState } from 'react';
import { Send, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';
import { toast } from 'sonner';

const serviceOptions = [
  'Stolica', 'Fotelja', 'Dvosed', 'Trosed', 'Ugaona garnitura',
  'Singl dušek', 'Bračni dušek', 'Tabure', 'Jastuk', 'Tepih',
  'Mali auto', 'Limuzina', 'SUV/Karavan', 'Veliki SUV', 'Ostalo'
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    toast.success('Upit je uspešno poslat! Javićemo vam se uskoro.');
  };

  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-dark-brown overflow-hidden">
      {/* Gold glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-4">
            Rezervišite <span className="text-gold italic">termin</span> danas
          </h2>
          <p className="font-inter text-cream/50 text-center mb-4 text-sm">
            Pančevo i okolina — dolazimo kod vas
          </p>
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-cream/40 text-xs font-inter">
              <MapPin size={14} className="text-gold/60" />
              <span>Pančevo, Srbija</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 border border-gold/20 rounded-lg bg-secondary/30"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center">
                <Send size={24} className="text-gold" />
              </div>
              <h3 className="font-playfair text-2xl text-cream mb-3">Hvala vam!</h3>
              <p className="font-inter text-cream/50 text-sm">Vaš upit je poslat. Javićemo vam se u najkraćem mogućem roku.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', phone: '', service: '', message: '' }); }}
                className="mt-6 text-gold text-sm font-inter underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                Pošalji novi upit
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-gold/15 rounded-lg bg-secondary/30 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-cream/50 text-xs font-inter tracking-wide uppercase mb-2">Ime</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full bg-dark-brown/60 border border-gold/15 rounded-sm px-4 py-3 text-cream font-inter text-sm focus:border-gold/40 focus:outline-none transition-colors placeholder:text-cream/20"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label className="block text-cream/50 text-xs font-inter tracking-wide uppercase mb-2">Broj telefona</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    className="w-full bg-dark-brown/60 border border-gold/15 rounded-sm px-4 py-3 text-cream font-inter text-sm focus:border-gold/40 focus:outline-none transition-colors placeholder:text-cream/20"
                    placeholder="+381 6X XXX XXXX"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-cream/50 text-xs font-inter tracking-wide uppercase mb-2">Usluga</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({...form, service: e.target.value})}
                  className="w-full bg-dark-brown/60 border border-gold/15 rounded-sm px-4 py-3 text-cream font-inter text-sm focus:border-gold/40 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-dark-brown">Izaberite uslugu</option>
                  {serviceOptions.map(opt => (
                    <option key={opt} value={opt} className="bg-dark-brown">{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-cream/50 text-xs font-inter tracking-wide uppercase mb-2">Poruka</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full bg-dark-brown/60 border border-gold/15 rounded-sm px-4 py-3 text-cream font-inter text-sm focus:border-gold/40 focus:outline-none transition-colors resize-none placeholder:text-cream/20"
                  placeholder="Opišite šta vam je potrebno..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Pošalji upit
              </button>

              <p className="text-center text-cream/30 text-xs font-inter mt-4">
                Odgovaramo u najkraćem mogućem roku
              </p>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}