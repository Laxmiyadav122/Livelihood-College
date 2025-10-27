import React, { useState } from "react";

function Course() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const coursesData = [
    {
      name: "Stitching & Tailoring (Silai)",
      duration: "3 months",
      objective:
        "Train participants in basic stitching and tailoring skills to create garments independently.",
      content: [
        "Basic hand stitching",
        "Cutting techniques",
        "Designing garments",
        "Finishing techniques",
      ],
      tools: ["Sewing machine", "Scissors", "Threads", "Measuring tape"],
      careerOpportunities:
        "Boutiques, garment factories, or start own tailoring business",
      targetGroup: "Women and youth",
      image:
        "https://www.ushafoundation.in/images/FashionInstitute/whytailoring/tailoringclasses.webp",
      trainer: {
        name: "Ms. Priya Sharma",
        experience: "5 years in fashion & tailoring",
      },
    },
    {
      name: "Cooking & Food Preparation",
      duration: "2 months",
      objective:
        "Learn basic cooking techniques, food hygiene, and menu preparation for personal or professional use.",
      content: [
        "Basic recipes",
        "Food hygiene",
        "Menu planning",
        "Simple desserts",
        "Cooking techniques",
      ],
      tools: ["Kitchen utensils", "Stove", "Cookware", "Measuring tools"],
      careerOpportunities: "Catering, home chef, small food business",
      targetGroup: "Anyone interested in cooking",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&w=800",
      trainer: {
        name: "Chef Rohan Mehta",
        experience: "7 years as professional chef",
      },
    },
    {
      name: "Data Entry & Computer Basics",
      duration: "1.5 months",
      objective:
        "Equip learners with basic computer literacy and data entry skills for office environments.",
      content: [
        "MS Office basics",
        "Typing skills",
        "Data entry techniques",
        "Internet usage",
        "Email communication",
      ],
      tools: ["Computer/Laptop", "Keyboard", "MS Office", "Internet access"],
      careerOpportunities:
        "Clerical jobs, data entry jobs, administrative assistant roles",
      targetGroup: "Youth and office job seekers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcwr2JgjtkUhbP7yXNqxEIAZvWF4wOE0mKBuUMpXE55WKI07fH7N44_WT67N1fRvyzOM&usqp=CAU",
      trainer: {
        name: "Mr. Amit Verma",
        experience: "4 years in IT training & administration",
      },
    },
    {
      name: "Welding (Fabrication Skills)",
      duration: "3 months",
      objective:
        "Provide hands-on training in welding and fabrication for industrial and mechanical applications.",
      content: [
        "Welding techniques",
        "Metal cutting",
        "Safety procedures",
        "Fabrication projects",
        "Equipment maintenance",
      ],
      tools: ["Welding machine", "Protective gear", "Metal sheets", "Grinders"],
      careerOpportunities:
        "Fabrication workshops, construction, repair services",
      targetGroup: "Youth and adults interested in technical skills",
      image:
        "https://www.pdmetals.com/wp-content/uploads/2024/01/What-Skills-Do-You-Need-in-Metal-Fabrication_c.jpg",
      trainer: {
        name: "Mr. Sanjay Kumar",
        experience: "6 years in welding and metalwork",
      },
    },
    {
      name: "Retail Management & Customer Service",
      duration: "2 months",
      objective:
        "Train learners in basic retail operations, inventory management, and customer handling.",
      content: [
        "Customer service skills",
        "Sales techniques",
        "Inventory management",
        "Billing procedures",
        "Store operations",
      ],
      tools: [
        "Point of Sale (POS) system",
        "Cash register",
        "Inventory software",
        "Basic office tools",
      ],
      careerOpportunities: "Retail stores, supermarkets, sales executive roles",
      targetGroup: "Anyone aiming for retail or sales career",
      image:
        "https://images.ctfassets.net/pdf29us7flmy/6FpDD32jPfcKnqlddO5MPR/c41b9afd60ddd24cc70e78192cde43e0/retail_mgr_GettyImages-697536005_.jpg?w=720&q=100&fm=jpg",
      trainer: {
        name: "Ms. Neha Singh",
        experience: "5 years in retail & customer service",
      },
    },
    {
      name: "Beauty & Parlour Skills",
      duration: "2 months",
      objective:
        "Train participants in basic beauty and parlour skills for personal grooming and professional services.",
      content: [
        "Basic skincare",
        "Hair styling techniques",
        "Makeup application",
        "Nail care",
        "Salon hygiene",
      ],
      tools: [
        "Makeup kit",
        "Hair dryer",
        "Combs & brushes",
        "Nail tools",
        "Towels & aprons",
      ],
      careerOpportunities:
        "Beauty salons, freelance makeup artist, spa services",
      targetGroup: "Women and youth interested in beauty & grooming",
      image: "https://www.salonskill.com/images/gallery/blogs-2.webp",
      trainer: {
        name: "Add Trainer Name",
        experience: "Add Experience",
      },
    },
  ];

  return (
    <div
      className="container mx-auto p-6 bg-gray-100 min-h-screen relative"
      style={{ fontFamily: "Georgia, serif" }}
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Choose Your Courses
      </h1>
      {openIndex !== null && (
        <div
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`bg-white shadow-md rounded-xl overflow-hidden transform transition-all duration-300 ${
                isOpen
                  ? "fixed top-1/2 left-1/2 w-11/12 max-w-lg -translate-x-1/2 -translate-y-1/2 z-50 scale-105"
                  : openIndex !== null
                  ? "opacity-90 scale-95 pointer-events-none"
                  : "hover:scale-105 hover:shadow-lg"
              }`}
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {course.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {course.objective}
                </p>

                <button
                  onClick={() => handleToggle(index)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  {isOpen ? "Hide Details" : "View More"}
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-gray-700 space-y-2">
                    <p>
                      <span className="font-semibold">Duration:</span>{" "}
                      {course.duration}
                    </p>
                    <div>
                      <span className="font-semibold">Content:</span>
                      <ul className="list-disc list-inside">
                        {course.content.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      <span className="font-semibold">Tools:</span>{" "}
                      {course.tools.join(", ")}
                    </p>
                    <p>
                      <span className="font-semibold">Trainer:</span>{" "}
                      {course.trainer.name} ({course.trainer.experience})
                    </p>
                    <p>
                      <span className="font-semibold">
                        Career Opportunities:
                      </span>{" "}
                      {course.careerOpportunities}
                    </p>
                    <p>
                      <span className="font-semibold">Target Group:</span>{" "}
                      {course.targetGroup}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Course;