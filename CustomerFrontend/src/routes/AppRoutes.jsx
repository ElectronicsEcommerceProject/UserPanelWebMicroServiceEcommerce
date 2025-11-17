import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../features/Landing/pages/LandingPage';
import HomePage from '../features/Home/pages/HomePage';
import MyOrdersPage from '../features/Orders/pages/MyOrdersPage';
import LoginPage from '../core/auth/pages/LoginPage';
import SignupPage from '../core/auth/pages/SignupPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/orders" element={<MyOrdersPage />} />
    </Routes>
  );
};

export default AppRoutes;
