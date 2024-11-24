import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="bg-slate-900">
        <Navigation />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}