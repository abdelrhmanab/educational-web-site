import { BiAlignMiddle, BiSolidGrid } from 'react-icons/bi'
import { IoMdList } from 'react-icons/io'
import { Link } from 'react-router-dom'
import coursesList from '../../data/courses_List'
import { MdPlayLesson } from 'react-icons/md'
import { TbClockHour3Filled } from 'react-icons/tb'
import { FaUserLarge } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa'

const SidebarGridCourses = () => {
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
                    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 lg:py-10">
                {coursesList.map(i => {
                    return (
                        <div key={i.id} className="card  relative gap-5  shadow">
                            <div className=" absolute top-5 right-5 bg-red-500 text-white flex gap-2 items-center text-xs rounded p-2 font-bold"><BiAlignMiddle /> {i.category}</div>
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
        </div>
    )
}

export default SidebarGridCourses