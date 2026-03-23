import React from 'react'
import TitleOfSec from '../../../components/titleOfSec';

import { FaLocationDot } from "react-icons/fa6";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import PrimaryButton from '../../../components/MainButton';



const eventsList = [
    {
        id: 1,
        deta: { day: 3, month: "March", year: "2026", opened: "09:00AM-10:30AM" },
        title: "Interactive Learning Techniques",
        location: "New York, USA"
    },
    {
        id: 2,
        deta: { day: 7, month: "March", year: "2026", opened: "11:00AM-12:30PM" },
        title: "AI in Education",
        location: "London, UK"
    },
    {
        id: 3,
        deta: { day: 10, month: "March", year: "2026", opened: "01:00PM-02:30PM" },
        title: "Gamification Strategies",
        location: "Berlin, Germany"
    },
    {
        id: 4,
        deta: { day: 12, month: "March", year: "2026", opened: "03:00PM-04:30PM" },
        title: "Digital Tools for Teachers",
        location: "Tokyo, Japan"
    },
    {
        id: 5,
        deta: { day: 15, month: "March", year: "2026", opened: "08:30AM-10:00AM" },
        title: "Inclusive Classroom Methods",
        location: "Sydney, Australia"
    },
    {
        id: 6,
        deta: { day: 18, month: "March", year: "2026", opened: "10:00AM-11:30AM" },
        title: "Project-Based Learning",
        location: "Paris, France"
    },
    {
        id: 7,
        deta: { day: 20, month: "March", year: "2026", opened: "12:00PM-01:30PM" },
        title: "Future of Online Learning",
        location: "Toronto, Canada"
    },
    {
        id: 8,
        deta: { day: 22, month: "March", year: "2026", opened: "02:00PM-03:30PM" },
        title: "Educational Psychology Insights",
        location: "Rome, Italy"
    },
    {
        id: 9,
        deta: { day: 25, month: "March", year: "2026", opened: "09:30AM-11:00AM" },
        title: "Data-Driven Teaching",
        location: "Dubai, UAE"
    },
    {
        id: 10,
        deta: { day: 28, month: "March", year: "2026", opened: "01:30PM-03:00PM" },
        title: "Interactive Student Assessment",
        location: "San Francisco, USA"
    }
];

const UpcomingEvents = () => {


    return (
        <div className='w-full m-auto flex flex-col bg-gray-100 items-center py-14 lg:py-24 '  >
            <TitleOfSec title='Upcoming Events' />

            <div className="w-full ">
                <Swiper
  breakpoints={{
    320: { slidesPerView: 1 },   // موبايل صغير
    640: { slidesPerView: 2 },   // موبايل كبير / تابلت صغير
    1024: { slidesPerView: 4 },  // تابلت كبير / لابتوب
  }}                    spaceBetween={30}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper py-32 px-24  w-10/12 mt-10"
                >
                    {eventsList.map(item => {
                        const deta = item.deta
                        return (
                            // <div>
                            <SwiperSlide className=" pb-16">
                                <div className="bg-white flex flex-col gap-5 p-5 h-80 justify-center ">
                                    <p className='flex flex-col text-gray-600 text-sm'><span className='text-4xl font-bold text-red-500 '>{deta.day}</span> {deta.month}, {deta.year}</p>

                                    <div className="flex flex-col gap-3">
                                        <p className='text-red-500 text-sm'>{deta.opened}</p>
                                        <h5 className='text-lg text-primary font-bold  '>{item.title}</h5>

                                    </div>
                                    <p className='text-sm flex items-center gap-2'><FaLocationDot/>{item.location}</p>
                                    <PrimaryButton text='Find Out More' />
                                </div>
                            </SwiperSlide>
                            // </div>
                        )
                    })}


                </Swiper>
            </div>
        </div>
    )
}

export default UpcomingEvents