import React from 'react';
import { Box } from 'theme-ui';

import WorkBench from '../layouts/WorkBench';

function Test() {
  return (
    <WorkBench>
      <Box position="absolute" bg="light" p={4} top={0} left={0} right={0} />
    </WorkBench>
  );
}

export default Test;
