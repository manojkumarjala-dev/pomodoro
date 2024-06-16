import { FcAlarmClock } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";

import React from 'react'

function Navigation({setOpenSettings}) {
  return (
    <nav className="flex justify-between items-center px-4">
        <FcAlarmClock className="w-10 h-10"></FcAlarmClock>
        <h1 className="font-extrabold text-2xl sm:text-3xl text-gray-200 py-4 px-4">PomoTimer</h1>
        <button>
         <FcSettings className="w-10 h-10" onClick={()=>setOpenSettings(setting=>!setting)}></FcSettings>
         </button>
    </nav>
  )
}

export default React.memo(Navigation)