import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";



import Logo from "../../../assets/logo.png"
import DesktopNav from './DesktopNav';
import SideBar from './SideBar';







const Navbar = () => {

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [openSide, setOpenSide] = React.useState(false)



    return (
        <div className={`drawer-end`}>

            {/* ✅ لازم ده يكون أول عنصر */}
            <input
                id="my-drawer-2"
                type="checkbox"
                checked={openSide}
                onChange={() => setOpenSide(!openSide)}

                className="drawer-toggle" />

            {/* 🔹 CONTENT */}
            <div className="drawer-content">
                <div
                    className={`py-6 lg:px-24 flex justify-between items-center navbar 
                            transition-all duration-500 ease-in-out
                            ${scrolled
                            ? "fixed top-0 left-0 w-11/12 ml-2  lg:ml-10 bg-primary-content mt-5 rounded-4xl shadow-md py-3 z-10 opacity-100 translate-y-0"
                            : ""
                        }`}
                >
                    <NavLink to={"/"} className='w-42 lg:w-auto'>
                        <img src={Logo} alt="" />
                    </NavLink>

                    {/* ✅ زر الموبايل */}
                    <label htmlFor="my-drawer-2" className="btn  btn-ghost btn-lg lg:hidden">
                        <GiHamburgerMenu />
                    </label>

                    {/* 🔹 Desktop */}
                    <DesktopNav />

                </div>
            </div>

            {/* 🔥 SIDEBAR */}
            <SideBar  setOpenSide={setOpenSide} />

        </div>)
}

export default Navbar