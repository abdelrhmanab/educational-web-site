import React from 'react'

import LineTitle from "../assets/linetitle.png"

type Title = {
    title:string
}

const TitleOfSec = ({title}:Title) => {
  return (
      <div className="flex flex-col items-center gap-3">
                <h2 className='text-3xl lg:text-5xl font-bold text-primary  capitalize'>{title}</h2>
                <img className='' src={LineTitle} alt="" />
            </div>
  )
}

export default TitleOfSec