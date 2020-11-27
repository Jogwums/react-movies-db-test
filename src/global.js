import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    width: 85%;
    margin: 0 auto;
  }
  .movie-page{
    display: flex;
    position: absolute;
    left: 25%;
    top: 10%;

  }
  .container{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    text-align: center;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
    margin: .5rem;
    padding: 1rem;
  }
  .add-page, .results{
    margin-top: 2rem;
  }
  ul{
    list-style-type: none;
  }

  @media (min-width: 600px){
    .movie-page{
      top: 0;
      left: 10%;
    }
    .movie-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
  }
  `