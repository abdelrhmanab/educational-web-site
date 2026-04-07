import React from 'react'

import Avatar1 from "../../../assets/images/courses/userrating1.jpg"
import Avatar2 from "../../../assets/images/courses/userrating2.jpg"
import PrimaryButton from '../../../components/MainButton';

const ratings = [
  { stars: 5, prog: 100, count: 2 },
  { stars: 4, prog: 80, count: 1 },
  { stars: 3, prog: 60, count: 1 },
  { stars: 2, prog: 40, count: 1 },
  { stars: 1, prog: 20, count: 1 },
]

const userRatings = [
  {
    name: "Bodrum says",
    avatar: Avatar1,
    msg: "This course exceeded my expectations in every way. The explanations were very clear, and the examples helped me understand complex topics بسهولة. I especially liked the practical parts because they made me feel confident applying what I learned in real projects. I highly recommend this to anyone who wants to improve their skills.",
    date: "July 9, 2022 at 6:20 am"
  },
  {
    name: "Anna Smith",
    avatar: Avatar2,
    msg: "I really enjoyed this course from start to finish. The instructor explained everything step by step, which made it easy to follow even for beginners. The content is well organized and covers all the important points. After completing it, I feel much more comfortable working on my own projects. Definitely worth the time and effort!",
    date: "July 10, 2022 at 11:45 am"
  }
];


const Reviews = () => {
  return (
    <div className="flex flex-col gap-14  bg-gray-50 border border-gray-200 px-6 py-12 rounded-b-2xl ">
      <h3 className="text-2xl lg:text-4xl font-bold ">Reviews</h3>


      {/* ----------- GRID SEC -------- */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className=" lg:col-span-4 py-25 shadow flex flex-col gap-5 items-center justify-center border border-gray-200">
          <div className="text-5xl font-bold">4.5</div>

          <div className=" flex flex-col items-center gap-2">
            <div className="rating">
              {[1, 2, 3, 4, 5].map(i => {
                return (
                  <div className="mask mask-star bg-amber-400" aria-label={`${i} star`} aria-current="true"></div>)
              })}
            </div>
            <span className="text-lg  ">
              (4 Ratings)</span>
          </div>



        </div>
        <div className=" lg:col-span-8 p-8 shadow flex flex-col gap-10  border border-gray-200">
          {ratings.map(i => {
            return (
              <div className="flex items-center gap-5">
                <p className='flex'>{i.stars} stars</p>
                <progress className="progress progress-primary w-9/12 h-3" value={i.prog} max="100"></progress>
                <p>{i.count}</p>
              </div>
            )
          })}


        </div>
      </div>
      {/* ----------- GRID SEC -------- */}


      {/* --------------- USERS RATINGS --------------- */}
      <div className="w-full flex flex-col gap-15">
        {userRatings.map(i => {
          return (
            <div className="w-full flex items-center gap-5 px-4 py-8 border border-gray-200 shadow">
              <div className="w-4/12 rounded-full overflow-hidden">
                <img className='' src={i.avatar} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rating">
                  {[1, 2, 3, 4, 5].map(i => {
                    return (
                      <div className="mask mask-star bg-amber-400" aria-label={`${i} star`} aria-current="true"></div>)
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <h5 className='text-2xl font-bold hover:text-primary transition duration-500'>{i.name}</h5>
                  <span className="">{i.date}</span>
                </div>
                <p className='text-lg'>{i.msg}</p>

              </div>

            </div>
          )
        })}


      </div>
      {/* --------------- USERS RATINGS --------------- */}




      {/* --------------- WRITE A REVIEW --------------- */}
      <div className="py-12 lg:pl-6 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl lg:text-3xl font-semibold">Write a Review</h3>
          <p className='lg:text-xl'>Your email address will not be published. Required fields are marked *</p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-4">
            <input className='p-5 rounded-2xl text-lg bg-slate-100 focus:outline-3  outline-blue-500 focus:bg-white' type="text" placeholder='Name....' name="" id="1" />
            <input className='p-5 rounded-2xl text-lg bg-slate-100 focus:outline-3  outline-blue-500 focus:bg-white' type="text" placeholder='Email...' name="" id="2" />
          </div>
          <input className='p-5 rounded-2xl text-lg bg-slate-100 focus:outline-3  outline-blue-500 focus:bg-white' type="text" placeholder='Subject' name="" id="3" />
          <div className="flex items-center gap-2 font-bold text-lg">
            Ratings :

            <div className="rating">
              {[1, 2, 3, 4, 5].map(i => {
                return (
                  <div className="mask mask-star bg-amber-400" aria-label={`${i} star`} aria-current="true"></div>)
              })}
            </div>
          </div>

          <textarea className='h-40 p-5 text-lg bg-slate-100 focus:outline-3  outline-blue-500 focus:bg-white'  name="" id="" placeholder='Magsege'/>
        </div>
        <PrimaryButton text='Subject review !' to=''/>
      </div>
      {/* --------------- WRITE A REVIEW --------------- */}






    </div>
  )
}

export default Reviews