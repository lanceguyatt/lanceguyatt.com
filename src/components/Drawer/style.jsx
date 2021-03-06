import styled from 'styled-components';
import { Link as GastbyLink } from 'gatsby';

import { Box } from '../../primitives';
import sprite from './sprite.svg';

export const Image = styled(Box).attrs({
  width: '6.5rem',
  height: '3.8rem',
  backgroundImage: `url(${sprite})`,
  backgroundSize: 'cover',
  mb: 3,
  mx: 'auto',
})``;

export const Name = styled(Box).attrs({
  textAlign: 'center',
})``;

export const Link = styled(GastbyLink)`
  display: block;
  width: 8rem;

  &:focus,
  &.active {
    ${Image} {
      background-position: -6.5rem 0;
    }
  }
`;
