import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, Zap } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const discountPercentage = product.discount || 0;
  const originalPrice = product.price;
  const discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {discountPercentage > 0 && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            -{discountPercentage}% OFF
          </span>
        )}
        {product.stock === 'Limited Stock' && (
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Limited
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white shadow-lg transition group/wishlist cursor-pointer"
      >
        <Heart className={`w-5 h-5 transition ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 group-hover/wishlist:text-red-500'}`} />
      </button>

      {/* Product Image */}
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoading(false)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition transform hover:scale-110 cursor-pointer">
            <Eye className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition transform hover:scale-110 cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">
          {product.brand}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ₹{discountedPrice.toLocaleString()}
            </p>
            {discountPercentage > 0 && (
              <p className="text-sm text-gray-500 line-through">
                ₹{originalPrice.toLocaleString()}
              </p>
            )}
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            product.stock === 'In Stock' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-orange-100 text-orange-700'
          }`}>
            {product.stock}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
