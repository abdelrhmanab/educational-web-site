import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/navbar/Navbar"
import Footer from "./components/shared/footer/Footer"
import ScrollToTop from "./components/shared/ScrollButton"
import LoaderPage from "./components/LoaderPage"



const MainLayout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200) // وقت اللودر

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoaderPage />

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout