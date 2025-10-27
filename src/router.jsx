import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Course from "./components/Course";
import Addmission from "./components/Admissions";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import News from "./components/News";
import StudentStories from "./components/StudentStories";
import EventsCalendar from "./components/EventsCalender.jsx";
import EventsList from "./components/EventsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/admissions",
    element: <Addmission />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/studentStories",
    element: <StudentStories />,
  },
  {
    path: "/eventcalender",
    element: <EventsCalendar />,
  },
  {
    path: "/eventslist",
    element: <EventsList />,
  },
]);

export default router;
