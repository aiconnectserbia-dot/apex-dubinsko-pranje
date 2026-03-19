import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const reviews = [
  {
    name: 'Mateja Nikolić',
    initials: 'MN',
    text: 'Neverovatna transformacija ugaone garniture! Izgledala je kao nova posle pranja. Brzi, profesionalni, preporučujem svima!'
  },
  {
    name: 'Sara Marin',
    initials: 'SM',
    text: 'Konačno pronašla servis koji zaista dubinski opere dušek. Osećaj čistoće je neverovatаn. Definitivno se vraćam!'
  },
  {
    name: 'Mateja Pavlović',
    initials: 'MP',
    text: 'Auto enterijer je bio katastrofa, izašao kao iz salona. Cena je više nego poštena za ovaj kvalitet.'
  },
  {
    name: 'Mirko Stepić',
    initials: 'MS',
    text: 'Pranje tepiha na visokom nivou. Ekipa je tačna, ljubazna i pedantna. Preporučujem APEX bez rezerve.'
  },
  {
    name: 'Matea Ugrinović',
    initials: 'MU',
    text: 'Stolice u restoranu su oprane besprekorno. Saradnja je bila izuzetno profesionalna.'
  },
];

export default function ReviewsSection() {
  return (
    <section id="recenzije" className="relative py-24 md:py-32 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-4">
            Šta kažu naši <span className="text-gold italic">klijenti</span>
          </h2>
          <p className="font-inter text-cream/50 text-center mb-16 text-sm">
            Zadovoljstvo naših klijenata je naš najveći uspeh
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={0.1 * (i + 1)} className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <div className="border border-gold/15 rounded-lg bg-secondary/50 p-8 hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-inter text-cream/60 text-sm leading-relaxed italic flex-1 mb-6">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                    <span className="text-gold font-playfair text-sm font-semibold">{review.initials}</span>
                  </div>
                  <span className="font-inter text-cream/80 text-sm font-medium">{review.name}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}