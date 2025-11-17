import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/Home/pages/HomePage';
import MyOrdersPage from '../features/Orders/pages/MyOrdersPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/orders" element={<MyOrdersPage />} />
    </Routes>
  );
};

export default AppRoutes;
