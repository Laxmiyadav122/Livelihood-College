import React, { useState } from "react";

const faqs = [
  {
    question: "What is Livelihood College?",
    answer:
      "Livelihood College is an initiative to provide skill-based education and employment-oriented training to rural youth, helping them build sustainable careers."
  },
  {
    question: "Which courses are offered at Livelihood College?",
    answer:
      "Livelihood College offers courses in IT, Hospitality, Tailoring, Electrical, Beauty & Wellness, Driving, Agriculture, and many other sectors based on local needs."
  },
  {
    question: "Who can take admission in Livelihood College?",
    answer:
      "Any youth between the age of 18 to 35 years who is interested in skill training can apply. The admission is based on basic eligibility and interview."
  },
  {
    question: "Is there any fee for the training programs?",
    answer:
      "Most of the courses are free of cost or have minimal fees. The government supports these programs to make skill development accessible to all."
  },
  {
    question: "Does Livelihood College provide placement support?",
    answer:
      "Yes, after successful completion of the training, placement support is provided through campus drives and industry linkages with partner companies."
  },
  {
    question: "Is hostel facility available?",
    answer:
      "Yes, hostel facilities are available for both boys and girls depending on the course and location of the campus."
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can visit your nearest Livelihood College campus or apply online through the official website. The team will guide you through the process."
  },
  {
    question: "What are the training hours and duration of the courses?",
    answer:
      "The training schedule depends on the course. Generally, classes are held 5-6 days a week, and course duration ranges from 3 to 6 months."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 m-6" >
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-800 text-lg">
                {faq.question}
              </span>
              <span className="text-blue-600 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700 bg-gray-50 rounded-b-xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
