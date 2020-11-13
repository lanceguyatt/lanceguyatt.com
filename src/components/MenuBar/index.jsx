import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'theme-ui';

const Wrapper = (props) => (
  <Flex
    __css={{
      bg: 'black',
      colors: 'secondary',
      alignItems: 'flex-start',
      borderColor: 'black',
      height: '2.2rem',
      position: 'relative',
      zIndex: 3,
    }}
    {...props}
  />
);

const MenuBar = (props) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuBar;
