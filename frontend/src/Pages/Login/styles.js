import styled from 'styled-components';
import Bg from '../../assets/images/coffee.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .bg {
    width: 100vw;
    height: 100vh;
    background-image: ${`url(${Bg})`};
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .form-box {
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 350px;
    height: 400px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
  }

  .form-content {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      color: #fff;
    }

    .input-content {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-top: 70px;
    }
  }
`;
