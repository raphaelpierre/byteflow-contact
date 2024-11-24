import React from 'react';
import Navigation from './Navigation';
import { ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="relative h-[500px] flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
      
      <Navigation />

      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
              Next-Gen Trading for the Web3 Era
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-4">
              Simplify your crypto journey with powerful tools designed for modern investors
            </p>
            <a
              href="https://raphaelpierre.github.io/byteflow-dapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition group"
            >
              Try Demo
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}