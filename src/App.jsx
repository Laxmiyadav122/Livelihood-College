import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Addmission from "./components/Admissions";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Course from "./components/Course";
import StudentStories from "./components/StudentStories";
import Calendar from "./components/Calendar";
import EventsCalendar from "./components/EventsCalender.jsx";
import EventsList from "./components/EventsList";

function App() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/course" element={<Course />} />
        <Route path="/admissions" element={<Addmission />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/studentStories" element={<StudentStories />} />
        <Route path="/eventcalender" element={<EventsCalendar />} />
        <Route
          path="/calendar"
          element={
            <Calendar
              currentYear={currentYear}
              currentMonth={currentMonth}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
            />
          }
        />
        <Route path="/eventslist" element={<EventsList />} />
      </Routes>
    </>
  );
}

export default App;
