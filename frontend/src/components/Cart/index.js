import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdRemoveCircleOutline, IoMdAddCircleOutline } from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Container, Product, CartContent, NoContent } from './styles';
import Button from '../Button';
import { useCart } from '../../hooks/CartContext';

import ModalCheckout from '../ModalCheckout';

function Cart({ visible }) {
  const [open, setOpen] = useState(false);

  const {
    cartProducts,
    cartTotal,
    addProductAmount,
    removeProductAmount,
    toggleCart,
    addProductComment,
  } = useCart();

  const handleToggle = useCallback(() => {
    if (cartProducts.length <= 0) return;
    setOpen((state) => !state);
  }, [cartProducts]);

  return (
    <>
      <ModalCheckout toggle={handleToggle} open={open} />
      <Container toggle={visible}>
        <CartContent>
          <header className="cart-header">
            <h1>MEU CARRINHO</h1>
            <button type="button" className="close-btn" onClick={toggleCart}>
              <AiFillCloseCircle />
            </button>
          </header>

          <div className="products-list">
            {cartProducts.length === 0 ? (
              <NoContent>Carrinho Vazio :(</NoContent>
            ) : (
              cartProducts.map((item) => (
                <Product key={item.id}>
                  <div className="products-left-side">
                    <img src={item.picture_url} alt={item.name} />
                    <div className="btn-interaction">
                      <button
                        type="button"
                        onClick={() => removeProductAmount(item)}
                      >
                        <IoMdRemoveCircleOutline />
                      </button>
                      <div className="amout-label">{item.amount}</div>
                      <button
                        type="button"
                        onClick={() => addProductAmount(item)}
                      >
                        <IoMdAddCircleOutline />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="product-data">
                      <strong>Nome: </strong>
                      {item.name}
                    </p>
                    <p className="product-data">
                      <strong>Preço: </strong>
                      {item.newPrice}
                    </p>
                    <textarea
                      className="text-content"
                      onChange={(e) => addProductComment(item, e.target.value)}
                    />
                  </div>
                </Product>
              ))
            )}
          </div>
          <footer className="footer-total">
            <h2>TOTAL </h2>
            <h1>{cartTotal}</h1>
            <Button
              label="CHECK-OUT"
              marginTop={30}
              width={220}
              onClick={handleToggle}
            />
          </footer>
        </CartContent>
      </Container>
    </>
  );
}

export default Cart;

Cart.propTypes = {
  visible: PropTypes.bool.isRequired,
};
