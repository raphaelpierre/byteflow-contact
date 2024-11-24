import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TrustSignals from '../components/TrustSignals';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Hero />
      <Features />
      <div className="py-8 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <TrustSignals />
            <Testimonials />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}