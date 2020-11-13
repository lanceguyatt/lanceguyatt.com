// sx={css`
// transition-property: background-color, color;
// transition-duration: 0.25s;
// outline: 0;

// ${(props) =>
//   props.ghosted &&
//   `
// pointer-events: none;

// &::before {
// content: '';
// background-image: url(${ghostedImage});
// position: absolute;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// z-index: 1;
// }
// `}


/* eslint no-unused-vars: 0, no-shadow: 0, react/prop-types: 0 */
import React from 'react';
import { css } from '@emotion/react';
import { Flex } from 'theme-ui';

import ghostedImage from './ghosted.svg';

export const MenuItemAction = ({
  active,
  name,
  url,
  shortcut,
  subMenu,
  ghosted,
  ...props
}) => (
  <Flex
    {...props}
    __css={{
      color: 'secondary',
      justifyContent: 'space-between',
      py: 2,
      px: 1,
      height: '1.8rem',
      minWidth: '100%',
      position: 'relative',
      variant: 'menuItem',
      textAlign: 'left',
    }}
    {...props}
  />
);

export const Wrapper = (props) => (
  <Flex
    __css={{
      position: 'relative',
    }}
    sx={css`
      ul {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s;
        will-change: opacity;
      }

      &:hover {
        ul {
          visibility: visible;
          opacity: 1;
        }
      }
    `}
    {...props}
  />
);
