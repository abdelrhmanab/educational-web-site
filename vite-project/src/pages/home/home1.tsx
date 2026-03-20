import React from 'react'
import HeroSec from './components/HeroSec'
import CoursesStudent from './components/coursesStudent'
import WelcomeSec from './components/welcomeSec'
import CampusLive from './components/CampusLive'

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
        <CampusLive/>
      </section>
      {/* --------------------------   CAMPUS LIFE SEC --------------- */}



    </div>
  </>
  )
}

export default Home1