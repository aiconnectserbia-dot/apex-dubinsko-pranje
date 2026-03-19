import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const pricingData = [
  {
    category: 'Garniture',
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
    items: [
      { name: 'Singl — jednostrano', price: '2.500 din' },
      { name: 'Singl — obostrano', price: '3.500 din' },
      { name: 'Bračni — jednostrano', price: '3.500 din' },
      { name: 'Bračni — obostrano', price: '5.000 din' },
    ]
  },
  {
    category: 'Ostalo',
    items: [
      { name: 'Tabure', price: '700–1.000 din' },
      { name: 'Jastuk', price: '1.000 din' },
      { name: 'Tepih', price: '450–600 din/m²' },
    ]
  },
  {
    category: 'Automobili',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingData.map((group, i) => (
            <AnimatedSection key={group.category} delay={0.1 * (i + 1)}>
              <div className="border border-gold/15 rounded-lg bg-secondary/50 p-8 hover:border-gold/30 transition-all duration-500">
                <h3 className="font-playfair text-2xl font-semibold text-gold mb-6">{group.category}</h3>
                <div className="space-y-4">
                  {group.items.map(item => (
                    <div key={item.name} className="flex items-center justify-between border-b border-gold/8 pb-3 last:border-0 last:pb-0">
                      <span className="font-inter text-cream/70 text-sm">{item.name}</span>
                      <span className="font-inter text-gold font-semibold text-sm whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}