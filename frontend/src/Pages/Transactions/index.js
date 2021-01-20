import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, MainContent, TrasactionList } from './styles';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const dateFormatter = (date) => {
    const dateParse = new Date(date);
    const month = dateParse.getMonth() + 1;
    return `${dateParse.getDate()}/${
      month < 10 ? `0${month}` : month
    }/${dateParse.getFullYear()}`;
  };

  const loadTransaction = useCallback(async () => {
    try {
      const response = await api.get('/transaction');
      const newData = response.data.map((item) => ({
        ...item,
        formattedDate: dateFormatter(item.created_at),
      }));
      setTransactions(newData);
    } catch (err) {
      alert('Erro, tente novamente mais tarde');
    }
  }, []);

  useEffect(() => {
    loadTransaction();
  }, [loadTransaction]);

  return (
    <Container>
      <MainContent>
        <h1 className="big-title">Ultimos Pedidos:</h1>
        <div className="last-transactions">
          {transactions.map((item1) => (
            <div className="transaction-content" key={item1.id}>
              <div className="transaction-track">
                {item1.transactionItems.map((item2) => (
                  <TrasactionList key={item2.id}>
                    <div className="product-item">
                      <div className="product-topbox">
                        <img src={item2.picture_url} alt="" />
                        <div className="info-box">
                          <h4>{item2.amount}</h4>
                        </div>
                      </div>
                      <p>{item2.name}</p>
                    </div>
                  </TrasactionList>
                ))}
              </div>

              <div className="transaction-info">
                <h3>
                  Nome: <strong>{item1.user_name}</strong>
                </h3>
                <h3>
                  Data: <strong>{item1.formattedDate}</strong>
                </h3>
                <h3>
                  Cartão: <strong>{item1.card_name}</strong>
                </h3>
                <h1>
                  TOTAL: <strong>{item1.total_price}</strong>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </MainContent>
    </Container>
  );
}

export default Transactions;
