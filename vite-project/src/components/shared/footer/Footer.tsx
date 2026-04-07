import React from 'react'

import Logo from "../../../assets/logofooter.png"
import { MdAddIcCall, MdOutlineMailOutline } from "react-icons/md";
import FooterLinks from './footerLinks';
import EmailInput from './emailInput';
import Downfooter from './Downfooter';

const aboutLinks = [
  { name: "about", path: "/about" },
  { name: "courses", path: "/courses" },
  { name: "event", path: "/event" },
  { name: "career", path: "/career" },
  { name: "become a teather", path: "/404" },
  { name: "contact", path: "/contact" },
]


const UsefullLinks = [
  { name: "Browse Library", path: "/#" },
  { name: "Library", path: "/#" },
  { name: "partners", path: "/#" },
  { name: "News&blog", path: "/blog" },
  { name: "FAQ", path: "/#" },
  { name: "Tutorials", path: "/#" },
]
const Footer = () => {
  return (

    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-12  bg-gray-950 py-20 px-10 ">

        {/*  ----------------  INFO -------------- */}
        <div className="flex flex-col justify-center gap-4 lg:gap-8 text-white">
          <h3 className='text-white'><img src={Logo} alt="" /></h3>

          <p className='text-[16px]'>There are course and event custom
            post types so you can easily create and
            manage course, events.</p>

          <p className='flex items-center 
          w-fit  transition gap-2 text-gray-300 
          text-[16px] hover:text-error'>
            <MdAddIcCall />
            +(402) 762 441 83
          </p>


          <p className='flex items-center
           w-fit  transition gap-2 text-gray-300
            text-[16px] hover:text-error'>
            <MdOutlineMailOutline />info@echooling.com
          </p>

        </div>
        {/*  ----------------  INFO -------------- */}


        {/*  ----------------  ABOUT -------------- */}


        <FooterLinks links={aboutLinks} title='about us' />


        {/*  ----------------  ABOUT -------------- */}



        {/*  ----------------  USEFUL LINKS -------------- */}

        <FooterLinks links={UsefullLinks} title='Usefull Links' />

        {/*  ----------------  USEFUL LINKS -------------- */}



        {/*  ----------------  NEW SLETTER -------------- */}

        <div className="flex flex-col justify-center gap-4 lg:gap-8 text-white">
          <h3 className='text-3xl font-bold'>New sletter</h3>
          <p className='text-[16px]'>Get the latest Echooling news
            delivered to you inbox</p>
          <EmailInput />
        </div>
        {/*  ----------------  NEW SLETTER -------------- */}


      </div>
     <Downfooter/>
    </footer>
  )
}

export default Footer