import React from 'react'

import HeroBg from "../../assets/eventsbackground7.jpg"


import { LuClock10 } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";


const HeroSecBlog = ({blog}) => {
  return (
        <div className="w-full bg-repeat bg-cover
         px-4 lg:px-16 py-5 lg:py-36 flex flex-col
          justify-center text-white gap-4 lg:gap-8 "
            style={{
                backgroundImage: `url(${HeroBg})`
            }}
        >
            <p className="px-2 lg:px-4 py-2 capitalize text-xs lg:text-lg  bg-blue-600 w-fit rounded-xl ">{blog.category}</p>
            <h2 className="text-3xl lg:text-7xl font-bold lg:w-1/2 ">{blog.title}</h2>
            <div className="flex items-center text-sm lg:text-xl gap-2 lg:gap-8">
                <p className='flex items-center gap-2 text-lg  '><img src={blog.avatar} alt={blog.writer} /> {blog.writer} </p>
                <p className='flex items-center gap-2'><LuClock10 /> {blog.Deta}</p>
                <p className='flex items-center gap-2'><IoEyeOutline /> {blog.views} views</p>
            </div>

        </div>
  )
}

export default HeroSecBlog