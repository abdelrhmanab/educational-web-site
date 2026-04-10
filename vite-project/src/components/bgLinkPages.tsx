

import React from 'react'

import { useLocation , Link } from 'react-router-dom'

import BG from "../assets/bgcontant.jpg"


type Title = {
    title:string
}

const BgLinkPages = ({title}:Title) => {

    const locat = useLocation();
    const pathName = locat.pathname.replace("/","")

  return (
    <div className='w-full lg:h-[40vh] relative'  >
        <img className='w-full h-full' src={BG} alt="" />
        <div className=" absolute top-0 w-full h-full flex flex-col items-center justify-center text-sm lg:text-3xl gap-5 breadcrumbs text-white bg-black/40   ">
        <h4 className='text-2xl lg:text-5xl font-bold'>{title}</h4>
        <ul>
            <li>
        <Link className='hover:border-b-2 border-primary hover:text-blue-800 transition duration-500' to="/" >Home</Link>

            </li>
              <li>
        <Link className='hover:border-b-2 border-primary hover:text-blue-800 transition duration-500' to={`${locat.pathname}`} >{pathName}</Link>

            </li>
        </ul>

        </div>
    </div>
  )
}

export default BgLinkPages