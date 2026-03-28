import React from 'react'

import CountUp from "../../../components/countUp";

import TitleOfSec from '../../../components/titleOfSec';
import SectionContainar from '../../../features/SectionContainar';
import {popularCoursesList} from "../../../data/courses_List"






import { LuUsers } from "react-icons/lu";

import PrimaryButton from '../../../components/MainButton';



const PopularCourses = () => {
    return (
        <SectionContainar className='bg-gray-50' >
            <TitleOfSec title='Popular Courses' />

            <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12 lg:mt-32">
                {
                    popularCoursesList.map(item => {
                        return (
                            <div key={item.id} className='flex flex-col items-center bg-white'>
                                <img src={item.img} alt="" className="w-full" />
                                <div className="flex flex-col items-center  py-5 px-5 gap-8">
                                    <ul className='flex gap-8 list-disc text-[18px]'>
                                        <li key={item.id} className='text-error '>{item.category}</li>

                                        <li key={item.id + 1}>{item.lessonsCount} lessons</li>
                                    </ul>
                                    <h5 className='text-2xl pb-8 font-bold text-primary hover:text-pink-700 transition duration-500 border-b border-gray-400'>{item.title}</h5>
                                    {/* <div className="divider "></div> */}
                                    <ul className='flex justify-between w-full  text-[18px]'>
                                        <li key={item.id} className='flex items-center gap-2 text-gray-600 '><LuUsers /> {item.studendsCount} students</li>

                                        <li key={item.id + 1} className='text-2xl text-error font-bold'>{item.price} $</li>
                                    </ul>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
            <div className="mt-10 lg:mt-24">
                <PrimaryButton to='courses' text='View all courses' />
            </div>

            <div className="bg-linear-to-r from-pink-500 via-pink-700 to-pink-900  grid grid-cols-1 lg:grid-cols-4 w-full mt-24">
                {[573, 1243, 309, 254].map((i) => {
                    return (
                        <div key={i} className='h-64 flex flex-col items-center justify-center text-white font-bold gap-5'>
                            <h6 className='text-2xl '>Successfully Trained</h6>
                            <div className="text-6xl">

                                <CountUp
                                    from={i-200}
                                    to={i}
                                    duration={5}
                                    separator=","
                                    direction="up"
                                    className="text-6xl"
                                    startWhen={true} // ✅ بدل startCounting
                                />
                            </div>
                            <p className=' uppercase'>Enrolled Learners</p>
                        </div>
                    )
                })}

            </div>
            </div>
        </SectionContainar>
    )
}

export default PopularCourses