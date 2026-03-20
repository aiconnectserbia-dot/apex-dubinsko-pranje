import React from 'react';
import { Link } from 'react-router-dom';
import { Sofa, BedDouble, Layers, Car } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const services = [
  {
    icon: Sofa,
    title: 'Dubinsko čišćenje',
    shortDesc: 'Nameštaj, garniture, dušeci',
    path: '/dubinsko-ciscenje-pancevo',
    label: 'Dubinsko čišćenje Pančevo',
    num: '01',
  },
  {
    icon: BedDouble,
    title: 'Čišćenje nameštaja',
    shortDesc: 'Garniture, dvosedi, ugaone',
    path: '/ciscenje-namestaja-pancevo',
    label: 'Čišćenje nameštaja Pančevo',
    num: '02',
  },
  {
    icon: Layers,
    title: 'Pranje tepiha',
    shortDesc: 'Od 450 din/m²',
    path: '/pranje-tepiha-pancevo',
    label: 'Pranje tepiha Pančevo',
    num: '03',
  },
  {
    icon: Car,
    title: 'Pranje kola',
    shortDesc: 'Enterijer, sedišta, tepisi',
    path: '/dubinsko-pranje-kola-pancevo',
    label: 'Dubinsko pranje kola Pančevo',
    num: '04',
  },
];

export default function SEOServicesSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{
      background: 'linear-gradient(160deg, #1a0a00 0%, #0f0500 40%, #1a0d02 70%, #120800 100%)'
    }}>
      {/* Decorative gold lines */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-8 w-px h-40 -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-1/2 right-8 w-px h-40 -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream text-center mt-8 mb-3">
            Sve usluge u <span className="text-gold italic">Pančevu</span>
          </h2>
          <p className="font-inter text-cream/50 text-center text-xs sm:text-sm mb-12">
            Dolazimo na vašu adresu
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((s, i) => (
            <AnimatedSection key={s.path} delay={0.1 * (i + 1)}>
              <Link
                to={s.path}
                aria-label={s.label}
                className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-[#1f0d02] to-[#0d0400] p-4 md:p-7 hover:border-gold/50 transition-all duration-400 hover:shadow-lg hover:shadow-gold/10"
              >
                {/* Big number watermark */}
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="w-11 h-11 rounded-lg border border-gold/30 flex items-center justify-center mb-4 group-hover:border-gold/70 group-hover:bg-gold/15 transition-all duration-300 flex-shrink-0">
                  <s.icon size={18} className="text-gold" />
                </div>
                <h3 className="font-playfair text-sm md:text-base font-semibold text-cream mb-1.5 leading-snug">{s.title}</h3>
                <p className="font-inter text-cream/40 text-[11px] leading-relaxed mb-4 flex-1">{s.shortDesc}</p>
                <span className="font-inter text-gold/70 text-[10px] tracking-widest uppercase group-hover:text-gold transition-colors duration-300">
                  Saznajte više →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}