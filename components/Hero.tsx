import React, { useState } from "react";
import {
  TrendingUp,
  Target,
  BarChart,
  Menu,
  X,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with{" "}
              <span className="text-blue-600">Data-Driven</span> Marketing
              Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Stop guessing and start growing. We help businesses increase
              revenue by 200%+ through strategic marketing campaigns backed by
              real data and proven results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/#contact">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
                  Get Free Strategy Call
                </button>
              </Link>

              <Link href="/#services">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
                  View Case Studies
                </button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Free consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                No long-term contracts
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Business Analytics Dashboard"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">+340%</p>
                  <p className="text-sm text-gray-600">Average Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
