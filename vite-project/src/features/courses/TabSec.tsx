import React from 'react'
import Description from './tab-content/Description'
import Curriculum from './tab-content/Curriculum'
import Reviews from './tab-content/Reviews'
import FAQ from './tab-content/FAQ'

const TabSec = ({ course }) => {
    const [isActive, setIsActive] = React.useState("Description")

    return (

        <div className="w-full">

            <div className="tabs w-full tabs-lifted
             lg:tabs-lg  bg-gray-100 flex litems-center">

                {/* Description */}
                <input
                    onClick={() => setIsActive("Description")}
                    type="radio"
                    name="course_tabs"
                    className={`tab  
                                text-sm lg:text-lg p-1 lg:p-5 h-10 lg:h-22 rounded-lg lg:rounded-2xl
                                flex items-center justify-center
                                m-2 lg:m-4
                                hover:bg-white
                                hover:shadow-lg
                                hover:text-black
                                transition-colors duration-200
                                ${isActive === "Description" ? "shadow-lg bg-white text-black" : ""}`}
                    aria-label="Description"
                    defaultChecked
                />
                <div className="tab-content">

                    <Description course={course} />
                </div>
                {/* Curriculum */}
                <input
                    onClick={() => setIsActive("Curriculum")}
                    type="radio"
                    name="course_tabs"
                    className={`tab  
                              text-sm lg:text-lg p-1 lg:p-5 h-10 lg:h-22 rounded-lg lg:rounded-2xl
                                flex items-center justify-center
                                m-2 lg:m-4
                                hover:bg-white
                                hover:shadow-lg
                                hover:text-black
                                transition-colors duration-200
                                ${isActive === "Curriculum" ? "shadow-lg bg-white text-black" : ""}`}
                    aria-label="Curriculum"
                />
                <div className="tab-content">
                    <Curriculum />

                </div>

                {/* Reviews */}
                <input
                    onClick={() => setIsActive("Reviews")}
                    type="radio"
                    name="course_tabs"
                    className={`tab  
                               text-sm lg:text-lg p-1 lg:p-5 h-10 lg:h-22 rounded-lg lg:rounded-2xl
                                flex items-center justify-center
                                m-2 lg:m-4
                                hover:bg-white
                                hover:shadow-lg
                                hover:text-black
                                transition-colors duration-200
                                ${isActive === "Reviews" ? "shadow-lg bg-white text-black" : ""}`}
                    aria-label="Reviews"
                />
                <div className="tab-content">

                    <Reviews />
                </div>

                {/* FAQ */}
                <input
                    onClick={() => setIsActive("FAQ")}
                    type="radio"
                    name="course_tabs"
                    className={`tab  
                               text-sm lg:text-lg p-1 lg:p-5 h-10 lg:h-22 rounded-lg lg:rounded-2xl
                                flex items-center justify-center
                                m-2 lg:m-4
                                hover:bg-white
                                hover:shadow-lg
                                hover:text-black
                                transition-colors duration-200
                                ${isActive === "FAQ" ? "shadow-lg bg-white text-black" : ""}`}
                    aria-label="FAQ"
                />    
                <div className="tab-content">

                    <FAQ />
                </div>
            </div>
        </div>
    )
}

export default TabSec