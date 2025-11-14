import React, { useState } from 'react';
import { ChevronDown, Grid, Smartphone, Headphones, Battery, Speaker, Cable, Cpu, Watch } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = [
  { id: 1, name: 'All Products', icon: Grid },
  { id: 2, name: 'Smartphones', icon: Smartphone },
  { id: 3, name: 'Earphones', icon: Headphones },
  { id: 4, name: 'Chargers', icon: Battery },
  { id: 5, name: 'Speakers', icon: Speaker },
  { id: 6, name: 'Cables', icon: Cable },
  { id: 7, name: 'Accessories', icon: Cpu },
  { id: 8, name: 'Smartwatches', icon: Watch }
];

const Navigation = ({ onCategoryChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Products');

  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
    setShowCategoryDropdown(false);
    
    if (location.pathname === '/orders') {
      navigate(`/?category=${encodeURIComponent(categoryName)}`);
    } else if (onCategoryChange) {
      onCategoryChange(categoryName);
    }
  };

  return (
    <nav className="bg-white border-b sticky top-[76px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
          {/* Categories Dropdown */}
          <div className="relative">
            <button 
              onMouseEnter={() => setShowCategoryDropdown(true)}
              onMouseLeave={() => setShowCategoryDropdown(false)}
              className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all font-medium whitespace-nowrap cursor-pointer"
            >
              <Grid className="w-5 h-5" />
              All Categories
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {showCategoryDropdown && (
              <div 
                onMouseEnter={() => setShowCategoryDropdown(true)}
                onMouseLeave={() => setShowCategoryDropdown(false)}
                className="fixed w-64 bg-white rounded-xl shadow-2xl py-2 border"
                style={{ 
                  zIndex: 999999,
                  top: '120px',
                  left: '16px'
                }}
              >
                {categories.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.name)}
                      className="w-full px-4 py-3 text-left hover:bg-indigo-50 flex items-center gap-3 transition group cursor-pointer"
                    >
                      <Icon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 group-hover:text-indigo-600 transition">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Links */}
          {categories.slice(1, 6).map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all font-medium whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.name
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}

          {/* Special Offers */}
          <button 
            onClick={() => {
              if (location.pathname === '/orders') {
                navigate('/?deals=hot');
              }
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-linear-to-r from-red-500 to-pink-500 text-white font-medium whitespace-nowrap hover:shadow-lg transition-all ml-auto cursor-pointer"
          >
            🔥 Hot Deals
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
