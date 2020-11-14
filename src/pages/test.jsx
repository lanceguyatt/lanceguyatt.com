import React from 'react';

import WorkBench from '../layouts/WorkBench';
import { Box } from '../primitives';
import { Text } from '../components';

function Test() {
  return (
    <WorkBench>
      <Box position="absolute" bg="light" p={4} top={0} left={0} right={0}>
        <Text placeholder="Enter text" />
      </Box>
    </WorkBench>
  );
}

export default Test;
