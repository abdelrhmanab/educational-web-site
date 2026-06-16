import { FaDollarSign } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";

const overViewList = {
    totalSales: 182450,
    totalClients: 1437,
    totalProducts: 647,
    Stocks: 12854
}




const OverViewProducts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" >

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <FaDollarSign />
                    Total Sales</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <FaDollarSign />
                    {overViewList.totalSales}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <TbUsers />

                    Total Client</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <TbUsers />
                    {overViewList.totalClients}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                    <GiShoppingBag />

                    Total Products</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <GiShoppingBag />
                    {overViewList.totalProducts}</p>
            </div>

            <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
                <span className="text-sm text-gray-400 flex items-center gap-2 ">
                  <RiExchangeFundsLine />
                    Total Stocks</span>
                <p className="text-3xl text-white font-semibold flex items-center gap-2">
                    <RiExchangeFundsLine />
                    {overViewList.Stocks}</p>
            </div>
        </div>
    )
}

export default OverViewProducts