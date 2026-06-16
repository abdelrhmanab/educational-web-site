'use client'

import React, { ChangeEvent, useMemo, useState } from 'react'
import { clients as clientsData } from '@/data/clients'
import { IoSearch } from 'react-icons/io5'
import ClientsTableBody from './ClientsTableBody'

const ClientsTable = () => {
  const [searchValue, setSearchValue] = useState('')
  const [clients, setClients] = useState(clientsData)

  const filteredClients = useMemo(() => {
    const value = searchValue.toLowerCase()

    return clients.filter(
      (client) =>
        client.name.toLowerCase().includes(value) ||
        client.email.toLowerCase().includes(value) ||
        client.country.toLowerCase().includes(value)
    )
  }, [clients, searchValue])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="w-full flex flex-col p-5 gap-5 bg-[#1e1e1e]">

      <div className="flex items-center justify-between text-slate-200">
        <h5 className="text-xl font-semibold">Clients List</h5>

        <div className="relative">
          <span className="absolute left-2 top-2 text-xl border-r pr-1">
            <IoSearch />
          </span>

          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search Clients..."
            className="outline-none bg-slate-600/30 rounded-2xl pl-10 py-2"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl p-4">
        <table className="w-full border-collapse">

          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th className="px-4 py-4 text-left">Client</th>
              <th className="px-4 py-4 text-left">Email</th>
              <th className="px-4 py-4 text-left">Phone</th>
              <th className="px-4 py-4 text-left">Country</th>
              <th className="px-4 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <ClientsTableBody
            clients={filteredClients}
            setClients={setClients}
          />

        </table>
      </div>

    </div>
  )
}

export default ClientsTable