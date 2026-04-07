import React from 'react'

import { FiVideo } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";



const Curriculum = () => {
    return (
        <div className="flex flex-col gap-5 lg:gap-14  bg-gray-50 border border-gray-200 px-6 py-6 lg:py-12 rounded-b-2xl ">
            <h3 className="text-4xl font-bold ">Course Curriculum</h3>

            <p className='text-sm lg:text-xl'>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut engiat nulla pariatur. Excepteur sint
                occae cat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>
            {[1, 2, 3].map(i => {
                return (
                    <div className="w-full bg-gray-100 px-8 py-12 flex flex-col gap-12">

                        <div className="w-full flex justify-between py-4 border-gray-300 border-b">
                            <h6 className="text-2xl font-bold text-blue-900">Week {i}</h6>
                            <p className="text-2xl font-bold text-secondary">0/4</p>
                        </div>
                        <h3 className="text-3xl font-bold ">Beginners level</h3>

                        <p className='lg:text-xl'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt
                            ut l
                            qui officia deserunt mollit anim id est laborum.
                        </p>

                        <h3 className="lg:text-3xl font-bold">2 Videos,1 Audio,1 Reading</h3>
                        <div className="">
                            <div className="flex flex-col lg:flex-row gap-4 w-full justify-between text-sm lg:text-xl ">

                                <div className="flex items-center gap-1 lg:gap-2">
                                    <FiVideo className='lg:text-2xl' />
                                    <span className='text-blue-950 font-bold'> Video:</span>
                                    Greetings and Introductions
                                </div>

                                <div className="flex gap-3 text-sm lg:text-lg">
                                    <p className="flex items-center gap-2"><MdOutlineWatchLater /> 26 minutes</p>
                                    <div className="bg-red-500/10 px-2 py-1 text-red-500">2 questions</div>

                                </div>
                            </div>
                            <div className=" divider"></div>
                            <div className="flex flex-col lg:flex-row gap-4 w-full justify-between text-sm lg:text-xl ">

                                <div className="flex items-center gap-1 lg:gap-2">
                                    <FiVideo className='lg:text-2xl' />
                                    <span className='text-blue-950 font-bold'> Video:</span>
                                    Greetings and Introductions
                                </div>

                                <div className="flex gap-3 text-sm lg:text-lg">
                                    <p className="flex items-center gap-2"><MdOutlineWatchLater /> 26 minutes</p>

                                </div>
                            </div>                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Curriculum