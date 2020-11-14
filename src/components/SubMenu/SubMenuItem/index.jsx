/* eslint no-unused-vars: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Flex } from '../../../primitives';

const Wrapper = styled(Box)``;

const Action = styled(({ active, ...props }) => <Flex {...props} />).attrs({
  color: 'secondary',
  justifyContent: 'space-between',
  py: 2,
  px: 1,
  height: '1.8rem',
  minWidth: '100%',
  position: 'relative',
  variant: 'menuItem',
  textAlign: 'left',
})`
  transition-property: background-color, color;
  transition-duration: 0.25s;
`;

const SubMenuItem = (props) => {
  const { name, active } = props;
  return (
    <Wrapper is="li">
      <Action type="button" role="button" {...props}>
        {name}
        {active && (
          <svg width="13" height="14" viewBox="0 0 13 14">
            <path
              d="M11 2v2h-1v2H9v2H8v2H7v2H6v2H3v-2H2v-2H1V8H0V6h3v2h1v2h2V8h1V6h1V4h1V2h1V0h3v2h-2z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        )}
      </Action>
    </Wrapper>
  );
};

SubMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

SubMenuItem.defaultProps = {
  active: false,
};

export default SubMenuItem;
