import React from 'react';

import TitleBar from './TitleBar';
import Depth from '../Depth';

export default {
  component: TitleBar,
  title: 'TitleBar',
  parameters: {
    componentSubtitle: 'TitleBar subtitle',
  },
};

export const all = () => (
  <>
    <TitleBar>Primary</TitleBar>
    <TitleBar appearance="secondary">
      Secondary
      <Depth />
    </TitleBar>
  </>
);
