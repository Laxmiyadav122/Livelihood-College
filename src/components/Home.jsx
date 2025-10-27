import React, { useState, useEffect } from "react"; 
import livelihood1 from "../assets/video/livelihood1.mp4" 
import livelihood2 from "../assets/video/livelihood2.mp4" 
import livelihood3 from "../assets/video/livelihood3.mp4" 
import livelihood4 from "../assets/video/livelihood4.mp4"

function FullPageVideoSlideshow() {
  const videos = [livelihood1, livelihood2, livelihood3, livelihood4];

  const text =
    "© 2025 Livelihood College. All rights reserved. हमारा उद्देश्य ग्रामीण युवाओं को कौशल विकास के माध्यम से रोजगार के योग्य बनाना है.";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setFade(true);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="w-screen h-screen flex flex-col font-sans m-0 p-0">
      <div className="relative w-full flex-1 overflow-hidden">
        <video
          key={currentIndex}
          src={videos[currentIndex]}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <footer className="w-full bg-gray-800 text-white py-4 flex items-center overflow-hidden">
        <div className="flex animate-marquee-text whitespace-nowrap text-base md:text-xl font-semibold">
          <span className="mr-16">{text}</span>
          <span className="mr-16">{text}</span>
        </div>

        <style>{`
          @keyframes marquee-text {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-text {
            display: flex;
            animation: marquee-text 25s linear infinite;
          }
        `}</style>
      </footer>
    </div>
  );
}
export default FullPageVideoSlideshow;