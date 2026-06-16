'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const data = [
  {
    product: 'Smartphone',
    retention: 5200,
    revenue: 3100,
    profit: 2800,
  },
  {
    product: 'Laptop',
    retention: 4300,
    revenue: 2700,
    profit: 3400,
  },
  {
    product: 'Coffee Table',
    retention: 3100,
    revenue: 6900,
    profit: 4100,
  },
  {
    product: 'Mouse',
    retention: 2500,
    revenue: 4200,
    profit: 2700,
  },
  {
    product: 'Running Shoes',
    retention: 2000,
    revenue: 9000,
    profit: 2900,
  },
]

const ProductPerformance = () => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-2xl h-100">

      <h2 className="text-xl font-bold mb-5">
        Product Performance
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        
        <BarChart data={data}>

          <CartesianGrid
            stroke="#374151"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="product"
            stroke="#9ca3af"
          />

          <YAxis stroke="#9ca3af" />

          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #4b5563',
              borderRadius: '10px',
            }}
          />

          <Legend />

          <Bar
            dataKey="retention"
            fill="#ff7043"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="revenue"
            fill="#29b6f6"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="profit"
            fill="#66bb6a"
            radius={[4, 4, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}

export default ProductPerformance