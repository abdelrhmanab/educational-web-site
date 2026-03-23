import React from 'react'


// import { useLocation } from 'react-router-dom'
import BgLinkPages from '../components/bgLinkPages';
import WelcomeSec from './home/components/welcomeSec';
import OnlineCouch from '../components/OnlineCouch';

const AboutPage = () => {
    // const loc = useLocation
    // console.log(loc.pathname);
    
  return (
    <div className='w-full'>
        <BgLinkPages title='About Us'/>

      {/* --------------------------   Welcome sec --------------- */}
        <WelcomeSec/>
      {/* --------------------------   Welcome sec --------------- */}


      {/* --------------------------   online couch --------------- */}
      
        <OnlineCouch/>

      {/* --------------------------   online couch --------------- */}



    </div>
  )
}

export default AboutPage