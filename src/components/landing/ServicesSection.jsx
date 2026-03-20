import React from 'react';
import { Sofa, BedDouble, Layers, Car } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const services = [
  {
    icon: Sofa,
    title: 'Garniture',
    desc: 'Stolice, fotelje, dvosedi, trosedi, ugaone garniture.',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/e3c8699c8_IMG_4442.jpg'
  },
  {
    icon: BedDouble,
    title: 'Dušeci',
    desc: 'Singl i bračni dušeci, jednostrano ili obostrano.',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/532aee84d_IMG_4443.jpg'
  },
  {
    icon: Layers,
    title: 'Tepisi',
    desc: 'Taburei, jastuci, tepisi po m².',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/47204fc99_IMG_4434.jpg'
  },
  {
    icon: Car,
    title: 'Automobili',
    desc: 'Mali auto, SUV, karavan — enterijer kao iz salona.',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6bd190a5c_IMG_4438.jpg'
  },
];

function ServiceCard({ svc }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gold/15 bg-gradient-to-br from-secondary/80 to-dark-brown hover:border-gold/40 transition-all duration-500 aspect-square md:aspect-auto md:h-72">
      {/* Background image */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
        <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-brown via-dark-brown/70 to-dark-brown/20" />

      {/* Content — bottom aligned on mobile (square), normal on desktop */}
      <div className="relative h-full flex flex-col justify-end p-4 md:p-8 md:justify-start">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-gold/30 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-gold/10 group-hover:border-gold/60 transition-all duration-500 flex-shrink-0">
          <svc.icon size={16} className="text-gold md:hidden" />
          <svc.icon size={20} className="text-gold hidden md:block" />
        </div>
        <h3 className="font-playfair text-base md:text-2xl font-semibold text-cream mb-1 md:mb-2">{svc.title}</h3>
        <p className="font-inter text-cream/45 text-xs leading-relaxed hidden md:block">{svc.desc}</p>
        <p className="font-inter text-cream/40 text-[11px] leading-relaxed md:hidden">{svc.desc}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="usluge" className="relative py-16 md:py-32" style={{background: 'linear-gradient(180deg, #120700 0%, #1c0d03 50%, #0f0500 100%)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-3">
            Naše <span className="text-gold italic">usluge</span>
          </h2>
          <p className="font-inter text-cream/50 text-center mb-8 text-xs sm:text-sm">
            Kompletno dubinsko pranje za vaš dom i automobil
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={0.1 * (i + 1)}>
              <ServiceCard svc={svc} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}