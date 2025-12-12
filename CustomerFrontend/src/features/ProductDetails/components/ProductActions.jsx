import React, { useState } from 'react';
import { ShoppingCart, Heart, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const ProductActions = ({ product, onAddToCart, onToggleWishlist, isWishlisted }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Standard');
  const [showVariants, setShowVariants] = useState(false);

  const variants = ['Standard', 'Pro', 'Pro Max'];

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity, variant: selectedVariant });
  };

  return (
    <div className="space-y-3 sticky top-4">
      {/* Variant Selection */}
      <div>
        <label className="block text-xs font-semibold text-gray-900 mb-1.5">
          Select Variant
        </label>
        <div className="relative">
          <button
            onClick={() => setShowVariants(!showVariants)}
            className="w-full flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-lg hover:border-purple-400 transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium text-gray-900">{selectedVariant}</span>
            {showVariants ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>
          
          {showVariants && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => {
                    setSelectedVariant(variant);
                    setShowVariants(false);
                  }}
                  className={`w-full px-3 py-2 text-sm text-left hover:bg-purple-50 transition-colors cursor-pointer ${
                    selectedVariant === variant ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quantity Selector */}
      <div>
        <label className="block text-xs font-semibold text-gray-900 mb-1.5">
          Quantity
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            className="px-3 py-1.5 hover:bg-gray-100 transition-colors text-base font-bold text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-14 text-center border-0 focus:outline-none font-semibold text-sm text-gray-900"
            min={1}
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1.5 hover:bg-gray-100 transition-colors text-base font-bold text-gray-700 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2">
        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2.5 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          ADD TO CART
        </button>

        {/* Buy Now */}
        <button className="w-full bg-linear-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-2.5 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer">
          <Zap className="w-4 h-4" />
          BUY NOW
        </button>

        {/* Wishlist */}
        <button
          onClick={() => onToggleWishlist(product)}
          className={`w-full py-2 rounded-lg font-semibold text-xs border-2 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer ${
            isWishlisted
              ? 'bg-linear-to-r from-red-500 to-pink-500 border-red-400 text-white'
              : 'border-gray-300 text-gray-700 hover:border-purple-400 hover:bg-purple-50'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          {isWishlisted ? 'IN WISHLIST' : 'ADD TO WISHLIST'}
        </button>
      </div>

      {/* Total Price Summary */}
      <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-200 shadow-sm">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-700 text-xs font-medium">Subtotal ({quantity} {quantity === 1 ? 'item' : 'items'})</span>
          <span className="text-base font-bold text-gray-900">
            {product.price} × {quantity}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600 font-semibold">FREE</span>
        </div>
      </div>

      {/* Limited Offer Badge */}
      <div className="bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-3 text-center">
        <p className="text-xs font-bold text-amber-800 mb-1">⚡ Limited Time Offer</p>
        <p className="text-xs text-amber-700">Order now and save big!</p>
      </div>
    </div>
  );
};

export default ProductActions;
