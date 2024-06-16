import React from 'react'


const Alarm = React.forwardRef((_,ref)=>{
    const path = '/alarm.mp3'
        return (
          <audio ref={ref} controls  className='hidden'>
              <source src={path} type='audio/mp3'></source>
              Your browser does not support the audio element 
          </audio>
        )
})


export default Alarm