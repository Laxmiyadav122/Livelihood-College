import React from "react";

const newsData = [
  {
    id: 1,
    title: "Skill Development Workshop in Tailoring",
    date: "2025-10-01",
    summary:
      "Our tailoring workshop trained 50 women and youth in basic stitching and designing techniques. Participants created their own garments and gained confidence in starting small businesses.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    link: "https://tailwindcss.com/docs/box-shadow",
  },
  {
    id: 2,
    title: "Cooking & Food Preparation Training Completed",
    date: "2025-09-20",
    summary:
      "Participants learned basic and advanced cooking techniques, menu planning, and food hygiene practices. Many participants are now running small catering services.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    link: "https://tailwindcss.com/docs/box-shadow",
  },
  {
    id: 3,
    title: "Digital Literacy and Data Entry Course Success",
    date: "2025-09-15",
    summary:
      "Youth learned computer basics, MS Office, and data entry skills, helping them secure entry-level office jobs and internships in local businesses.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    link: "https://tailwindcss.com/docs/box-shadow",
  },
];

function News() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-[Georgia,serif]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">
        News & Updates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <p className="text-sm text-gray-500 mb-2">{news.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {news.title}
              </h2>
              <p className="text-gray-700 flex-1">{news.summary}</p>
              <a
                href={news.link}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;