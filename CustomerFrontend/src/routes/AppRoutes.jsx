import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/Home/pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
