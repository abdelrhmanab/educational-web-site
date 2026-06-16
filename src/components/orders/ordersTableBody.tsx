'use client'

import React from 'react'
import { Order } from '@/data/orders'
import { FaSave } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'

interface Props {
    orders: Order[]
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>
}

const OrdersTableBody = ({
    orders,
    setOrders,
}: Props) => {





    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Delivered':
                return 'bg-green-500/20 text-green-400'

            case 'Pending':
                return 'bg-yellow-500/20 text-yellow-400'

            case 'Canceled':
                return 'bg-red-500/20 text-red-400'

            default:
                return 'bg-gray-500/20 text-gray-400'
        }
    }

    return (
        <tbody className="divide-y divide-gray-800">

            {orders.map((order) => (
                <tr
                    key={order.id}
                    className={'bg-[#2a2a2a]'} >

                    <td className="px-4 py-4">
                        {order.orderId}
                    </td>

                    <td className="px-4 py-4">
                        {order.client}
                    </td>

                    <td className="px-4 py-4">
                        ${order.total}
                    </td>

                    <td className="px-4 py-4">

                        <span
                            className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}
                        >
                            {order.status}
                        </span>


                    </td>

                    <td className="px-4 py-4">
                        {order.date}
                    </td>

                    <td className="px-4 py-4">
                        {order.country}
                    </td>

                    <td className="px-4 flex items-center gap-2">


                        <button

                            className="text-blue-500"
                        >
                            <FaPenToSquare />
                        </button>


                        <button

                            className="text-red-500"
                        >
                            <RiDeleteBinLine />
                        </button>

                    </td>

                </tr>
            ))}

        </tbody>
    )
}

export default OrdersTableBody