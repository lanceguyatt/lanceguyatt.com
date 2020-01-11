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
