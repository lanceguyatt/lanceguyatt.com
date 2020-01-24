import variants from './variants'

const fontSizes = [12, 14, 16]

fontSizes.body = 16
fontSizes.heading = 16

const fonts = {
  body: '"Topaz", sans-serif',
  heading: 'inherit'
}

const theme = {
  fonts,
  colors: {
    primary: '#6080b0',
    secondary: '#a0a0a0',
    text: '#000',
    background: '#fff'
  },
  fontSizes,
  fontWeights: {
    heading: 400
  },
  lineHeights: {
    body: 1.125,
    heading: 1.125
  },
  space: [0, 1, 2, 4, 8, 16, 32],
  styles: {
    h1: {
      variant: 'text.heading'
    },
    h2: {
      variant: 'text.heading'
    },
    h3: {
      variant: 'text.heading'
    },
    h4: {
      variant: 'text.heading'
    },
    h5: {
      variant: 'text.heading'
    },
    h6: {
      variant: 'text.heading'
    },
    root: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      bg: 'secondary',
      color: 'text'
    }
  },
  ...variants
}

export default theme
