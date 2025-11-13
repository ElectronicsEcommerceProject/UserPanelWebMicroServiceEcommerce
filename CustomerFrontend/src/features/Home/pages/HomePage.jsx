import React, { useState, useCallback } from 'react';
import MainLayout from '../../../core/layout/MainLayout';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const handleToggleWishlist = useCallback((product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  return (
    <MainLayout 
      onCategoryChange={setSelectedCategory} 
      onSearch={setSearchTerm}
      cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      wishlistCount={wishlist.length}
    >
      <HeroBanner />
      <ProductGrid 
        selectedCategory={selectedCategory} 
        searchTerm={searchTerm}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlist={wishlist}
      />
    </MainLayout>
  );
};

export default HomePage;
