import styled, { keyframes } from 'styled-components';
import Bg from '../../assets/images/coffee.jpg';

const appearFromTop = keyframes`
  from {
    opacity:0.6;
    transform:translateY(700px);
  }
  to {
    opacity:1;
    transform:translateY(0);
  }
`;

export const Container = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  animation: ${appearFromTop} 1s;
  background-image: ${`url(${Bg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  height: 700px;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  left: calc(50% - 300px);
  top: calc(50% - 350px);

  .form-content {
    padding: 15px 25px 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .bg-shadow {
    padding: 15px;
    width: 100%;
    border-radius: 20px;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .header-title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
      color: var(--color-blue-strong);
      font-weight: 600;
      text-transform: uppercase;
    }

    button {
      position: absolute;
      right: 0;
      height: 25px;
      transition: all 0.2s ease;

      &:active {
        transform: scale(0.85);
      }

      svg {
        width: 25px;
        height: 25px;
        color: var(--color-red-strong);
      }
    }
  }
`;

export const ProductsList = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 5px;
  overflow-x: scroll;
  margin-top: 60px;
  background: #fff;
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
