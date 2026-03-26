import React from 'react'


// import { useLocation } from 'react-router-dom'
import BgLinkPages from '../components/bgLinkPages';
import WelcomeSec from './home/components/welcomeSec';
import OnlineCouch from '../components/OnlineCouch';
import CoursesInstructors from '../components/CoursesInstructors';
import StudentFeedBack from '../components/StudentFeedBack';
import FreeCoures from '../components/FreeCoures';

const AboutPage = () => {
  // const loc = useLocation
  // console.log(loc.pathname);

  return (
    <div className='w-full'>
      <BgLinkPages title='About Us' />

      {/* --------------------------   Welcome sec --------------- */}
      <WelcomeSec />
      {/* --------------------------   Welcome sec --------------- */}


      {/* --------------------------   online couch --------------- */}

      <OnlineCouch />

      {/* --------------------------   online couch --------------- */}



      {/* --------------------------   Courses Instructors --------------- */}
      <CoursesInstructors />
      {/* --------------------------   Courses Instructors --------------- */}


      {/* --------------------------  Student Feeed Back --------------- */}
      <StudentFeedBack />
      {/* --------------------------  Student Feeed Back --------------- */}


      {/* -------------------------- Free Courses --------------- */}

      <FreeCoures />
      {/* -------------------------- Free Courses --------------- */}


    


    </div>
  )
}

export default AboutPage