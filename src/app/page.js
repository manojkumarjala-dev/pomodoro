'use client'
import About from "@/components/About";
import Alarm from "@/components/Alarm";
import ModalSettings from "@/components/ModalSettings";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [pomodoro,setPomodoro] = useState(25)
  const [shortBreak,setShortBreak] = useState(5)
  const [longBreak,setLongBreak] = useState(10)
  const [seconds,setSeconds] = useState(0)
  const [ticking,setTicking] = useState(false)
  const [consumedSecond,setConsumedSecond] = useState(0)
  const [openSettings,setOpenSettings] = useState(false)
  const alarmRef = useRef()
  const [stage,setStage] = useState(0)

  const pomodoroRef = useRef()
  const longbreakRef = useRef()
  const shortbreakRef = useRef()

  const updateTimeDefaultValues = () => {
    setPomodoro(pomodoroRef.current.value)
    setLongBreak(longbreakRef.current.value)
    setShortBreak(shortbreakRef.current.value)
  }
  const switchStage = (index) => {
    const isYes = consumedSecond && stage !==index ? confirm('Are you sure?'): false

    if( isYes ){
      reset()
      
      setStage(index)
    }
    else if(!consumedSecond){
      setStage(index)
    }
    
  }
  const muteAlarm= () => {
    alarmRef.current.pause()
    alarmRef.current.currentTime = 0;
  }
  const getTickingTimer = () => {
    const timeStage = {
      0:pomodoro,
      2:shortBreak,
      1:longBreak
    }
    return timeStage[stage]
  }

  const updateMinute = () => {
    const updateStage = {
      0:setPomodoro,
      1:setShortBreak,
      2:setLongBreak
    }
    return updateStage[stage]
  }
  const reset = ()=>{
    setConsumedSecond(0)
    setSeconds(0)
    setTicking(false)
    setPomodoro(25)
    setLongBreak(10)
    setShortBreak(5)
  }
  const timesUp = ()=>{
    reset()
    alarmRef.current.play()
  }

  const clocksTicking = () => {
    const minutes = getTickingTimer();
    const setMinutes = updateMinute()

    if (minutes===0 && seconds===0){
      timesUp()
    }
    else if(seconds===0){
      setMinutes((minute)=>minute-1)
      setSeconds(59)
    }
    else{
      setSeconds((second)=>second-1)
    }
  }

  useEffect(()=>{
    window.onbeforeunload = () => {
      return consumedSecond ? "Show waring" : null
    }

    const timer = setInterval(()=>{
      if(ticking){
        setConsumedSecond(second=>second+1)
        clocksTicking()
      }
      
    },1000)

    return ()=>{
      clearInterval(timer)
    }
  },[seconds,pomodoro,shortBreak,longBreak,ticking,consumedSecond])

  return (
    <main className="flex justify-center min-h-screen sm:px-24">
      <div className="min-h-screen flex flex-col sm:mx-48 w-full sm:w-3/4">
        <Navigation setOpenSettings={setOpenSettings}></Navigation>
        <div className="">
        <Timer stage={stage} switchStage={switchStage} getTickingTimer={getTickingTimer} seconds={seconds} clocksTicking={clocksTicking} setSeconds={setSeconds} ticking={ticking} setTicking={setTicking} reset={reset} muteAlarm={muteAlarm} consumedSecond={consumedSecond}></Timer>
        <About></About>
        <Alarm ref={alarmRef}></Alarm>
        <ModalSettings openSettings={openSettings} setOpenSettings={setOpenSettings} pomodoroRef={pomodoroRef} shortbreakRef={shortbreakRef} longbreakRef={longbreakRef} updateTimeDefaultValues={updateTimeDefaultValues}></ModalSettings>
        </div>
        

      </div>
    </main>
  );
}
