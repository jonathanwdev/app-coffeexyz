import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './styles';
import Cart from '../../components/Cart';
import { useCart } from '../../hooks/CartContext';

const Layout = ({ children }) => {
  const { user } = useAuth();
  const { visible } = useCart();
  return (
    <Container>
      {!!user && <Header />}
      <Cart visible={visible} />

      {children}
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
