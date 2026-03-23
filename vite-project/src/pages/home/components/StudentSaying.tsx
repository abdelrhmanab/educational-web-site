import React from 'react'
import TitleOfSec from '../../../components/titleOfSec'

import Img from "../../../assets/studentsay.png"

import SectionContainar from '../../../features/SectionContainar';


const slides = [
    { id: 1, prev: 4, next: 2 },
    { id: 2, prev: 1, next: 3 },
    { id: 3, prev: 2, next: 4 },
    { id: 4, prev: 3, next: 1 }
]



const StudentSaying = () => {
    return (
        <SectionContainar className=''>
            <TitleOfSec title='What our student saying ' />

            <div className="carousel w-10/12 shadow ">

                {slides.map(i => {
                    return (
                        <div id={`slide${i.id}`} className="carousel-item relative w-full py-10 px-5 group ">
                            <div className="flex flex-col lg:flex-row justify-center gap-10">
                                <img className='w-full lg:w-3/12' src={Img} alt="" />
                                <div className="flex flex-col p-5 w-full lg:w-7/12 gap-5">
                                    <h6 className='text-2xl'><cite> Justen Case </cite></h6>
                                    <span className="italic text-gray-500">Student</span>

                                    <p>Nulla porttitor accumsan tincidunt.
                                        vamus magna justo, lacinia eget consectetur sed,
                                        convallis at tellus. Curabitur non nulla sit
                                        amet nisl tempus convallis quis ac lectus.
                                        Quisque velit nisi, pretium ut lacinia in.</p>

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
                                </div>
                            </div>
                            <div className="absolute  left-10 right-10 top-1/2 ">
                                <div className=" relative flex -translate-y-1/2 transform justify-between ">
                                    <a href={`#slide${i.prev}`}
                                        className="btn btn-xl left-0 
                                        btn-circle opacity-5 group-hover:opacity-100 
                                        transition duration-500
                                        hover:bg-primary hover:text-white ">❮</a>


                                    <a href={`#slide${i.next}`}
                                        className="btn btn-xl right-5
                                         btn-circle opacity-5 
                                         group-hover:opacity-100 transition 
                                         duration-500 hover:bg-primary
                                          hover:text-white ">❯</a>


                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </SectionContainar>
    )
}

export default StudentSaying