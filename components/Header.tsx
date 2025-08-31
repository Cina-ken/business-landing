"use client";
import React, { useState } from "react";
import {
  TrendingUp, Menu, X} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <Link href="/">
              <span className="ml-2 text-xl font-bold text-gray-900">
                GrowthLab
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#contact">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600"
              >
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
