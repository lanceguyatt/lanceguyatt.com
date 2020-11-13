import React from 'react';
import { Box } from 'theme-ui';

import NavLink from './NavLink';

export default {
  component: NavLink,
  title: 'NavLink',
  parameters: {
    componentSubtitle: 'NavLink subtitle',
  },
  decorators: [(story) => <Box p={4}>{story()}</Box>],
};

export const all = () => (
  <>
    <NavLink icon="disk" href="#">
      Disk
    </NavLink>
    <NavLink icon="drive" href="#">
      Drive
    </NavLink>
    <NavLink icon="drawer" href="#">
      Drawer
    </NavLink>
    <NavLink icon="file" href="#">
      File
    </NavLink>
  </>
);

export const button = () => <NavLink as="button">Button</NavLink>;

export const isExternal = () => (
  <NavLink
    name="Instagram"
    isExternal
    icon="file"
    href="https://www.instagram.com/lanceguyatt/"
  />
);

export const div = () => (
  <NavLink
    as="div"
    role="button"
    tabIndex={0}
    onClick={() => console.log('clicked')}
  >
    Div
  </NavLink>
);
