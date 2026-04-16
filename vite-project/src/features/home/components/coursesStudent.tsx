

import { BsArrowRight } from "react-icons/bs";


import CardImage1 from "../../../assets/1.045ce5893b04f4bde993.png"
import CardImage2 from "../../../assets/2.ec9d013b7d4f44fa4112.png"
import CardImage3 from "../../../assets/3.0cf44447da5e6fb16e49.png"
import CardImage4 from "../../../assets/4.3d31b426e478a4d304b8.png"
import TitleOfSec from '../../../components/titleOfSec';
import SectionContainar from '../../SectionContainar';
import { Link } from "react-router-dom";


const cardList = [
    {id:1, img: CardImage1, title: "Let’s Talk Science", body: `learn more  ` },
    {id:2, img: CardImage2, title: "Innovative Courses", body: `learn more  ` },
    {id:3, img: CardImage3, title: "Cloud Storage", body: `learn more  ` },
    {id:4, img: CardImage4, title: "Online Education", body: `learn more  ` },
]



const CoursesStudent = () => {
    return (
        <SectionContainar>
            <TitleOfSec title='acadimy' />

            <div className="flex flex-col lg:flex-row gap-5  w-10/12">
                {cardList.map(item => {
                    return (<Link to={`/course/${item.id}`} className='w-full h-full relative'>
                        <img src={item.img} className='w-full h-full object-contain ' alt="" />
                        <div className=" group absolute top-0 left-0 h-full w-full bg-black/5 hover:bg-black transition-colors duration-500 flex flex-col items-start justify-end p-5 text-white font-bold">
                            <h4 className='text-2xl'>{item.title}</h4>
                            <p className=' flex gap-2 items-center group-hover:text-gray-200'>{item.body} <BsArrowRight /></p>
                        </div>

                    </Link>)

                })}
            </div>

        </SectionContainar>
    )
}

export default CoursesStudent