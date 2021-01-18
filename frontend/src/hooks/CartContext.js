import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleCart = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  return (
    <CartContext.Provider value={{ visible, toggleCart }}>
      <Cart visible={visible} />
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useTotast mus be used within a Cart Provider');
  }
  return context;
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { CartProvider, useCart };
