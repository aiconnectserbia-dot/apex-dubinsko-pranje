import React from 'react';
import { Trophy, Sparkles, ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const features = [
  {
    icon: Trophy,
    title: 'Profesionalna oprema',
    desc: 'Koristimo Kärcher profesionalne mašine za dubinsko pranje'
  },
  {
    icon: Sparkles,
    title: 'Dubinsko čišćenje',
    desc: 'Prodiremo duboko u vlakna i uklanjamo svu prljavštinu'
  },
  {
    icon: ShieldCheck,
    title: 'Bezbedno za sve',
    desc: 'Sredstva bezbedna za decu i kućne ljubimce'
  },
];

export default function AboutSection() {
  return (
    <section id="o-nama" className="relative py-24 md:py-32 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-6">
            O <span className="text-gold italic">nama</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="font-inter text-cream/60 text-center max-w-3xl mx-auto leading-relaxed text-base md:text-lg mb-16">
            APEX je premium servis dubinskog pranja iz Pančeva. Koristimo profesionalnu opremu i sredstva koja prodiru duboko u vlakna, uklanjaju prljavštinu, bakterije i neprijatne mirise — ostavljajući vaš nameštaj, tepih i auto enterijer kao nov. Radimo sa strašću prema čistoći i posvećenošću svakom detalju.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={0.1 * (i + 1)}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-500">
                  <feat.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-cream mb-3">{feat.title}</h3>
                <p className="font-inter text-cream/50 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}