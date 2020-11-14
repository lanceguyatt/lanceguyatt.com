import React from 'react';
import styled from 'styled-components';

import { Box } from '../../primitives';
import sprite from './sprite.svg';

const Wrapper = styled(Box).attrs({
  width: '1.8rem',
  height: '2rem',
  backgroundImage: `url(${sprite})`,
})`
  &:active {
    background-position: -1.8rem 0;
  }
`;

const Sizing = (props) => <Wrapper is="button" type="button" {...props} />;

export default Sizing;
