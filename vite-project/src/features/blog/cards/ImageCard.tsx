import React from 'react'

import { LuClock10, LuShare2 } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import HoverPopover from '../../events/ShareEvent';
import PrimaryButton from '../../../components/MainButton';
import { ImFacebook } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const ImageCard = ({i}) => {
  return (
      <div key={i.id} className="bg-white relative overflow-hidden shadow-lg rounded-xl flex flex-col lg:gap-5">

                            <img src={i.img} alt={i.title} />
                            <span className='absolute top-5 right-5 text-sm font-bold px-3 py-2 rounded-xl bg-blue-500 text-white'>{i.category}</span>
                            <div className="w-full p-8 flex flex-col gap-4 lg:gap-8">
                                <div className="flex items-center flex-wrap gap-4 lg:gap-8 text-lg text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <img className='w-10' src={i.avatar} alt={i.writer} />
                                        <p>{i.writer}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <LuClock10 className='text-2xl' />
                                        <p>{i.Deta}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <IoEyeOutline className='text-2xl' />
                                        <p className=''>{i.views} views</p>
                                    </div>
                                </div>

                                <Link to={`/blog/${i.id}`}
                                    className='text-2xl lg:text-4xl font-semibold hover:text-sky-600 transition duration-500'
                                >{i.title}</Link>

                                <p className="text-sm lg:text-lg text-gray-500">{i.body}</p>
                                <div className="w-full flex flex-col lg:flex-row gap-4 justify-between items-center">

                                    <PrimaryButton text='Start Now !' to={`/blog/${i.id}`} />

                                    <HoverPopover
                                        content={
                                            <div className='flex'>
                                                <a className='btn btn-circle btn-ghost lg:btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <ImFacebook /> </a>
                                                <a className='btn btn-circle btn-ghost lg:btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <FaLinkedinIn /> </a>
                                                <a className='btn btn-circle btn-ghost lg:btn-lg text-white hover:bg-primary duration-500 transition' href="#">  <FaXTwitter /> </a>

                                            </div>
                                        }
                                    >
                                        <div className="text-sm lg:text-2xl font-bold flex gap-5 items-center">

                                            Share this course <div className="p-3 text-sm lg:text-3xl border w-fit rounded-full"> <LuShare2 /></div>
                                        </div>
                                    </HoverPopover>
                                </div>
                            </div>
                        </div>
  )
}

export default ImageCard