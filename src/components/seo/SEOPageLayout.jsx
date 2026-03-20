import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimatedSection from '../landing/AnimatedSection';
import SectionDivider from '../landing/SectionDivider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SEOPageLayout({ h1, subtitle, children, faqs, relatedServices }) {
  return (
    <main className="pt-28 pb-24">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cream/50 hover:text-gold text-sm font-inter transition-colors duration-300"
        >
          <ArrowLeft size={15} />
          Nazad na početnu
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <AnimatedSection>
          <SectionDivider />
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-cream mt-8 mb-4">
            {h1.split(' ').map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="text-gold italic"> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </h1>
          <p className="font-inter text-cream/50 text-sm md:text-base">{subtitle}</p>
        </AnimatedSection>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 space-y-14">
        {React.Children.map(children, (child, i) => (
          <AnimatedSection delay={i * 0.1}>{child}</AnimatedSection>
        ))}

        {/* FAQ */}
        {faqs && (
          <AnimatedSection>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-6">Česta pitanja</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-gold/15 rounded-lg bg-secondary/30 px-6 data-[state=open]:border-gold/30 transition-colors"
                >
                  <AccordionTrigger className="font-inter text-cream text-sm py-5 hover:text-gold hover:no-underline transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-cream/50 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        )}

        {/* Related services */}
        {relatedServices && (
          <AnimatedSection>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-6">Ostale usluge u Pančevu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map(s => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="block border border-gold/20 rounded-lg p-4 text-center font-inter text-cream/70 text-sm hover:border-gold/50 hover:text-gold transition-all duration-300 bg-secondary/20"
                >
                  {s.title} →
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* CTA */}
        <AnimatedSection>
          <div className="border border-gold/20 rounded-xl bg-secondary/30 p-8 text-center">
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-3">Zakažite termin danas</h2>
            <p className="font-inter text-cream/50 text-sm mb-6">Pančevo i okolina — dolazimo kod vas</p>
            <Link
              to="/#kontakt"
              className="inline-block px-10 py-4 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Pošaljite upit
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}