import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Package, Shield, Truck, RotateCcw, X, Star } from 'lucide-react';
import ProductImages from '../components/ProductImages';
import ProductInfo from '../components/ProductInfo';
import ProductActions from '../components/ProductActions';
import RelatedProducts from '../components/RelatedProducts';
import { products } from '../../Home/data/mockData';
import Header from '../../../core/layout/Header';
import Footer from '../../../core/layout/Footer';

const ProductDetailsPage = ({ onAddToCart, onToggleWishlist, wishlist, cart = [] }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const [activeTab, setActiveTab] = useState('description');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewData, setReviewData] = useState({ name: '', rating: 5, comment: '' });
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Rajesh Kumar', rating: 5, comment: 'Excellent product! Worth every penny. Highly recommended.', date: '2 days ago' },
    { id: 2, name: 'Priya Sharma', rating: 4, comment: 'Good quality and fast delivery. Very satisfied with the purchase.', date: '1 week ago' },
    { id: 3, name: 'Amit Patel', rating: 5, comment: 'Amazing product! Exceeded my expectations. Great value for money.', date: '2 weeks ago' }
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'shipping', label: 'Shipping' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-purple-50">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        notificationCount={3}
      />
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 hover:text-purple-600 cursor-pointer transition-colors">Home</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500 hover:text-purple-600 cursor-pointer transition-colors">{product.category}</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">
          {/* Left: Images */}
          <div className="relative lg:sticky lg:top-24">
            <ProductImages product={product} />
            
            {/* Share Button */}
            <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-10">
              <Share2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Right: Details & Actions */}
          <div className="space-y-8 bg-linear-to-br from-white via-slate-50 to-white rounded-2xl shadow-2xl p-8 border-2 border-slate-300">
            <ProductInfo product={product} />
            <ProductActions 
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={isWishlisted}
            />
          </div>
        </div>

        {/* Service Benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹500' },
            { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
            { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
            { icon: Package, title: 'Warranty', desc: '1 year warranty' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 mb-16 border border-gray-200">
          {/* Tab Headers */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-all border-b-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="prose prose-gray max-w-none">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">About This Product</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description || `Discover the exceptional ${product.name} from ${product.brand}. 
                  This premium ${product.category.toLowerCase()} combines cutting-edge design with 
                  superior functionality to deliver an unmatched experience. Crafted with meticulous 
                  attention to detail and using only the finest materials, this product represents 
                  the perfect balance of style, performance, and value.`}
                </p>
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3">What Makes This Special?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Premium build quality that lasts for years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Backed by manufacturer warranty and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Verified authentic product from authorized sellers</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Brand', value: product.brand },
                    { label: 'Category', value: product.category },
                    { label: 'Model', value: product.name },
                    { label: 'Rating', value: `${product.rating} / 5.0` },
                    { label: 'Reviews', value: `${product.reviews || 0} customer reviews` },
                    { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-semibold text-gray-700">{spec.label}</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                  <button
                    onClick={() => setShowReviewModal(true)}
                    className="px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer"
                  >
                    Write a Review
                  </button>
                </div>
                <div className="bg-linear-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl font-bold text-gray-900">{product.rating}</div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">Based on {reviews.length} reviews</p>
                    </div>
                  </div>
                </div>
                
                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Shipping & Delivery</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Free Shipping', desc: 'Available on all orders above ₹500' },
                    { title: 'Fast Delivery', desc: 'Delivered within 3-5 business days' },
                    { title: 'Cash on Delivery', desc: 'Pay when you receive your order' },
                    { title: 'Easy Returns', desc: '30-day hassle-free return policy' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts 
          currentProduct={product}
          categoryId={product.category}
          onAddToCart={onAddToCart}
        />
      </div>
      <Footer />
      
      {/* Write Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Write a Review</h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={reviewData.name}
                  onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setReviewData({ ...reviewData, rating: star })}
                      className="cursor-pointer"
                    >
                      <Star
                        className={`w-8 h-8 ${star <= reviewData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review</label>
                <textarea
                  value={reviewData.comment}
                  onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                  placeholder="Share your experience with this product"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (reviewData.name && reviewData.comment) {
                      setReviews([{ id: Date.now(), ...reviewData, date: 'Just now' }, ...reviews]);
                      setReviewData({ name: '', rating: 5, comment: '' });
                      setShowReviewModal(false);
                    }
                  }}
                  className="flex-1 px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;