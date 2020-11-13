/** @jsx jsx */
/* eslint import/prefer-default-export: 0 */
import { jsx, css } from '@emotion/react';

import sprite from './sprite.svg';

export const Image = (props) => (
  <div
    css={css`
      width: 4.3rem;
      height: 4.6rem;
      background-image: url(${sprite});
      background-size: cover;
      margin-bottom: 4px;
      margin-left: auto;
      margin-right: auto;
    `}
    {...props}
  />
);

// export const Name = styled(Box).attrs({
//   textAlign: 'center',
// })``;

// export const Link = styled(GastbyLink)`
//   ${buttonStyle};

//   ${css({
//     display: 'block',
//     mb: 4,
//     variant: 'default',
//   })}

//   width: 8.5rem;

//   &:focus,
//   &.active {
//     ${Image} {
//       background-position: -4.3rem 0;
//     }
//   }
// `;

// `
//   display: block;
//   width: 8.5rem;
//   margin-bottom: ${props => props.theme.space[4]};

//   &:focus,
//   &.active {
//     ${Image} {
//       background-position: -4.3rem 0;
//     }
//   }
// `
