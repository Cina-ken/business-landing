"use client";
import React, { useState } from 'react';
import { TrendingUp} from 'lucide-react';

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">GrowthLab</span>
            </div>
            <p className="text-gray-400 mb-6">
              Helping businesses achieve sustainable growth through data-driven marketing strategies and proven results.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-sm">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-sm">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-sm">Ig</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Marketing Strategy</a></li>
              <li><a href="#" className="hover:text-white">PPC Management</a></li>
              <li><a href="#" className="hover:text-white">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@growthlab.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy;  {year ? year : ""} GrowthLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;