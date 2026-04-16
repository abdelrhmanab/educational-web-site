import BgLinkPages from '../components/bgLinkPages'
import SectionContainar from '../features/SectionContainar'

import Icon1 from "../assets/images/contact/contacticon1.png"
import Icon2 from "../assets/images/contact/contacticon2.png"
import Icon3 from "../assets/images/contact/contacticon3.png"


import Mapbg from "../assets/images/contact/map.jpg"
import PrimaryButton from '../components/MainButton'

import { FaLocationDot } from "react-icons/fa6";
import TextInput from '../components/TextInput'


const ContactPage = () => {
    return (
        <div className='w-full'>
            <BgLinkPages title='Contact' />
            <SectionContainar >
                <div className="grid grid-cols-1 py-8 w-full lg:grid-cols-12">
                    <div className="lg:col-span-4 px-2 ">
                        <div className="flex flex-col  gap-16 px-5 py-20 bg-slate-50 rounded-2xl shadow-lg">

                            <div className="flex items-center gap-8">
                                <img src={Icon1} alt="Address" />
                                <div className="flex flex-col gap-2">
                                    <h6 className='text-2xl font-bold '>Address</h6>
                                    <p className='text-lg'>1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-8">
                                <img src={Icon2} alt="" />
                                <div className="flex flex-col gap-2">
                                    <h6 className='text-2xl font-bold '>Contact</h6>
                                    <p className='text-lg hover:text-sky-600 transition duration-200'>Mobile: (+88) - 1990 - 6886</p>
                                    <p className='text-lg hover:text-sky-600 transition duration-200'>Mail: contact@echooling.com</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-8">
                                <img src={Icon3} alt="Hour of operation" />
                                <div className="flex flex-col gap-2">
                                    <h6 className='text-2xl font-bold '>Hour of operation</h6>
                                    <p className='text-lg'>Monday - Friday: 09:00 - 20:00
                                        Sunday & Junday: 10:30 - 22:00</p>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="lg:col-span-8 lg:pl-18 pt-14 lg:py-5 gap-10" >
                        <h2 className="text-2xl lg:text-5xl font-bold  ">Questions? <br />
                            Feel free to contact uo.</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-20">
                            <TextInput placeHolder='Name....' />
                            <TextInput placeHolder='Email....' />
                            <TextInput placeHolder='Subject' />
                            <TextInput placeHolder='Phone' />
                            <textarea className='h-40 p-5 lg:col-span-2
                             text-lg bg-slate-100 focus:outline-3 
                              outline-blue-500 focus:bg-white'
                                name="" id="" placeholder='Magsege' />

                        </div>
                        <PrimaryButton text='Send Massege !' to='' />

                    </div>
                </div>
                <div className="w-full relative ">
                    <img className='' src={Mapbg} alt="" />
                    <div className=" absolute top-1/2 left-1/2">
                        <div className="tooltip">
                            <div className="tooltip-content bg-white text-black text-2xl p-2 w-38 rounded-2xl flex items-center gap-2">
                                <FaLocationDot className='text-pink-500' />   New York
                            </div>

                            <div className="relative flex items-center justify-center">
                                {/* الهالة المتوهجة */}
                                <span className="absolute w-18 h-18 rounded-full bg-pink-500/80 opacity-20 animate-pulse"></span>

                                {/* الزر نفسه */}
                                <button

                                    className="relative z-10
                                     bg-pink-500 text-2xl p-3
                                      rounded-full flex items-center
                                       justify-center shadow-lg hover:scale-110
                                        transition transform"
                                >

                                </button>
                            </div>
                        </div></div>
                </div>
            </SectionContainar>
        </div>
    )
}

export default ContactPage