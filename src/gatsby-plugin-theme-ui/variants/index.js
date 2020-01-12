const variants = {
  alerts: {
    error: {
      borderColor: 'red',
      color: 'red'
    }
  },
  buttons: {
    primary: {
      bg: 'secondary',
      color: 'text',
      '&:focus, &:active': {
        bg: 'primary',
        color: 'text'
      }
    }
  },
  titlebar: {
    primary: {
      bg: 'text',
      color: 'background'
    },
    secondary: {
      bg: 'background',
      color: 'text'
    }
  },
  iconButton: {
    appearnce: 'none',
    bg: 'transparent',
    border: 0,
    borderRadius: 0
  },
  text: {
    heading: {
      fontSize: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  }
}

export default variants
