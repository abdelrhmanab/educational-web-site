
import BgLinkPages from '../components/bgLinkPages'
import InstructorsGrid from '../features/instructors/InstructorsGrid'
import FreeCoures from '../features/about/FreeCourses';


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