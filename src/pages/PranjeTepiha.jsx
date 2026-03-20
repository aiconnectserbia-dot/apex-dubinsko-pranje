import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import SEOPageLayout from '../components/seo/SEOPageLayout';

const faqs = [
  { q: 'Koliko traje pranje tepiha u Pančevu?', a: 'Pranje tepiha obično traje 30–60 minuta zavisno od veličine. Tepih je potpuno suv i spreman za upotrebu za 4–8 sati.' },
  { q: 'Kolika je cena pranja tepiha u Pančevu?', a: 'Pranje tepiha se naplaćuje od 450 do 600 din po kvadratnom metru, zavisno od debljine i stepena zaprljanosti.' },
  { q: 'Da li dolazite na adresu ili se tepih nosi?', a: 'Dolazimo na vašu adresu u Pančevu sa profesionalnom opremom. Ne morate da nosite tepih nigde.' },
  { q: 'Da li možete da operete orijentalni ili vunen tepih?', a: 'Da, operemo različite vrste tepiha, uključujući sintetičke, vunene i orijentalne. Pre pranja procenjujemo materijal i biramo odgovarajući postupak.' },
];

const relatedServices = [
  { title: 'Dubinsko čišćenje', path: '/dubinsko-ciscenje-pancevo' },
  { title: 'Čišćenje nameštaja', path: '/ciscenje-namestaja-pancevo' },
  { title: 'Dubinsko pranje kola', path: '/dubinsko-pranje-kola-pancevo' },
];

export default function PranjeTepiha() {
  return (
    <>
      <Helmet>
        <title>Pranje tepiha Pančevo | APEX – Profesionalno čišćenje</title>
        <meta name="description" content="Profesionalno pranje tepiha u Pančevu. Dolazimo na adresu, čistimo sve vrste tepiha od 450 din/m². Rezultati vidljivi odmah. Zakažite termin!" />
        <link rel="canonical" href="https://apex-pranje.rs/pranje-tepiha-pancevo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-dark-brown font-inter">
        <Navbar />
        <SEOPageLayout
          h1="Pranje tepiha Pančevo"
          subtitle="Dubinsko pranje svih vrsta tepiha — na vašoj adresi"
          faqs={faqs}
          relatedServices={relatedServices}
        >
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Zašto dubinski prati tepih?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-4">
              Tepisi su jedni od najvećih sakupljača prašine, grinja i bakterija u domaćinstvu. Redovnim usisavanjem uklanjate samo površinski sloj, dok dubinsko pranje čisti do osnove vlakana i uklanja sve što je akumulirano tokom vremena.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Naročito je preporučljivo dubinsko pranje tepiha jednom do dva puta godišnje, ili odmah po pojavi mrlja i neprijatnih mirisa.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Koje vrste tepiha peremo?</h2>
            <ul className="space-y-2 font-inter text-cream/60 text-sm leading-relaxed">
              {[
                'Sintetički tepisi (poliester, najlon, polipropilen)',
                'Vuneni tepisi',
                'Orijentalni tepisi',
                'Shaggy tepisi',
                'Tepisi za dečje sobe',
                'Poslovni prostori — kancelarije, restorani',
              ].map(item => (
                <li key={item} className="flex gap-2"><span className="text-gold">✓</span> {item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Kako peremo tepihe?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Svaki tepih pre pranja pregledamo i testiramo materijal. Zatim nanosimo sredstvo za predobradu koje razgrađuje prljavštinu i masti. Profesionalnom mašinom pod kontrolisanim pritiskom čistimo vlakna, a ekstrakcijom uklanjamo svu vlagu i prljavštinu.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Rezultat: tepih koji izgleda i miriše kao nov, sa sačuvanom strukturom vlakana.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Cena pranja tepiha u Pančevu</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ['Sintetički tepih', '450 din/m²'],
                ['Vunen / orijentalni', '550–600 din/m²'],
              ].map(([name, price]) => (
                <div key={name} className="flex justify-between border-b border-gold/10 pb-2">
                  <span className="font-inter text-cream/60">{name}</span>
                  <span className="font-inter text-gold font-semibold">{price}</span>
                </div>
              ))}
            </div>
            <p className="font-inter text-cream/40 text-xs mt-4">* Minimalna naplata 1.500 din. Cena zavisi od stanja i veličine tepiha.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Pranje tepiha na vašoj adresi — Pančevo</h2>
            <p className="font-inter text-cream/60 leading-relaxed">
              Dolazimo u vaš dom ili poslovni prostor u Pančevu i okolini. Celokupna oprema je naša — vi samo otvorite vrata. Kontaktirajte nas i zakažite termin koji vam odgovara.
            </p>
          </section>
        </SEOPageLayout>
        <Footer />
      </div>
    </>
  );
}