import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import Links from '../../../data/links_list'

type Props = {
  setOpenSide: (value: boolean) => void
}

const SideBar = ({ setOpenSide }: Props) => {
  const [openCollapse, setOpenCollapse] = React.useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenCollapse((prev) => (prev === id ? null : id))
  }

    return (
        <div className="drawer-side">
            {/* overlay */}
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-white h-full">

                {Links.map((item) => (
                    <div key={item.id} className="rounded-xl overflow-hidden">

                        {/* Parent */}
                        <button
                            onClick={() => handleToggle(item.id)}
                            className="w-full flex items-center justify-between px-4 py-3 text-left font-medium hover:bg-gray-100 rounded-xl transition"
                        >
                            <span className="capitalize">{item.name}</span>

                            <BiChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${openCollapse === item.id ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Children */}
                        <div
                            className={`grid transition-all duration-300 ${openCollapse === item.id
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <ul className="ml-3 border-l pl-3 space-y-1 py-2">

                                    {item.itemList?.map((link) => (
                                        <li key={link.id}>
                                            <NavLink
                                                to={link.path}
                                                onClick={() => setOpenSide(false)}
                                                className={({ isActive }) =>
                                                    `block px-3 py-2 rounded-lg text-sm transition ${isActive
                                                        ? "bg-blue-50 text-blue-600 font-semibold"
                                                        : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                {link.name}
                                            </NavLink>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>

                    </div>
                ))}

                {/* Contact */}
                <NavLink
                    to="/contact"
                    onClick={() => setOpenSide(false)}
                    className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-medium transition ${isActive
                            ? "bg-blue-50 text-blue-600"
                            : "hover:bg-gray-100"
                        }`
                    }
                >
                    Contact
                </NavLink>

            </div>
        </div>
    );
};

export default SideBar;