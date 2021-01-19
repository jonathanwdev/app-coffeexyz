import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Button from '../../components/Button';
import { Container, MainContent, Item } from './styles';
import { Format } from '../../utils/formatProce';
import { useCart } from '../../hooks/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addProductToCart } = useCart();

  const loadProducts = async () => {
    try {
      const response = await api.get('/products');
      const formattedData = response.data.map((item) => ({
        newPrice: Format(item.price),
        product_id: item.id,
        amount: 1,
        comment: '',
        ...item,
      }));
      setProducts(formattedData);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      <MainContent>
        <h1 className="big-title">Catalogo do Dia:</h1>
        <div className="catalog-container">
          {products.map((item) => (
            <Item key={item.id}>
              <img src={item.picture_url} alt={item.name} />
              <p className="price-label">
                <strong>{item.name}</strong>
              </p>
              <p className="price-label">
                Preço: <strong>{item.newPrice}</strong>
              </p>
              <Button
                label="ADICIONAR"
                onClick={() => addProductToCart(item)}
              />
            </Item>
          ))}
        </div>
      </MainContent>
    </Container>
  );
};

export default Home;
