import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './styles';

const Layout = ({ children }) => {
  const { user } = useAuth();
  return (
    <Container>
      {!!user && <Header />}
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
