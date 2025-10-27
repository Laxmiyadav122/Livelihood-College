import React from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const calendar = [];
  let week = Array(firstDay).fill(null);

  for (let day = 1; day <= lastDate; day++) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    calendar.push(week);
  }
  return calendar;
}

function Calendar({ currentYear, currentMonth, selectedDay, onSelectDay }) {
  const calendar = generateCalendar(currentYear, currentMonth);

  return (
    <div className="overflow-x-auto" style={{fontFamily:"georgia, serif"}}>
      <div className="grid grid-cols-7 gap-2 text-center mt-4 min-w-[300px]">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="font-semibold text-gray-700 uppercase text-sm sm:text-base"
          >
            {day}
          </div>
        ))}
        {calendar.map((week, i) =>
          week.map((day, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => day && onSelectDay(day)}
              className={`p-3 sm:p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-center text-sm sm:text-base ${
                day === selectedDay
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              } ${!day ? "bg-gray-100 text-gray-400 cursor-default" : ""}`}
            >
              {day || ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Calendar;

