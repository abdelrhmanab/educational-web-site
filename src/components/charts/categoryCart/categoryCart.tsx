'use client'

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts'

const data = [
    { name: 'Smartphones', value: 30 },
    { name: 'Laptops', value: 25 },
    { name: 'Furniture', value: 18 },
    { name: 'Beauty', value: 15 },
    { name: 'Gaming', value: 13 },
]

const COLORS = [
    '#FF6B6B',
    '#4D96FF',
    '#FFD166',
    '#06D6A0',
    '#A29BFE',
]

const CategoryCart = () => {

    return (
        <div className="bg-[#1e1e1e] p-5 rounded-2xl h-100">
            <h2 className="text-xl mb-5 font-bold">
                Category Distribution
            </h2>
            <ResponsiveContainer width={'100%'} height={'90%'}>

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label        
                    >
                        {
                            data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))
                        }
                    </Pie>

                    <Tooltip contentStyle={{
                        backgroundColor: "#333",
                        border: "none",
                        borderRadius: "10px"
                    }} />

                    <Legend
                        verticalAlign="bottom"
                        align="center"
                    />

                </PieChart>

            </ResponsiveContainer>
        </div>
    )
}

export default CategoryCart