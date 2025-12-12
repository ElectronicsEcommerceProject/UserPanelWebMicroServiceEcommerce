import React, { useState } from 'react';
import { Filter, SortAsc, Grid3x3, Grid2x2 } from 'lucide-react';
import ProductCard from '../../../core/components/ProductCard';
import { products, brands } from '../data/mockData';

const ProductGrid = ({ selectedCategory = 'All Products', searchTerm = '', onAddToCart, onToggleWishlist, wishlist = [] }) => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [gridView, setGridView] = useState('grid-4');
  const [visibleCount, setVisibleCount] = useState(8);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [minRating, setMinRating] = useState(0);

  let filteredProducts = products;
  
  // Filter by search term first
  if (searchTerm.trim()) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Filter by category
  if (selectedCategory !== 'All Products') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  
  // Then filter by brand
  if (selectedBrand !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.brand === selectedBrand);
  }
  
  // Filter by price range
  filteredProducts = filteredProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
  
  // Filter by rating
  filteredProducts = filteredProducts.filter(p => p.rating >= minRating);
  
  // Sort products
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 8); // Load 8 more products (2 more rows)
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setVisibleCount(8); // Reset to show initial 8 products
  };

  // Reset visible count when category or search changes
  React.useEffect(() => {
    setVisibleCount(8);
    setSelectedBrand('All');
  }, [selectedCategory, searchTerm]);

  return (
    <>
      {/* Filters and Sorting */}
      <div className="sticky top-[140px] z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => handleBrandChange(brand)}
                  className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    selectedBrand === brand
                      ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* View Options */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:block">Filters</span>
                </button>
                {showFilters && (
                  <>
                    <div 
                      className="fixed inset-0 z-9998"
                      onClick={() => setShowFilters(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl p-4 z-9999 border">
                    <h3 className="font-semibold mb-4">Filters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Price Range</label>
                        <div className="flex gap-2">
                          <input 
                            type="number" 
                            placeholder="Min" 
                            value={priceRange[0]} 
                            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                            className="w-full px-3 py-2 border rounded-lg"
                          />
                          <input 
                            type="number" 
                            placeholder="Max" 
                            value={priceRange[1]} 
                            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                            className="w-full px-3 py-2 border rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Minimum Rating</label>
                        <select 
                          value={minRating} 
                          onChange={(e) => setMinRating(+e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option value={0}>All Ratings</option>
                          <option value={4}>4+ Stars</option>
                          <option value={5}>5 Stars</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  </>
                )}
              </div>
              <div className="relative">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer appearance-none pr-8"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <SortAsc className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
              <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
                <button 
                  onClick={() => setGridView('grid-4')}
                  className={`p-2 rounded ${gridView === 'grid-4' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setGridView('grid-3')}
                  className={`p-2 rounded ${gridView === 'grid-3' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid2x2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="featured-products" className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
            {selectedBrand !== 'All' && ` from ${selectedBrand}`}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different brand</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            gridView === 'grid-4' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {displayedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.some(item => item.id === product.id)}
              />
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all cursor-pointer" /* eslint-disable-line */
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
