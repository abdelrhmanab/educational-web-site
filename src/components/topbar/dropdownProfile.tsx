import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';
import Avatar from "../../../public/images/sidebar/admin.webp";
import Image from 'next/image';

const DropdownProfile = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className="relative">

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 bg-[#2a2a2a] rounded-2xl px-3 py-2 hover:bg-[#343434] transition"
            >
                <Image
                    src={Avatar}
                    alt="admin"
                    width={42}
                    height={42}
                    className="rounded-full ring-2 ring-blue-500/30"
                />

                <div className="hidden md:block text-left">
                    <h4 className="font-medium text-white">
                        John Mark
                    </h4>

                    <p className="text-xs text-gray-400">
                        Administrator
                    </p>
                </div>

                <HiOutlineChevronDown
                    className={`text-gray-400 transition duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-60 rounded-2xl bg-[#252525] border border-gray-700 shadow-2xl overflow-hidden z-50">

                    <div className="p-4 border-b border-gray-700">
                        <h4 className="font-semibold">
                            John Mark
                        </h4>

                        <p className="text-sm text-gray-400">
                            john@example.com
                        </p>
                    </div>

                    <div className="py-2">

                        <button className="w-full px-4 py-3 text-left hover:bg-[#323232] transition">
                            Profile
                        </button>

                        <button className="w-full px-4 py-3 text-left hover:bg-[#323232] transition">
                            Settings
                        </button>

                        <button className="w-full px-4 py-3 text-left hover:bg-[#323232] transition">
                            Billing
                        </button>

                        <hr className="border-gray-700 my-2" />

                        <button className="w-full px-4 py-3 text-left text-red-400 hover:bg-red-500/10 transition">
                            Logout
                        </button>

                    </div>

                </div>
            )}

        </div>
    )
}

export default DropdownProfile