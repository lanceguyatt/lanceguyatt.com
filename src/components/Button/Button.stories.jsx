import React from 'react';

import Button from './Button';

export default {
  title: 'Design System/Components/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Button',
  // backgroundColor: '#e00',
};

export const Secondary = Template.bind({});

Secondary.args = {
  appearance: 'secondary',
  children: 'Button',
};
