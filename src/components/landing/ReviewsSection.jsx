import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const reviews = [
  {
    name: 'Mateja Nikolić',
    initials: 'MN',
    avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=80&h=80&fit=crop&crop=face',
    text: 'Neverovatna transformacija ugaone garniture! Izgledala je kao nova posle pranja. Brzi, profesionalni, preporučujem svima!'
  },
  {
    name: 'Sara Marin',
    initials: 'SM',
    text: 'Konačno pronašla servis koji zaista dubinski opere dušek. Osećaj čistoće je neverovatаn. Definitivno ću ih ponovo pozvati!'
  },
  {
    name: 'Mateja Pavlović',
    initials: 'MP',
    avatar: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=80&h=80&fit=crop&crop=face',
    text: 'Auto enterijer je bio katastrofa, izašao kao iz salona. Cena je više nego poštena za ovaj kvalitet.'
  },
  {
    name: 'Mirko Stepić',
    initials: 'MS',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
    text: 'Pranje tepiha na visokom nivou. Ekipa je tačna, ljubazna i pedantna. Preporučujem APEX bez rezerve.'
  },
  {
    name: 'Matea Ugrinović',
    initials: 'MU',
    text: 'Stolice u restoranu su oprane besprekorno. Saradnja je bila izuzetno profesionalna.'
  },
];

const allReviews = [...reviews, ...reviews];

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[320px] border border-gold/15 rounded-lg bg-secondary/50 p-8 hover:border-gold/30 transition-all duration-500 flex flex-col mx-3">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={14} className="fill-gold text-gold" />
        ))}
      </div>

      <p className="font-inter text-cream/60 text-sm leading-relaxed italic flex-1 mb-6">
        "{review.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
        {review.avatar ? (
          <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-gold/30" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#b0b3b8] border border-gold/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f5f5f5" className="w-6 h-6">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        )}
        <span className="font-inter text-cream/80 text-sm font-medium">{review.name}</span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const speed = 0.5;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      posRef.current += speed;
      const half = track.scrollWidth / 2;
      if (posRef.current >= half) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section id="recenzije" className="relative py-24 md:py-32 bg-dark-brown overflow-hidden">
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
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-brown to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-brown to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex will-change-transform py-2">
            {allReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}