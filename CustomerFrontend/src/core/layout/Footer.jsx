import React from 'react';
import { ShoppingCart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Clock, Shield, Truck, CreditCard, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to Newsletter</h3>
              <p className="text-white/80">Get exclusive offers and updates on new arrivals</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-5 py-3 rounded-lg bg-white/20 backdrop-blur-sm placeholder-white/60 text-white border border-white/30 focus:outline-none focus:border-white"
              />
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 cursor-pointer">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-r from-indigo-500 to-purple-500 p-3 rounded-xl">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MAA LAXMI STORE</h3>
                <p className="text-sm text-gray-400">Electronics & More</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted destination for quality electronics, gadgets, and accessories. Serving customers with excellence since 2020.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sat: 9AM-8PM | Sun: 10AM-6PM</span>
            </div>
            <div className="flex gap-2 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <button key={index} className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition group cursor-pointer">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-indigo-500 to-purple-500 rounded"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Shop', 'Categories', 'New Arrivals', 'Best Sellers', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2 group cursor-pointer">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-indigo-500 to-purple-500 rounded"></div>
              Customer Service
            </h4>
            <ul className="space-y-3">
              {['Track Order', 'Return Policy', 'Shipping Info', 'FAQs', 'Contact Us', 'Warranty'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2 group cursor-pointer">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-indigo-500 to-purple-500 rounded"></div>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-gray-700 transition">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-gray-400">East Ramkrishna Nagar,</p>
                  <p className="text-gray-400">Sorangpur, Patna - 27</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-gray-700 transition">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-gray-400">+91 997 306 1020</p>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-gray-700 transition">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-gray-400">info@maalaxmistore.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-green-400" />
            <div>
              <p className="font-semibold">Secure Payment</p>
              <p className="text-xs text-gray-400">100% secure transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-blue-400" />
            <div>
              <p className="font-semibold">Fast Delivery</p>
              <p className="text-xs text-gray-400">Same day shipping</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-yellow-400" />
            <div>
              <p className="font-semibold">Easy Returns</p>
              <p className="text-xs text-gray-400">7 days return policy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-8 h-8 text-purple-400" />
            <div>
              <p className="font-semibold">24/7 Support</p>
              <p className="text-xs text-gray-400">Dedicated support</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 MAA LAXMI STORE. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-white transition cursor-pointer">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
