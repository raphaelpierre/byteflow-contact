import React from 'react';
import { Lock, Building, ExternalLink } from 'lucide-react';

export default function TrustSignals() {
  const trustItems = [
    {
      icon: <Lock className="h-5 w-5 text-blue-400" />,
      title: "FINMA Registration",
      description: "Currently undergoing regulatory compliance process",
      badge: "In Progress"
    },
    {
      icon: <Building className="h-5 w-5 text-blue-400" />,
      title: "Institutional Grade",
      description: "Enterprise-level security and reliability"
    }
  ];

  return (
    <div className="md:w-1/2 mb-6 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">
        Built for the Future of Finance
      </h2>
      <div className="space-y-3">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="mt-1">{item.icon}</div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-400/10 text-blue-400 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <a 
          href="https://raphaelpierre.github.io/byteflow-dapp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition"
        >
          Experience our demo platform
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
}