import React from 'react';
import { Box } from 'theme-ui';
import PropTypes from 'prop-types';

import Disk from '../Disk';
import Drawer from '../Drawer';
import Drive from '../Drive';
import File from '../File';

const ICONS = {
  DISK: 'disk',
  DRIVE: 'drive',
  DRAWER: 'drawer',
  FILE: 'file',
};

const propTypes = {
  as: PropTypes.oneOf(['a', 'button', 'div', 'span']),
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(ICONS)),
  isExternal: PropTypes.bool,
};

const defaultProps = {
  as: 'a',
  children: null,
  icon: ICONS.DISK,
  isExternal: false,
};

const NavLink = ({ as, name, children, icon, isExternal, ...rest }) => {
  return (
    <Box
      as={as}
      __css={{
        maxWidth: 85,
        color: 'inherit',
        // cursor: 'pointer',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-between',
        p: 0,
        ...(as === 'a' && {
          textDecoration: 'none',
        }),
        ...(as === 'button' && {
          appearance: 'none',
          bg: 'transparent',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          border: 0,
          borderRadius: 0,
        }),
        '&:focus': {
          outline: 0,
          bg: 'primary',
          color: 'background',
          // border: 1,
          // borderColor: 'red'
        },
      }}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      {...rest}
    >
      {icon === 'disk' && <Disk />}
      {icon === 'drawer' && <Drawer />}
      {icon === 'drive' && <Drive />}
      {icon === 'file' && <File />}
      <Box __css={{ mt: 4, textAlign: 'center' }}>{name || children}</Box>
    </Box>
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
