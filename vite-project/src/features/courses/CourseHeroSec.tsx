
import HeroBg from "../../assets/course-bannerbackGround.jpg"

import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


type CourseProps = {
    course: any
}

const CourseHeroSec = ({ course }: CourseProps) => {

    return (
        <div className="w-full bg-repeat bg-cover
         px-4 lg:px-16 py-5 lg:py-36 flex flex-col
          justify-center text-white gap-4 lg:gap-8 "
            style={{
                backgroundImage: `url(${HeroBg})`
            }}
        >
            <p className="px-2 lg:px-4 py-2 capitalize text-xs lg:text-lg  bg-blue-600 w-fit rounded-xl ">{course.category}</p>
            <h2 className="text-3xl lg:text-7xl font-bold lg:w-1/2 ">{course.title}</h2>
            <div className="flex items-center text-sm lg:text-xl gap-2 lg:gap-8">
                <p className='flex items-center gap-2 text-lg  '><img src={course.avatar} alt={course.instructor} /> {course.instructor} </p>
                <p className='flex items-center gap-2'><IoMdTime /> {course.lessonsCount} Lessons</p>
                <p className='flex items-center gap-2'><IoLocationOutline /> {course.studendsCount}  Students</p>
            </div>

        </div>
    )

}

export default CourseHeroSec

