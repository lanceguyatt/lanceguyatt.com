import { createGlobalStyle } from 'styled-components'

// import clock from './clock.svg'
import pointer from './pointer.svg'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Topaz';
    src: local('Topaz'),
         url('/fonts/topaz.eot?#iefix') format('embedded-opentype'),
         /* url('/fonts/topaz.ttf') format('truetype'), */
         url('/fonts/topaz.woff') format('woff'),
         url('/fonts/topaz.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    line-height: 1.125;
    font-family: ${props => props.theme.fonts.sansSerif};
    position: relative;
    min-height: 100%;
    user-select: none;
  }

  body {
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: normal;
    line-height: inherit;
  }

  body,
  button,
  a,
  input {
    cursor: url(${pointer}), default;
  }

  a {
    color: inherit;
    text-decoration: none;
    user-select: none;

    &:focus {
      outline: 0;
    }
  }

  button,
  input {
    appearance: none;
    background-color: transparent;
    background-size: cover;
    border-radius: 0;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    user-select: none;

    &:focus {
      outline: 0;
    }
  }

  ul {
    list-style: none;
  }

  .fade {
    transition: opacity 0.15s linear;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }

  .fade:not(.show) {
    opacity: 0;
  }

  .modal-open {
    overflow: hidden;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1050;
    display: none;
    outline: 0;
    transform: translate(-50%, -50%);
  }

  .modal-dialog {
    width: auto;
  }

  .modal-content {
    position: relative;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }

  .modal.show .modal-dialog {
    transform: none;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
  }

  .modal-backdrop.fade {
    opacity: 0;
  }

  .modal-backdrop.show {
    opacity: 0.5;
  }

  /* .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  } */
`

export default GlobalStyle
