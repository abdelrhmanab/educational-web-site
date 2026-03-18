import './App.css'

import { Routes , Route } from 'react-router-dom'
import Home1 from './pages/home/home1'
import Home2 from './pages/home/home2'
import Home3 from './pages/home/home3'
import MainLayout from './MainLayout'

const App=()=> {

 return(<>

 <Routes>
    <Route element={<MainLayout/>}>
  <Route path='/' element={<Home1/>}/>
  <Route path='/home2' element={<Home2/>}/>
  <Route path='/home3' element={<Home3/>}/>
  </Route>
 </Routes>
 </>)
}

export default App
