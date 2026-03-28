import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";



import Logo from "../assets/logo.png"






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

    const Links = [
        { name: "page", path: "/page", itemList: [{ name: "about", path: "/about" }, { name: "instructor", path: "/instructor" }, { name: "profile", path: "/profile/1" }, { name: "login", path: "/login" }, { name: "signup", path: "/signup" }] },
        { name: "courses", path: "/courses", itemList: [{ name: "course", path: "/course" }, { name: "courses list", path: "/courses" }, { name: "course rihgt sidebr", path: "/course-rihgt-sidebr" }, { name: "single course", path: "/single-course" }] },
        { name: "events", path: "/event", itemList: [{ name: "event", path: "/event/1" }, { name: "events list", path: "/event" }, { name: "event rihgt sidebr", path: "/event-rihgt-sidebr" }, { name: "single event", path: "/single-event" }] },
        { name: "blog", path: "/blog", itemList: [{ name: "blog", path: "/blog" }, { name: "single blog", path: "/single-blog" }] },
    ]


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
                    <div className={`items-center gap-12 hidden lg:flex
                        `}>

                        {Links.map(item => (
                            <div className="dropdown dropdown-hover" key={item.name}>

                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => isActive
                                        ? "text-error font-bold capitalize"
                                        : "hover:text-error transition-colors font-bold capitalize"
                                    }
                                >
                                    <h3 className="text-lg m-1 flex items-center gap-3 group">
                                        {item.name}
                                        <IoIosArrowDown className="group-hover:rotate-180" />
                                    </h3>
                                </NavLink>

                                <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                                    {item.itemList?.map(i => (
                                        <li key={i.name}>
                                            <Link className='text-lg' to={i.path}>{i.name}</Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}

                        <NavLink
                            className={({ isActive }) => isActive
                                ? "text-error font-bold capitalize text-lg"
                                : "hover:text-error transition-colors  text-lg font-bold capitalize"}
                            to="/contact">Contact</NavLink>

                        <div className="relative pt-1 bg-black/5 hidden lg:block">
                            <input
                                type="text"
                                className="h-10 px-4 w-56 outline-primary"
                                placeholder="search course"
                            />
                            <IoSearch className="absolute top-2 border-l p-1 text-3xl right-2" />
                        </div>

                    </div>

                </div>
            </div>

            {/* 🔥 SIDEBAR */}
            <div className="drawer-side ">

                {/* overlay */}
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-64 min-h-full bg-base-200">

                    {Links.map((item) => (
                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" />
                            <h3 className='collapse-title'>{item.name}</h3>

                            <li className='collapse-content' key={item.name}>
                                <div >

                                    <ul>
                                        {item.itemList?.map((i) => (
                                            <li key={i.name}>
                                                <Link
                                                    onClick={() => { setOpenSide(false) }}

                                                    to={i.path}>{i.name}</Link>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </li>
                        </div>
                    ))}

                    <li>
                        <Link
                            onClick={() => { setOpenSide(false) }}

                            to="/contact">Contact</Link>
                    </li>

                </ul>
            </div>

        </div>)
}

export default Navbar