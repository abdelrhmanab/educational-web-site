import React from 'react'
import HeroSec from './components/HeroSec'
import CoursesStudent from './components/coursesStudent'
import WelcomeSec from './components/welcomeSec'
import CampusLive from './components/CampusLive'
import PopularCourses from './components/PopularCourses'
import UpcomingEvents from './components/UpcomingEvents'
import StudentSaying from './components/StudentSaying'
import SchoolNews from './components/SchoolNews'

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
      
        <SchoolNews/>
      
      {/* --------------------------   School News --------------- */}




    </div>
  </>
  )
}

export default Home1