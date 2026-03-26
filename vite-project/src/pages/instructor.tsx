import React from 'react'
import BgLinkPages from '../components/bgLinkPages'
import InstructorsGrid from '../components/InstructorsGrid'
import FreeCoures from '../components/FreeCoures';


const Instructors = () => {
    return (
        <div className='w-full'>
            <BgLinkPages title='instructor' />


            {/* -------------------------- Instructors page --------------- */}
            <InstructorsGrid />
            {/* -------------------------- Instructors page --------------- */}

            
      {/* -------------------------- Free Courses --------------- */}

      <FreeCoures />
      {/* -------------------------- Free Courses --------------- */}



        </div>
    )
}

export default Instructors