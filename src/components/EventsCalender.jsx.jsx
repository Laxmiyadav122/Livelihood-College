import { useState } from "react";
import Calendar from "./Calendar";
import EventsList from "./EventsList";

function EventsCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const events = {
    "10-10-2025": ["Team Meeting", "Project Deadline"],
    "15-10-2025": ["Birthday Party"],
    "20-10-2025": ["Webinar"],
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12" style={{fontFamily:"georgia, serif"}}>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900 tracking-wide">
          Events Calendar
        </h1>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevMonth}
            className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300"
          >
            Prev
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button
            onClick={handleNextMonth}
            className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300"
          >
            Next
          </button>
        </div>

   
        <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
          <Calendar
            currentYear={currentYear}
            currentMonth={currentMonth}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
        </div>


        <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
          <EventsList
            selectedDay={selectedDay}
            currentMonth={currentMonth}
            currentYear={currentYear}
            events={events}
          />
        </div>
      </div>
    </div>
  );
}

export default EventsCalendar;
