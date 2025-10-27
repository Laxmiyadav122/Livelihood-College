import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const schemes = [
  { logoUrl: 'https://sarkariyojana.com/wp-content/uploads/2023/12/mahtari-vandan-yojana.png', alt: 'Mahtari Vandan Yojana' },
  { logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysqeJKsh7niXumjsm2t9HmkZgIs2-Kn8yaw&s', alt: 'Scheme 2' },
  { logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpL68wU1YGCaYQv5-l70fZlQXf9otEBXvTg&s', alt: 'Scheme 3' },
  { logoUrl: 'https://dayn.vercel.app/ESP.png', alt: 'Scheme 4' },
  { logoUrl: 'https://dayn.vercel.app/CBT.png', alt: 'Scheme 5' },
  { logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDphwzNBmouWsruLtmOKcfBD6fXkxLTV_ew&s', alt: 'Scheme 6' },
  { logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOwWndREuo0UcNcpXy-ayrgwcyPG67Ou-Tw&s', alt: 'Scheme 7' },
];

const EventsList = ({
  selectedDay = new Date().getDate(),      
  currentMonth = new Date().getMonth(),     
  currentYear = new Date().getFullYear(),  
  events = {},                             
}) => {

  const formatDate = (day) => `${day}-${currentMonth + 1}-${currentYear}`;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12" style={{ fontFamily: "georgia, serif" }}>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900 tracking-wide">
          Events
        </h1>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Events on {selectedDay}-{currentMonth + 1}-{currentYear}
          </h3>
          <ul className="list-disc list-inside">
            {events[formatDate(selectedDay)] ? (
              events[formatDate(selectedDay)].map((event, idx) => (
                <li key={idx} className="p-1">{event}</li>
              ))
            ) : (
              <li className="text-gray-500">No events</li>
            )}
          </ul>
        </div>
        <div className="py-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Schemes</h2>
          <Slider {...settings}>
            {schemes.map((scheme, index) => (
              <div key={index} className="px-4 m-4"> 
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center 
                                overflow-hidden mx-auto 
                                w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                  <img
                    src={scheme.logoUrl}
                    alt={scheme.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
