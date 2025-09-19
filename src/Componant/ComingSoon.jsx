import React from 'react'
import comingsoon from '../assets/Image/banner/webiste-comming-soon.jpg'
import mobilecomming   from '../assets/Image/banner/mobilecomming.jpg'
const ComingSoon = () => {
  return (
    <div>
     <div className='deckcomming'>
          <img src={comingsoon} alt="" />
    </div>
    <div className='mobilecomming'>
        <img src={mobilecomming} alt="" />
    </div>
    </div>
  )
}

export default ComingSoon
