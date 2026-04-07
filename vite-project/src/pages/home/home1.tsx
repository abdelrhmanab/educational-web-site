import React from 'react'
import HeroSec from '../../features/home/components/HeroSec'
import CoursesStudent from '../../features/home/components/coursesStudent'
import WelcomeSec from '../../features/home/components/welcomeSec'
import CampusLive from '../../features/home/components/CampusLive'
import PopularCourses from '../../features/home/components/PopularCourses'
import UpcomingEvents from '../../features/home/components/UpcomingEvents'
import StudentSaying from '../../features/home/components/StudentSaying'
import SchoolNews from '../../features/home/components/SchoolNews'

const Home1 = () => {
  return (<>
    <div className="">
      {/* -------------------------- HERO SEC --------------- */}


      <HeroSec />

      {/* -------------------------- HERO SEC --------------- */}


      {/* -------------------------- COURSES STUDENT  --------------- */}

      <CoursesStudent />

      {/* -------------------------- COURSES STUDENT  --------------- */}


      {/* --------------------------   WELCOME SEC  --------------- */}

      <WelcomeSec />

      {/* --------------------------   WELCOME SEC  --------------- */}




      {/* --------------------------   CAMPUS LIFE SEC --------------- */}

      <CampusLive />

      {/* --------------------------   CAMPUS LIFE SEC --------------- */}



      {/* --------------------------   Popular Courses --------------- */}

      <PopularCourses />

      {/* --------------------------   Popular Courses --------------- */}



      {/* --------------------------   Upcoming Events --------------- */}

      <UpcomingEvents />

      {/* --------------------------   Upcoming Events --------------- */}



      {/* --------------------------   What our student saying --------------- */}


      <StudentSaying />


      {/* --------------------------   What our student saying --------------- */}



      {/* --------------------------   School News --------------- */}

      <SchoolNews />

      {/* --------------------------   School News --------------- */}




    </div>
  </>
  )
}

export default Home1