import './Meme.css'
import memesData from './data'

import React, {useState} from 'react'

function Meme() {

    const [webs, setWebs] = useState('')
    // './images/test.jpg'
    let pic = `${memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url}`
    function handleClick(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const picSource = memesArray[randomNumber].url
        setWebs(picSource)
        // pic=webs
    }

  return (
    <div className='meme'>
        <form>
            <input className='input-fields' type={'text'} />
            <input className='input-fields' type={'text'} />
            <button onClick={handleClick}>Get a new meme image 🖼️</button>
        </form>
        <img className='main-pic' src={webs?webs:pic} alt={'meme face showing'} />
    </div>
  )
}

export default Meme