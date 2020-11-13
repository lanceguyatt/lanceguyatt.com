import React from 'react';
import { Box } from 'theme-ui';

import { Button } from '../components';

export default function Foo() {
  return (
    <Box p={3} bg="primary" __css={{ p: 3, bg: 'text' }}>
      Box

      <Button>Button</Button>
      <Button as="a" href="#">Button</Button>
    </Box>
  );
}
