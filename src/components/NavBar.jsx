// import React from "react";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <div className="w-screen overflow-hidden relative font-sans m-0 p-0">
//       <style>{`
//         html, body, #root {
//           margin: 0;
//           padding: 0;
//           height: 100%;
//           width: 100%;
//         }
//       `}</style>
//       <nav className="bg-purple-700 text-white shadow-md fixed top-0 left-0 w-full z-50">
//         <div className="max-w-7xl mx-auto px-9">
//           <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center h-16 space-y-2 md:space-y-0 md:space-x-6 m-0 p-0">
//             <li>
//               <Link to="/" className="hover:text-yellow-300">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-yellow-300">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/course" className="hover:text-yellow-300">
//                 Course
//               </Link>
//             </li>
//             <li>
//               <Link to="/admissions" className="hover:text-yellow-300">
//                 Admissions
//               </Link>
//             </li>
//             <li>
//               <Link to="/faq" className="hover:text-yellow-300">
//                 Students Placements
//               </Link>
//             </li>
//             <li>
//               <Link to="/faq" className="hover:text-yellow-300">
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link to="/faq" className="hover:text-yellow-300">
//                Gallery
//               </Link>
//             </li>
//              <li>
//               <Link to="/faq" className="hover:text-yellow-300">
//                 News
//               </Link>
//             </li>
//             <li>
//               <Link to="/faq" className="hover:text-yellow-300">
//                 Contact
//               </Link>
//             </li>
//              <li>
//               <Link to="/faq" className="hover:text-yellow-300">
//                 FAQ
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <header className="text-center py-6 bg-blue-100 z-40 relative mt-16">
//         <h1 className="text-3xl font-bold text-blue-600 mb-2">
//           Welcome to Livelihood College
//         </h1>
//         <p className="text-gray-700 text-2xl md:text-3xl">
//           जिला परियोजना कौशल विकास महाविद्यालय
//         </p>
//       </header>
//     </div>
//   );
// }

// export default NavBar;





import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import livelihoodPhoto from "../assets/livelihoodLogo.png"

function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null); 
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-purple-700 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
      <img src={livelihoodPhoto} alt="Vision and Achievement - Livelihood College" className="w-13 h-12 object-contain rounded-xl shadow-md border border-gray-300 mb-1"/>       
       <div className="font-bold text-4xl">Livelihood College</div>

        <ul className="flex space-x-7 items-center font-bold">
          <li>
            <Link to="/" className="hover:text-yellow-300">Home</Link>
          </li>

          <li>
            <Link to="/aboutus" className="hover:text-yellow-300">About</Link>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("academics")}
              className="hover:text-yellow-300"
            >
              Academics ▼
            </button>

            {openDropdown === "academics" && (
              <ul className="absolute bg-white text-black mt-2 rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/course">Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/admissions">Admissions</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/studentStories" className="hover:text-yellow-300">Students Placements</Link>
          </li>

          <li>
            <Link to="/gallery" className="hover:text-yellow-300">Gallery</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => toggleDropdown("news")}
              className="hover:text-yellow-300"
            >
              News ▼
            </button>
            {openDropdown === "news" && (
              <ul className="absolute bg-white text-black mt-2 rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/news">News</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/eventcalender">Event Calendar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/eventslist">Event List</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/faq" className="hover:text-yellow-300">FAQ</Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
