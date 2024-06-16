import React from 'react'
import { FaBellSlash } from "react-icons/fa";

function Timer({stage, switchStage, getTickingTimer, seconds, clocksTicking, setSeconds, ticking, setTicking, muteAlarm,reset, consumedSecond}) {
    const options = ['Pomodoro','Long Break','Short Break']
  return (
    <div className='flex flex-col items-center'>

        <div className='flex justify-between pt-4 mx-auto px-2 sm:px-0 w-3/4 sm:w-1/2'>
            {
                options.map((option,index) => {
                    return <button key={index} className={`${stage === index ? 'bg-gray-200 text-black':''} sm:px-2 rounded-lg hover:bg-gray-600 transition`} onClick={()=>{switchStage(index);}}>{option}</button>
                })
            }
        </div>
        <div className='my-10 text-center'>
            <h1 className='text-7xl sm:text-8xl font-bold select-none m-0'>{getTickingTimer()}:{seconds.toString().padStart(2, '0')}</h1>
        </div>
        <div className='flex justify-center items-center gap-6'>
            <button className='p-2 bg-zinc-200 text-gray-900 rounded-lg border shadow-lg hover:scale-110 transition' onClick={()=>{setTicking(ticking=> !ticking) }}>
            {ticking ? 'Pause Timer' : (consumedSecond ? 'Resume Timer' : 'Start Timer')}
            </button>
            {consumedSecond>0 && <button className='p-2 bg-zinc-200 text-gray-900 rounded-lg border shadow-lg hover:scale-110 transition' onClick={ reset}>
                Reset Timer
            </button>}
        </div>
        


    </div>
  )
}

export default Timer