

import ImageSec from "../../../assets/sec3335f.png"
import Cercle from "../../../assets/cercellogo.png"

import TitleOfSec from '../../../components/titleOfSec'

import PinIcon from "../../../assets/pinsvg.svg"
import sittIcon from "../../../assets/stting3svg.svg"
import MsgIcon from "../../../assets/msg3svg.svg"

import { IoArrowForward } from "react-icons/io5";
import PrimaryButton from '../../../components/MainButton'


const items = [
    { title: "Do More, Stress Less", body: "Why I say old chap that is spiffing he legged it in my flat easy peasy", icon: PinIcon },
    { title: "The Business Intelligence", body: "Why I say old chap that is spiffing he legged it in my flat easy peasy", icon: sittIcon },
    { title: "System Administration", body: "Why I say old chap that is spiffing he legged it in my flat easy peasy", icon: MsgIcon },
]

const CampusLive = () => {
    return (
        <div className='w-full m-auto flex flex-col bg-gray-100 items-center py-14 lg:py-24 '  >
            <TitleOfSec title='campus Life' />

            <div className="flex flex-col lg:flex-row-reverse justify-between p-3 lg:px-8 lg:py-10 w-full">
                <div className="w-full lg:w-4/12 relative">
                    <img src={ImageSec} alt="" />
                    <img className=' absolute -right-6 top-14' src={Cercle} alt="" />
                </div>
                <div className="w-full lg:w-7/12 bg-white shadow p-5 flex flex-col gap-8 ">
                    {
                        items.map((item) => {
                            return (
                                <div className="flex gap-5 items-center px-2 lg:px-5 py-5 lg:py-10 border-b w-fit border-gray-300">
                                    <div className="flex items-center gap-5">
                                        <div className="lg:p-5">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className="flex flex-col gap-2 lg:gap-5">
                                            <h5 className="lg:text-2xl font-bold text-primary">{item.title}</h5>
                                            <p>{item.body}</p>
                                        </div>
                                    </div>
                                    <a href='#' className='h-fit p-3 border border-gray-300 rounded-full text-primary hover:text-white hover:bg-primary transition duration-700'><IoArrowForward className='' /></a>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <PrimaryButton to='#' text='More about campus live' />
        </div>
    )
}

export default CampusLive