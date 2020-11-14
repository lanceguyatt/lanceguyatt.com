import React, { useState, useEffect } from 'react';
import { CSSTransition, transit } from 'react-css-transition';
import { Link } from 'gatsby';
import { Box, Flex } from 'theme-ui';

import { Alert, Audio } from '../../components';
import toastyMp3 from './toasty.mp3';
import toastyImage from './toasty.png';

const Toasty = (props) => (
  <Box
    __css={{
      bg: 'lime',
      backgroundImage: `url(${toastyImage})`,
      backgroundSize: 'cover',
      position: 'absolute',
      right: -200,
      bottom: 0,
      size: 200,
      transition: 'right 0.25s',
    }}
    {...props}
  />
);

function GuruMeditation() {
  const [toasty, setToasty] = useState(false);

  useEffect(() => {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const toastyAudio = document.getElementById('js-toasty-audio');

    document.addEventListener('keydown', (event) => {
      konamiCodeArray.push(event.keyCode);

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load();
        toastyAudio.play();
        konamiCodeArray = [];
        setToasty(true);
      }
    });
  });

  return (
    <Flex
      __css={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'text',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Alert as={Link} to="/">
        Software Failure. Press left mouse button to continue.
        <br />
        Guru Meditation #00004040.00004040
      </Alert>

      <button
        onClick={() => setToasty((prevState) => !prevState)}
        type="button"
      >
        Toasty
      </button>

      <Toasty
        as={CSSTransition}
        defaultStyle={{ transform: 'translate(200px, 0)' }}
        enterStyle={{
          transform: transit('translate(0, 0)', 400, 'ease-in-out'),
        }}
        leaveStyle={{
          transform: transit('translate(200px, 0)', 300, 'ease-in-out'),
        }}
        activeStyle={{ transform: 'translate(0, 0)' }}
        transitionDelay={{ enter: 0, leave: 100 }}
        onTransitionComplete={() => setToasty(false)}
        active={toasty}
        // sx={{ ...(toasty && { right: 0 }) }}
      />

      <Audio id="js-toasty-audio">
        <source src={toastyMp3} type="audio/mp3" />
      </Audio>
    </Flex>
  );
}

export default GuruMeditation;
