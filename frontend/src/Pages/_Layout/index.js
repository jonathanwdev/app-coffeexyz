import React from 'react';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './styles';

const Layout = ({ children })=> {
  const { user } = useAuth();
  return (
    <Container>
      {!!user && <Header />}
      {children}
    </Container>
  );
}

export default Layout;
