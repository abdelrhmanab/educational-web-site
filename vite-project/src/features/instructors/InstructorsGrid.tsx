
import SectionContainar from '../SectionContainar'

import instructorList from '../../data/instractors_List'



import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





const InstructorsGrid = () => {
    return (
        <SectionContainar className=''>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-3 pb-32">
                {instructorList.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col group  ">
                            <div className="w-full overflow-hidden relative ">
                                <img className='w-full' src={item.img} alt={item.name} />
                                <div className=" absolute w-full text-white h-0 bottom-0 left-0 group-hover:h-full translate-y-32 group-hover:translate-0   opacity-0 group-hover:opacity-100 bg-linear-to-t from-black via-black/10 to-black/0 duration-1000 transition-all   ">
                                    <div className="w-full h-full flex flex-col items-center  p-10 justify-end">
                                        <p className='text-lg opacity-0 group-hover:opacity-100'>Why I say old chap that is spiffing he legged easy peasy</p>
                                        <div className="flex items-center mt-5 gap-5 ">
                                            <a className='btn btn-circle btn-ghost btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <ImFacebook /> </a>
                                            <a className='btn btn-circle btn-ghost btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <FaLinkedinIn /> </a>
                                            <a className='btn btn-circle btn-ghost btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <FaXTwitter /> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col items-center gap-3 group-hover:opacity-0  duration-500 transition ">
                                <h4 className='text-xl font-bold'>{item.name}</h4>
                                <p className='text-secondary'>{item.job}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </SectionContainar>
    )
}

export default InstructorsGrid