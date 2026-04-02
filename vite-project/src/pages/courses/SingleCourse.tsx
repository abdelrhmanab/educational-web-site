import React from 'react';

import { useParams } from 'react-router-dom'
import { findCourse } from '../../data/courses_List';
import Page404 from '../404';
import CourseHeroSec from '../../components/CourseHeroSec';


const SingleCoursePage = () => {
       const { id } = useParams()

    const course = findCourse(+id)

    if (!course) {
        return (
            <Page404 />
        )
    }
  return (
    <div className='w-full'>
        <CourseHeroSec course={course}/>
    </div>
  )
}

export default SingleCoursePage