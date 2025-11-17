import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Star, Truck, Shield, Headphones, Zap, Award, Users, ArrowRight, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Header */}
      <header className="relative z-20 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MAA LAXMI</h1>
                <p className="text-xs text-gray-400">Electronics Store</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-purple-300 hover:text-white transition-colors cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center">
            {/* Logo with glow effect */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-3xl shadow-2xl">
                  <ShoppingBag className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
            
            {/* Main heading with enhanced styling */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">Premium Electronics</span>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-4 tracking-tight">
                MAA LAXMI
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">Electronics Store</p>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of shopping with our premium collection of cutting-edge electronics. 
              <span className="text-purple-300 font-medium">Quality guaranteed</span>, prices unmatched.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => navigate('/home')}
                className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Shopping
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => navigate('/home')}
                className="px-10 py-5 border-2 border-purple-400 text-purple-300 rounded-2xl font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5 cursor-pointer"
              >
                Explore Catalog
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Secure Shopping</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MAA LAXMI</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Experience excellence in every aspect of your shopping journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 text-center hover:border-green-500/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast Delivery</h3>
                <p className="text-gray-400 leading-relaxed">Free express delivery on orders over ₹500. Get your products delivered within 24-48 hours.</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Bank-Level Security</h3>
                <p className="text-gray-400 leading-relaxed">Advanced encryption and secure payment gateways ensure your data is always protected.</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Support</h3>
                <p className="text-gray-400 leading-relaxed">Dedicated customer success team available 24/7 to assist you with any queries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-purple-200">Join our growing community of satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-purple-200 font-medium flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Happy Customers
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-purple-200 font-medium flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Premium Products
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">4.9</div>
                <div className="text-purple-200 font-medium flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  Customer Rating
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-purple-200 font-medium flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Experience 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join over 50,000 satisfied customers who trust MAA LAXMI for their electronics needs. 
              Start your premium shopping experience today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => navigate('/home')}
                className="group relative px-12 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6" />
                  Start Shopping Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="text-gray-400 text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Secure & Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Trusted by 50K+ customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MAA LAXMI</h3>
                  <p className="text-sm text-gray-400">Electronics Store</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted destination for premium electronics and exceptional shopping experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => navigate('/home')} className="block text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Products</button>
                <button onClick={() => navigate('/home')} className="block text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Categories</button>
                <button onClick={() => navigate('/home')} className="block text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Deals</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Account</h4>
              <div className="space-y-2">
                <button onClick={() => navigate('/login')} className="block text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Login</button>
                <button onClick={() => navigate('/signup')} className="block text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Sign Up</button>
                <button onClick={() => navigate('/orders')} className="block text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Orders</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MAA LAXMI Electronics Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;