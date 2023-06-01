// import * as React from 'react'
import { useState, useEffect } from 'react'

import toastyMp3 from '/audio/toasty.mp3'
import toastyImage from '/images/toasty.png'

export default function Toasty() {
  const [toasty, setToasty] = useState(false)

  useEffect(() => {
    let konamiCodeArray: Array<string> = []
    const konamiCodeKey: string =
      'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA'

    const toastyAudio = document.getElementById('js-toasty-audio')

    document.addEventListener('keydown', e => {
      konamiCodeArray.push(e.code)

      console.log(konamiCodeArray)

      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load()
        toastyAudio.play()
        konamiCodeArray = []
        setToasty(true)
      }
    })
  })

  return (
    <>
      <img
        src={toastyImage}
        alt="Toasty"
        className="fixed bottom-0 -right-full z-10 h-[12.5rem] w-[12.5rem]"
      />

      <audio id="js-toasty-audio">
        <source src={toastyMp3} type="audio/mp3" />
      </audio>
    </>
  )
}
