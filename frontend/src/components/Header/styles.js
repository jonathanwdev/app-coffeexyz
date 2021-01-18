import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 50px;
  background: var(--color-red-strong);
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    width: 100%;
    height: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-link {
      font-size: 2.6rem;
      font-weight: 800;
      color: #fff;
      margin-right: 85px;
    }

    div {
      display: flex;
    }

    aside {
      display: flex;
      align-items: center;

      p {
        font-size: 1.4rem;
        color: #fff;
        font-weight: 600;
        transition: all 0.2s ease;
      }
    }
  }
`;

export const Navigator = styled.button`
  & + button {
    margin-left: 40px;
  }

  p {
    font-size: 1.3rem;
    color: #fff;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      color: var(--font-color-secondary);
    }
    &:active {
      transform: scale(0.98);
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      transition: all 0.3s ease;

      transform: scale(1.3);
      p {
        color: var(--font-color-secondary);
      }
    `};
`;

export const Cart = styled.button`
  margin-left: 40px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.3);
  }
  &:hover svg {
    color: var(--color-blue-strong);
  }

  svg {
    color: #fff;
    font-size: 20px;
  }
`;
