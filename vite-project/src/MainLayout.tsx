import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/navbar/Navbar"
import Footer from "./components/shared/footer/Footer"
import ScrollToTop from "./components/shared/ScrollButton"

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