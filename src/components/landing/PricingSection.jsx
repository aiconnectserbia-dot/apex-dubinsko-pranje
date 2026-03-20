import React from 'react';
import { Sofa, BedDouble, Layers, Car } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const pricingData = [
  {
    category: 'Garniture',
    icon: Sofa,
    items: [
      { name: 'Stolica', price: '700–1.000 din' },
      { name: 'Fotelja', price: '1.500 din' },
      { name: 'Dvosed', price: '3.000 din' },
      { name: 'Trosed', price: '4.500 din' },
      { name: 'Ugaona garnitura', price: '5.500–7.000 din' },
    ]
  },
  {
    category: 'Dušeci',
    icon: BedDouble,
    items: [
      { name: 'Singl — jednostrano', price: '2.500 din' },
      { name: 'Singl — obostrano', price: '3.500 din' },
      { name: 'Bračni — jednostrano', price: '3.500 din' },
      { name: 'Bračni — obostrano', price: '5.000 din' },
    ]
  },
  {
    category: 'Ostalo',
    icon: Layers,
    items: [
      { name: 'Tabure', price: '700–1.000 din' },
      { name: 'Jastuk', price: '1.000 din' },
      { name: 'Tepih', price: '450–600 din/m²' },
    ]
  },
  {
    category: 'Automobili',
    icon: Car,
    items: [
      { name: 'Mali auto', price: '7.000 din' },
      { name: 'Limuzina (srednja)', price: '10.000 din' },
      { name: 'SUV / Karavan', price: '12.000 din' },
      { name: 'Veliki SUV', price: '15.000 din' },
    ]
  },
];

export default function PricingSection() {
  return (
    <section id="cenovnik" className="relative py-24 md:py-32 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-4">
            Transparentne <span className="text-gold italic">cene</span>
          </h2>
          <p className="font-inter text-cream/50 text-center mb-16 text-sm">
            Bez skrivenih troškova — znate unapred koliko plaćate
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pricingData.map((group, i) => (
            <AnimatedSection key={group.category} delay={0.1 * (i + 1)}>
              <div className="group relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-[#c8a97a] to-[#b8976a] hover:border-gold/50 transition-all duration-500 h-full">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-full h-px bg-gold" />
                  <div className="w-px h-full bg-gold ml-auto -mt-px" />
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-full h-px bg-gold" />
                  <div className="w-px h-full bg-gold -mt-px" />
                </div>

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-7 pb-5 border-b border-gold/30">
                    <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center bg-gold/15 group-hover:bg-gold/25 transition-colors duration-500 flex-shrink-0">
                      <group.icon size={18} className="text-gold" />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-dark-brown">{group.category}</h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-0">
                    {group.items.map((item, idx) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-3.5 border-b border-gold/8 last:border-0 group/row"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-gold/30 group-hover/row:bg-gold/60 transition-colors duration-300 flex-shrink-0" />
                          <span className="font-inter text-dark-brown/70 text-sm group-hover/row:text-dark-brown transition-colors duration-300">{item.name}</span>
                        </div>
                        <span className="font-inter text-gold font-semibold text-sm whitespace-nowrap ml-4 tabular-nums">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="text-center text-cream/25 text-xs font-inter mt-10">
            * Konačna cena zavisi od veličine i stepena zaprljanosti
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}