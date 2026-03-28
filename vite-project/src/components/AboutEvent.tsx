import React from 'react'
import AttendeeList from './AttendeeList'

const AboutEvent = () => {
    return (
        <div className=" lg:col-span-8 flex flex-col gap-3 lg:gap-8 px-2 lg:px-16">
            <h4 className="text-xl lg:text-4xl font-bold">About The Event</h4>
            <p className=' lg:text-2xl text-secondary'>
                Tempor orci eu lobortis elementum nibh tellus
                molestie nunc. Augue interdum velit euismod in
                . varius sit amet mattis vulputate. Nunc pulvinar
                sapien et ligula ullamcorper malesuada. Ullamcorper velit
                sed ullamcorper morbi. Varius morbi enim nunc faucibus
                a pellentesque sit amet. Bibendum est ultricies integer q
                uis auctor elit. Dui id ornare arcu odio ut sem nulla phare
                tra. Sed vulputate odio ut enim blandit volutpat maecenas
                volutpat. Lacinia at quis risus sed vulputate odio ut enim
                cras fermentum odio eu feugiat pretium nibh ipsum

            </p>
            <p className=' lg:text-2xl text-secondary'>

                Mi eget mauris pharetra et ultrices
                neque ornare. Duis ut diam quam nulla
                porttitor massa. Amet dictum sit amet
                justo donec enim diam.
            </p>

            <iframe width="100%" height="641" src="https://www.youtube.com/embed/e5Hc2B50Z7c"
                title="Education of School Intro Video for No Copyright free download" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p className=' lg:text-2xl text-secondary'>
                Feel free to choose from our huge
                selection of templates, customize
                easily, and create a stunning website
                for your customers
            </p>


            <p className=' lg:text-2xl text-secondary'>
                Nam nec tellus a odio tincidunt auctor a
                ornare odio. Sed non mauris vitae erat
                consequat auctor in elit. Class aptent
                taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
                Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue.
                Sed non neque elit. Sed ut imperdiet nisi
                proin condimentum.
            </p>

            <div className=" divider"></div>

            <div className="flex items-center gap-8 flex-wrap">
                <p className=" font-bold text-lg">Tags : </p>
                <div className="flex items-center gap-4 flex-wrap">
                    {["Education", "Echooling", "Course" , "Online Course"].map(
                        i=>{
                            return(
                                <p className="bg-gray-200 rounded-lg p-2  hover:text-white hover:bg-primary duration-500 transition ">{i}</p>
                            )
                        }
                    )}
                </div>
            </div>

            <AttendeeList/>

        </div>

    )
}

export default AboutEvent