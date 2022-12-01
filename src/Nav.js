import React from 'react'
import './Nav.css'
import memeface from './images/troll-face.png'

function Nav() {
  return (
    <nav>
        <div className='nav-left'>
            <img className='meme-face' src={memeface} alt={'app logo'} />
            <h1 className='nav-title'>Meme Generator</h1>
        </div>
        <p className='nav-right'>React Course - Project 3</p>
    </nav>
  )
}

export default Nav