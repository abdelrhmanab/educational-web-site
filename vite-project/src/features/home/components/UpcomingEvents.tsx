
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
import "./home.css"

import SectionContainar from '../../SectionContainar';

import { popularEvents } from '../../../data/events_List';


const UpcomingEvents = () => {


    return (
        <SectionContainar className=' bg-gray-100 '  >
            <TitleOfSec title='Upcoming Events' />

            <div className="w-full ">
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1 },   // موبايل صغير
                        640: { slidesPerView: 2 },   // موبايل كبير / تابلت صغير
                        1024: { slidesPerView: 4 },  // تابلت كبير / لابتوب
                    }} spaceBetween={30}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper py-24 px-8  w-full mt-5"
                >
                    {popularEvents.map(item => {
                        const deta = item.data
                        return (
                            // <div>
                            <SwiperSlide className=" pb-6">
                                <div className="bg-white flex flex-col gap-8 p-10  justify-center ">
                                    <p className='flex flex-col text-gray-600 text-lg'><span className='text-6xl font-bold text-red-500 '>{deta.day}</span> {deta.month}, {deta.year}</p>

                                    <div className="flex flex-col gap-3">
                                        <p className='text-red-500 text-lg'>{deta.opened}</p>
                                        <h5 className='text-3xl text-primary font-bold  '>{item.title}</h5>

                                    </div>
                                    <p className='text-lg flex items-center gap-2'><FaLocationDot />{item.location}</p>
                                    
                                    <PrimaryButton to={`/enent/${item.id}`} text='Find Out More' />
                                </div>
                            </SwiperSlide>
                            // </div>
                        )
                    })}


                </Swiper>
            </div>
        </SectionContainar>
    )
}

export default UpcomingEvents