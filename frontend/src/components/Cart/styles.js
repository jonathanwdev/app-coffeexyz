import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity:0.4;
    transform:translateX(400px);
  }
  to {
    opacity:1;
    transform:translateX(0);
  }
`;

export const Container = styled.div`
  display: ${(props) => (props.toggle ? 'block' : 'none')};
  position: absolute;
  z-index: 2;
  animation: ${appearFromLeft} 1s;
  right: 0;
  top: 60px;
  width: 400px;
  height: calc(100% - 60px);
  border-left: 1px solid var(--color-red-strong);
  background: #fff;
`;

export const CartContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .cart-header {
    display: flex;

    h1 {
      color: var(--color-blue-strong);
      font-weight: 800;
      font-size: 3rem;
      margin-right: 15px;
    }
  }

  .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
      transform: scale(0.9);
    }
    svg {
      font-size: 25px;
      color: var(--color-red-strong);
    }
  }

  .footer-total {
    border-top: 2px solid var(--color-red-strong);
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: Center;

    h2 {
      color: var(--color-red-strong);
      font-weight: 700;
      font-size: 2rem;
      margin-top: 10px;
    }

    h1 {
      margin-top: 20px;
    }
  }

  .products-list {
    width: 100%;
    margin-top: 15px;
    overflow-y: scroll;
    max-height: 500px;
    min-height: 500px;

    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`;

export const Product = styled.div`
  animation: ${appearFromLeft} 1s;

  width: 97%;
  background: var(--color-red-strong);
  padding: 15px;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 20px;
  }

  .products-left-side {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }

  .product-data {
    color: #fff;
    font-weight: 500;
  }

  .btn-interaction {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;

      &:active {
        transform: scale(0.92);
      }

      svg {
        color: #fff;
        font-size: 22px;
      }
    }
  }

  .amout-label {
    height: 19px;
    background: #fff;
    min-width: 25px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin: 0 10px;
    color: #000;
  }

  .text-content {
    margin-top: 15px;
    resize: none;
    width: 100%;
    border: 0;
    padding: 5px;
    color: var(--color-red-strong);
    height: 60px;
    border-radius: 5px;
  }
`;

export const NoContent = styled.div`
  color: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-top: 70px;
  font-weight: 700;
`;
