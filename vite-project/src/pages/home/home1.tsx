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

      <section>
        <HeroSec />
      </section>
      {/* -------------------------- HERO SEC --------------- */}


      {/* -------------------------- COURSES STUDENT  --------------- */}
      <section>
        <CoursesStudent />
      </section>
      {/* -------------------------- COURSES STUDENT  --------------- */}


      {/* --------------------------   WELCOME SEC  --------------- */}
      <section>
        <WelcomeSec />
      </section>
      {/* --------------------------   WELCOME SEC  --------------- */}




      {/* --------------------------   CAMPUS LIFE SEC --------------- */}
      <section>
        <CampusLive />
      </section>
      {/* --------------------------   CAMPUS LIFE SEC --------------- */}



      {/* --------------------------   Popular Courses --------------- */}
      <section>
        <PopularCourses />
      </section>
      {/* --------------------------   Popular Courses --------------- */}



      {/* --------------------------   Upcoming Events --------------- */}
      <section>
        <UpcomingEvents />
      </section>
      {/* --------------------------   Upcoming Events --------------- */}



      {/* --------------------------   What our student saying --------------- */}

      <section>
        <StudentSaying />
      </section>

      {/* --------------------------   What our student saying --------------- */}



      {/* --------------------------   School News --------------- */}
      <section>
        <SchoolNews/>
      </section>
      {/* --------------------------   School News --------------- */}




    </div>
  </>
  )
}

export default Home1