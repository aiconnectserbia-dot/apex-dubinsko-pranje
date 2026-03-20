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
  },
  {
    icon: BedDouble,
    title: 'Čišćenje nameštaja',
    shortDesc: 'Garniture, dvosedi, ugaone',
    path: '/ciscenje-namestaja-pancevo',
    label: 'Čišćenje nameštaja Pančevo',
  },
  {
    icon: Layers,
    title: 'Pranje tepiha',
    shortDesc: 'Od 450 din/m²',
    path: '/pranje-tepiha-pancevo',
    label: 'Pranje tepiha Pančevo',
  },
  {
    icon: Car,
    title: 'Pranje kola',
    shortDesc: 'Enterijer, sedišta, tepisi',
    path: '/dubinsko-pranje-kola-pancevo',
    label: 'Dubinsko pranje kola Pančevo',
  },
];

export default function SEOServicesSection() {
  return (
    <section className="relative py-16 md:py-20 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream text-center mt-8 mb-3">
            Sve usluge u <span className="text-gold italic">Pančevu</span>
          </h2>
          <p className="font-inter text-cream/50 text-center text-xs sm:text-sm mb-10">
            Dolazimo na vašu adresu
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.path} delay={0.1 * (i + 1)}>
              <Link
                to={s.path}
                aria-label={s.label}
                className="group flex flex-col items-center text-center h-full border border-gold/15 rounded-xl bg-secondary/20 p-5 md:p-6 hover:border-gold/40 hover:bg-secondary/40 transition-all duration-400"
              >
                <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center mb-3 group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300 flex-shrink-0">
                  <s.icon size={17} className="text-gold" />
                </div>
                <h3 className="font-playfair text-sm md:text-base font-semibold text-cream mb-1 leading-tight">{s.title}</h3>
                <p className="font-inter text-cream/40 text-[11px] leading-relaxed mb-3">{s.shortDesc}</p>
                <span className="font-inter text-gold text-[10px] tracking-wide mt-auto group-hover:underline underline-offset-4 transition-all">
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