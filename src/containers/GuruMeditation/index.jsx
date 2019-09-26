import React, { useState, useEffect } from 'react'
import { transit } from 'react-css-transition'

import { Alert, Audio } from '../../components'
import { Wrapper, Toasty } from './style'
import toastyMp3 from './toasty.mp3'

const alert = {
  description:
    'Software Failure. Press left mouse button to continue.<br />Guru Meditation #00004040.00004040',
  url: '/',
}

function GuruMeditation() {
  const [toasty, setToasty] = useState(false)

  useEffect(() => {
    let konamiCodeArray = []
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65'
    const toastyAudio = document.getElementById('js-toasty-audio')

    document.addEventListener('keydown', e => {
      konamiCodeArray.push(e.keyCode)

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load()
        toastyAudio.play()
        konamiCodeArray = []
        setToasty(true)
      }
    })
  })

  return (
    <Wrapper>
      <Alert alert={alert} />

      <Toasty
        defaultStyle={{ transform: 'translate(20rem, 0)' }}
        enterStyle={{
          transform: transit('translate(0, 0)', 400, 'ease-in-out'),
        }}
        leaveStyle={{
          transform: transit('translate(20rem, 0)', 300, 'ease-in-out'),
        }}
        activeStyle={{ transform: 'translate(0, 0)' }}
        transitionDelay={{ enter: 0, leave: 100 }}
        onTransitionComplete={() => setToasty(false)}
        active={toasty}
      />

      <Audio id="js-toasty-audio">
        <source src={toastyMp3} type="audio/mp3" />
      </Audio>
    </Wrapper>
  )
}

export default GuruMeditation
