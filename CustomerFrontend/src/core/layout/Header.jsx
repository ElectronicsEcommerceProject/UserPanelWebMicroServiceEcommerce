import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Bell, Menu, X, ChevronDown, LogOut, Heart, Package, Settings } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import Navigation from './Navigation';

const Header = ({ onCategoryChange, onSearch, cartCount = 0, wishlistCount = 0 }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = true;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        {/* Top Bar */}
        <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition"
                >
                  {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">MAA LAXMI</h1>
                    <p className="text-xs text-white/80">Electronics Store</p>
                  </div>
                </div>
              </div>

              {/* Search Bar - Desktop */}
              <div className="hidden lg:block flex-1 max-w-2xl mx-8">
                <SearchBar onSearch={onSearch} />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {/* Notifications */}
                <button className="relative p-2.5 hover:bg-white/10 rounded-lg transition group cursor-pointer">
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-9999">
                    Notifications
                  </span>
                </button>

                {/* Wishlist */}
                <button className="relative p-2.5 hover:bg-white/10 rounded-lg transition group hidden sm:block cursor-pointer">
                  <Heart className="w-6 h-6" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                  <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-9999">
                    Wishlist
                  </span>
                </button>

                {/* User Menu */}
                <div className="relative">
                  <button 
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center gap-2 p-2.5 hover:bg-white/10 rounded-lg transition cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <span className="hidden sm:block font-medium">Account</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showUserDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showUserDropdown && (
                    <>
                      <div 
                        className="fixed inset-0 z-9998" 
                        onClick={() => setShowUserDropdown(false)}
                      />
                      <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-9999">
                        {isLoggedIn ? (
                          <>
                            <div className="p-4 bg-linear-to-r from-indigo-500 to-purple-500 text-white">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                  <User className="w-6 h-6" />
                                </div>
                                <div>
                                  <p className="font-semibold">John Doe</p>
                                  <p className="text-sm text-white/80">john.doe@email.com</p>
                                </div>
                              </div>
                            </div>
                            <div className="p-2">
                              <button className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 transition">
                                <Package className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-700">My Orders</span>
                              </button>
                              <button className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 transition">
                                <Heart className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-700">Wishlist</span>
                              </button>
                              <button className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 transition">
                                <Settings className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-700">Settings</span>
                              </button>
                              <hr className="my-2" />
                              <button className="w-full px-4 py-3 text-left hover:bg-red-50 rounded-lg flex items-center gap-3 transition text-red-600">
                                <LogOut className="w-5 h-5" />
                                <span>Sign Out</span>
                              </button>
                            </div>
                          </>
                        ) : (
                          <div className="p-4">
                            <button className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition font-medium">
                              Sign In
                            </button>
                            <p className="text-center text-sm text-gray-600 mt-3">
                              New customer? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Cart */}
                <button className="relative flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg hover:bg-white/20 transition cursor-pointer">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="hidden sm:block font-medium">Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="lg:hidden pb-3">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Navigation onCategoryChange={onCategoryChange} />
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setShowMobileMenu(false)}>
          <div className="bg-white w-80 h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white">
              <h2 className="text-xl font-semibold">Menu</h2>
            </div>
            {/* Add mobile menu content here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
