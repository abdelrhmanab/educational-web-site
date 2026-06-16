import {
  MdOutlineVerified,
  MdPendingActions,
  MdCancel,
} from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";

const overViewOrders = {
  totalOrders: 15240,
  completedOrders: 13500,
  pendingOrders: 1120,
  canceledOrders: 620,
};

const OverViewOrders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

      <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <BsCartCheck />
          Total Orders
        </span>

        <p className="text-3xl text-white font-semibold flex items-center gap-2">
          <BsCartCheck />
          {overViewOrders.totalOrders}
        </p>
      </div>

      <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <MdOutlineVerified />
          Completed Orders
        </span>

        <p className="text-3xl text-green-500 font-semibold flex items-center gap-2">
          <MdOutlineVerified />
          {overViewOrders.completedOrders}
        </p>
      </div>

      <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <MdPendingActions />
          Pending Orders
        </span>

        <p className="text-3xl text-yellow-500 font-semibold flex items-center gap-2">
          <MdPendingActions />
          {overViewOrders.pendingOrders}
        </p>
      </div>

      <div className="p-4 flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <MdCancel />
          Canceled Orders
        </span>

        <p className="text-3xl text-red-500 font-semibold flex items-center gap-2">
          <MdCancel />
          {overViewOrders.canceledOrders}
        </p>
      </div>

    </div>
  );
};

export default OverViewOrders;