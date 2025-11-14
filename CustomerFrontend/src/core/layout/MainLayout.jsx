import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children, onCategoryChange, onSearch, cartCount = 0, wishlistCount = 0, notificationCount = 0 }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        onCategoryChange={onCategoryChange} 
        onSearch={onSearch}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        notificationCount={notificationCount}
      />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
