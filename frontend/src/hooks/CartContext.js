import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Format } from '../utils/formatProce';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleCart = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  const addProductToCart = useCallback((product) => {
    setCartProducts((lastCart) => {
      if (!lastCart.find((item) => item.id === product.id)) {
        return [...lastCart, product];
      }
      return [...lastCart];
    });
    setVisible(true);
  }, []);

  useEffect(() => {
    setCartTotal(
      Format(
        cartProducts.reduce((totalSum, product) => totalSum + product.price, 0)
      )
    );
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{ cartTotal, visible, toggleCart, cartProducts, addProductToCart }}
    >
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
