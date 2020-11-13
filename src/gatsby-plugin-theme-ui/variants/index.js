const variants = {
  alerts: {
    primary: {
      borderColor: 'primary',
      color: 'primary',
    },
    error: {
      borderColor: 'red',
      color: 'red',
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
  titlebar: {
    primary: {
      bg: 'text',
      color: 'background',
    },
    secondary: {
      bg: 'background',
      color: 'text',
    },
  },
  iconButton: {
    appearnce: 'none',
    bg: 'lime',
    border: 0,
    borderRadius: 0,
    cursor: 'pointer',
    outline: 0,
    userSelect: 'none',
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },
  text: {
    heading: {
      fontSize: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  layout: {
    workbench: {
      bg: 'secondary',
      p: 4,
    },
  },
};

export default variants;
