'use client'

import Image from "next/image";

import Flag from "../../../public/images/sidebar/uk.webp";

import { GoBell } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import DropdownProfile from "./dropdownProfile";

const Topbar = () => {


    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-[#1e1e1e] rounded-3xl px-8 py-5 border border-white/5 shadow-lg">

            <div className="flex items-center justify-between">

                {/* Left Side */}
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Dashboard
                    </h1>

                    <p className="text-sm text-gray-400 mt-1">
                        Welcome back, John 👋
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <div className="hidden md:flex items-center gap-2 bg-[#2a2a2a] rounded-xl px-4 py-2 min-w-[260px]">
                        <IoSearch className="text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none w-full text-sm placeholder:text-gray-500"
                        />
                    </div>

                    {/* Language */}
                    <button className="w-11 h-11 rounded-xl bg-[#2a2a2a] flex items-center justify-center hover:bg-[#343434] transition">
                        <Image
                            src={Flag}
                            alt="language"
                            width={24}
                            height={24}
                        />
                    </button>

                    {/* Notifications */}
                    <button className="relative w-11 h-11 rounded-xl bg-[#2a2a2a] flex items-center justify-center hover:bg-[#343434] transition">
                        <GoBell className="text-xl" />

                        <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500" />
                    </button>

                    <DropdownProfile isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </div>

        </header>
    );
};

export default Topbar;