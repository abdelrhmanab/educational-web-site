import Laptop from '../../public/images/products/laptop.webp'
import Phone from '../../public/images/products/phone.webp'
import Mouse from '../../public/images/products/mouse.webp'
import Shoes from '../../public/images/products/shoes.webp'
import Table from '../../public/images/products/table.webp'
import { TProduct } from '@/utils/types';



export const productsList:TProduct[] = [
  {
    id: 1,
    name: "Smartphone",
    image: Phone,
    productId: "#A7F3D67",
    category: "Electronics",
    price: 699.99,
    stock: 120,
    sales: 5200,
  },

  {
    id: 2,
    name: "Laptop",
    image: Laptop,
    productId: "#B6E4F24",
    category: "Electronics",
    price: 1299.99,
    stock: 75,
    sales: 4300,
  },

  {
    id: 3,
    name: "Coffee Table",
    image: Table,
    productId: "#C5D2A89",
    category: "Home",
    price: 249.99,
    stock: 95,
    sales: 3100,
  },

  {
    id: 4,
    name: "Mouse",
    image: Mouse,
    productId: "#D4B7C34",
    category: "Electronics",
    price: 49.99,
    stock: 180,
    sales: 2500,
  },

  {
    id: 5,
    name: "Running Shoes",
    image: Shoes,
    productId: "#E3A5623",
    category: "Sports",
    price: 119.99,
    stock: 200,
    sales: 2000,
  },
]


export const getProduct = (id: number)=>{
    return productsList.find(i => i.id == id)
}