import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-red-strong: #ef044f;
    --color-blue-strong: #00E9B0;
    --font-color-primary:#fff;
    --font-color-secondary:#A7E7E9;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;

    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
      position: relative;
      z-index: 2;
      border-radius: 6px;
    }
    &::-webkit-scrollbar:disabled {
      background: transparent;
    }
    &::-webkit-scrollbar-track {
      height: 220px;
      width: 220px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(239,4,79, 0.6);
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(239,4,79, 0.4);
    }
    &::-webkit-scrollbar-thumb:active {
      background: rgba(239,4,79, 0.9);
    }
    &::-webkit-scrollbar-thumb:window-inactive {
      background:  rgba(239,4,79, 0.9);
    }
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    height:100%;
  }

  html{
    font-size:63.5%;
    @media (min-width: 1950px) {
      font-size:63.5%;
    }
    @media (max-width: 1500px) {
      font-size:62.5%;
    }
    @media (max-width: 900px) {
      font-size:60.5%;
    }
    @media (max-width: 600px) {
      font-size:58%;
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, #root{
    min-height:100%;
  }

  body, input, button {
    font-size: 1.2rem;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border:0;
    background:none;
  }

`;
