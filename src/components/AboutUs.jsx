import { useRef } from "react";
import Overview from "./Overview";
import Vision from "./Vision";
import GovernmentStaff from "./GovernmentStaff";
import NavgurukulStaff from "./NavgurukulStudents";
function AboutUs() {
    const overviewRef = useRef(null);
    const visionRef = useRef(null);
    const governmentStaffRef = useRef(null);
    const navgurukulStaffRef = useRef(null);

    function scrollTo(ref) {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="container mx-auto p-8 bg-gray-50 text-gray-800" style={{fontFamily:"georgia, serif"}}>
            <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-900 tracking-wide">
                About Us - Livelihood College
            </h1>


            <div className="flex flex-wrap justify-center gap-4 mb-8" >
                <button
                    onClick={() => scrollTo(overviewRef)}
                    className="bg-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                > 
                    Overview
                </button>
                <button
                    onClick={() => scrollTo(visionRef)}
                    className="bg-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                >
                    Vision
                </button>
                <button
                    onClick={() => scrollTo(governmentStaffRef)}
                    className="bg-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                >
                    Government Staff
                </button>

                <button onClick={() => scrollTo(navgurukulStaffRef)} className="bg-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition duration-300">
                    NavGurukul Staff
                </button>
            </div>

            <div
                ref={overviewRef}
                className="m-8 bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
            >
                <Overview />
            </div>

            <div
                ref={visionRef}
                className="m-8 bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
            >
                <Vision />
            </div>

            <div
                ref={governmentStaffRef}
                className="m-8 bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
            >
                <GovernmentStaff />
            </div>

             <div
                ref={navgurukulStaffRef}
                className="m-8 bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
            >
                <NavgurukulStaff />
            </div>

        </div>
    );
}

export default AboutUs;
