import BgLinkPages from '../../components/bgLinkPages'
import ListCoursesGrid from '../../features/courses/course-list-grid.tsx/ListCoursesGrid'
import SideBarCourse from '../../features/courses/course-list-grid.tsx/SideBarCourse'

const CoursesList = () => {
  return (
    <div className='w-full'>
      <BgLinkPages title='Course List' />
      <div className='bg-gray-50 grid grid-cols-1 px-2 lg:px-20 py-5 lg:py-24 lg:grid-cols-12 gap-8' >
        <ListCoursesGrid />

        <SideBarCourse />

      </div>
    </div>
  )
}

export default CoursesList