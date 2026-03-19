import React, { useEffect, useRef } from 'react';
import { Sofa, BedDouble, Layers, Car } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const services = [
  {
    icon: Sofa,
    title: 'Garniture',
    desc: 'Stolice, fotelje, dvosedi, trosedi, ugaone garniture — vraćamo ih u prvobitno stanje.',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/e3c8699c8_IMG_4442.jpg'
  },
  {
    icon: BedDouble,
    title: 'Dušeci',
    desc: 'Singl i bračni dušeci, jednostrano ili obostrano — za zdrav i čist san.',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/532aee84d_IMG_4443.jpg'
  },
  {
    icon: Layers,
    title: 'Tepisi i ostalo',
    desc: 'Taburei, jastuci, tepisi po m² — svaki detalj zaslužuje čistoću.',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/47204fc99_IMG_4434.jpg'
  },
  {
    icon: Car,
    title: 'Automobili',
    desc: 'Mali auto, limuzina, SUV, karavan — enterijer kao iz salona.',
    image: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6bd190a5c_IMG_4438.jpg'
  },
];

// Duplicate for seamless loop
const allServices = [...services, ...services];

function ServiceCard({ svc }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gold/15 bg-gradient-to-br from-secondary/80 to-dark-brown hover:border-gold/40 transition-all duration-500 cursor-pointer flex-shrink-0 w-72 md:w-80">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-700">
        <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-brown via-dark-brown/90 to-dark-brown/60" />

      <div className="relative p-8">
        <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/60 transition-all duration-500">
          <svc.icon size={22} className="text-gold" />
        </div>
        <h3 className="font-playfair text-2xl font-semibold text-cream mb-3">{svc.title}</h3>
        <p className="font-inter text-cream/50 text-sm leading-relaxed">{svc.desc}</p>
        <div className="mt-6 flex items-center gap-2 text-gold text-sm font-inter opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
          <span>Pogledajte cene</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section id="usluge" className="relative py-24 md:py-32 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-4">
            Naše <span className="text-gold italic">usluge</span>
          </h2>
          <p className="font-inter text-cream/50 text-center mb-16 text-sm">
            Kompletno dubinsko pranje za vaš dom i automobil
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite scroll carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-brown to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-brown to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-6 px-6"
          style={{ willChange: 'transform' }}
        >
          {allServices.map((svc, i) => (
            <ServiceCard key={`${svc.title}-${i}`} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}