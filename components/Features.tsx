import React, { useState } from 'react';
import { TrendingUp, Target, BarChart, Menu, X, Star, ArrowRight, CheckCircle } from 'lucide-react';
const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "Turn your data into actionable insights that drive real business growth and measurable results."
    },
    {
      icon: Target,
      title: "Targeted Campaigns", 
      description: "Reach the right audience with precision-targeted marketing campaigns that convert browsers into buyers."
    },
    {
      icon: BarChart,
      title: "ROI Optimization",
      description: "Track every dollar spent and optimize for maximum return on investment with detailed analytics."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Marketing Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver results that matter to your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
