import React from 'react';
import { Box, Flex } from 'theme-ui';

export const Foo = props => <Flex __css={{ bg: 'lime', flexWrap: 'wrap', mx: -2, a: { m: 3 } }} {...props} />;

export const Wrapper = props => (
  <Box
    __css={{
  table: {
    margin: '-0.2rem',
  },
  th: {
    display: 'none'
  },
  'th, td': {
    p: 1,
  },
}}
    {...props}
  />
);
