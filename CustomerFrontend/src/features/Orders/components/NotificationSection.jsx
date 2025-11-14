import React from 'react';
import { Bell, Package, Heart, ShoppingCart, Trash2 } from 'lucide-react';

const NotificationSection = ({ notifications, onRemoveNotification, onClearAll }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Notifications</h2>
        {notifications.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-red-600 hover:underline cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>
      
      {notifications.length === 0 ? (
        <div className="text-center py-20">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No notifications</h3>
          <p className="text-gray-600">You're all caught up!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.type === 'order' ? Package : notification.type === 'wishlist' ? Heart : ShoppingCart;
            const colorClasses = {
              order: { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', text: 'text-white' },
              wishlist: { bg: 'bg-gradient-to-br from-pink-500 to-pink-600', text: 'text-white' },
              cart: { bg: 'bg-gradient-to-br from-green-500 to-green-600', text: 'text-white' }
            };
            const colors = colorClasses[notification.type];
            
            return (
              <div key={notification.id} className="flex gap-4 p-4 bg-white border-2 border-gray-100 rounded-xl hover:border-indigo-200 hover:shadow-md transition-all">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${colors.bg} shadow-lg flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1 text-base">{notification.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{notification.message}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{notification.time}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveNotification(notification.id)}
                  className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer flex-shrink-0"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NotificationSection;
