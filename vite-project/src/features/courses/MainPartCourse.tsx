import TabSec from './TabSec'
import { popularCoursesList } from '../../data/courses_List';

// import { popularCoursesList } from "../../data/courses_List"
import { LuUsers } from "react-icons/lu";
import { FaFileAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';



type CourseProps = {
    course: any
}

const MainPartCourse = ({ course }: CourseProps) => {



    return (
        <div className=" lg:col-span-8 flex flex-col gap-3 lg:gap-8 px-2 lg:px-16">

            <div className="w-full aspect-video">
                <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/e5Hc2B50Z7c"
                    title="YouTube video"
                    allowFullScreen
                ></iframe>
            </div>
            <TabSec course={course} />
            <div className="flex flex-col gap-8">
                <h4 className='text-2xl font-bold'>Related Courses</h4>

                <div className="grid grid-cols-1 gap-8  lg:grid-cols-2">

                    {
                        popularCoursesList.slice(0, 2).map(item => {
                            return (
                                <Link to={`/course/${item.id}`} key={item.id} className='flex flex-col relative items-center bg-white shadow'>
                                    <img src={item.img} alt="" className="w-full" />
                                    <div className=" absolute top-3 right-3 p-2 rounded-2xl text-sm font-bold text-white bg-sky-500">{item.category}</div>
                                    <div className="flex flex-col items-center  py-5 px-5 gap-3 ">
                                        <ul className='flex gap-4 w-full text-[18px]'>
                                            <li key={item.id} className='text-error flex items-center '><FaRegStar /> {item.review} review</li>

                                            <li className='flex items-center' key={item.id + 1}><LuUsers /> {item.studendsCount} students</li>
                                        </ul>
                                        <h5 className='text-2xl pb-8 font-bold text-primary hover:text-pink-700 transition duration '>{item.title}</h5>
                                        <div className="flex w-full  gap-4">
                                            <img alt={item.instructor} src={item.avatar} />
                                            <h4 className="text-xl">{item.instructor}</h4>
                                        </div>
                                        {/* <div className="divider "></div> */}
                                        <ul className='flex justify-between w-full py-5  text-[18px] border-t border-gray-400' >
                                            <li key={item.id} className='flex items-center gap-2 text-gray-600 '><FaFileAlt /> {item.lessonsCount} Lessons</li>

                                            <li key={item.id + 1} className='text-2xl  font-bold'>{item.price} $</li>
                                        </ul>
                                    </div>

                                </Link>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default MainPartCourse