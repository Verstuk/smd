"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMRORARY

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "12:00 - 13:00",
    description: "Event 1 description",
  },
  {
    id: 2,
    title: "Event 2",
    time: "12:00 - 13:00",
    description: "Event 2 description",
  },
  {
    id: 3,
    title: "Event 3",
    time: "12:00 - 13:00",
    description: "Event 3 description",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">

      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between pt-5">
        <h1 className="text-2xl font-semibold">События</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} className="" />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div key={event.id} className="rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
            <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p className="text-xs text-gray-600">{event.time}</p>
            </div>
            
            <p className="text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
