import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <CartProvider>{children}</CartProvider>
  </AuthProvider>
);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
