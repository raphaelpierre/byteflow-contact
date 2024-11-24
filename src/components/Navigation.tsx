import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`w-full py-6 ${isHome ? 'absolute top-0 left-0 z-10' : ''}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center space-x-2">
          <BarChart3 className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">Byteflow</span>
        </Link>
        
        <div className="flex space-x-8">
          {isHome ? (
            <>
              <a href="#features" className="hover:text-blue-400 transition">Features</a>
              <a href="#security" className="hover:text-blue-400 transition">Security</a>
            </>
          ) : null}
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}