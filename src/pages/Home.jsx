import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import PricingSection from '../components/landing/PricingSection';
import GallerySection from '../components/landing/GallerySection';
import ReviewsSection from '../components/landing/ReviewsSection';
import ContactSection from '../components/landing/ContactSection';
import FAQSection from '../components/landing/FAQSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-brown font-inter">
      <Navbar />
      <main>
        <h1 className="sr-only">Dubinsko pranje nameštaja i tepiha u Pančevu</h1>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}