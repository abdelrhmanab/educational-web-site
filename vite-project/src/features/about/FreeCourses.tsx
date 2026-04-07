import React from 'react'

import ImamgBg from "../../assets/WhatsAppImagePM.jpeg"
import PrimaryButton from '../../components/MainButton'
import { FaArrowRight } from "react-icons/fa6";

const FreeCoures = () => {
    return (
        <div className="w-full lg:h-[16vh]   py-2 lg:py-12 bg-primary-content lg:bg-black relative">
            <div className=' w-full lg:h-[30vh] lg:absolute  lg:top-[-15vh] flex  items-center justify-center ' style={{

            }}>
                <div className='
                 lg:w-9/12 h-full flex
                 flex-col
                 lg:flex-row
                 gap-5
                 items-center lg:justify-between
                  p-2 lg:p-10 text-white ' style={{
                        backgroundImage: `url(${ImamgBg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} >
                    <div className="flex flex-col gap-3 font-bold lg:w-3/5">
                        <p>Free Online Course</p>
                        <h3 className='text-3xl lg:text-5xl'>Ready to dive in? Start your free Course today.</h3>
                    </div>
                    <button className='btn btn-xl uppercase btn-outline hover:bg-white transition duration-500 flex items-center'>go to FAQ <FaArrowRight /></button>


                </div>

            </div>
        </div>
    )
}

export default FreeCoures