import React from 'react'
import ListCoursesGrid from '../../features/courses/course-list-grid.tsx/ListCoursesGrid'
import SideBarCourse from '../../features/courses/course-list-grid.tsx/SideBarCourse'
import BgLinkPages from '../../components/bgLinkPages'
import SidebarGridCourses from '../../features/courses/SidebarGridCourses'

const CoursesSidbar = () => {
    return (
        <div className='w-full'>
            <BgLinkPages title='Course Right Side Bar' />
      <div className='bg-gray-50 grid grid-cols-1 px-2 lg:px-20 py-5 lg:py-24 lg:grid-cols-12 gap-8' >
                <SidebarGridCourses />
            

                <SideBarCourse />

            </div>
        </div>
    )
}

export default CoursesSidbar