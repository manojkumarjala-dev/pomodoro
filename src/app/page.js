'use client'
import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pomodoro,setPomodoro] = useState(25)
  const [shortBreak,setShortBreak] = useState(5)
  const [longBreak,setLongBreak] = useState(10)
  const [seconds,setSeconds] = useState(0)

  const [stage,setStage] = useState(0)
  const switchStage = (index) => {
    setStage(index)
  }
  const getTickingTimer = () => {
    const timeStage = {
      0:pomodoro,
      1:shortBreak,
      2:longBreak
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

  const clocksTicking = () => {
    const minutes = getTickingTimer();
    const setMinutes = updateMinute()

    if (minutes===0 && seconds===0){
      alert('Time Up')
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
    const timer = setInterval(()=>{
      clocksTicking()
    },1000)

    return ()=>{
      clearInterval(timer)
    }
  },[seconds,pomodoro,shortBreak,longBreak])

  return (
    <main className="flex justify-center min-h-screen sm:px-24">
      <div className="min-h-screen flex flex-col sm:mx-48 w-full sm:w-3/4">
        <Navigation></Navigation>
        <div className="">
        <Timer stage={stage} switchStage={switchStage} getTickingTimer={getTickingTimer} seconds={seconds} clocksTicking={clocksTicking} setSeconds={setSeconds}></Timer>
        <About></About>
        </div>
        

      </div>
    </main>
  );
}
