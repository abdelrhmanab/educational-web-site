import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home1 from './pages/home/home1'
import MainLayout from './MainLayout'
import Page404 from './pages/404'
import AboutPage from './pages/about'
import Instructors from './pages/instructor'
import ProfilePage from './pages/profile'
import LogIn from './pages/logIn'
import SignUp from './pages/signUp'
import EventsPage from './pages/events/events'
import SingleEvent from './pages/events/SingleEvent'
import EventSidebarPage from './pages/events/eventSidebar'
import CoursesPage from './pages/courses/CoursesPage'
import SingleCoursePage from './pages/courses/SingleCourse'

const App = () => {



  return (<>

    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home1 />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/instructor' element={<Instructors />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='signup' element={<SignUp />} />

        <Route path='/event' element={<EventsPage />} />
        <Route path='/event/:id' element={<SingleEvent />} />
        <Route path='/event-rihgt-sidebar' element={<EventSidebarPage />} />

        <Route path='/course' element={<CoursesPage />} />
        <Route path='/course/:id' element={<SingleCoursePage />} />


        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  </>)
}

export default App
