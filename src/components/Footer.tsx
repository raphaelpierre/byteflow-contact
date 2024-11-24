import React from 'react';
import { BarChart3, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start space-y-1 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-400" />
              <span className="text-lg font-bold">Byteflow</span>
            </div>
            <div className="flex items-center text-gray-400 text-xs">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Geneva - The New Crypto Valley</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">© 2024 Byteflow. All rights reserved.</p>
            <p className="text-xs text-gray-500">Building the future of finance</p>
          </div>
        </div>
      </div>
    </footer>
  );
}