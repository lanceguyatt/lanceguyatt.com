import React, { Component } from 'react'
import { transit } from 'react-css-transition'

import { Alert, Audio } from '../../components/common'
import { Wrapper, Toasty } from './style'
import toastyMp3 from './toasty.mp3'

class GuruMeditation extends Component {
  state = {
    toasty: false,
  }

  componentDidMount = () => {
    this.init()
  }

  componentWillUnMount = () => {
    this.init()
  }

  init = () => {
    let konamiCodeArray = []
    const konamiCodeKey = '38,38,40,40,37,39,37,39,66,65'
    const toastyAudio = document.getElementById('js-toasty-audio')

    document.addEventListener('keydown', e => {
      konamiCodeArray.push(e.keyCode)

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load()
        toastyAudio.play()
        konamiCodeArray = []
        this.setState({
          toasty: true,
        })
      }
    })
  }

  render = () => {
    const { toasty } = this.state
    return (
      <Wrapper>
        <Alert
          name="Software Failure. Press left mouse button to continue."
          description="Guru Meditation #00004040.00004040"
          url="/"
          colors="alert.danger"
        />

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
          onTransitionComplete={() => this.setState({ toasty: false })}
          active={toasty}
        />

        <Audio id="js-toasty-audio">
          <source src={toastyMp3} type="audio/mp3" />
        </Audio>
      </Wrapper>
    )
  }
}

export default GuruMeditation
