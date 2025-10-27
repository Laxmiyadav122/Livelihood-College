import React, { useState, useEffect, useRef } from "react";

const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=60",
    title: "Tailoring workshop",
    caption: "Practical tailoring session.",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=60",
    title: "Cooking demo",
    caption: "Hands-on recipe demonstration.",
  },
  {
    id: 3,
    type: "video",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    thumb:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=60",
    title: "Short demo video",
    caption: "Quick introduction video.",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=60",
    title: "Data entry training",
    caption: "Computer basics class.",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
    title: "Retail session",
    caption: "Customer service roleplay.",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
    title: "Retail session",
    caption: "Customer service roleplay.",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
    title: "Retail session",
    caption: "Customer service roleplay.",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
    title: "Retail session",
    caption: "Customer service roleplay.",
  },
  {
    id: 9,
    type: "image",
    src: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=60",
    title: "Retail session",
    caption: "Customer service roleplay.",
  },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, currentIndex]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    if (videoRef.current) videoRef.current.pause();
  };

  const closeLightbox = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % mediaItems.length);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + mediaItems.length) % mediaItems.length);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const current = mediaItems[currentIndex];

  return (
    <div className="p-6 max-w-7xl mx-auto font-[Georgia,serif]">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        From Learning to Earning — Our Skill Development Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {mediaItems.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative overflow-hidden rounded-lg shadow-md focus:outline-none"
            aria-label={`Open ${item.title}`}
          >
            <img
              src={item.thumb}
              alt={item.title}
              className="w-full h-36 object-cover transform group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm py-1 px-2">
              {item.title}
            </div>

            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/80 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 22V2l18 10-18 10z" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {isOpen && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          <div className="relative max-w-4xl w-full mx-auto">
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-20 bg-white/90 rounded-full p-2 shadow hover:bg-white focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow hover:bg-white focus:outline-none"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow hover:bg-white focus:outline-none"
              aria-label="Next"
            >
              ›
            </button>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              {current.type === "image" ? (
                <img
                  src={current.src}
                  alt={current.title}
                  className="w-full max-h-[70vh] object-contain bg-black"
                />
              ) : (
                <video
                  ref={videoRef}
                  controls
                  src={current.src}
                  className="w-full max-h-[70vh] bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="mt-3 bg-white/95 rounded-b-lg px-4 py-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {current.title}
                  </h3>
                  <p className="text-sm text-gray-600">{current.caption}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <a
                    href={current.src}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded shadow-sm"
                  >
                    Download
                  </a>
                  <a
                    href={current.src}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded shadow-sm"
                  >
                    Open
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-2 text-sm text-white/80">
              {currentIndex + 1} / {mediaItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
