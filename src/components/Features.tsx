import React from 'react';
import { LineChart, Wallet, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <LineChart className="h-6 w-6 text-blue-400" />,
      title: "Real-time Analytics",
      description: "Advanced market insights and portfolio tracking"
    },
    {
      icon: <Wallet className="h-6 w-6 text-blue-400" />,
      title: "Portfolio Management",
      description: "Seamlessly manage your digital assets"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Enterprise Security",
      description: "Industry-leading security protocols"
    }
  ];

  return (
    <section id="features" className="py-8 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Powerful Features for Modern Investors
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-700/50 p-4 rounded-xl hover:transform hover:-translate-y-1 transition"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}