import React, { useState } from 'react';
import MainLayout from '../../../core/layout/MainLayout';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <MainLayout onCategoryChange={setSelectedCategory} onSearch={setSearchTerm}>
      <HeroBanner />
      <ProductGrid selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </MainLayout>
  );
};

export default HomePage;
