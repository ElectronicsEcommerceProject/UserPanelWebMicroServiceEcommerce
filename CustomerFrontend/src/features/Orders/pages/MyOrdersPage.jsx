import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronDown, Search, Package, Calendar } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MainLayout from '../../../core/layout/MainLayout';
import OrderCard from '../components/OrderCard';
import Sidebar from '../components/Sidebar';
import ProfileInformation from '../components/ProfileInformation';
import ManageAddress from '../components/ManageAddress';
import WishlistSection from '../components/WishlistSection';
import CartSection from '../components/CartSection';
import NotificationSection from '../components/NotificationSection';
import { mockOrders } from '../data/mockOrders';

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState(searchParams.get('section') || 'orders');

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
      // Force refresh cart and wishlist from localStorage when section changes
      const savedCart = localStorage.getItem('cart');
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    }
  }, [searchParams]);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'order', title: 'Order Delivered', message: 'Your order #ORD-123 has been delivered', time: '2 hours ago' },
    { id: 2, type: 'wishlist', title: 'Price Drop', message: 'Item in your wishlist is now on sale', time: '5 hours ago' },
    { id: 3, type: 'cart', title: 'Cart Reminder', message: 'You have items waiting in your cart', time: '1 day ago' }
  ]);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedWishlist = localStorage.getItem('wishlist');
      const savedCart = localStorage.getItem('cart');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      if (savedCart) setCart(JSON.parse(savedCart));
    };
    
    const interval = setInterval(handleStorageChange, 500);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleRemoveFromWishlist = useCallback((product) => {
    setWishlist(prevWishlist => {
      const updated = prevWishlist.filter(item => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleUpdateQuantity = useCallback((product, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => {
      const updated = prevCart.map(item => 
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleRemoveFromCart = useCallback((product) => {
    setCart(prevCart => {
      const updated = prevCart.filter(item => item.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleRemoveNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const handleClearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const handleAddToCart = useCallback((product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      const updated = existing
        ? prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prevCart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showCustomDate, setShowCustomDate] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filterByTime = (orderDate) => {
    if (timeFilter === 'all') return true;
    if (timeFilter === 'custom') {
      if (!startDate || !endDate) return true;
      const date = new Date(orderDate);
      return date >= new Date(startDate) && date <= new Date(endDate);
    }
    const date = new Date(orderDate);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (timeFilter === 'last30') return diffDays <= 30;
    if (timeFilter === 'last90') return diffDays <= 90;
    if (timeFilter === 'last6months') return diffDays <= 180;
    return true;
  };

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter;
    const matchesTime = filterByTime(order.date);
    return matchesSearch && matchesStatus && matchesTime;
  });

  return (
    <MainLayout 
      cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      wishlistCount={wishlist.length}
      notificationCount={notifications.length}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <button
          onClick={() => navigate('/home')}
          className="mb-4 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

          <div className="flex-1">
            {activeSection === 'profile' && <ProfileInformation />}
            {activeSection === 'address' && <ManageAddress />}
            {activeSection === 'notifications' && (
              <NotificationSection 
                notifications={notifications}
                onRemoveNotification={handleRemoveNotification}
                onClearAll={handleClearAllNotifications}
              />
            )}
            {activeSection === 'wishlist' && (
              <WishlistSection 
                wishlist={wishlist} 
                onRemoveFromWishlist={handleRemoveFromWishlist}
                onAddToCart={handleAddToCart}
              />
            )}
            {activeSection === 'cart' && (
              <CartSection 
                cart={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveFromCart={handleRemoveFromCart}
              />
            )}
            {activeSection === 'orders' && (
              <>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">FILTERS</h2>
              
              <div className="space-y-4">
                <div className="relative">
                  <button
                    onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  >
                    <span className="font-medium text-gray-700">ORDER STATUS</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${showStatusDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showStatusDropdown && (
                    <div className="mt-2 space-y-2">
                      {['all', 'pending', 'delivered', 'cancelled'].map(status => (
                        <label key={status} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded cursor-pointer">
                          <input
                            type="radio"
                            name="status"
                            checked={statusFilter === status}
                            onChange={() => setStatusFilter(status)}
                            className="w-4 h-4 text-indigo-600"
                          />
                          <span className="text-gray-700 capitalize">{status === 'all' ? 'All Orders' : status}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  >
                    <span className="font-medium text-gray-700">ORDER TIME</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${showTimeDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showTimeDropdown && (
                    <div className="mt-2 space-y-2">
                      {['all', 'last30', 'last90', 'last6months', 'custom'].map(time => (
                        <label key={time} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded cursor-pointer">
                          <input
                            type="radio"
                            name="time"
                            checked={timeFilter === time}
                            onChange={() => {
                              setTimeFilter(time);
                              setShowCustomDate(time === 'custom');
                            }}
                            className="w-4 h-4 text-indigo-600"
                          />
                          <span className="text-gray-700">
                            {time === 'all' ? 'All Time' : time === 'last30' ? 'Last 30 Days' : time === 'last90' ? 'Last 3 Months' : time === 'last6months' ? 'Last 6 Months' : 'Custom Date Range'}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {showCustomDate && (
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-indigo-600" />
                      <h3 className="font-semibold text-gray-800">CUSTOM DATE RANGE</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders (auto-search after 1.5s)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <p className="text-gray-600">Showing {filteredOrders.length} of {mockOrders.length} orders</p>

              {filteredOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}

              {filteredOrders.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No orders found</h3>
                  <p className="text-gray-600">Try adjusting your filters</p>
                </div>
              )}
            </div>
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyOrdersPage;
