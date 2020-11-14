import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
      }

      @font-face {
        font-family: Topaz;
        src: url('/fonts/topaz.woff') format('woff'),
          url('/fonts/topaz.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }

      body {
        cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMiAwaDJ2MkgyVjB6bTIgMmg0djJINFYyem00IDJoNHYySDhWNHptNCAyaDR2MmgtNFY2em00IDJoNHYyaC00Vjh6bS0yIDRoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yeiIgZmlsbD0iI0VCRjNENiIvPjxwYXRoIGQ9Ik04IDE2aDJ2NEg3di00SDZ2LTRoMnY0ek0wIDJoMnYySDBWMnptMiAyaDJ2NEgyVjR6bTIgNGgydjRINFY4em04IDZoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xNiAxMmgtMnYyaC0ydjZoLTJ2LTRIOHYtNEg2VjhINFY0aDR2Mmg0djJoNHYyaDR2MmgtNHpNMCAwaDJ2MkgwVjB6bTIgMmgydjJIMlYyem0xMiAxMmgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6IiBmaWxsPSIjRTc1RDU1Ii8+PC9nPjwvc3ZnPgo=),
          default;
      }

      a {
        cursor: inherit;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyles;
