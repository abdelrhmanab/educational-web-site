'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    month: 'Jan',
    sales: 4000,
  },
  {
    month: 'Feb',
    sales: 3000,
  },
  {
    month: 'Mar',
    sales: 5000,
  },
  {
    month: 'Apr',
    sales: 4780,
  },
  {
    month: 'May',
    sales: 5890,
  },
  {
    month: 'Jun',
    sales: 6390,
  }, 
]

const SalesChart = () => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-2xl h-100">
      <h2 className="text-xl mb-5 font-bold">
       Sales Overview
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid stroke="#333" />

          <XAxis dataKey="month" />

          <YAxis />

         <Tooltip
  contentStyle={{
    backgroundColor: "#1e1e1e",
    border: "1px solid #333",
    borderRadius: "10px",
  }}
/>
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8200da"
            
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart