import './Meme.css'
import memesData from './data'

import React, {useState} from 'react'

function Meme() {

    const [meme, setMeme] = useState({topText:'',bottomText:'', randomImage:'http://i.imgflip.com/1bij.jpg'})
    const [allData, setAllData]= useState(memesData)

    let pic = `${meme.randomImage}`
    function handleClick(e){
        e.preventDefault()
        const imageUrl = allData.data.memes[Math.floor(Math.random()*allData.data.memes.length)].url
        setMeme(prevState=>({...prevState, randomImage:imageUrl}))
    }
    // console.log(meme)
    function handleChange(e){
        e.preventDefault()
        const {name, value} = e.target
        setMeme(prevState => (
            {...prevState, [name]:value}
        ))
    }

    return (
    <div className='meme'>
        <form>
            <input className='input-fields' 
                onChange={handleChange} 
                name='topText' 
                value={meme.topText}  
                type={'text'} />
            <input className='input-fields' 
                onChange={handleChange} 
                name='bottomText' 
                value={meme.bottomText} 
                type={'text'} />
            <button onClick={handleClick}>Get a new meme image 🖼️</button>
        </form>
        <div className='image-container'>
            <h1 className='top meme-text'>{meme.topText}</h1>
            <img className='main-pic' src={pic} alt={'meme face showing'} />
            <h1 className='bottom meme-text'>{meme.bottomText}</h1>
        </div>
    </div>
  )
}

export default Meme