import React, { useState } from 'react';
import { Star, Shield, TrendingUp, Award, Package, DollarSign, Gift, Tag, ChevronDown, ChevronUp } from 'lucide-react';

const ProductInfo = ({ product }) => {
  const [showOffers, setShowOffers] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-4">
      {/* Brand Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
        <Award className="w-3.5 h-3.5 text-white" />
        <span className="text-xs font-bold text-white">{product.brand}</span>
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
          {product.name}
        </h1>
        <p className="text-gray-600 text-sm flex items-center gap-1.5">
          <Award className="w-4 h-4 text-purple-600" /> 
          <span>Premium quality from {product.brand}</span>
        </p>
      </div>

      {/* Rating Section */}
      <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews || 0} reviews)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-xs font-medium text-green-600">Trending</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 rounded-2xl p-5 shadow-lg border-2 border-green-300">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-3xl lg:text-4xl font-black text-white drop-shadow-md">
            {product.price}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-white/70 line-through">
                {product.originalPrice}
              </span>
              <span className="px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                {product.discount}
              </span>
            </>
          )}
        </div>
        {product.discount && (
          <p className="text-xs text-white font-semibold flex items-center gap-1.5">
            <DollarSign className="w-4 h-4" /> 
            Save {product.discount} today!
          </p>
        )}
      </div>

      {/* Key Features */}
      <div className="bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl p-5 shadow-lg border-2 border-blue-300">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Gift className="w-5 h-5" /> Key Features
        </h3>
        <ul className="space-y-2.5">
          {[
            'Premium quality materials',
            'Manufacturer warranty',
            'Free shipping included',
            'Easy 30-day returns',
            'Authentic & verified'
          ].map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <div className="shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-md mt-0.5">
                <span className="text-green-600 text-xs font-bold">✓</span>
              </div>
              <span className="text-white font-medium text-sm leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-2">Product Description</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {product.description || `Experience the perfect blend of quality and style with ${product.name}. 
          Crafted with premium materials and attention to detail, this ${product.category.toLowerCase()} 
          from ${product.brand} delivers exceptional performance and lasting durability.`}
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
        <div className="text-center">
          <Shield className="w-6 h-6 text-green-600 mx-auto mb-1.5" />
          <p className="text-xs font-semibold text-gray-900">Secure</p>
        </div>
        <div className="text-center">
          <Package className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
          <p className="text-xs font-semibold text-gray-900">Fast Delivery</p>
        </div>
        <div className="text-center">
          <Award className="w-6 h-6 text-purple-600 mx-auto mb-1.5" />
          <p className="text-xs font-semibold text-gray-900">Top Quality</p>
        </div>
      </div>

      {/* Available Offers & Coupons */}
      <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <Tag className="w-4 h-4 text-amber-600" /> Available Offers & Coupons
          </h3>
          <button
            onClick={() => setShowOffers(!showOffers)}
            className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer"
          >
            {showOffers ? (
              <>
                Hide Offers <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Show Offers <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
        
        {showOffers && (
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-amber-200">
              <p className="text-xs text-gray-600 text-center">No coupons available at the moment.</p>
            </div>
            
            <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-200">
              <h4 className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-purple-600" /> Your Personal Offers
              </h4>
              <p className="text-xs text-gray-600 text-center mb-2">No personalized offers available at the moment.</p>
              <p className="text-xs text-gray-500 text-center">Check back later for exclusive deals!</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <h4 className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                💳 Have a Coupon Code?
              </h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-4 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Tag */}
      <div>
        <h4 className="text-xs font-semibold text-gray-700 mb-1.5">Category</h4>
        <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-xs font-medium transition-colors cursor-pointer">
          {product.category}
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
