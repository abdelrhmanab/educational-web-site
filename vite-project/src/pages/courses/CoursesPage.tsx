import React from 'react'
import BgLinkPages from '../../components/bgLinkPages'
import SectionContainar from '../../features/SectionContainar';
import coursesList from '../../data/courses_List';

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdPlayLesson } from "react-icons/md";
import { TbClockHour3Filled } from "react-icons/tb";
import { FaUserLarge } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BiAlignMiddle } from "react-icons/bi";
import { Link } from 'react-router-dom';






const CoursesPage = () => {
  return (
    <div className='w-full'>
      <BgLinkPages title='Courses' />
      <SectionContainar className='bg-gray-100' >
        <div className="w-full bg-white rounded-lg shadow grid  grid-cols-1  lg:grid-cols-5 p-4 gap-4">
          <p className='text-xl flex items-center gap-2'>
            <HiOutlineAdjustmentsHorizontal className='text-blue-500 text-2xl' />
            Filters
          </p>

          <select className="  select select-xl text-xl w-full p-4 rounded-lg outline-0 bg-gray-50">
            <option value="Marketing">All Categories</option>
            <option value="Education">Education</option>
            <option value="Marketing">Marketing</option>
            <option value="Development">Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>


          <select className=" select select-xl text-xl w-full p-4 rounded-lg outline-0 bg-gray-50">
            <option value="English">All Language</option>
            <option value="English">English</option>
            <option value="Italic">Italic</option>
            <option value="Spanish">Spanish</option>
            <option value="Bangla">Bangla</option>
            <option value="Urdu">Urdu</option>
            <option value="Hindi">Hindi</option>
          </select>

          <select className=" select select-xl text-xl w-full p-4 rounded-lg outline-0 bg-gray-50">
            <option>All Prices</option>
            <option>Free Courses</option>
            <option>Paid Courses</option>
            <option>Subscribers Only</option>
          </select>

          <select className=" select select-xl text-xl w-full p-4 rounded-lg outline-0 bg-gray-50">
            <option value="Intermediate">All Skills</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Advanced</option>
          </select>


        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between py-5">
          <p className=" text-secondary text-2xl">We found {coursesList.length} events available for you</p>
          <select className=" select select-lg">
            <option>Event Type: All</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            < option>Sort by lates</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>


        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5 lg:py-10">
          {coursesList.map(i => {
            return (
              <div key={i.id} className="card  relative gap-5  shadow">
                <div className=" absolute top-5 right-5 bg-red-500 text-white flex gap-2 items-center text-xs rounded p-2 font-bold"><BiAlignMiddle/> {i.category}</div>
                <figure>
                  <img
                    src={i.img}
                    alt={i.title} />
                </figure>
                <div className="card-body gap-5">
                  <Link to={`/course/${i.id}`} className="card-title text-3xl text-mist-900 hover:text-primary transition duration-500">{i.title}</Link>
                  <div className='flex items-center gap-3 text-sm text-secondary'>
                    <div className="flex gap-2 items-center"><MdPlayLesson /> {i.lessonsCount} Lesson</div>
                    <div className="flex gap-2 items-center"><TbClockHour3Filled /> {i.duration}</div>
                    <div className="flex gap-2 items-center"><FaUserLarge /> {i.instructor}</div>
                  </div>
                  <div className="flex w-full px-5  justify-between">
                    <div className="rating rating-sm">
                      {[1, 2, 3, 4, 5].map(i => {
                        return (
                          <div className="mask  mask-star bg-amber-400" aria-label={`${i} star`} aria-current="true"></div>

                        )
                      })}
                      {i.review}
                    </div>

                    <div className="font-bold text-red-500">{i.price} $</div>

                  </div>


                </div>
              </div>
            )
          })}

        </div>
        <div className="flex gap-5 w-full justify-center items-center">
          <button className=" rounded-full bg-white text-2xl px-5 py-3 hover:bg-sky-500 hover:text-white transition duration-500">1</button>
          <button className=" rounded-full bg-white text-2xl px-5 py-3 hover:bg-sky-500 hover:text-white transition duration-500">2</button>
          <button className=" rounded-full bg-white text-2xl p-3 hover:bg-sky-500 hover:text-white transition duration-500"><FaArrowRight /></button>
        </div>

      </SectionContainar>
    </div>
  )
}

export default CoursesPage