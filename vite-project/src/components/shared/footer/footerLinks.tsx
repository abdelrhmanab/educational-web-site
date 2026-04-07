import React from 'react'

import { Link } from 'react-router-dom'


type link = {
    name: string,
    path: string
}

type LinksType = {
    links: link[],
    title: string
}

const FooterLinks = ({ links, title }: LinksType) => {



    return (
        <div className="flex flex-col justify-center gap-4 lg:gap-8 text-white">
            <h3 className='text-3xl font-bold'>{title}</h3>


            <ul className='flex flex-col gap-2'>
                {links.map((i, index) => {
                    return (
                        <li key={index} className="text-gray-400 font-bold w-fit hover:ml-3 hover:text-primary  duration-700 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-primary hover:after:w-full after:transition-all"> <Link to={i.path}>{i.name}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FooterLinks