import styled from 'styled-components';
import { Link as GastbyLink } from 'gatsby';

import { Box } from '../../primitives';
import sprite from './sprite.svg';

export const Image = styled(Box).attrs({
  width: '8.5rem',
  height: '4.4rem',
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
  width: 8.5rem;
  margin-bottom: ${(props) => props.theme.space[4]};

  &:focus,
  &.active {
    ${Image} {
      background-position: -8.5rem 0;
    }
  }
`;
