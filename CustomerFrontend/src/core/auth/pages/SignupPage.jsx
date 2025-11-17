import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Sparkles, Shield, Truck, Award } from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flip-container" style={{perspective: '1000px', transformStyle: 'preserve-3d', transition: 'transform 0.7s ease-in-out'}}>
        {/* Left Side - Form */}
        <div className="w-1/2 flex items-center justify-center p-12 transform transition-all duration-700 ease-in-out">
          <div className="w-full max-w-md">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-500">Create Account</h3>
                <p className="text-gray-400 transition-all duration-500">Join MAA LAXMI today</p>
              </div>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Email address"
                  />
                </div>
                
                <div>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Confirm password"
                  />
                </div>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/home');
                  }}
                  className="w-full py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-4">
                  Already have an account?
                </p>
                <button
                  onClick={() => {
                    const container = document.querySelector('.flip-container');
                    container.style.transform = 'rotateY(-180deg)';
                    setTimeout(() => {
                      navigate('/login');
                    }, 350);
                  }}
                  className="w-full py-3 border-2 border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Sign in instead
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-linear-to-b from-transparent via-purple-500/30 to-transparent"></div>
        
        {/* Right Side - Text Content */}
        <div className="w-1/2 flex flex-col justify-center items-center p-12 text-white relative transform transition-all duration-700 ease-in-out">
          <button
            onClick={() => navigate('/')}
            className="absolute top-8 right-8 flex items-center gap-2 text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <div className="max-w-lg text-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-3 rounded-xl">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">MAA LAXMI</h1>
                <p className="text-purple-200">Electronics Store</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">Join Us Today</span>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <h2 className="text-5xl font-black bg-linear-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-4 transition-all duration-700">
                Sign Up
              </h2>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create an account and start your premium shopping experience with us. 
              <span className="text-purple-300 font-medium">Quality guaranteed</span>, prices unmatched.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Secure Shopping</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-400" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;