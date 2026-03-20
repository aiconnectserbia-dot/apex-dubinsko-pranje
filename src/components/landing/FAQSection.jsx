import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const faqs = [
  {
    q: 'Koliko traje pranje?',
    a: 'Vreme pranja zavisi od veličine i stepena zaprljanosti. U proseku, pranje garniture traje 1-2 sata, a dušeka oko 45 minuta. Automobili se rade 2-4 sata zavisno od veličine.'
  },
  {
    q: 'Da li dolazite na adresu?',
    a: 'Da! Dolazimo na vašu adresu sa kompletnom profesionalnom opremom. Pokrivamo Pančevo i okolinu.'
  },
  {
    q: 'Koja sredstva koristite?',
    a: 'Koristimo profesionalna sredstva za dubinsko pranje koja su ekološka i potpuno bezbedna za decu i kućne ljubimce. Efikasno uklanjaju prljavštinu, bakterije i neprijatne mirise.'
  },
  {
    q: 'Kada mogu da koristim nameštaj posle pranja?',
    a: 'Nameštaj je spreman za upotrebu nakon 4-6 sati, zavisno od materijala i ventilacije prostorije. Preporučujemo dobru cirkulaciju vazduha za brže sušenje.'
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#0f0600]">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-4">
            Česta <span className="text-gold italic">pitanja</span>
          </h2>
          <p className="font-inter text-cream/50 text-center mb-12 text-sm">
            Sve što treba da znate pre zakazivanja
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-gold/15 rounded-lg bg-secondary/30 px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="font-inter text-cream text-sm py-5 hover:text-gold hover:no-underline transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-cream/50 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}