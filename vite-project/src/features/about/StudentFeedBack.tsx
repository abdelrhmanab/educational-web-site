
import CountUp from "../../components/countUp";
import SectionContainar from '../SectionContainar';


import Avtarslide from "../../assets/aboutslide1.png"
import Icon from "../../assets/abuticoon.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';

import "../../components/style.css"

import { FreeMode, Pagination } from "swiper/modules";


const StudentFeedBack = () => {
    return (
        <SectionContainar className='   bg-gray-100' >

            <h6 className='text-red-500 font-bold'>Echooling available courses</h6>
            <h2 className='text-3xl lg:text-5xl lg:w-1/2 text-center font-bold'>Student Community
                Feedback</h2>
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1 },   // موبايل صغير
                    640: { slidesPerView: 2 },   // موبايل كبير / تابلت صغير
                    1024: { slidesPerView: 3 },  // تابلت كبير / لابتوب
                }}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper w-full   "
            >

                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
                    return (
                        <SwiperSlide key={i} className='py-8 px-14  bg-white'>
                            <div className="flex flex-col items-center gap-16 ">
                                <div className=" flex items-center gap-2">
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map(i => {
                                            return (
                                                <div className="mask mask-star bg-amber-400" aria-label={`${i} star`} aria-current="true"></div>

                                            )
                                        })}
                                    </div>
                                    <span className="text-sm "> 5 </span>
                                    <span className="text-sm  "> (14 Review)</span>

                                </div>
                                <div className="text-lg">We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.</div>
                                <div className="flex items-start w-full gap-5">
                                    <img src={Avtarslide} alt="" />
                                    <div className="flex flex-col">
                                        <h6 className='text-lg'>Plicant sliver</h6>
                                        <p>teather</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )

                })}

            </Swiper>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 pb-20">
                {[10, 54, 32, 43].map(i => {
                    return (
                        <div className="flex flex-col border border-gray-300  items-center gap-5 p-10">
                            <div className="text-5xl flex items-center font-semibold gap-2 ">
                                <img src={Icon} alt="" />
                                <CountUp
                                    from={i - 5}
                                    to={i}
                                    duration={5}
                                    separator=","
                                    direction="up"
                                    className="text-5xl"
                                    startWhen={true} // ✅ بدل startCounting
                                />
                                K</div>
                            <p className=" uppercase">Students enrolled</p>
                        </div>
                    )
                })}
            </div>

        </SectionContainar>
    )
}

export default StudentFeedBack