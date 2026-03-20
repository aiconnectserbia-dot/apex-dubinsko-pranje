import React from 'react';
import { Trophy, Sparkles, ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const features = [
  {
    icon: Trophy,
    title: 'Profesionalna oprema',
    desc: 'Kärcher mašine za dubinsko pranje'
  },
  {
    icon: Sparkles,
    title: 'Dubinsko čišćenje',
    desc: 'Prodiremo u vlakna i uklanjamo prljavštinu'
  },
  {
    icon: ShieldCheck,
    title: 'Bezbedno za sve',
    desc: 'Sredstva sigurna za decu i ljubimce'
  },
];

export default function AboutSection() {
  return (
    <section id="o-nama" className="relative py-20 md:py-32" style={{background: 'linear-gradient(160deg, #1a0800 0%, #2a1200 25%, #1a0900 60%, #0d0400 100%)'}}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-5">
            O <span className="text-gold italic">nama</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="font-inter text-cream/70 text-center max-w-2xl mx-auto leading-relaxed text-sm md:text-base mb-12">
            APEX je servis dubinskog pranja iz Pančeva. Koristimo profesionalnu opremu koja prodire duboko u vlakna, uklanja prljavštinu, bakterije i neprijatne mirise — vraćajući vaš nameštaj, tepih i auto enterijer u prvobitno stanje.
          </p>
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={0.1 * (i + 1)}>
              <div className="group flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0 border border-gold/15 rounded-xl bg-gradient-to-br from-[#1c0a01] to-[#0d0400] p-5 sm:p-8 hover:border-gold/35 transition-all duration-400">
                <div className="w-12 h-12 sm:w-14 sm:h-14 sm:mx-auto sm:mb-5 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:border-gold/70 group-hover:bg-gold/15 bg-gold/8 transition-all duration-400">
                  <feat.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-base sm:text-lg font-semibold text-cream sm:mb-2">{feat.title}</h3>
                  <p className="font-inter text-cream/60 text-xs sm:text-sm leading-relaxed sm:block">{feat.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}