import React from 'react';
import { Box } from 'theme-ui';

import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'forms/Checkbox',
  parameters: {
    componentSubtitle: 'Checkbox subtitle',
  },
  decorators: [(story) => <Box variant="layout.workbench">{story()}</Box>],
};

export const all = () => (
  <Checkbox name="agreed">I agree to the terms</Checkbox>
);

all.story = { name: 'Default' };

export const checked = () => (
  <Checkbox name="foo" checked>
    I agree to the terms
  </Checkbox>
);
