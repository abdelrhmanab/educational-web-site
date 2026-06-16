import Image from "next/image";


import Flag from '../../../public/images/sidebar/uk.webp'
import Avatar from '../../../public/images/sidebar/admin.webp'
import { GoBell } from "react-icons/go";

const Topbar = () => {
    return (
        <header className="w-full bg-[#1e1e1e] rounded-2xl px-8 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Dashboard </h1>
            <div className="flex items-center gap-5">
                <Image
                    src={Flag}
                    alt="flag"
                    width={35}
                    height={35}
                />
                <div className="text-2xl">
                    <GoBell />
                </div>
                <div className="flex items-center gap-2">
                     <Image
                    src={Avatar}
                    alt="admin"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <h4>John Mark</h4>
                </div>



            </div>
        </header>
    )
}

export default Topbar