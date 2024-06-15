import React from 'react'

function Timer({stage, switchStage, getTickingTimer, seconds, clocksTicking, setSeconds}) {
    const options = ['Pomodoro','Long Break','Short Break']
  return (
    <div className='flex flex-col items-center'>

        <div className='flex justify-between pt-4 mx-auto px-2 sm:px-0 w-3/4 sm:w-1/2'>
            {
                options.map((option,index) => {
                    return <button key={index} className={`${stage === index ? 'bg-gray-200 text-black':''} sm:px-2 rounded-lg hover:bg-gray-600 transition`} onClick={()=>{switchStage(index);setSeconds(0)}}>{option}</button>
                })
            }
        </div>
        <div className='my-10 text-center'>
            <h1 className='text-7xl sm:text-8xl font-bold select-none m-0'>{getTickingTimer()}:{seconds.toString()}</h1>
        </div>
        <button className='p-2 bg-zinc-200 text-gray-900 rounded-lg border shadow-lg hover:scale-110 transition' onClick={()=>{clocksTicking(); }}>
            Start Focusing
        </button>

    </div>
  )
}

export default Timer