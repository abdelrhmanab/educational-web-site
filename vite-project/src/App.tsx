import './App.css'

import { Routes , Route } from 'react-router-dom'
import Home1 from './pages/home/home1'
import Home2 from './pages/home/home2'
import Home3 from './pages/home/home3'
import MainLayout from './MainLayout'
import Page404 from './pages/404'
import AboutPage from './pages/about'
import Instructors from './pages/instructor'
import ProfilePage from './pages/profile'
import LogIn from './pages/logIn'
import SignUp from './pages/signUp'

const App=()=> {
  
  

 return(<>

 <Routes>
    <Route element={<MainLayout/>}>
  <Route path='/' element={<Home1/>}/>
  <Route path='/home2' element={<Home2/>}/>
  <Route path='/home3' element={<Home3/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/instructor' element={<Instructors/>}/>
  <Route path='/profile/:id' element={<ProfilePage/>}/>
  <Route path='/login' element={<LogIn/>} />
  <Route path='signup' element={<SignUp/>} />



  <Route path='*' element={<Page404/>}/>
  </Route>
 </Routes>
 </>)
}

export default App
