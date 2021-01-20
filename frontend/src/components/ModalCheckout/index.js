import React, { useCallback, useState, useRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import InputText from '../InputText';
import Button from '../Button';
import { useCart } from '../../hooks/CartContext';
import getValidationErrors from '../../utils/getValidationErros';

import { Container, ModalContent, ProductsList } from './styles';

function Modal({ open, toggle }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const { cartProducts, clearCart, cartTotal } = useCart();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const schema = Yup.object().shape({
          user_name: Yup.string().required('Nomel obrigatório'),
          user_email: Yup.string().email().required('E-mail obrigatório'),
          address: Yup.string().required('Endereço é obrigatório'),
          country: Yup.string().required('País é obrigatório'),
          state: Yup.string().required('Estado é obrigatório'),
          cep_number: Yup.string().required('CEP é obrigatório'),
          card_type: Yup.string().required('Tipo de cartão é obrigatório'),
          card_name: Yup.string().required('Nome é obrigatório'),
          card_number: Yup.string().required('Numero é obrigatório'),
          card_expiresIn: Yup.string().required(
            'Data de expiração é obrigatória'
          ),
          card_cvv: Yup.number().required('CVV é obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const newData = {
          ...data,
          transaction_list: cartProducts,
          total_price: cartTotal,
        };
        await api.post('/transaction', newData);
        alert('Transação efetuada com sucesso !!');
        setLoading(false);
        clearCart();
        toggle();
      } catch (err) {
        setLoading(false);
        alert('Erroo ! Confira todos os campos');
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          if (formRef.current) {
            formRef.current.setErrors(errors);
          }
          // eslint-disable-next-line no-useless-return
          return;
        }
      }
    },
    [cartProducts, cartTotal, toggle]
  );

  return (
    <Container open={open}>
      <ModalContent>
        <div className="bg-shadow">
          <header className="header-title">
            <h1>CheckOut</h1>
            <button type="button" onClick={toggle}>
              <FaWindowClose />
            </button>
          </header>
          <Form ref={formRef} onSubmit={handleSubmit} className="form-content">
            <div className="flex">
              <InputText
                name="user_name"
                label="Nome"
                placeholder="Nome"
                type="text"
                width="48%"
              />
              <InputText
                name="user_email"
                label="Email"
                placeholder="Email"
                type="email"
                width="48%"
              />
            </div>
            <InputText
              name="address"
              label="Endereço"
              placeholder="Endereço"
              type="text"
              width="100%"
              marginTop={15}
            />
            <div className="flex">
              <InputText
                name="country"
                label="País"
                placeholder="País"
                type="text"
                width="31.3%"
              />
              <InputText
                name="state"
                label="Estado"
                placeholder="Estado"
                type="text"
                width="31.3%"
              />
              <InputText
                name="cep_number"
                label="CEP"
                placeholder="CEP"
                type="text"
                width="31.3%"
              />
            </div>
            <div className="flex">
              <InputText
                name="card_type"
                label="Tipo de Cartão"
                placeholder="credito"
                type="text"
                width="48%"
              />
              <InputText
                name="card_name"
                label="Nome do Cartão"
                placeholder="John Doe"
                type="text"
                width="48%"
              />
            </div>
            <div className="flex">
              <InputText
                name="card_number"
                label="Numero do Cartão"
                placeholder="4567123445789652"
                type="text"
                width="38%"
              />
              <InputText
                name="card_cvv"
                label="CVV"
                placeholder="171"
                type="number"
                width="28%"
              />
              <InputText
                name="card_expiresIn"
                label="Data de expiração"
                placeholder="12/18"
                type="text"
                width="28%"
              />
            </div>
            <ProductsList>
              {cartProducts.map((item) => (
                <div className="product-item" key={item.id}>
                  <div className="product-topbox">
                    <img src={item.picture_url} alt={item.name} />
                    <div className="info-box">
                      <h4>{item.amount}</h4>
                    </div>
                  </div>
                  <p>{item.name}</p>
                </div>
              ))}
            </ProductsList>
            <Button
              label="CHECKOUT"
              width="100%"
              marginTop={45}
              type="submit"
              loading={loading}
            />
          </Form>
        </div>
      </ModalContent>
    </Container>
  );
}

export default Modal;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
