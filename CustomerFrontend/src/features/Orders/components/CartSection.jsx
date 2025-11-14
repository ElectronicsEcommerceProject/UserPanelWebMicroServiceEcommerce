import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

const CartSection = ({ cart, onUpdateQuantity, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
          <p className="text-gray-600">Add items to your cart to see them here</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-3 md:gap-4 p-3 md:p-4 border border-gray-200 rounded-xl">
                <img src={item.image} alt={item.name} className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-indigo-600 uppercase mb-1">{item.brand}</p>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-lg font-bold text-gray-900">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between w-full sm:w-auto">
                  <button
                    onClick={() => onRemoveFromCart(item)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                      className="p-1 bg-gray-100 hover:bg-gray-200 rounded transition cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                      className="p-1 bg-gray-100 hover:bg-gray-200 rounded transition cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-indigo-600">₹{total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSection;
