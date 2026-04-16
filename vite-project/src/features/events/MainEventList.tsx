
import eventsList from "../../data/events_List"



import { Link } from 'react-router-dom'
import { GrLocation } from 'react-icons/gr'

const MainEventList = () => {
    return (

        <div className=" col-span-4 lg:col-span-8">


            <div className="flex flex-col lg:flex-row gap-5 w-full justify-between py-5">
                <p className=" text-secondary text-sm lg:text-xl">We found {eventsList.length} events available for you</p>
                <select className=" select lg:select-lg">
                    <option>Event Type: All</option>
                    <option>Sort by popularity</option>
                    <option>Sort by average rating</option>
                    < option>Sort by lates</option>
                    <option>Sort by price: low to high</option>
                    <option>Sort by price: high to low</option>
                </select>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-12 ">
                {eventsList.map(
                    i => {
                        const data = i.data
                        return (
                            <div key={i.id} className='flex flex-col gap-5 shadow rounded-lg pb-5  '>
                                <img className='w-full' src={i.img} alt={i.title} />
                                <div className="flex flex-col gap-5 pl-2 lg:pl-12">
                                    <p className='flex gap-2 text-info text-xl'>{data.day} {data.month} , {data.year}</p>

                                    <Link to={`/event/${i.id}`} className='text-3xl text-primary font-bold'>
                                        {i.title}
                                    </Link>

                                    <p className=' uppercase text-secondary flex gap-2 items-center text-xl'><GrLocation className='text-2xl font-bold' /> {i.location}</p>
                                </div>




                            </div>
                        )
                    }
                )}
            </div>

        </div>
    )
}

export default MainEventList