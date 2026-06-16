'use client'

import React from 'react'
import Image from 'next/image'
import { Client } from '@/data/clients'
import { FaSave } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'

interface Props {
  clients: Client[]
  setClients: React.Dispatch<React.SetStateAction<Client[]>>
}

const ClientsTableBody = ({
  clients,
  setClients,
}: Props) => {

  const [editingRow, setEditingRow] =
    React.useState<number | null>(null)

  const handleEdit = (id: number) => {
    setEditingRow(id)
  }

  const handleSave = () => {
    setEditingRow(null)
  }

  const handleDelete = (id: number) => {
    setClients((prev) =>
      prev.filter((client) => client.id !== id)
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { name, value } = e.target

    setClients((prev) =>
      prev.map((client) =>
        client.id === id
          ? { ...client, [name]: value }
          : client
      )
    )
  }

  return (
    <tbody className="divide-y divide-gray-800">

      {clients.map((client) => (
        <tr
          key={client.id}
          className={
            editingRow === client.id
              ? 'bg-[#2a2a2a]'
              : ''
          }
        >
          <td className="px-4 py-4">
            <div className="flex items-center gap-3">
              <Image
                src={client.image}
                alt={client.name}
                width={40}
                height={40}
                className="rounded-full"
              />

              <span>{client.name}</span>
            </div>
          </td>

          <td className="px-4 py-4">
            <input
              name="email"
              value={client.email}
              disabled={editingRow !== client.id}
              onChange={(e) =>
                handleChange(e, client.id)
              }
              className="bg-transparent outline-none"
            />
          </td>

          <td className="px-4 py-4">
            <input
              name="phone"
              value={client.phone}
              disabled={editingRow !== client.id}
              onChange={(e) =>
                handleChange(e, client.id)
              }
              className="bg-transparent outline-none"
            />
          </td>

          <td className="px-4 py-4">
            <input
              name="country"
              value={client.country}
              disabled={editingRow !== client.id}
              onChange={(e) =>
                handleChange(e, client.id)
              }
              className="bg-transparent outline-none"
            />
          </td>

          <td className="px-4 flex gap-2">

            {editingRow === client.id ? (
              <button
                onClick={handleSave}
                className="text-blue-500"
              >
                <FaSave />
              </button>
            ) : (
              <button
                onClick={() => handleEdit(client.id)}
                className="text-blue-500"
              >
                <FaPenToSquare />
              </button>
            )}

            <button
              onClick={() => handleDelete(client.id)}
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

export default ClientsTableBody