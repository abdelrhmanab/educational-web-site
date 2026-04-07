import React from 'react'



import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";


import PrimaryButton from '../../components/MainButton';

import HoverPopover from './ShareEvent';

import type { EventType } from "./types";
import DetailsRow from './DitailRow';

type Prop = {
    event: EventType
}

const EventSideBar = ({ event }: Prop) => {

    const data = event.data


    return (

        <div className="lg:col-span-4 flex flex-col gap-8 px-10">

            <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl  shadow-lg flex flex-col gap-8">


                <div className="w-full flex lg:text-2xl items-center justify-between border-b border-gray-300 p-2">
                    <p className="flex"> cost :</p>
                    <p className="text-blue-500 text-2xl lg:text-4xl font-bold ">{event.TicketPrice} $</p>
                </div>



                <DetailsRow label='Instructor' value={event.Instructor} />

                <DetailsRow label='Total Slot' value={event.TotalSlot} />

                <DetailsRow label='Booked Slot' value={event.BookedSlot} />




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

                <h6 className='text-2xl text-primary w-fit  '><strong>Event information </strong>: </h6>

                <DetailsRow label='Date' value={`${data.month} , ${data.year}`} />

                <DetailsRow label='Time' value={data.opened} />

                <DetailsRow label='Venue' value={event.location} />

                <DetailsRow label='Phone' value={event.Phone} />
            </div>


        </div>

    )
}

export default EventSideBar