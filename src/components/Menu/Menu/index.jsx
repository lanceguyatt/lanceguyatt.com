import React, { useState } from 'react';
import { node, string, bool } from 'prop-types';
import { Box } from 'theme-ui';

import { MenuToggle, MenuList } from './style';

function Menu({ id, name, children, ghosted }) {
  const [menu, setMenu] = useState(false);

  function menuOpen() {
    setMenu(true);
  }

  function menuClose() {
    setMenu(false);
  }

  return (
    <Box
      onMouseEnter={menuOpen}
      onMouseLeave={menuClose}
      onFocus={menuOpen}
      onBlur={menuClose}
      menuActive={menu}
      // tabIndex={!ghosted ? -1 : 0}
      role="menu"
      aria-labelledby={id}
      {...ghosted}
    >
      <MenuToggle type="button" role="button" id={id} tabIndex={0}>
        {name}
      </MenuToggle>
      {children && <MenuList is="ul">{children}</MenuList>}
    </Box>
  );
}

Menu.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  children: node,
  ghosted: bool,
};

Menu.defaultProps = {
  children: null,
  ghosted: false,
};

export default Menu;
