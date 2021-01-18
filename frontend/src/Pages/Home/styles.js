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

  .catalog-container {
    margin-top: 15px;
    width: 70%;
    background: rgba(0, 233, 176, 0.06);
    height: 700px;
    border-radius: 5px;
    padding: 20px;
    border: 2px solid rgba(239, 4, 79, 0.9);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    overflow-y: scroll;
    justify-items: center;

    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`;

export const Item = styled.div`
  background: rgba(239, 4, 79, 0.9);
  width: 140px;
  height: 190px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  img {
    width: 80px;
    height: 60px;
    border-radius: 11px;
  }

  .price-label {
    color: #fff;
    text-align: center;
    text-transform: capitalize;
  }
`;
