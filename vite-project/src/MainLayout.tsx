import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollButton"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Outlet /> {/* 👈 هنا الصفحة بتظهر */}
      <Footer/>
    </>
  )
}

export default MainLayout