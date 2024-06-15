import React from 'react'

function About() {
  return (
    <div className='w-full mx-auto mt-8 sm:mt-24 text-white p-5'>
        <div>
            <h1 className='sm:text-xl text-base sm:font-medium font-normal'><span className='border-b-4 border-red-400'>What</span> is Pomodoro Technique?</h1>
            <p className='text-base font-normal py-4 tracking-wide opacity-70'>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.</p>
        </div>

        <div className='mt-5'>
            <h1 className='sm:text-xl text-base sm:font-medium font-normal'><span className='border-b-4 border-red-400'>What</span> is PomTimer?</h1>
            <p className='text-base font-normal py-4 tracking-wide opacity-70'>PomTimer is a small clone project from <a href='https://pomofocus.io' className='underline' target='_blank'>https://pomofocus.io</a></p>
        </div>
    
    
    </div>
  )
}

export default About