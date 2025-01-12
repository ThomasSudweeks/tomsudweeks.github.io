import { useState } from 'react'
import './App.css'
import gradient from './../resources/radial_gradient.png'
import overlay from './../resources/shadow_overlay.png'

function App() {
  return (
    <>
      <a>
        <img src={gradient} className='image' />
        <img src={overlay} className='image overlay' />
      </a>
      <h1 className='title'>Welcome!</h1>
      <h3>This is Thomas' website</h3>
      <p>That's it. Thanks for stopping by :)</p>
    </>
  )
}

export default App
