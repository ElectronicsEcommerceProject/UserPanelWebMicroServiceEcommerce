import React from 'react';
import { useCart } from '../../../context/CartContext';
import ProductDetailsPage from './ProductDetailsPage';

const ProductDetailsRoute = () => {
  const { cart, wishlist, handleAddToCart, handleToggleWishlist } = useCart();
  return (
    <ProductDetailsPage 
      onAddToCart={handleAddToCart}
      onToggleWishlist={handleToggleWishlist}
      wishlist={wishlist}
      cart={cart}
    />
  );
};

export default ProductDetailsRoute;
