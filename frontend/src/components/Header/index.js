import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { useAuth } from '../../hooks/AuthContext';
import { Container, Navigator, Cart } from './styles';
import Button from '../Button';
import { useCart } from '../../hooks/CartContext';

function Header() {
  const { user, signOut } = useAuth();
  const { toggleCart } = useCart();
  const currentPath = useLocation().pathname.replace('/', '').trim();
  const history = useHistory();

  const handleNavigate = (path) => {
    history.push(`/${path}`);
  };

  return (
    <Container>
      <nav>
        <div>
          <Link to="/home">
            <p className="logo-link">Coffee XYZ</p>
          </Link>
          <Navigator
            isActive={currentPath === 'home'}
            onClick={() => handleNavigate('home')}
          >
            <p>HOME</p>
          </Navigator>
          <Navigator
            isActive={currentPath === 'transactions'}
            onClick={() => handleNavigate('transactions')}
          >
            <p>PEDIDOS</p>
          </Navigator>
        </div>
        <aside>
          <p>Olá {user.email}</p>
          <Cart onClick={toggleCart}>
            <ImCart />
          </Cart>
          <Button
            label="SAIR"
            width={80}
            marginLeft={40}
            type="button"
            onClick={signOut}
          />
        </aside>
      </nav>
    </Container>
  );
}

export default Header;
