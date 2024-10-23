"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "moment/locale/ru";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const messages = {
  // new
  allDay: "Весь день",
  previous: "предыдущий",
  next: "следующий",
  today: "сегодня",
  month: "месяц",
  week: "неделя",
  day: "день",
  agenda: "повестка дня",
  date: "дата",
  time: "время",
  event: "событие",
};

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      messages={messages}
      min={new Date(2024, 7, 1, 8, 0, 0)}
      max={new Date(2024, 7, 31, 20, 0, 0)}
    />
  );
};

export default BigCalendar;
