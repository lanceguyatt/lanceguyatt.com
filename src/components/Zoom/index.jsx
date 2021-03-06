import React from 'react';
import styled from 'styled-components';

import { Box } from '../../primitives';
import sprite from './sprite.svg';

const Wrapper = styled(Box).attrs({
  width: '2.3rem',
  height: '2.2rem',
  backgroundImage: `url(${sprite})`,
})`
  &:focus,
  &:active {
    background-position: -2.3rem 0;
  }
`;

const Zoom = (props) => (
  <Wrapper is="button" type="button" aria-label="Zoom" {...props} />
);

export default Zoom;
