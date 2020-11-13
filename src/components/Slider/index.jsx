import React, { useState } from 'react';
import { Box } from 'theme-ui';

import image from './image.svg';

const Wrapper = (props) => (
  <Box
    __css={{
      border: 2,
      height: '2.2rem',
      p: 2,
      borderImage: `url(${image}) 2`,
      '&::-webkit-slider-runnable-track': {},
      '&::-webkit-slider-thumb': {
        height: '1.4rem',
        width: '1rem',
        backgroundColor: 'text',
        appearance: 'none',
      },
    }}
    {...props}
  />
);

function Slider(props) {
  const [value, setValue] = useState(50);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Wrapper
      is="input"
      type="range"
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}

export default Slider;
