import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote:
        "Working with GrowthLab increased our lead generation by 340% in just 6 months. The ROI has been incredible.",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3B82F6&color=fff",
    },
    {
      name: "Michael Chen",
      company: "Digital Dynamics",
      quote:
        "Their data-driven approach helped us identify our best customer segments and triple our conversion rate.",
      avatar:
        "https://ui-avatars.com/api/?name=Michael+Chen&background=10B981&color=fff",
    },
    {
      name: "Emma Rodriguez",
      company: "Retail Solutions Co.",
      quote:
        "Professional, results-focused, and always available. Our revenue grew 250% in the first year working together.",
      avatar:
        "https://ui-avatars.com/api/?name=Emma+Rodriguez&background=F59E0B&color=fff",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real businesses who trusted us with their growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  {`"${testimonial.quote}"`}
                </blockquote>
              </blockquote>
              <div className="flex items-center">
                 <Image 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                  unoptimized
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
