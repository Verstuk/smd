"use client";
 import Image from "next/image";
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Пн",
    "Присутствовало": 75,
    "Отсутствовало": 24,
  },
  {
    name: "Вт",
    "Присутствовало": 85,
    "Отсутствовало": 15,
  },
  {
    name: "Ср",
    "Присутствовало": 70,
    "Отсутствовало": 30,
  },
  {
    name: "Чт",
    "Присутствовало": 60,
    "Отсутствовало": 40,
  },
  {
    name: "Пт",
    "Присутствовало": 80,
    "Отсутствовало": 21,
  },
  {
    name: "Сб",
    "Присутствовало": 90,
    "Отсутствовало": 15,
  },
  {
    name: "Вс",
    "Присутствовало": 55,
    "Отсутствовало": 45,
  },
];

const AttendsanceChart = () => {
  return (
  <div className="bg-white rounded-xl w-full h-full p-4">
    <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Посещяемость</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
    </div>
    <ResponsiveContainer width="100%" height="100%" className="">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
          <XAxis dataKey="name" axisLine={false} tickLine={false}/>
          <YAxis axisLine={false} tickLine={false}/>
          <Tooltip />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}} />
          <Bar 
          dataKey="Присутствовало" 
          fill="green" 
          legendType="circle"
          radius={[10, 10, 0, 0]}
          />
          <Bar 
          dataKey="Отсутствовало" 
          fill="red" 
          legendType="circle" 
          radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
  </div>
  )
};

export default AttendsanceChart;
