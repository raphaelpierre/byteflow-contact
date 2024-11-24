import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Fund Manager",
      quote: "Byteflow's analytics have transformed how we approach market analysis."
    },
    {
      name: "Marcus Weber",
      role: "Investment Advisor",
      quote: "The gold standard for Web3 investment tools. Exceptional quality and reliability."
    }
  ];

  return (
    <div className="md:w-1/2 bg-slate-800 p-4 rounded-xl">
      <h3 className="text-xl font-bold mb-3">Trusted by Industry Leaders</h3>
      <div className="space-y-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-3">
            <p className="text-gray-300 text-sm italic mb-1">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-gray-400">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}