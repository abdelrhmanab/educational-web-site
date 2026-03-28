import React from 'react'



import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";


import PrimaryButton from './MainButton';

import HoverPopover from './ShareEvent';

import type { EventType } from "./types";

type Prop = {
    event: EventType
}

const EventSideBar = ({ event }: Prop) => {

    const data = event.data


    return (

        <div className="lg:col-span-4 flex flex-col gap-8 px-10">

            <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl  shadow-2xl flex flex-col gap-8">


                <div className="w-full flex lg:text-2xl items-center justify-between border-b border-gray-300 p-2">
                    <p className="flex"> cost :</p>
                    <p className="text-blue-500 text-2xl lg:text-4xl font-bold ">{event.TicketPrice} $</p>
                </div>




                <div className="w-full flex lg:text-2xl items-center justify-between border-b border-gray-300 p-2">
                    <p className="flex">  Instructor :</p>
                    <p className="">{event.Instructor} </p>
                </div>


                <div className="w-full flex lg:text-2xl items-center justify-between border-b border-gray-300 p-2">
                    <p className="flex">  Total Slot :</p>
                    <p className="">{event.TotalSlot}</p>
                </div>


                <div className="w-full flex lg:text-2xl items-center justify-between border-b border-gray-300 p-2">
                    <p className="flex">  Booked Slot :</p>
                    <p className="">{event.BookedSlot} </p>
                </div>

                <PrimaryButton text='join Now !' to={`/event/:${event.id}`} />

                <HoverPopover
                    content={
                        <div className='flex'>
                            <a className='btn btn-circle btn-ghost lg:btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <ImFacebook /> </a>
                            <a className='btn btn-circle btn-ghost lg:btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <FaLinkedinIn /> </a>
                            <a className='btn btn-circle btn-ghost lg:btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <FaXTwitter /> </a>

                        </div>
                    }
                >
                    <div className="text-sm lg:text-2xl font-bold flex gap-5 items-center">

                        Share this course <div className="p-3 text-sm lg:text-3xl border w-fit rounded-full"> <LuShare2 /></div>
                    </div>
                </HoverPopover>




            </div>

            <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl  shadow-2xl flex flex-col gap-8">

                <p className="flex flex-col gap-2 text-lg ">
                    <span className='font-bold'>Date :</span>
                    {data.month} , {data.year}
                </p>

                <p className="flex flex-col gap-2 text-lg ">
                    <span className='font-bold'>Time :</span>
                    {data.opened}
                </p>

                <p className="flex flex-col gap-2 text-lg ">
                    <span className='font-bold'>Venue :</span>
                    {event.location}
                </p>

                <p className="flex flex-col gap-2 text-lg ">
                    <span className='font-bold'>Phone :</span>
                    {event.Phone}
                </p>





            </div>

        </div>

    )
}

export default EventSideBar