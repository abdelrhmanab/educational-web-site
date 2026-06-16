import { FaDollarSign } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuUserPlus, LuUserRoundCheck } from "react-icons/lu";
import { PiClockUserFill } from "react-icons/pi";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";

const overViewList = {
    totalClients: 182450,
    newClients: 1437,
    totalProducts: 647,
    Stocks: 12854
}




const OverViewClients = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" >

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <TbUsers />
                    Total client
                </span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <TbUsers />
                    {overViewList.newClients}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <LuUserPlus />


                    New Clients</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <LuUserPlus />

                    {overViewList.totalClients}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <LuUserRoundCheck />

                    Active Clients</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <LuUserRoundCheck />

                    {overViewList.totalProducts}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <PiClockUserFill />

                    Returning Clients</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                  <PiClockUserFill />
                    {overViewList.Stocks}</p>
            </div>
        </div>
    )
}

export default OverViewClients