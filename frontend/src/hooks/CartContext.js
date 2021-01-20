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

  const clearCart = () => {
    setCartProducts([]);
  };

  const addProductToCart = useCallback((product) => {
    setCartProducts((lastCart) => {
      if (!lastCart.find((item) => item.id === product.id)) {
        return [...lastCart, product];
      }
      return [...lastCart];
    });
    setVisible(true);
  }, []);

  const addProductComment = useCallback(
    (product, text) => {
      const productIdx = cartProducts.findIndex((p) => p.id === product.id);
      setCartProducts((lastProducs) => {
        lastProducs[productIdx].comment = text;
        return [...lastProducs];
      });
    },
    [cartProducts]
  );

  const addProductAmount = useCallback(
    (product) => {
      const productIdx = cartProducts.findIndex((p) => p.id === product.id);
      setCartProducts((lastProducs) => {
        lastProducs[productIdx].amount += 1;
        return [...lastProducs];
      });
    },
    [cartProducts]
  );

  const removeProductAmount = useCallback(
    (product) => {
      const productIdx = cartProducts.findIndex((p) => p.id === product.id);
      setCartProducts((lastProducs) => {
        if (lastProducs[productIdx].amount === 1) {
          lastProducs.splice(productIdx, 1);
          return [...lastProducs];
        }
        lastProducs[productIdx].amount -= 1;
        return [...lastProducs];
      });
    },
    [cartProducts]
  );

  const removeProductToCart = useCallback(
    (product) => {
      const productIdx = cartProducts.findIndex((p) => p.id === product.id);
      setCartProducts((lastProducs) => {
        lastProducs.splice(productIdx, 1);
        return [...lastProducs];
      });
    },
    [cartProducts]
  );

  useEffect(() => {
    setCartTotal(
      Format(
        cartProducts.reduce(
          (totalSum, product) => totalSum + product.price * product.amount,
          0
        )
      )
    );
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        cartTotal,
        visible,
        toggleCart,
        cartProducts,
        addProductToCart,
        removeProductToCart,
        addProductAmount,
        removeProductAmount,
        addProductComment,
        clearCart,
      }}
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
