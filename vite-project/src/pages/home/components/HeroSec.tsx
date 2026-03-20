import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './home.css';
import herebg1 from "../../../assets/heroimage.jpg";
import herebg2 from "../../../assets/aahroimage2jpg.jpg";


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ModalVideo from './ModalVedio';

export default function HeroSec() {



    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper h-[45vh] lg:h-auto "
            >
                <SwiperSlide>
                    <div
                        className="relative h-[45vh] lg:h-[80vh] bg-cover bg-center"
                        style={{ backgroundImage: `url(${herebg1})` }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="relative  z-10 text-white w-full h-full p-5 lg:p-16">
                            <div className=" w-full h-full grid lg:grid-cols-2  p-4 lg:px-10 ">

                                <div className="flex flex-col gap-2 lg:gap-4 justify-center">
                                    <h3 className='text-lg lg:text-3xl capitalize bg-error p-2 rounded-lg w-fit'>
                                        great qulity cocail life
                                    </h3>

                                    <p className='text-lg lg:text-6xl font-bold text-white capitalize'> discover the world of possible university</p>
                                    <div className="btn btn-outline w-fit btn-error text-white btn-sm lg:btn-lg">Admissions</div>
                                </div>

                                <div className=" hidden lg:flex items-center justify-center">
                                    <ModalVideo/>
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>

               <SwiperSlide>
                    <div
                        className="relative h-[45vh] lg:h-[80vh] bg-cover bg-center"
                        style={{ backgroundImage: `url(${herebg2})` }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="relative  z-10 text-white w-full h-full p-5 lg:p-16">
                            <div className=" w-full h-full grid lg:grid-cols-2  p-4 lg:px-10 ">

                                <div className="flex flex-col gap-2 lg:gap-4 justify-center">
                                    <h3 className='text-lg lg:text-3xl capitalize bg-error p-2 rounded-lg w-fit'>
                                        great qulity cocail life
                                    </h3>

                                    <p className='text-lg lg:text-6xl font-bold text-white capitalize'> discover the world of possible university</p>
                                    <div className="btn btn-outline w-fit btn-error text-white btn-sm lg:btn-lg">Admissions</div>
                                </div>

                                <div className=" hidden lg:flex items-center justify-center">
                                    <ModalVideo/>
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}