import { FaDollarSign } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { LuUserPlus, LuUserRoundCheck } from "react-icons/lu";
import { MdOutlinePayment, MdShoppingCart } from "react-icons/md";
import { PiClockUserFill } from "react-icons/pi";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";

const overViewList = {
    totalClients: 42300,
    newClients: 7850,
    totalProducts: 12647,
    Stocks: '36.2%'
}




const OverViewSales = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" >

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <FaDollarSign />
                  Total Revenue

                </span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <FaDollarSign />
                    {overViewList.newClients}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                 <MdShoppingCart />
                    Avg. Order Value
                </span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <FaDollarSign />

                    {overViewList.totalClients}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <MdOutlinePayment />


                    Total Sales
                </span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">


                    {overViewList.totalProducts}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <FaArrowTrendUp />


                    Total Growth</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">

                    {overViewList.Stocks}</p>
            </div>
        </div>
    )
}

export default OverViewSales