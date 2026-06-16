'use client'

import { orders as ordersData } from '@/data/orders'
import { IoSearch } from 'react-icons/io5'
import { ChangeEvent, useMemo, useState } from 'react'
import OrdersTableBody from './ordersTableBody';


const OrdersTable = () => {
  const [searchValue, setSearchValue] = useState('')
  const [orders, setOrders] = useState(ordersData)

  const filteredOrders = useMemo(() => {
    const value = searchValue.toLowerCase()

    return orders.filter(
      (order) =>
        order.orderId.toLowerCase().includes(value) ||
        order.client.toLowerCase().includes(value) ||
        order.country.toLowerCase().includes(value)
    )
  }, [orders, searchValue])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="w-full flex flex-col p-5 gap-5 bg-[#1e1e1e]">

      <div className="flex items-center justify-between text-slate-200">
        <h5 className="text-xl font-semibold">Orders List</h5>

        <div className="relative">
          <span className="absolute left-2 top-2 text-xl border-r pr-1">
            <IoSearch />
          </span>

          <input
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search Orders..."
            className="outline-none bg-slate-600/30 rounded-2xl pl-10 py-2"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl p-4">
        <table className="w-full border-collapse">

          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="px-4 py-4 text-left">Order ID</th>
              <th className="px-4 py-4 text-left">Client</th>
              <th className="px-4 py-4 text-left">Total</th>
              <th className="px-4 py-4 text-left">Status</th>
              <th className="px-4 py-4 text-left">Date</th>
              <th className="px-4 py-4 text-left">Country</th>
              <th className="px-4 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <OrdersTableBody
            orders={filteredOrders}
            setOrders={setOrders}
          />

        </table>
      </div>

    </div>
  )
}

export default OrdersTable