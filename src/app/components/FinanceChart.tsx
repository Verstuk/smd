"use client";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Январь',
    "Доход": 4000,
    "Расход": 2400,
  },
  {
    name: 'Февраль',
    "Доход": 3000,
    "Расход": 1398,
  },
  {
    name: 'Март',
    "Доход": 2000,
    "Расход": 9800,
  },
  {
    name: 'Апрель',
    "Доход": 2780,
    "Расход": 3908,
  },
  {
    name: 'Май',
    "Доход": 1890,
    "Расход": 4800,
  },
  {
    name: 'Июнь',
    "Доход": 2390,
    "Расход": 3800,
  },
  {
    name: 'Июль',
    "Доход": 3490,
    "Расход": 4300,
  },
  {
    name: 'Август',
    "Доход": 3490,
    "Расход": 4300,
  },
  {
    name: 'Сентябрь',
    "Доход": 3490,
    "Расход": 4300,
  },
  {
    name: 'Октябрь',
    "Доход": 3490,
    "Расход": 4300,
  },
  {
    name: 'Ноябрь',
    "Доход": 3490,
    "Расход": 4300,
  },
  {
    name: 'Декабрь',
    "Доход": 3490,
    "Расход": 4300,
  },
];

const FinanceChart = () => {
    return ( 
        <div className="bg-white rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Финансы</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} className=""/>
        </div>
        {/* CHARTS */}
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend align='center' verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}} />
          <Line type="monotone" dataKey="Доход" stroke="green" strokeWidth={3} />
          <Line type="monotone" dataKey="Расход" stroke="red" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>

        </div>
     );
}
 
export default FinanceChart;