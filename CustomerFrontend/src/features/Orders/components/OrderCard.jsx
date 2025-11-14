import React, { useState } from 'react';
import { ChevronDown, Package } from 'lucide-react';

const OrderCard = ({ order }) => {
  const [showItems, setShowItems] = useState(false);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    delivered: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
      <div className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">Order #{order.id}</h3>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-600">Status:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${statusColors[order.status]}`}>
                {order.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">Order Date: {order.displayDate}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">Total: ₹{order.total.toLocaleString()}</p>
          </div>
          
          <button
            onClick={() => setShowItems(!showItems)}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition font-medium cursor-pointer text-sm md:text-base w-full sm:w-auto"
          >
            Show Items
            <ChevronDown className={`w-4 h-4 transition-transform ${showItems ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {showItems && (
          <div className="mt-4 pt-4 border-t">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Order Items
            </h4>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900">₹{item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
