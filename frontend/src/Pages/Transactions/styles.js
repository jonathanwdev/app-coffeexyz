import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 50px;
  display: flex;
  justify-content: center;
`;

export const MainContent = styled.main`
  width: 100%;
  max-width: 1400px;
  margin-top: 25px;

  .big-title {
    color: var(--color-red-strong);
    font-size: 2.4rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .last-transactions {
    margin-top: 25px;
    max-height: 650px;
    height: 100%;
    overflow-y: scroll;
  }

  .transaction-content {
    width: 80%;
    background: #ccc;
    display: flex;
    align-items: center;
    padding: 15px;
    background: var(--color-blue-strong);
    border-radius: 15px;
  }

  .transaction-track {
    width: 60%;
    overflow-x: scroll;
    max-width: 80%;
    display: flex;
    align-items: center;
    background: #fff;
  }

  .transaction-content + .transaction-content {
    margin-top: 10px;
  }

  .transaction-info {
    margin-left: 15px;

    h1 {
      color: var(--color-red-strong);
      strong {
        color: #fff;
      }
    }
    h3 {
      color: var(--color-red-strong);

      strong {
        color: #fff;
      }
    }
  }
`;

export const TrasactionList = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  .product-item {
    min-width: 100px;
    min-height: 70px;
    align-items: center;
    background: #000;
    padding: 10px;
    border-radius: 5px;

    & + div {
      margin-left: 15px;
    }

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 90px;
      color: #fff;
      font-weight: 500;
      margin-top: 4px;
    }
  }
  .product-topbox {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    h4 {
      font-size: 2rem;
      color: var(--color-red-strong);
    }
  }
  .info-box {
    color: #fff;
  }
`;
