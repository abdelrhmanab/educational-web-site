import { useParams } from 'react-router-dom'
import { findCourse } from '../../data/courses_List';
import Page404 from '../404';
import CourseHeroSec from '../../features/courses/CourseHeroSec';
import MainPartCourse from '../../features/courses/MainPartCourse';
import CourseAside from '../../features/courses/CourseAside';


const SingleCoursePage = () => {
    const { id } = useParams<{ id?: string }>()

    const course = id ? findCourse(+id) : undefined

    if (!course) {
        return (
            <Page404 />
        )
    }
    return (
        <div className='w-full'>
            <CourseHeroSec course={course} />
            <div className="w-full grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-12 bg-gray-50 py-5 lg:py-32">
                <MainPartCourse course={course} />
                <CourseAside course={course} />
            </div>
        </div>
    )
}

export default SingleCoursePage