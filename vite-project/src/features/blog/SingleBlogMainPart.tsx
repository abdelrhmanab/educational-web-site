import React from 'react'
import TextCard from './cards/TextCard'

import UserIcon1 from "../../assets/images/blog/user1.jpg"
import UserIcon2 from "../../assets/images/blog/user2.jpg"
import UserIcon3 from "../../assets/images/blog/user3.jpg"

import blogs_Data, { tags } from '../../data/blog_Data'
import HoverPopover from '../events/ShareEvent';


import { HiOutlineReply } from "react-icons/hi";
import { IoCheckmark } from "react-icons/io5";
import { ImFacebook } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuShare2 } from 'react-icons/lu';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/MainButton'



const feature = [
    " Your child’s interests, likes, dislikes",
    " Their routines- patterns of eating, sleeping, toileting",
    " Your child’s current wellbeing",
    " Any major events taking place at home."
]

const SingleBlogMainPart = ({ blog }) => {
    return (
        <div className="lg:col-span-8 flex flex-col gap-20 p-5">
            <p className="lg:text-2xl text-gray-500">
                77 views
                Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.
                Curabitur arcu erat, accumsan id imperdiet et,
                porttitor at sem. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Vivamus magna justo,

                lacinia eget consectetur sed, convallis at tellus. Mauris blandit
                aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam
                id dui posuere blandit. Nulla porttitor accumsan tincidunt.

                Let me share with you one of my favorite quotes
                , as stated in that quote, there are three key factors
                to achieve massive success in your life.
            </p>

            <TextCard i={blog} />

            <h5 className='text-2xl lg:text-5xl font-bold'>
                So, what's the debate all about?

            </h5>

            <p className="lg:text-2xl text-gray-500">
                77 views
                Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.
                Curabitur arcu erat, accumsan id imperdiet et,
                porttitor at sem. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Vivamus magna justo,

                lacinia eget consectetur sed, convallis at tellus. Mauris blandit
                aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam
                Let me share with you one of my favorite quotes
                , as stated in that quote, there are three key factors
                to achieve massive success in your life.
            </p>

            <img src={blog.img} alt={blog.title} />

            <p className="lg:text-2xl text-gray-500">
                Education every new parents knows the
                feeling nothing more than for everyone to get
                at some sleep.But at least you’ve got Google. start
                building your first prototype today!
            </p>

            <p className="lg:text-2xl text-gray-500">
                Another important part of staying healthy is staying active.
                Opening up this app concept shows several options for workouts,
                from yoga to biking. Tapping on the small gray cards while swiping
                through them enlarges them, turns them bright, and even brings a fun
                animation moving across the card. Selecting in cycling.
            </p>

            <h5 className='text-2xl lg:text-5xl font-bold'>
                Integrate MagicBell into your React frontend

            </h5>

            <p className="lg:text-2xl text-gray-500">
                Leo vel fringilla est ullamcorper. Cursus risus at
                ultrices mi tempus imperdiet nulla. Bibendum arcu
                vitae elementum curabitur. Eget nunc scelerisque viverra mauris.
                Sed augue lacus viverra vitae congue eu consequat. Vitae nunc sed
                velit dignissim sodales ut eu sem integer. Nec ultrices dui sapien
                eget mi. Est pellentesque elit ullamcorper dignissim cras tincidunt
                lobortis feugiat.
            </p>

            <div className="flex flex-col gap-8 ">
                {feature.map(i => {
                    return (
                        <div className="flex items-center gap-3 text-xl">
                            <IoCheckmark className='text-4xl font-bold p-2  rounded-full bg-slate-200' />
                            {i}
                        </div>
                    )
                })}
            </div>

            <p className="text-2xl text-gray-500">
                Commodo sed egestas egestas fringilla phasellus faucibus
                scelerisque eleifend. Mollis aliquam
                ut porttitor leo a diam. At ultrices mi tempus imperdiet nulla.
            </p>
            <hr />
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center flex-wrap gap-3">
                    <p className='text-2xl font-bold'>Tags : </p>
                    {tags.slice(0, 3).map(i => {
                        return (
                            <div key={i} className="py-1 lg:py-2 px-2
                             lg:px-4 font-medium bg-slate-100
                            hover:text-white hover:bg-blue-500 transition
                            duration-500 rounded-lg">{i}</div>
                        )
                    })}
                </div>

                <HoverPopover
                    content={
                        <div className='flex'>

                            <a className='btn btn-circle btn-ghost
                             lg:btn-lg text-white hover:bg-primary
                              duration-500 transition'
                                href="#">  <ImFacebook /> </a>

                            <a className='btn btn-circle btn-ghost
                             lg:btn-lg text-white hover:bg-primary
                              duration-500 transition'
                                href="#">  <FaLinkedinIn /> </a>

                            <a className='btn btn-circle btn-ghost
                             lg:btn-lg text-white hover:bg-primary 
                             duration-500 transition'
                                href="#">  <FaXTwitter /> </a>

                        </div>}   >

                    <div className="text-sm lg:text-xl font-bold flex gap-5 items-center ">
                        Share this post:
                        <div className="p-3 text-sm lg:text-3xl border w-fit rounded-full">
                            <LuShare2 />
                        </div>
                    </div>

                </HoverPopover>
            </div>

            <div className=" bg-white rounded-2xl shadow-xl px-8 py-16 flex flex-col lg:flex-row gap-8">
                <img className=' rounded-full' src={UserIcon1} alt="" />
                <div className="flex flex-col gap-4 col-spadn-10">
                    <p className='text-2xl font-bold'>Sara Mening</p>
                    <p className='text-lg'>Lectus quam id leo in vitae turpis nisl pretium
                        fusce id velit tortor. Dignissim cras tincidunt
                        lobortis feugiat. Facilisis sed odio morbi quis
                        commodo odio.
                    </p>
                    <div className="flex items-center gap-3">
                        <ImFacebook className='hover:text-blue-600 transition duration-300' />
                        <FaXTwitter className='hover:text-blue-600 transition duration-300' />
                        <FaLinkedinIn className='hover:text-blue-600 transition duration-300' />

                    </div>
                </div>
            </div>

            <div className="w-full flex justify-between items-center lg:px-4 py-4 lg:py-8 border-y border-gray-400">

                <div className="flex items-center gap-4 hover:text-blue-600 transition duration-300">
                    <div className="flex items-center justify-center lg:p-3 p-1 border rounded-full">
                        <GrPrevious />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className='text-xs lg:text-sm'>PREV POST</span>
                        <p className='text-xs lg:text-xl font-bold'>Graduate Admissions</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 hover:text-blue-600 transition duration-300">

                    <div className="flex flex-col items-end gap-3">
                        <span className='text-xs lg:text-sm'>NEXT POST</span>
                        <p className='text-xs lg:text-xl font-bold'>Less is More</p>
                    </div>

                    <div className="flex items-center justify-center p-3 border rounded-full">
                        <GrNext />
                    </div>
                </div>

            </div>


            <div className="flex flex-col gap-5">
                <h5 className='text-2xl lg:text-5xl font-bold'>
                    Related Posts
                </h5>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {blogs_Data.slice(0, 4).map(i => {
                        if (i.type === "image post") {
                            return (
                                <div key={i.id} className="flex flex-col gap-8 shadow">
                                    <img src={i.img} alt={i.title} />
                                    <div className="flex flex-col p-4 gap-8 text-lg">
                                        <p className="text-red-500 ">{i.category}</p>
                                        <Link to={`/blog/${i.id}`} className="font-medium hover:text-blue-500 transition duration-300">{i.title}</Link>
                                        <div className="flex items-center gap-4">
                                            <img src={i.avatar} alt={i.writer} />
                                            <p>{i.writer}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>


            <div className="w-full flex flex-col gap-8">
                <h4 className='text-3xl font-medium'>3 comment</h4>
                <div className="w-full flex flex-col lg:flex-row gap-4 p-5 border border-gray-300 rounded-lg">
                    <img className='rounded-full p-8 w-30 h-30' src={UserIcon1} alt="" />
                    <div className="flex flex-col gap-5 lg:text-lg">
                        <div className="flex items-center gap-3">
                            <p className='font-medium'>Neal Adams </p>
                            <span>July 23, 2026 at 11:24 pm</span>
                        </div>

                        <p>
                            Geeza show off show off pick your nose
                            and blow off the BBC lavatory a blinding
                            shot cack spend a penny bugger all mate show
                            off pick your nose brolly.
                        </p>

                        <p className='flex gap-2 items-center font-medium hover:text-blue-500 transition duration-300'><HiOutlineReply /> Reply</p>


                    </div>

                </div>

                <div className="flex flex-col ml-6 lg:ml-30 gap-4 w-11/12">
                    <div className="w-full flex flex-col lg:flex-row gap-4 p-5 border border-gray-300 rounded-lg">
                        <img className='rounded-full p-8 w-30 h-30' src={UserIcon2} alt="" />
                        <div className="flex flex-col gap-5 lg:text-lg">
                            <div className="flex items-center gap-3">
                                <p className='font-medium'>Jim Séchen</p>
                                <span>May 11, 2026 at 14:44 pm</span>
                            </div>

                            <p>
                                The little rotter my good sir faff about
                                Charles bamboozled I such a fibber tomfoolery
                                at public school.
                            </p>

                            <p className='flex gap-2 items-center font-medium hover:text-blue-500 transition duration-300'><HiOutlineReply /> Reply</p>


                        </div>

                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-4 p-5 border border-gray-300 rounded-lg">
                        <img className='rounded-full p-8 w-30 h-30' src={UserIcon3} alt="" />
                        <div className="flex flex-col gap-5 lg:text-lg">
                            <div className="flex items-center gap-3">
                                <p className='font-medium'>Justin Case </p>
                                <span>July 21, 2026 at 17:44 pm</span>
                            </div>

                            <p>
                                The little rotter my good sir faff about
                                Charles bamboozled I such a fibber tomfoolery
                                at public school.
                            </p>

                            <p className='flex gap-2 items-center font-medium hover:text-blue-500 transition duration-300'><HiOutlineReply /> Reply</p>


                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-8">
                <h4 className='text-3xl font-medium'>Leave a Reply</h4>
                <p className="lg:text-2xl text-gray-500">
                    Your email address will not be published. Required fields are marked *
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <textarea className='h-40 p-5 lg:col-span-2
                             text-lg bg-slate-100 focus:outline-3 
                              outline-blue-500 focus:bg-white'
                        name="" id="" placeholder='Magsege' />
                    <TextInput placeHolder='Name....' />
                    <TextInput placeHolder='Email....' />

                    <TextInput placeHolder='Web Site' />

                </div>
                <div className="flex items-center gap-4">
                    <input className='checkbox checkbox-info' type="checkbox" name="" id="" />
                    <p className='lg:text-lg'> Save my name, email, and website in this browser for the next time I comment.</p>

                </div>
                <div className="w-fit ">
                    <PrimaryButton to='#' text='Submit Comment' />
                </div>
            </div>


        </div>
    )
}

export default SingleBlogMainPart