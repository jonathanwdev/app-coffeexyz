import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErros';

const Login = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('E-mail inválido')
            .required('E-mail obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data.email);
        setLoading(false);
        history('/home');
      } catch (err) {
        setLoading(false);
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
    [history, signIn]
  );

  return (
    <Container>
      <div className="bg" />
      <div className="form-box">
        <div className="form-content">
          <h1>LOGIN</h1>
          <Form ref={formRef} className="input-content" onSubmit={handleSubmit}>
            <InputText
              name="email"
              label="email"
              placeholder="Digite Seu Email"
              width={250}
              type="text"
            />
            <Button
              loading={loading}
              label="entrar"
              width={250}
              marginTop={45}
              type="submit"
            />
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
