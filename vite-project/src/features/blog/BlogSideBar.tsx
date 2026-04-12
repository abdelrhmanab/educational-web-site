import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import blogs_Data from '../../data/blog_Data'
import {categories, tags} from '../../data/blog_Data'
import { FaClock } from 'react-icons/fa'






const BlogSideBar = () => {
    return (
        <div className="lg:col-span-4 flex flex-col items-center lg:px-4">
            <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl divide-y divide-slate-400  shadow-lg flex flex-col gap-8">


                <div className="flex flex-col gap-5 py-8">
                    <h4 className='text-2xl font-bold'>Search</h4>
                    <div className="relative pt-1 bg-black/5  rounded-lg overflow-hidden">
                        <input
                            type="text"
                            className=" p-4 lg:text-lg  outline-none"
                            placeholder="search...."
                        />
                        <IoSearch className="absolute top-2 lg:top-6 text-primary right-2 text-lg lg:text-3xl opacity-60" />
                    </div>
                </div>


                <div className="flex flex-col gap-8 py-4 ">
                    <h4 className='text-2xl font-bold'>Popular Courses</h4>

                    <Link to={"/event/3"} className='flex gap-5'>
                        <img className='w-1/4 h-32 object-cover rounded-2xl' src={blogs_Data[0].img} alt="" />
                        <div className="flex flex-col gap-3 p-4">
                            <h6 className='text-xl hover:text-primary transition duration-300'>{blogs_Data[0].title}</h6>
                            <p className='text-lg font-bold'>26 March, 2022</p>
                        </div>

                    </Link>

                    <Link to={"/event/4"} className='flex gap-5'>
                        <img className='w-1/4 h-32 object-cover rounded-2xl' src={blogs_Data[3].img} alt="" />
                        <div className="flex flex-col gap-3 p-4">
                            <h6 className='text-xl hover:text-primary transition duration-300'> {blogs_Data[3].title}</h6>
                            <p className=' flex items-center gap-2 '><FaClock /> 10 April, 2022</p>
                        </div>

                    </Link>
                </div>

                <div className="w-full flex flex-col gap-10">
                    <h4 className='text-2xl font-bold'>Course categories</h4>
                    <ul className="flex flex-col gap-6">
                        {categories.map(i => {
                            return (
                                <li key={i.id} className="text-xl hover:text-sky-500 transition duration-500 flex items-center justify-between">
                                    <p>{i.name}</p>
                                    <p>({i.count})</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="w-full flex flex-col gap-10">
                    <h4 className='text-2xl font-bold'>Tags</h4>
                    <ul className="flex  gap-4 font-semibold flex-wrap">
                        {tags.map(i => {
                            return (
                                <li key={i} className="py-2 px-4 bg-slate-100
                                 hover:text-white hover:bg-blue-500 transition
                                  duration-500 rounded-lg">{i}</li>
                            )
                        })}
                    </ul>
                </div>


            </div>
        </div>)
}

export default BlogSideBar