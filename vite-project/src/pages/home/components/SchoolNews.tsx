import React from 'react'
import TitleOfSec from '../../../components/titleOfSec'
import { FiUser } from "react-icons/fi";
import SectionContainar from '../../../features/SectionContainar';


import ImagePost1 from "../../../assets/blog1p.jpg"
import ImagePost2 from "../../../assets/bolg2p.jpg"
import ImagePost3 from "../../../assets/blog3p.jpg"
import ImagePost4 from "../../../assets/blog1p.jpg"

const postsList = [
    {
        img: ImagePost1,
        deta: "18 April",
        category: "Education",
        title: "Kids Future Schools & Corona Prevent to Growth",
        writer: "Charlie Doyle"
    },
    {
        img: ImagePost2,
        deta: "20 April",
        category: "Technology",
        title: "How AI is Changing Modern Education",
        writer: "Sarah Johnson"
    },
    {
        img: ImagePost3,
        deta: "22 April",
        category: "Design",
        title: "Best UI/UX Practices for Learning Platforms",
        writer: "Michael Smith"
    },
    {
        img: ImagePost4,
        deta: "25 April",
        category: "Development",
        title: "Building Scalable E-Learning Apps with React",
        writer: "David Brown"
    }
];

const SchoolNews = () => {
    return (
        <SectionContainar className=' bg-gray-50' >
                <TitleOfSec title='Echooling News and Blogs' />

            <div className="w-10/12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12 lg:mt-32">
                    {postsList.map(item => {
                        return (

                            <div className='flex flex-col  bg-white shadow-lg rounded-md relative group'>
                                <div className=" overflow-hidden w-full">
                                    <img src={item.img} alt="" className="w-full group-hover:scale-110 transition duration-500" />
                                </div>
                                <p className=' absolute top-4 right-4 text-white bg-red-500 p-1 text-sm font-bold'>{item.deta}</p>
                                <div className="flex flex-col   py-5 px-5 gap-8">
                                    <p className='text-red-500'>{item.category}</p>
                                    <h4 className='text-2xl font-bold text-primary hover:text-red-500 transition duration-700'>{item.title}</h4>
                                    <p className='flex items-center gap-2'><FiUser />{item.writer}</p>


                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </SectionContainar>
    )
}

export default SchoolNews