import React from 'react'
import BgLinkPages from '../../components/bgLinkPages'

import eventsList from '../../data/events_List'
import { Link } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";

import { IoCalendarClearOutline } from "react-icons/io5";
import { BiSearch } from 'react-icons/bi';


import PopeventImg1 from "../../assets/popevent3.jpg"
import PopeventImg2 from "../../assets/popevent4..jpg"


const EventSidebarPage = () => {
    return (
        <div className='w-full'>
            <BgLinkPages title='Event Sidebar' />


            <div className="w-full bg-gray-100 flex flex-col gap-24 px-20 py-24 ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className=" col-span-4 lg:col-span-8">


                        <div className="flex w-full justify-between py-5">
                            <p className=" text-secondary text-xl">We found {eventsList.length} events available for you</p>
                            <select className=" select select-lg">
                                <option>Event Type: All</option>
                                <option>Sort by popularity</option>
                                <option>Sort by average rating</option>
                                < option>Sort by lates</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>
                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-12 ">
                            {eventsList.map(
                                i => {
                                    const data = i.data
                                    return (
                                        <div key={i.id} className='flex flex-col gap-5 shadow rounded-lg pb-5  '>
                                            <img className='w-full' src={i.img} alt={i.title} />
                                            <div className="flex flex-col gap-5 pl-12">
                                                <p className='flex gap-2 text-info text-xl'>{data.day} {data.month} , {data.year}</p>

                                                <Link to={`/event/${i.id}`} className='text-3xl text-primary font-bold'>
                                                    {i.title}
                                                </Link>

                                                <p className=' uppercase text-secondary flex gap-2 items-center text-xl'><GrLocation className='text-2xl font-bold' /> {i.location}</p>
                                            </div>




                                        </div>
                                    )
                                }
                            )}
                        </div>

                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-8 px-2 py-12 lg:py-32">
                        <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl  shadow-lg flex flex-col gap-8">
                            <h4 className='text-2xl font-bold'>
                                Find events
                            </h4>

                            <div className=" relative">
                                <input className='text-xl w-full p-4 rounded-lg outline-0 bg-gray-200 focus:bg-white focus:outline-2 outline-info' type="text" placeholder='Event form  ' />
                                <span className=" absolute right-3 top-4"><IoCalendarClearOutline className='text-2xl' /></span>
                            </div>

                            <div className=" relative">
                                <input className='text-xl w-full p-4 rounded-lg outline-0 bg-gray-200 focus:bg-white focus:outline-2 outline-info' type="text" placeholder='Search  ' />
                                <span className=" absolute right-3 top-4"><BiSearch className='text-2xl' /></span>
                            </div>


                            <select className=" select select-xl text-xl w-full p-4 rounded-lg outline-0 bg-gray-200  ">
                                <option>All Categories</option>
                                <option>Sort by popularity</option>
                                <option>Sort by average rating</option>
                                <option>Sort by lates</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>


                            <div className=" relative">
                                <input className='text-xl w-full p-4 rounded-lg outline-0 bg-gray-200 focus:bg-white focus:outline-2 outline-info' type="text" placeholder='Location' />
                                <span className=" absolute right-3 top-4"><GrLocation className='text-2xl' /></span>
                            </div>

                        </div>

                        <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl  shadow-lg flex flex-col gap-8">
                            <h4 className='text-2xl font-bold'>
                                Popular Events
                            </h4>

                            <Link to={"/event/3"} className='flex gap-5'>
                                <img className='w-1/4 h-32 object-cover rounded-2xl' src={PopeventImg1} alt="" />
                                <div className="flex flex-col gap-3 p-4">
                                    <h6 className='text-lg'>Ethics in AI Live Event Machines Judging.</h6>
                                    <p className='text-lg font-bold'>26 March, 2022</p>
                                </div>

                            </Link>

                            <Link to={"/event/4"} className='flex gap-5'>
                                <img className='w-1/4 h-32 object-cover rounded-2xl' src={PopeventImg2} alt="" />
                                <div className="flex flex-col gap-3 p-4">
                                    <h6 className='text-lg'>The Importance Of Intrinsic Motivation.</h6>
                                    <p className='text-lg font-bold'>10 April, 2022</p>
                                </div>

                            </Link>

                        </div>


                    </div>


                </div>

            </div>
        </div>
    )
}

export default EventSidebarPage