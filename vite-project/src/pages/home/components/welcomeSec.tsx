import React from 'react'

import Img from "../../../assets/ab.fcda2469b98ffc37a148.png"
import Logo from "../../../assets/movidlogo.png"
import { FaFacebookMessenger } from "react-icons/fa";
import SectionContainar from '../../../features/SectionContainar';


import './home.css';
import PrimaryButton from '../../../components/MainButton';

const WelcomeSec = () => {
    return (
        <SectionContainar className=' lg:flex-row text-gray-500 font-bold'>

            <div className=" relative w-full lg:w-1/2">
                <img src={Img} alt="" />
                <img className=' absolute right-8 lg:right-20  bottom-10 lg:top-40 logo  ' src={Logo} alt="" />
            </div>

            <div className="p-5 flex flex-col gap-12 w-full lg:w-1/2">
                <h3 className='text-5xl flex flex-col text-primary'>Welcome to <span className='text-red-500'> Echooling LMS Platform</span></h3>

                <p>Education is both the act of teaching knowledge to others and
                    the act of receiving knowledge from someone else.</p>

                <p className="">Have questions? <a className='text-red-500 border-b-2 border-b-red-500' href=""> Get Free Guide </a></p>
                <div className="border-b w-full"></div>

                <p>Education also refers to the knowledge received through schooling instruction
                    and to the institution of teaching as a whole. The main purpose of education
                    is the integral development of a person.</p>
                <div className="flex flex-col lg:flex-row gap-10 w-fit ">
                    <PrimaryButton to='/about' text='learn more' />
                    <div className="flex gap-5 text-primary">
                        <span ><FaFacebookMessenger className='text-5xl' /></span>
                        <div className="flex flex-col gap-3">
                            <p className='text-xs'>Get Support</p>
                            <a className='text-2xl hover:text-red-500' href="#">support@react.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainar>
    )
}

export default WelcomeSec