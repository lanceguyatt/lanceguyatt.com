import React from 'react';
import { Flex, Box } from 'theme-ui';
import PropTypes from 'prop-types';

import { getMargin, omitMargin } from '../../utils';
import sprite from './sprite.svg';

const propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/** `Checkbox` description */
const Checkbox = ({ children, name, ...rest }) => {
  return (
    <Box {...getMargin(rest)}>
      <Flex
        as="label"
        htmlFor={name}
        __css={{
          alignItems: 'flex-start',
          userSelect: 'none',
          lineHeight: '22px',
        }}
      >
        <Box
          as="input"
          type="checkbox"
          id={name}
          name={name}
          {...omitMargin(rest)}
          __css={{
            appearance: 'none',
            width: 26,
            height: 22,
            background: `url(${sprite})`,
            outline: 0,
            '&:focus': {
              bg: 'primary',
            },
            '&:checked': {
              backgroundPosition: '-52px 0',
            },
          }}
        />
        <Box __css={{ flex: '1 1 auto' }}>{children}</Box>
      </Flex>
    </Box>
  );
};

Checkbox.propTypes = propTypes;

export default Checkbox;
