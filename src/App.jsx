import { useState } from 'react'
import './App.css'
import gradient from './../resources/blur_gradient.png'
import pentagon from './../resources/pentagon.png'

function App() {
  return (
    <>
      <a>
        <img src={gradient} className='image' />
        <img src={pentagon} className='pentagon' />
      </a>
      <div className='bg upper'></div>
      <div className='bg left'></div>
      <div className='bg right'></div>
      <div className='bg lower'></div>
      <h1 className='title'>Welcome!</h1>
      <h3>This is Thomas' website</h3>
    </>
  )
}

export default App
