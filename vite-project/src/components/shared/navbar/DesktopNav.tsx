import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

import Links from '../../../data/links_list'



const DesktopNav = () => {
    const [openMenu, setOpenMenu] = React.useState(null);

    const handleOpenMenu = (id) => {
        setOpenMenu((prev) => (prev === id ? null : id));
    };

    return (
        <div className="items-center gap-12 hidden lg:flex">

            {Links.map((item) => (
                <div key={item.id} className="relative">

                    {/* Parent */}
                    <button
                        onMouseEnter={() => handleOpenMenu(item.id)}
                        className="text-lg font-bold capitalize flex items-center gap-2 hover:text-error transition"
                    >
                        {item.name}
                        <IoIosArrowDown
                            className={`transition-transform duration-300 ${openMenu === item.id ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* Dropdown */}
                    {openMenu === item.id && (
                        <ul className="absolute top-full mt-2 w-52 bg-base-100 rounded-xl shadow-lg p-2 z-50">
                            {item.itemList?.map((i) => (
                                <li key={i.id}>
                                    <Link
                                        to={i.path}
                                        className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                                        onClick={() => setOpenMenu(null)}
                                    >
                                        {i.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}

            {/* Contact */}
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "text-error font-bold capitalize text-lg"
                        : "hover:text-error transition text-lg font-bold capitalize"
                }
                to="/contact"
            >
                Contact
            </NavLink>

            {/* Search */}
            <div className="relative pt-1 bg-black/5 hidden lg:block rounded-lg overflow-hidden">
                <input
                    type="text"
                    className="h-10 px-4 w-56 outline-none"
                    placeholder="search course"
                />
                <IoSearch className="absolute top-2 right-2 text-2xl opacity-60" />
            </div>

        </div>
    );
};

export default DesktopNav;