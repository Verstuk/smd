"use client";
import React from 'react';
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Девушки",
    count: 50,
    fill: "#fae27c",
  },
  {
    name: "Юноши",
    count: 50,
    fill: "#c3ebfa",
  },
  
];


const CountCharts = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Студенты</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} className=""/>
      </div>
      {/* CHARTS */}
      <div className="relative w-fill h-[80%]">
      <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
            <div className="h-5 w-5 bg-lamaSky rounded-full"/>
            <h1 className="text-lg font-semibold">1,234</h1>
            <h2 className="text-sm font-medium text-gray-600">Юноши (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
            <div className="h-5 w-5 bg-lamaYellow rounded-full"/>
            <h1 className="text-lg font-semibold">1,123</h1>
            <h2 className="text-sm font-medium text-gray-600">Девушки (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountCharts;
