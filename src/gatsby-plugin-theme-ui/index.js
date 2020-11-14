import variants from './variants';

const fontSizes = [12, 14, 16];

fontSizes.body = fontSizes[2];
fontSizes.heading = fontSizes[2];

const fonts = {
  body: '"Topaz", Verdana, sans-serif',
  heading: 'inherit',
};

export default {
  /* Enables CSS custom properties to help mitigate a flash of unstyled content during rehydration */
  useCustomProperties: true,
  /* Adds styles defined in theme.styles.root to the <body> element along with color and background-color */
  useBodyStyles: true,
  /* The key used for the top-level color palette in theme.colors */
  initialColorModeName: 'default',
  /* Initializes the color mode based on the prefers-color-scheme media query */
  useColorSchemeMediaQuery: false,
  /* Adds a global box-sizing: border-box style */
  useBoxSizing: true,
  /* Persists the color mode in localStorage */
  useLocalStorage: true,
  space: [0, 1, 2, 4, 8, 16, 32],
  fonts,
  borders: [0, '1px solid', '2px solid', '4px solid'],
  borderWidths: [0, 1, 2, 4, 8],
  borderStyles: {
    default: 'solid',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#6080b0',
    secondary: '#a0a0a0',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    },
  },
  fontSizes,
  fontWeights: {
    heading: 400,
    body: 400,
  },
  lineHeights: {
    body: 1.125,
    heading: 1.125,
  },
  styles: {
    root: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      bg: 'secondary',
      color: 'text',
    },
    h1: {
      variant: 'text.heading',
    },
    h2: {
      variant: 'text.heading',
    },
    h3: {
      variant: 'text.heading',
    },
    h4: {
      variant: 'text.heading',
    },
    h5: {
      variant: 'text.heading',
    },
    h6: {
      variant: 'text.heading',
    },
  },
  ...variants,
};
