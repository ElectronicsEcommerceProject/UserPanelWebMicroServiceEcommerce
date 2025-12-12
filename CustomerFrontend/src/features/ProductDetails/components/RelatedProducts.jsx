import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { products } from '../../Home/data/mockData';

const RelatedProducts = ({ currentProduct, categoryId, onAddToCart, isVisible = true }) => {
  const navigate = useNavigate();
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const filtered = products
        .filter(p => p.category === currentProduct?.category && p.id !== currentProduct?.id)
        .slice(0, 8);
      setDisplayedProducts(filtered);
      setLoading(false);
    }, 300);
  }, [currentProduct]);

  const handleProductClick = (product) => {
    const productId = product.id || product.product_id;
    navigate(`/product/${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  if (loading) {
    return (
      <div className="bg-linear-to-br from-slate-50 to-white rounded-3xl shadow-xl p-8 lg:p-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl animate-pulse" />
            <div className="space-y-2">
              <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-xl mb-4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-linear-to-br from-red-50 to-pink-50 rounded-3xl shadow-lg p-8 border border-red-200">
        <div className="text-center">
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (displayedProducts.length === 0) {
    return (
      <div className="bg-linear-to-br from-slate-50 to-white rounded-3xl shadow-lg p-12 border border-gray-200">
        <div className="text-center">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Related Products</h3>
          <p className="text-gray-600">Check back later for more recommendations!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-slate-50 to-white rounded-3xl shadow-xl p-6 lg:p-12 border border-gray-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">You May Also Like</h2>
          <p className="text-gray-600">Handpicked products just for you</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
          View All →
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id || product.product_id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
            onMouseEnter={() => setHoveredProduct(product.id || product.product_id)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleProductClick(product)}
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4">
              <img
                src={product.image}
                alt={product.title || product.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300/E5E7EB/9CA3AF?text=No+Image';
                }}
              />
              
              {/* Hover Overlay Actions */}
              <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${
                hoveredProduct === (product.id || product.product_id) ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="flex gap-2 w-full">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart && onAddToCart(product);
                    }}
                    className="flex-1 bg-white hover:bg-purple-500 text-gray-900 hover:text-white py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-1 shadow-lg"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="bg-white hover:bg-red-500 text-gray-900 hover:text-white p-2 rounded-lg transition-all shadow-lg"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-3 right-3 bg-linear-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {product.discount}
                </div>
              )}

              {/* Stock Status */}
              <div className="absolute top-3 left-3">
                {product.inStock ? (
                  <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    In Stock
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
              {/* Brand */}
              {product.brand && (
                <p className="text-xs text-purple-600 font-semibold uppercase tracking-wide">
                  {product.brand.name || product.brand}
                </p>
              )}

              {/* Title */}
              <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors min-h-2.5">
                {product.title || product.name}
              </h3>

              {/* Rating */}
              {product.rating && parseFloat(product.rating) > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.reviews || 0})
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Quick Add Button - Mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart && onAddToCart(product);
                }}
                className="w-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 lg:hidden"
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button - Mobile */}
      {displayedProducts.length >= 8 && (
        <div className="mt-8 text-center lg:hidden">
          <button className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
            Show More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
