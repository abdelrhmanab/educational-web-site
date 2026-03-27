import React from 'react'



type Prop = {
    children: React.ReactNode,
    className: string,
    style : object

}

const SectionContainar = ({ children, className = "",style={} }: Prop) => {
    return (
        <section>
            <div className={`w-full flex flex-col items-center m-auto px-2 lg:px-28 py-2 lg:py-28  gap-12 ${className}`}
            style={style}
            >
                {/* <div className=' lg:flex-row text-gray-500 px-2 lg:px-28 py-2 lg:py-8  items-center font-bold'> */}

                {children}
            </div>
        </ section>
    )
}

export default SectionContainar