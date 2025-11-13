import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children, onCategoryChange, onSearch }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onCategoryChange={onCategoryChange} onSearch={onSearch} />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
