import React, { useState, useRef } from 'react';
import { Package, User, Heart, Settings, ChevronRight, ChevronDown, Bell, ShoppingCart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [avatar, setAvatar] = useState(null);
  const [showAccountSubmenu, setShowAccountSubmenu] = useState(false);
  const fileInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const menuItems = [
    { icon: Package, label: 'MY ORDERS', path: '/orders', color: 'text-orange-600' },
    { icon: User, label: 'ACCOUNT SETTINGS', path: '/account', hasSubmenu: true },
    { icon: Heart, label: 'WISHLIST', path: '/wishlist', color: 'text-pink-600' },
    { icon: Settings, label: 'SETTINGS', path: '/settings', hasSubmenu: true }
  ];

  return (
    <div className="w-full lg:w-64 bg-white rounded-xl shadow-sm p-4 h-fit lg:sticky lg:top-24">
      {/* User Profile */}
      <div className="flex items-center gap-3 pb-4 border-b mb-4 flex-wrap sm:flex-nowrap">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
          {avatar ? (
            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <User className="w-6 h-6 text-gray-600" />
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-800">Hello, John</p>
          <p className="text-sm text-gray-600">John Doe</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="text-xs text-indigo-600 hover:underline cursor-pointer"
          >
            Change Avatar
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1">
        <div>
          <button
            onClick={() => setShowAccountSubmenu(!showAccountSubmenu)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm">ACCOUNT SETTINGS</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${showAccountSubmenu ? 'rotate-180' : ''}`} />
          </button>
          {showAccountSubmenu && (
            <div className="ml-4 mt-1 space-y-1">
              <button
                onClick={() => setActiveSection('profile')}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition cursor-pointer ${
                  activeSection === 'profile'
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Profile Information
              </button>
              <button
                onClick={() => setActiveSection('address')}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition cursor-pointer ${
                  activeSection === 'address'
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Manage Address
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveSection('orders')}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition cursor-pointer ${
            activeSection === 'orders'
              ? 'bg-indigo-50 text-indigo-600 font-semibold' 
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <Package className={`w-5 h-5 ${activeSection === 'orders' ? 'text-indigo-600' : 'text-orange-600'}`} />
            <span className="text-sm">MY ORDERS</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSection('notifications')}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition cursor-pointer ${
            activeSection === 'notifications'
              ? 'bg-indigo-50 text-indigo-600 font-semibold' 
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <Bell className={`w-5 h-5 ${activeSection === 'notifications' ? 'text-indigo-600' : 'text-blue-600'}`} />
            <span className="text-sm">NOTIFICATIONS</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSection('wishlist')}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition cursor-pointer ${
            activeSection === 'wishlist'
              ? 'bg-indigo-50 text-indigo-600 font-semibold' 
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <Heart className={`w-5 h-5 ${activeSection === 'wishlist' ? 'text-indigo-600' : 'text-pink-600'}`} />
            <span className="text-sm">WISHLIST</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSection('cart')}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition cursor-pointer ${
            activeSection === 'cart'
              ? 'bg-indigo-50 text-indigo-600 font-semibold' 
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <ShoppingCart className={`w-5 h-5 ${activeSection === 'cart' ? 'text-indigo-600' : 'text-green-600'}`} />
            <span className="text-sm">CART</span>
          </div>
        </button>

        <button
          onClick={() => navigate('/settings')}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="text-sm">SETTINGS</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
