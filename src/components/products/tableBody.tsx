'use client'
import { TProduct } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaSave } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

interface Prop {
    products: TProduct[],
      setProducts: React.Dispatch<
      React.SetStateAction<TProduct[]>
    >
}


const TableBody = ({ products,setProducts }: Prop) => {

    const [editingRow, setEditingRow] = React.useState<number | null>(null)

    const handleEdit = (id: number) => {
        console.log(id);

        setEditingRow(id)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {

        const { name, value } = e.target

        setProducts((prev) =>

            prev.map((item) =>
                item.id === id
                    ? { ...item, [name]: value }
                    : item
            ))
    }


    const handleSave = (id: number) => {
        const updatedItem = products.find(i => i.id === id)
        console.log(updatedItem)
        setEditingRow(null)
    }

    const handleDelete = (id: number) => {
        const filteredProducts = products.filter(i => i.id !== id)
        setProducts(filteredProducts)
    }


    return (
        <tbody className="divide-y divide-gray-800">
            {products.map((item) => {
                return (

                    <tr key={item.id} className={` transition-all duration-300 ${item.id === editingRow ? "bg-[#2a2a2a]" : ""}`}>

                        <td className="">
                            <Link href={`/products/${item.id}`} className="px-4 py-4 flex gap-2 items-center">

                            <Image
                                src={item.image}

                                alt='laptop'
                                width={40}
                                height={40}
                                className='h-10 w-10 rounded-full'
                            />

                            <span>{item.name}</span>
                            </Link>
                        </td>

                        <td className="px-4 py-4">
                            {item.productId}
                        </td>

                        <td className="px-4 py-4">
                            {item.category}
                        </td>

                        <td className={`${item.id === editingRow ? "border" : ""} border-gray-400 whitespace-nowrap md:table-cell`}>
                            <input
                                name='price'
                                type="text"
                                className='w-24 px-4 py-5 flex items-center justify-center outline-none border-none'
                                value={item.price}
                                disabled={!(item.id == editingRow)}
                                onChange={(e) => handleChange(e, item.id)}
                            />

                        </td>

                        <td className={`${item.id === editingRow ? "border" : ""} border-gray-400 whitespace-nowrap md:table-cell`}>

                            {/* {item.stock} */}
                            <input
                                name='stock'
                                type="text"
                                className='w-24 px-4 py-5 flex items-center justify-center outline-none border-none'
                                value={item.stock}
                                disabled={!(item.id == editingRow)}
                                onChange={(e) => handleChange(e, item.id)}
                            />
                        </td>

                        <td className={`${item.id === editingRow ? "border" : ""} border-gray-400 whitespace-nowrap md:table-cell`}>

                            <input
                                name='sales'
                                type="text"
                                className='w-24 px-4 py-5 flex items-center justify-center outline-none border-none'
                                value={item.sales}
                                disabled={!(item.id == editingRow)}
                                onChange={(e) => handleChange(e, item.id)}
                            />
                        </td>

                        <td className="px-4 flex items-center  gap-1">

                            {editingRow === item.id ?
                                (<button
                                    onClick={() => handleSave(item.id)}
                                    className="text-blue-500 hover:text-blue-400 transition duration-200 px-2 py-2 rounded-lg text-lg">
                                    <FaSave />
                                </button>)
                                :
                                (<button
                                    onClick={() => handleEdit(item.id)}
                                    className="text-blue-500 hover:text-blue-400 transition duration-200 px-2 py-2 rounded-lg text-lg">
                                    <FaPenToSquare />
                                </button>
                                )}


                            <button
                                onClick={() => handleDelete(item.id)}
                                className="text-red-500 hover:text-red-300 transition duration-200 px-2 py-2 rounded-lg text-lg">
                                <RiDeleteBinLine />
                            </button>

                        </td>

                    </tr>

                )
            })}
        </tbody >

    )
}

export default TableBody