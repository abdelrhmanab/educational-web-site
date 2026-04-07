import React from 'react'


// import { useLocation } from 'react-router-dom'
import BgLinkPages from '../components/bgLinkPages';
import WelcomeSec from '../features/home/components/welcomeSec';
import OnlineCouch from '../features/about/OnlineCouch';
import StudentFeedBack from '../features/about/StudentFeedBack';
import FreeCoures from '../features/about/FreeCourses';
import CoursesInstructors from '../features/instructors/CoursesInstructors';

const AboutPage = () => {
 

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