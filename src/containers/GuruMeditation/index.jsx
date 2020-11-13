import React, { useState, useEffect } from 'react';
import { transit } from 'react-css-transition';
import { Link } from 'gatsby';
import { Flex, Styled } from 'theme-ui';

import theme from '../../gatsby-plugin-theme-ui';
import { Alert, Audio } from '../../components';
import { Toasty } from './style';
import toastyMp3 from './toasty.mp3';

function GuruMeditation() {
  const [toasty, setToasty] = useState(false);

  useEffect(() => {
    let konamiCodeArray = [];
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65';
    const toastyAudio = document.getElementById('js-toasty-audio');

    document.addEventListener('keydown', (e) => {
      konamiCodeArray.push(e.keyCode);

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
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1rem solid red',
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

      <Styled.pre>{JSON.stringify(theme, null, 2)}</Styled.pre>

      <Toasty
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
      />

      <Audio id="js-toasty-audio">
        <source src={toastyMp3} type="audio/mp3" />
      </Audio>
    </Flex>
  );
}

export default GuruMeditation;
