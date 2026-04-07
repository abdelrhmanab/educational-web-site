import React from 'react'


import HeroBg from "../../assets/eventsbackground7.jpg"

import { IoCalendarClearOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

import type { EventType } from "./types";

type Prop = {
    event: EventType
}

const HeroEvent = ({event}:Prop) => {
  return (
        <div className="w-full bg-repeat bg-cover px-4 lg:px-16 py-5 lg:py-36 flex flex-col justify-center text-white gap-4 lg:gap-8 "
                style={{
                    backgroundImage: `url(${HeroBg})`
                }}
            >
                <p className="px-2 lg:px-4 py-2 capitalize text-xs lg:text-lg  bg-blue-600 w-fit rounded-xl ">{event.Category}</p>
                <h2 className="text-3xl lg:text-7xl font-bold lg:w-1/2 ">{event.title}</h2>
                <div className="flex items-center text-xs lg:text-xl gap-2 lg:gap-8">
                    <p className='flex items-center gap-2'><IoCalendarClearOutline /> {event.data.month} - {event.data.year}</p>
                    <p className='flex items-center gap-2'><IoMdTime /> {event.data.opened}</p>
                    <p className='flex items-center gap-2'><IoLocationOutline /> {event.location}</p>
                </div>

            </div>
  )
}

export default HeroEvent