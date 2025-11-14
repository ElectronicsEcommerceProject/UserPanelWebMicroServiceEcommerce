import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const WishlistSection = ({ wishlist, onRemoveFromWishlist, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">My Wishlist</h2>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600">Add items you love to your wishlist</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-indigo-600 uppercase mb-1">{product.brand}</p>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xl font-bold text-gray-900 mb-3">₹{product.price.toLocaleString()}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(product)}
                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistSection;
