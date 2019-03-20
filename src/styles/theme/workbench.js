const borders = [0, '0.1rem solid', '0.2rem solid', '0.4rem solid']

const breakpoints = ['57.6rem', '76.8rem']

const colors = {
  primary: '#6080b0',
  secondary: '#a0a0a0',
  dark: '#000',
  light: '#f0f0f0',
  black: '#000',
  white: '#fff',
}

const lineHeights = [1, 1.125, 1.25, 1.5]

const space = [
  0,
  '0.1rem',
  '0.2rem',
  '0.4rem',
  '0.8rem',
  '1.6rem',
  '3.2rem',
  '6.4rem',
]

const zIndex = [0, 1, 2, 3, 4]

const fonts = {
  sansSerif: '"Topaz", sans-serif',
}

const buttons = {
  menuItem: {
    backgroundColor: colors.dark,
    color: colors.secondary,
    '&:focus, &:hover, &:active': {
      backgroundColor: colors.light,
      color: colors.primary,
    },
  },
}

const workbench = {
  borders,
  buttons,
  breakpoints,
  colors,
  fonts,
  lineHeights,
  space,
  zIndex,
}

export default workbench
