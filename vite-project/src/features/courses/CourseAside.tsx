import React from 'react'
import DetailsRow from '../events/DitailRow'

import { FaUserGroup, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { PiBookmarksFill } from "react-icons/pi";
import { TbClockHour3Filled } from "react-icons/tb";
import PrimaryButton from '../../components/MainButton';
import HoverPopover from '../events/ShareEvent';
import { ImFacebook } from 'react-icons/im';
import { LuShare2 } from 'react-icons/lu';




const CourseAside = ({ course }) => {
    return (
        <div className="lg:col-span-4 flex flex-col gap-8 px-10">
            <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl  shadow-2xl flex flex-col gap-8">
                {/* <DetailsRow /> */}
                <div className="flex items-center gap-3">
                    <span className='text-3xl text-primary font-bold'>${course.price - 20} USD</span>
                    <del className='text-xl'>${course.price} USD</del>
                    <div className="bg-red-500/10 p-1 rounded-2xl text-red-900">25% Off</div>
                </div>
                <DetailsRow icon={<FaUser />} label='Instructor' value={course.instructor} />
                <DetailsRow icon={<PiBookmarksFill />} label='Subject' value={course.category} />
                <DetailsRow icon={<FaUserGroup />} label=' Enrolled' value={course.studendsCount + " students"} />
                <DetailsRow icon={<TbClockHour3Filled />} label=' Duration' value={course.duration + " Weeks"} />
                <DetailsRow icon={<FaBook />} label=' Lectures' value={course.lessonsCount + " lectures"} />
                <DetailsRow icon={<FaMap />} label='  Language' value={course.language} />


                <PrimaryButton text='Start Now !' to={`/course/${course.id}`} />

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

                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 pb-3">
                    Course Categories
                </h3>

                <ul className="flex flex-col divide-y divide-gray-200">

                    {[
                        { name: "Art & Design", count: 6 },
                        { name: "Exercise", count: 4 },
                        { name: "Photography", count: 8 },
                        { name: "Environmental Sciences", count: 3 },
                        { name: "Software Training", count: 5 },
                        { name: "Software Development", count: 2 },
                        { name: "Music", count: 10 },
                        { name: "Material Design", count: 2 },
                        { name: "Technology", count: 7 },
                    ].map((item, index) => (

                        <li key={index}>
                            <a
                                href="/course"
                                className="flex items-center justify-between text-lg py-3 px-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                             {item.name} ({item.count})
                            </a>
                        </li>

                    ))}

                </ul>

            </div>




        </div>

    )
}

export default CourseAside