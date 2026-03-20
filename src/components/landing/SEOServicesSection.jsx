import React from 'react';
import { Link } from 'react-router-dom';
import { Sofa, BedDouble, Layers, Car } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const services = [
  {
    icon: Sofa,
    title: 'Dubinsko čišćenje',
    desc: 'Garniture, fotelje, stolice i dušeci — dubinski opramo sve vrste nameštaja u vašem domu.',
    path: '/dubinsko-ciscenje-pancevo',
    label: 'Dubinsko čišćenje Pančevo',
  },
  {
    icon: BedDouble,
    title: 'Čišćenje nameštaja',
    desc: 'Profesionalno pranje garnitura, dvoseda, troseda i ugaonih garnitura uz dolazak na adresu.',
    path: '/ciscenje-namestaja-pancevo',
    label: 'Čišćenje nameštaja Pančevo',
  },
  {
    icon: Layers,
    title: 'Pranje tepiha',
    desc: 'Dubinsko pranje svih vrsta tepiha — sintetički, vuneni, orijentalni. Od 450 din/m².',
    path: '/pranje-tepiha-pancevo',
    label: 'Pranje tepiha Pančevo',
  },
  {
    icon: Car,
    title: 'Dubinsko pranje kola',
    desc: 'Kompletan tretman enterijera automobila — sedišta, tepisi, tabla. Dolazimo na vašu lokaciju.',
    path: '/dubinsko-pranje-kola-pancevo',
    label: 'Dubinsko pranje kola Pančevo',
  },
];

export default function SEOServicesSection() {
  return (
    <section className="relative py-20 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream text-center mt-8 mb-4">
            Sve usluge u <span className="text-gold italic">Pančevu</span>
          </h2>
          <p className="font-inter text-cream/50 text-center text-sm mb-12">
            Profesionalno dubinsko čišćenje — dolazimo na vašu adresu
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.path} delay={0.1 * (i + 1)}>
              <Link
                to={s.path}
                aria-label={s.label}
                className="group flex flex-col h-full border border-gold/15 rounded-xl bg-secondary/30 p-6 hover:border-gold/40 hover:bg-secondary/50 transition-all duration-400"
              >
                <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center mb-5 group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300">
                  <s.icon size={18} className="text-gold" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-cream mb-2">{s.title}</h3>
                <p className="font-inter text-cream/50 text-xs leading-relaxed flex-1 mb-4">{s.desc}</p>
                <span className="font-inter text-gold text-xs tracking-wide group-hover:underline underline-offset-4 transition-all">
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