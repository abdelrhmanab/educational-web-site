
import { BiSolidGrid } from "react-icons/bi";
import { IoMdList } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import coursesList from '../../../data/courses_List';
import { FaFileAlt, FaRegStar } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';



const ListCoursesGrid = () => {

    const location = useLocation()

    return (
        <div className="lg:col-span-8 flex flex-col gap-8">

            {/* -------------- HEADR --------------- */}
            <div className=" flex flex-col lg:flex-row justify-between gap-4 ">
                <div className="flex items-center gap-2 ">
                    <div className="flex gap-3 p-2 items-center text-lg lg:text-3xl border rounded-lg divide-x divide-gray-500">

                        <Link
                            className={location.pathname === "/course-list" ? "text-primary" : ""}
                            to="/course-list"><IoMdList /></Link>

                        <Link
                            className={location.pathname === "/course-right-sidebar" ? "text-primary" : ""}
                            to="/course-right-sidebar"><BiSolidGrid /></Link>
                    </div>
                    <p className="text-sm lg:text-lg font-semibold">We found 104 courses available for you</p>
                </div>



                <select className="lg:text-xl p-2 lg:p-4 rounded-lg outline-0 bg-gray-100">
                    <option>Event Type: All</option>
                    <option>Sort by popularity</option>
                    <option>Sort by average rating</option>
                    < option>Sort by lates</option>
                    <option>Sort by price: low to high</option>
                    <option>Sort by price: high to low</option>
                </select>

            </div>
            {/* -------------- HEADR --------------- */}

            <div className="grid grid-cols-1 gap-8">
                {
                    coursesList.slice(0, 6).map(item => {
                        return (
                            <Link to={`/course/${item.id}`} key={item.id} className='flex flex-col lg:flex-row   bg-white shadow-lg rounded-xl'>
                                <div className="relative w-full lg:w-1/2 h-full">
                                    <img src={item.img} alt="" className="w-full h-full" />
                                    <div className=" absolute top-3 right-3 p-2 rounded-2xl text-sm font-bold text-white bg-sky-500">{item.category}</div>
                                </div>
                                <div className="flex flex-col items-center  p-2 lg:p-5 gap-2 lg:gap-8 ">
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
    )
}

export default ListCoursesGrid