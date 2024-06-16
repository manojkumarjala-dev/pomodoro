import React from 'react'
import { FiX } from "react-icons/fi";

function ModalSettings({
    pomodoroRef,longbreakRef,shortbreakRef,openSettings,setOpenSettings,updateTimeDefaultValues
}) {
    const input = [{
        value:'Pomodoro',
        ref:pomodoroRef,
        defaultValue:25,

    },
    {
        value:'Long Break',
        ref:longbreakRef,
        defaultValue:10,

    },
    {
        value:'Short Break',
        ref:shortbreakRef,
        defaultValue:5,

    },];
  return (openSettings &&
    <div>
    <div className='absolute h-full w-full opacity-30 bg-gray-900 top-0 left-0' onClick={()=>setOpenSettings(setting=>!setting)}>
    
    </div>
    <div className='absolute sm:w-96 w-11/12 left-1/2 top-1/2 max-w-xl bg-white p-5 rounded-lg' style={{transform:"translate(-50%,-40%"}}>
        
        <div className='text-gray-500  flex justify-between items-center'>
        <h3 className='uppercase'>Time Settings</h3>
        <button onClick={()=>setOpenSettings(setting=>!setting)} >

        <FiX className='text-xl'></FiX>
        </button>
        
        </div>
        <div className='h-1 w-full bg-gray-400 my-2'></div>
        <div className='flex gap-4'>
            {input.map((value,index)=>{
                return<div key={index} >
                    <h1 className='text-gray-800'>{value.value}</h1>
                     <input ref={value.ref} defaultValue={value.defaultValue} type='number' className='w-full text-center bg-gray-200 text-gray-800 outline-none'></input>
                </div>
            })}
        </div>
       <button className='bg-green-500 text-white py-2 mb-2 mt-4 px-4 rounded-3xl w-full' onClick={()=>{updateTimeDefaultValues();setOpenSettings(setting=>!setting)}}>
        Save
       </button>
    </div>
    
    </div>
  )
}

export default React.memo(ModalSettings)