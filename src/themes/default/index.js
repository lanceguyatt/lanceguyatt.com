const fontSizes = [12, 14, 16];

fontSizes.body = 16;

const fonts = {
  body: '"Topaz", sans-serif',
};

const theme = {
  fonts,
  colors: {
    primary: '#6080b0',
    secondary: '#a0a0a0',
    text: '#000',
    background: '#fff',
  },
  fontSizes,
  lineHeights: {
    body: 1.125,
  },
  space: [1, 2, 4, 8, 16, 32],
  styles: {
    root: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      bg: 'background',
      color: 'text',
    },
  },
  buttons: {
    primary: {
      bg: 'secondary',
      color: 'text',
      '&:focus, &:active': {
        bg: 'primary',
        color: 'text',
      },
    },
  },
};

export default theme;
