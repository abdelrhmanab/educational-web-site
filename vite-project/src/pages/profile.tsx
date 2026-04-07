import React from 'react';

import { useParams } from 'react-router-dom';
import { findInstructor } from '../data/instractors_List';
import CountUp from "../components/countUp";


import BgLinkPages from '../components/bgLinkPages'
import SectionContainar from '../features/SectionContainar';

import Icon1 from "../assets/profileIcon1.png";
import Icon2 from "../assets/profileIcon2.png";
import Icon3 from "../assets/profileIcon3.png";


import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Page404 from './404';
import TeacherCourses from '../features/profile/TeacherCourses';


const countUpList = [
    { icon: Icon1, num: 28, text: "Foreign followers" },
    { icon: Icon2, num: 10, text: "Classes complete" },
    { icon: Icon3, num: 208, text: "Students enrolled" },
]

const ProfilePage = () => {
    const { id } = useParams()


    const instructor = findInstructor(+id)
    // console.log(instructor);

    if (!instructor) {
        return (
            <Page404 />
        )

    }



    return (
        <div className='w-full'>
            <BgLinkPages title='P r o f i l e' />
            <SectionContainar>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3  ">
                    <div className=" flex flex-col gap-8">
                        <img src={instructor?.img} alt={instructor?.name} className="w-10/12 " />
                        <button className='w-full btn btn-xl btn-primary  text-center text-2xl '>Follow  +</button>
                    </div>
                    <div className=" col-span-2 py-8 ">


                        {/* -------------------- SEC-1 ---------------------- */}

                        <div className="flex flex-col lg:flex-row gap-4  border-b py-5">
                            <p className='text-xl capitalize flex flex-col'><span className="font-bold">name : </span>{instructor?.name}</p>
                            <p className='text-xl capitalize flex flex-col'><span className="font-bold">job title : </span>{instructor?.job}</p>
                            <p className='text-xl capitalize flex flex-col'><span className="font-bold">phone : </span>{instructor?.phone}</p>
                            <p className='text-xl capitalize flex flex-col'><span className="font-bold">email : </span>{instructor?.email}</p>
                            <p className='text-xl capitalize flex flex-col'><span className="font-bold">Follow : </span>
                                <span className='flex items-center gap-2'>
                                    < ImFacebook className='text-secondary hover:text-primary transition duration-500 ' />
                                    < FaLinkedinIn className='text-secondary hover:text-primary transition duration-500 ' />
                                    < FaXTwitter className='text-secondary hover:text-primary transition duration-500 ' />
                                </span>
                            </p>

                        </div>
                        {/* -------------------- SEC-1 ---------------------- */}

                        {/* -------------------- SEC-2 ---------------------- */}

                        <div className="flex flex-col py-8 px-4 gap-12">
                            <h3 className="text-3xl font-semibold  ">Biography</h3>
                            <p className="text-secondary text-xl">Why I say old chap that is spiffing he legged easy peasy.</p>
                            <p className="text-secondary text-xl">
                                Only a quid me old mucker squiffy
                                tomfoolery grub cheers ruddy cor blimey
                                guvnor in my flat, up the duff Eaton car
                                boot up the kyver pardon you A bit of how's
                                your father David skive off sloshed, don't get
                                shirty with me chip shop vagabond crikey bugger
                                Queen's English chap. Matie boy nancy boy bite your
                                arm off up the kyver old no biggie fantastic boot, David
                                have it show off show off pick your nose and blow off
                                lost the plot porkies bits and bobs only a quid bugger
                                all mate.</p>


                            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-5">
                                {countUpList.map(i => {
                                    return (
                                        <div className="flex flex-col border border-gray-300  items-center px-2 py-12 rounded-2xl">
                                            <div className=" flex justify-center ">
                                                <img className='w-1/2' src={i.icon} alt="" />
                                                <div className="flex flex-col">


                                                    <div className="text-4xl">
                                                        <CountUp
                                                            from={i.num - 5}
                                                            to={i.num}
                                                            duration={5}
                                                            separator=","
                                                            direction="up"
                                                            className="text-5xl"
                                                            startWhen={true} />
                                                        K
                                                    </div>
                                                    <p className="text-secondary text-lg">{i.text}</p>
                                                </div>



                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        {/* -------------------- SEC-2 ---------------------- */}


                        {/* -------------------- SEC-3 ---------------------- */}
                        <TeacherCourses/>
                        {/* -------------------- SEC-3 ---------------------- */}



                    </div>


                </div>
            </SectionContainar>



        </div>
    )
}

export default ProfilePage