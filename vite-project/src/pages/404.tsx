import React from 'react'

import Img404 from "../assets/404.png"
import PrimaryButton from '../components/MainButton'

const Page404 = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-8 text-gray-400 font-bold'>
            <img src={Img404} alt="" />
            <h4 className='text-5xl'>404. Page not found</h4>
            <p className='text-2xl w-1/3 text-center'>Sorry, we couldn’t find
                the page you where looking for.
                We suggest that you return to
                homepage</p>
                <PrimaryButton  to='/' text='Back to HomePage' />


        </div>
    )
}

export default Page404