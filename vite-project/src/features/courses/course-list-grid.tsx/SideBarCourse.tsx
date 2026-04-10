import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import PopeventImg1 from "../../../assets/popevent3.jpg"
import PopeventImg2 from "../../../assets/popevent4..jpg"


const category = [
    { id: 1, name: "Featured courses", availableCourses: 8 },
    { id: 2, name: "Education", availableCourses: 5 },
    { id: 3, name: "Business", availableCourses: 3 },
    { id: 4, name: "IT Management", availableCourses: 7 },
    { id: 5, name: "Development", availableCourses: 6 },
    { id: 6, name: "Creative", availableCourses: 2 },
    { id: 7, name: "Art & Design", availableCourses: 9 },
];

const levels = [
    { id: 1, name: "Beginner" },
    { id: 2, name: "Intermediate" },
    { id: 3, name: "Advanced" },
];

const pricingOptions = [
    { id: 1, name: "Free Courses", value: "free" },
    { id: 2, name: "Paid Courses", value: "paid" },
    { id: 3, name: "Only Subscription", value: "subscription" },
];

const ratingOptions = [
    { id: 1, name: "4.5 & up", value: 4.5 },
    { id: 2, name: "3.0 & up", value: 3.0 },
    { id: 3, name: "2.0 & up", value: 2.0 },
];

const SideBarCourse = () => {
    const [minRating, setMinRating] = React.useState(null);

    return (
        <div className="lg:col-span-4 flex flex-col items-center lg:px-4">
            <div className="w-full bg-white py-4 px-4 lg:p-10 rounded-xl divide-y divide-slate-400  shadow-lg flex flex-col gap-8">
                <div className="flex flex-col gap-5 py-8">
                    <h4 className='t lg:text-2xl font-bold'>Search</h4>
                    <div className="relative pt-1 bg-black/5  rounded-lg overflow-hidden">
                        <input
                            type="text"
                            className=" p-1 lg:p-4 text-sm lg:text-lg  outline-none"
                            placeholder="search...."
                        />
                        <IoSearch className="absolute top-2 lg:top-6 text-primary right-2 text-lg lg:text-3xl opacity-60" />
                    </div>
                </div>

                <div className="flex flex-col gap-8 py-8 ">
                    <h4 className='t lg:text-2xl font-bold'>Filter by category</h4>
                    <div className="flex flex-col gap-4 text-lg">
                        {category.map(i => {
                            return (
                                <div key={i.id} className="flex items-center gap-2">
                                    <input className='checkbox checkbox-primary' type="checkbox" name="" id="" />
                                    <span className="">{i.name}</span>
                                    <span>({i.availableCourses})</span>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="flex flex-col gap-8 py-8 ">
                    <h4 className='t lg:text-2xl font-bold'>Skill Level</h4>
                    <div className="flex flex-col gap-4 text-lg">
                        {levels.map(i => {
                            return (
                                <div key={i.id} className="flex items-center gap-2">
                                    <input className='checkbox checkbox-primary' type="checkbox" name="" id="" />
                                    <span className="">{i.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="flex flex-col gap-8 py-4 ">
                    <h4 className='t lg:text-2xl font-bold'>Price</h4>
                    <div className="flex flex-col gap-4 text-lg">
                        {pricingOptions.map(i => {
                            return (
                                <div key={i.id} className="flex items-center gap-2">
                                    <input className='checkbox rounded-full checkbox-primary' type="checkbox" name="" id="" />
                                    <span className="">{i.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="flex flex-col gap-8 py-4 ">
                    <h4 className='t lg:text-2xl font-bold'>Popular Courses</h4>
                    <Link to={"/event/3"} className='flex gap-5'>
                        <img className='w-1/4 h-32 object-cover rounded-2xl' src={PopeventImg1} alt="" />
                        <div className="flex flex-col gap-3 p-4">
                            <h6 className='text-lg'>Ethics in AI Live Event Machines Judging.</h6>
                            <p className='text-lg font-bold'>26 March, 2022</p>
                        </div>

                    </Link>

                    <Link to={"/event/4"} className='flex gap-5'>
                        <img className='w-1/4 h-32 object-cover rounded-2xl' src={PopeventImg2} alt="" />
                        <div className="flex flex-col gap-3 p-4">
                            <h6 className='text-lg'>The Importance Of Intrinsic Motivation.</h6>
                            <p className='text-lg font-bold'>10 April, 2022</p>
                        </div>

                    </Link>
                </div>


                <div className="flex flex-col gap-8 py-8 ">
                    <h4 className='t lg:text-2xl font-bold'>Rating</h4>
                    <div className="flex flex-col gap-4 text-lg">

                        {ratingOptions.map((i) => {
                            const fullStars = Math.floor(i.value);
                            const hasHalf = i.value % 1 !== 0;

                            return (
                                <div key={i.id} className="flex items-center gap-2 cursor-pointer">

                                    {/* Checkbox */}
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary rounded-full"
                                    // checked={minRating === i.value}
                                    // onChange={() => setMinRating(i.value)}
                                    />

                                    {/* Stars */}
                                    <div className="rating ">
                                        {Array.from({ length: 5 }).map((_, index) => {
                                            const starValue = index + 1;

                                            if (starValue <= fullStars) {
                                                return (
                                                    <div className="mask mask-star bg-amber-400" aria-label={`${i} star`} aria-current="true"></div>

                                                );
                                            }

                                            if (hasHalf && starValue === fullStars + 1) {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="mask mask-half-2 mask-star bg-amber-400"
                                                    />
                                                );
                                            }

                                            return (
                                                <div
                                                    key={index}
                                                    className="mask mask-star bg-gray-400"
                                                />
                                            );
                                        })}
                                    </div>

                                    {/* Text */}
                                    <span className="">{i.name}</span>
                                </div>
                            );
                        })}
                    </div>

                </div>


            </div>


        </div>
    )
}

export default SideBarCourse