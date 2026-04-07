import React from 'react'
import SectionContainar from '../SectionContainar';

import Icon1 from "../../assets/abutacc.png"
import Icon2 from "../../assets/aboutacc2.png"
import Icon3 from "../../assets/aboutacc3.png"
import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa6";

const Courses = [
  {
    icon: Icon1,
    title: "Accredited Campus",
    body: "Nulla porttitor accumsan tincidunt. Curabitur magna justo, lacinia eget consectetur sed, convallis at tellus."
  },
  {
    icon: Icon2,
    title: "Best Quality Courses",
    body: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat."
  },
  {
    icon: Icon3,
    title: "Expert Instructors",
    body: "Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada."
  }
];


const OnlineCouch = () => {
  return (
    <SectionContainar className=' font-bold lg:h-[54rem]' >
      <div className="flex flex-col items-center gap-16 bg-gray-100 p-10">

      <h6 className='text-red-500'>Echooling available courses</h6>
      <h2 className='text-3xl lg:text-5xl lg:w-1/2 text-center'>Online Coaching Lessons For
        Remote Learning</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-28">
        {Courses.map(i => {
          return (
            <div className="flex flex-col justify-center gap-12 items-start p-8 bg-white rounded-4xl shadow-2xl">
              <img src={i.icon} alt="" />
              <div className="flex flex-col gap-5 ">
                <h5 className='text-2xl font-bold'>{i.title}</h5>
                <p className="text-secondary">{i.body}</p>
                <Link className='text-secondary flex items-center' to={"/about"}>learn more <FaArrowRight/></Link>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </SectionContainar>
  )
}

export default OnlineCouch