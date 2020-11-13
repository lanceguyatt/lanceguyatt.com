import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

const Wrapper = (props) => (
  <Box
    __css={{
      border: 2,
      borderColor: 'secondary',
      bg: 'black',
      p: 2,
      color: 'secondary',
      position: 'absolute',
      minWidth: '10rem',
      left: '100%',
      top: 0,
    }}
    {...props}
  />
);

const SubMenu = (props) => {
  const { children } = props;
  return <Wrapper as="ul">{children}</Wrapper>;
};

SubMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubMenu;
