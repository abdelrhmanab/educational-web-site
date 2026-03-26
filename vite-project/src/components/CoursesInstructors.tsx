import React from 'react'
import SectionContainar from '../features/SectionContainar';

import Avatar1 from "../assets/avatar1.jpg"
import Avatar2 from "../assets/avatar2.jpg"
import Avatar3 from "../assets/avatar3.jfif"
import Avatar4 from "../assets/avatar4.jpg"
import Avatar5 from "../assets/avatar5.jpg"
import Avatar6 from "../assets/avatar6.jpg"

const instructors = [
    {
        avatar: Avatar1,
        name: "Jason Response",
        job: "Education Assistant"
    },
    {
        avatar: Avatar2,
        name: "Sarah Johnson",
        job: "UI/UX Designer"
    },
    {
        avatar: Avatar3,
        name: "Michael Smith",
        job: "Frontend Developer"
    },
    {
        avatar: Avatar4,
        name: "Emily Davis",
        job: "Backend Developer"
    },
    {
        avatar: Avatar5,
        name: "David Wilson",
        job: "Data Analyst"
    },
    {
        avatar: Avatar6,
        name: "Sophia Brown",
        job: "Project Manager"
    }
];

const CoursesInstructors = () => {
    return (
        <SectionContainar>
            <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-5 ">
                <div className=" lg:col-span-2 flex flex-col  gap-5 p-5">
                    <h6 className='text-red-500'>Echooling available courses</h6>
                    <h2 className='text-3xl lg:text-5xl font-bold text-start p-3 flex flex-col '>Meet our <span> Class Instructors</span></h2>
               
                </div>
               
               
                {instructors.map(i => {
                    return (
                        <div className="flex flex-col gap-5 items-center justify-center p-8 hover:shadow-2xl duration-500 rounded-2xl">
                            <div className="border-8 border-sky-100 rounded-full overflow-hidden "> <img className='w-full' src={i.avatar} alt={i.name} /></div>
                            <h4 className="text-2xl font-bold">{i.name}</h4>
                            <p>{i.job}</p>
                        </div>
                    )
                })}
            </div>
        </SectionContainar>
    )
}

export default CoursesInstructors