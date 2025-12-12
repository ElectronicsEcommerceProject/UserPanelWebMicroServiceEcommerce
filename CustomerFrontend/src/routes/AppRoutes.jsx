import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import LandingPage from '../features/Landing/pages/LandingPage';
import HomePage from '../features/Home/pages/HomePage';
import MyOrdersPage from '../features/Orders/pages/MyOrdersPage';
import LoginPage from '../core/auth/pages/LoginPage';
import SignupPage from '../core/auth/pages/SignupPage';
import ProductDetailsRoute from '../features/ProductDetails/pages/ProductDetailsRoute';

const AppRoutes = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/orders" element={<MyOrdersPage />} />
        <Route path="/product/:productId" element={<ProductDetailsRoute />} />
      </Routes>
    </CartProvider>
  );
};

export default AppRoutes;
