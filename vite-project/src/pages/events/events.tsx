import React from 'react'
import BgLinkPages from '../../components/bgLinkPages'

import eventsList from '../../data/events_List'
import { Link } from 'react-router-dom';

import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";



const EventsPage = () => {
    return (
        <div className=' '>
            <BgLinkPages title='New Events' />

            <div className="w-full bg-gray-100 flex flex-col gap-24 px-20 py-24 ">

                <div className="flex w-full justify-between py-5">
                    <p className=" text-secondary text-2xl">We found {eventsList.length} events available for you</p>
                    <select className=" select select-lg">
                        <option>Event Type: All</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        < option>Sort by lates</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                    </select>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {eventsList.map(i =>{
                const data = i.data
                return(
                    <div className="flex flex-col gap-8 p-5 bg-white ">
                    <div className="flex flex-col gap-2 ">
                        <div className="text-6xl font-bold text-primary ">{data.day}</div>
                        <div className="text-secondary text-xl">{data.month} - {data.year}</div>
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <div className="text-primary text-xl">{data.opened}</div>
                        <Link className='text-3xl hover:text-primary transition duration-500' to={`/event/${i.id}`}>{i.title}</Link>
                    </div>
                    <div className="text-secondary text-2xl flex items-center gap-2"><IoLocationOutline/> {i.location}</div>
                        <Link className='text-xl flex items-center justify-center gap-2 hover:bg-sky-500 hover:text-white transition duration-500 uppercase border-2 text-center p-2 w-11/12 rounded-2xl' to={`/event/${i.id}`}>get ticket <FaArrowRight/> </Link>

                    </div>
                )
            })}


                </div>

                <div className="flex gap-5 w-full justify-center items-center">
                    <button className=" rounded-full bg-white text-2xl px-5 py-3 hover:bg-sky-500 hover:text-white transition duration-500">1</button>
                    <button className=" rounded-full bg-white text-2xl px-5 py-3 hover:bg-sky-500 hover:text-white transition duration-500">2</button>
                    <button className=" rounded-full bg-white text-2xl p-3 hover:bg-sky-500 hover:text-white transition duration-500"><FaArrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default EventsPage