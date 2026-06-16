'use client'

import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";


const BackButtonLink = () => {

    const router = useRouter()

    return (
        <button onClick={()=> router.back()} className="p-3 rounded-full border border-slate-700"><FaArrowRight /></button>

    )
}

export default BackButtonLink