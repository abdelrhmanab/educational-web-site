import React from 'react'

const Description = ({ course }) => {
    return (

           <div className="flex flex-col gap-5 lg:gap-14  bg-gray-50 border border-gray-200 px-6 py-6 lg:py-12 rounded-b-2xl ">
                <h3 className="text-xl lg:text-4xl font-bold border-b border-gray-400 pb-2 w-fit">About This Course</h3>

                <p className='lg:text-xl'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat nis Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint
                    occae cat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>

                <p className='lg:text-xl'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat nis Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum
                    in reprehenderit in voluptate velit esse cillum
                    in reprehenderit in voluptate velit esse cillum
                    in reprehenderit in voluptate velit esse cillum
                    in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint
                    occae cat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>

                <img src={course.img} className='w-full lg:w-2/3' alt="" />


            </div>
    )
}

export default Description