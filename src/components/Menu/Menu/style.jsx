/* eslint no-unused-vars: 0 */
import React from 'react';
import { Box } from 'theme-ui';
import ghostedImage from './ghosted.svg';

export const MenuList = (props) => (
  <Box
    __css={{
      bg: 'black',
      color: 'secondary',
      p: 2,
      border: 2,
      borderColor: 'secondary',
      position: 'absolute',
      zIndex: 1,
      top: '1.8rem',
      visibility: 'hidden',
      opacity: 0,
      transition: 'opacity 0.25s',
      willChange: 'opacity',
    }}
    {...props}
  />
);

export const MenuToggle = (props) => (
  <Box
    __css={{
      display: 'inline-block',
      color: 'secondary',
      px: 3,
      pt: 2,
      height: '1.8rem',
      position: 'relative',
      userSelect: 'none',
      transition: 'all 0.25s',
    }}
    {...props}
  />
);

// export const Wrapper = <Box {...props} __css={{ mr: 6 }) />`
//   outline: 0;

//   ${(props) =>
//     props.menuActive &&
//     `${MenuToggle} { 
//       background-color: ${props.theme.colors.light};
//       color: ${props.theme.colors.primary};
//     }
//       ${MenuList} {
//         opacity: 1;
//         visibility: visible;
//       }
//     `};

//   ${MenuToggle} {
//     ${(props) =>
//       props.ghosted &&
//       `
//       pointer-events: none;
//       background-color: transparent;
//       color: ${props.theme.colors.secondary};

//       &::before {
//         content: '';
//         background-image: url(${ghostedImage});
//         position: absolute;
//         top: 0;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         z-index: 1;
//       }
//     `};
//   }
// `;
