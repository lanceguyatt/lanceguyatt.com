import React from 'react';
import styled from 'styled-components';

import { Box } from '../../primitives';
import sprite from './sprite.svg';

const Wrapper = styled(Box).attrs({
  is: 'input',
  type: 'checkbox',
  width: '2.6rem',
  height: '2.2rem',
  backgroundImage: `url(${sprite})`,
})`
  &:active {
    background-position: -2.6rem 0;
  }

  &:checked {
    background-position: -5.2rem 0;
  }
`;

const Checkbox = (props) => <Wrapper {...props} />;

export default Checkbox;
