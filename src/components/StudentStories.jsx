
import React, { useState } from 'react';

import shivaniPhoto from '../assets/Shivani.png'; 
import nehaPhoto from '../assets/Neha.jpeg';
import sangeetaPhoto from '../assets/sangeeta.jpeg';
import saritaPhoto from '../assets/sarita.jpeg';
import dileshwariPhoto from '../assets/Dileshwari.jpeg';
import leelaPhoto from '../assets/Leela.jpeg';
import kajalPhoto from '../assets/kajal.jpeg';
import pratibhaPhoto from '../assets/pratibha.jpeg';
import neharikaPhoto from '../assets/Neharika.jpeg';
import vibhaPhoto from '../assets/Vibha.jpeg';
import shikhaPhoto from '../assets/shikha.jpeg';
import nishaPhoto from '../assets/Nisha.jpeg';
import poojaPhoto from '../assets/Pooja.jpeg';
import prernaPhoto from '../assets/Prerna.png';
import monikaPhoto from '../assets/Monika.jpeg';
import sumitaPhoto from '../assets/Sumita.jpeg';  


const studentStories = [
 
  {
    name: "Shivani Sahu",
    branch: "Software Development", 
    college: "Navgurukul",
    company: "SolarEra Green Renewable Pvt. Ltd",
    block: "Jashpur",
    salary: "2.1 LPA",
    photo: shivaniPhoto,
    linkedin_url: "https://www.linkedin.com/in/shivani-sahu-00615829a/",
    story: "Shivani overcame various challenges and dedicated herself to learning modern web development. Her commitment and problem-solving skills impressed SolarEra, landing her a great role in renewable energy software."
  },
  {
    name: "Neha Chouhan",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Umasree Texplast Pvt.Limited",
    block: "Duldula",
    salary: "2.1 LPA",
    photo: nehaPhoto,
    linkedin_url: "https://www.linkedin.com/in/neha-chouhan-00302a2bb/",
    story: "Neha's strong foundation in coding principles and her collaborative spirit made her a perfect fit for Umasree Texplast. She is excited to start her journey contributing to their IT team."
  },
  {
    name: "Sangeeta Yadav",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Umasree Texplast Pvt.Limited",
    block: "Pathagaon",
    salary: "2.1 LPA",
    photo: sangeetaPhoto,
    linkedin_url: "https://www.linkedin.com/in/sangeeta-yadav-b575a02bb/",
    story: "Sangeeta demonstrated exceptional talent in front-end technologies. Her passion for creating user-friendly interfaces was a key factor in her placement at Umasree Texplast alongside Neha."
  },
  {
    name: "Sarita Bai",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Lead Vision Trading Pvt.Limited",
    block: "Jashpur",
    salary: "2.1 LPA",
    photo: saritaPhoto,
    linkedin_url: "https://www.linkedin.com/in/sarita-bai-07a0812b2/",
    story: "Sarita's discipline and quick learning ability were recognized by Lead Vision Trading. She is now working on their internal software solutions, applying her skills daily."
  },
  
  {
    name: "Dilshwari Yadav",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Newly Interpreted",
    block: "Pathalgaon",
    salary: "2 LPA",
    photo: dileshwariPhoto,
    linkedin_url: "https://www.linkedin.com/in/dileshwari-yadav-b011242a8/",
    story: "Dilshwari's project portfolio showcasing diverse technical skills secured her position at Newly Interpreted. She specializes in building robust backend systems."
  },
  
  {
    name: "Leela Chouhan",
    branch: "Software Development",
    college: "Navgurukul",
    company: "AEONS Technology",
    block: "Farsabhar",
    salary: "6 LPA",
    photo: leelaPhoto,
    linkedin_url: "https://www.linkedin.com/in/leela-chouhan-636300291/",
    story: "Leela achieved an outstanding placement with a 6 LPA package at AEONS Technology, demonstrating the high value of her specialized training and commitment to excellence."
  },
  {
    name: "Kajal Singh",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Innovation Technologies",
    block: "Pathalgaon",
    salary: "2 LPA",
    photo: kajalPhoto,
    linkedin_url: "https://www.linkedin.com/in/kajal-singh-91b54931a/",
    story: "Kajal's enthusiasm for new technologies makes her a great asset to Innovation Technologies, where she is contributing to their flagship product development."
  },
  {
    name: "Pratibha Thapa",
    branch: "Software Development",
    college: "Navgurukul",
    company: "CloudThat ",
    block: "Jashpur",
    salary: "3 LPA",
    photo: pratibhaPhoto,
    linkedin_url: "https://www.linkedin.com/in/pratibha-thapa-490473298",
    story: "Pratibha's placement at CloudThat with a 3 LPA salary highlights her proficiency in cloud computing fundamentals, preparing her for a successful tech career."
  },

 
  {
    name: "Neharika Lakra",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Customer Relations Executive",
    block: "Sanna",
    salary: "2 LPA",
    photo: neharikaPhoto,
    linkedin_url: "https://www.linkedin.com/in/neharika-lakra-8715ba300/",
    story: "Neharika's excellent communication and management skills led her to a Customer Relations role, where she bridges the gap between technology and client needs."
  },
  {
    name: "Vibha Prajapati",
    branch: "Software Development",
    college: "Navgurukul",
    company: "DDSPLM Pvt. Limited",
    block: "Jashpur",
    salary: "2 LPA",
    photo: vibhaPhoto ,
    linkedin_url: "https://www.linkedin.com/in/vibha-prajapati-bab4552bb/",
    story: "Vibha's dedication to quality assurance and software testing ensures the reliability of products at DDSPLM Pvt. Limited."
  },
  {
    name: "Shikha Gupta",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Navgurukul",
    block: "Batouli",
    salary: "2 LPA",
    photo: shikhaPhoto,
    linkedin_url: "https://www.linkedin.com/in/shikha-gupta-8550082bb/",
    story: "Shikha's commitment to the mission led her to be placed at Navgurukul itself, where she now helps train the next batch of students."
  },

  {
    name: "Nisha Chouhan",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Navgurukul",
    block: "Farsabhar",
    salary: "3 LPA",
    photo: nishaPhoto,
    linkedin_url: "https://www.linkedin.com/in/nisha-chouhan-a488a52a7/",
    story: "Nisha, with her 3 LPA placement at Navgurukul, exemplifies the talent nurtured here, now empowering others through education."
  },
  {
    name: "Pooja Yadav",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Navgurukul",
    block: "Bagicha",
    salary: "2LPA",
    photo: poojaPhoto,
    linkedin_url: "https://www.linkedin.com/in/pooja-yadav23/",
    story: "Pooja's technical skills were immediately recognized, leading to a role within Navgurukul's internal IT and development team."
  },
  {
    name: "Prerna Sai",
    branch: "Software Development",
    college: "Navgurukul",
    company: "Navgurukul",
    block: "Manora",
    salary: "2 LPA", 
    photo: prernaPhoto,
    linkedin_url: "https://www.linkedin.com/in/prerna-sai-7880b0301/",
    story: "Prerna has taken on a role at Navgurukul, contributing her newly acquired software development expertise to the organization that trained her."
  },
  {
    name: "Monika Bai",
    branch: "Vocation/Skill", 
    college: "Navgurukul",
    company: "Vijay Jaisawal & CO.",
    block: "Kunkuri",
    salary: "60k",
    photo: monikaPhoto,
    linkedin_url: "https://www.linkedin.com/in/monika-bai-b90b78336/",
    story: "Monika's vocational skills were highly sought after, securing her placement in an accounting and finance role at Vijay Jaisawal & Co."
  },
 
  {
    name: "Sumita Bai",
    branch: "Vocation/Skill",
    college: "Navgurukul",
    company: "Vijay Jaisawal & CO.",
    block: "Bagicha",
    salary: "60k",
    photo: sumitaPhoto,
    linkedin_url: "https://www.linkedin.com/in/sumita-bai/",
    story: "Sumita excelled in her vocational training and is now applying her specialized skills in a professional setting at Vijay Jaisawal & Co."
  }
];


const StudentModal = ({ student, onClose }) => {
    if (!student) return null;

    const LinkedInIcon = () => (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.395-2.522 6-2.072 6 2.996v6.239z"/>
        </svg>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-opacity duration-300">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative transform scale-100 transition-transform duration-300">
                
           
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition duration-150"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="flex flex-col items-center text-center">
                    
                  
                    <div className="w-24 h-24 rounded-full border-4 border-indigo-100 ring-4 ring-indigo-500 overflow-hidden mb-4">
                        <img 
                            src={student.photo} 
                            alt={`Photo of ${student.name}`} 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    
                    <h2 className="text-3xl font-extrabold text-indigo-800">{student.name}</h2>
                    <p className="text-lg font-medium text-gray-600 mb-4">{student.branch} | {student.college}</p>

                    <div className="bg-indigo-50 p-4 rounded-lg w-full mb-4">
                        <p className="text-md text-gray-700">Placed at</p>
                        <p className="text-xl font-bold text-indigo-800">{student.company}</p>
                        <p className="text-2xl font-extrabold text-green-700 mt-1">{student.salary} <span className="text-sm font-normal text-gray-500">CTC</span></p>
                    </div>

                    <div className="text-left w-full mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 border-b pb-1">Success Story</h3>
                        <p className="text-gray-700 italic">
                            "{student.story || "No detailed story available yet, but their success is a testament to their hard work and dedication."}"
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">Block: <span className="font-semibold text-gray-700">{student.block}</span></p>
                    
                    {student.linkedin_url && (
                        <a 
                            href={student.linkedin_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 flex items-center space-x-2 text-md font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 p-2 px-4 rounded-full transition duration-150"
                        >
                            <LinkedInIcon />
                            <span>View Full Profile on LinkedIn</span>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
};


const StudentCard = ({ student, onClick }) => {

  const isHighSalary = student.salary.includes('6 LPA') || student.salary.includes('3 LPA');

  const LinkedInIcon = () => (
    <svg className="w-5 h-5 fill-current text-blue-700 hover:text-blue-900" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.395-2.522 6-2.072 6 2.996v6.239z"/>
    </svg>
  );

  return (
  
    <div 
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 p-6 border-t-4 border-indigo-600 cursor-pointer"
        onClick={() => onClick(student)}
    >
      
    
      <div className="flex flex-col items-center mb-4">
        
        
        <div className="w-20 h-20 rounded-full border-4 border-white ring-2 ring-indigo-500 overflow-hidden mb-3">
            <img 
                src={student.photo} 
                alt={`Photo of ${student.name}`} 
                className="w-full h-full object-cover" 
            />
        </div>
        
        <h3 className="text-xl font-extrabold text-gray-900 text-center">{student.name}</h3>
        <p className="text-sm font-medium text-indigo-600 text-center">{student.branch}</p>
      </div>

      <div className="space-y-3">
        <div className="bg-indigo-50 p-3 rounded-lg text-center">
          <p className="text-sm text-gray-700">Placed at</p>
          <p className="text-lg font-bold text-indigo-800">{student.company}</p>
        </div>

        <div className={`p-3 rounded-lg text-center ${isHighSalary ? 'bg-yellow-100' : 'bg-green-50'}`}>
          <p className="text-sm text-gray-700">CTC</p>
          <p className={`text-xl font-extrabold ${isHighSalary ? 'text-red-600' : 'text-green-700'}`}>
            {student.salary}
          </p>
        </div>
        
        <p className="text-sm text-gray-500 text-center">Block: <span className="font-semibold text-gray-700">{student.block}</span></p>
      </div>

      {student.linkedin_url && (
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-center">
          <a 
            href={student.linkedin_url} 
            target="_blank" 
            rel="noopener noreferrer" 

            onClick={(e) => e.stopPropagation()} 
            className="flex items-center space-x-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition duration-150"
          >
            <LinkedInIcon />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      )}

    </div>
  );
};


function StudentStories() {

  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleCardClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  return (

    <div 
      className="p-8 bg-gray-100 min-h-screen" 
      style={{ fontFamily: 'Georgia, serif' }}
    >
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-800">
            Student Placement Success Stories
        </h1>
        <p className="text-xl text-indigo-600 mt-2">
            District Project Livelihood College Jashpur / Navgurukul Placed Students
        </p>
      </header>

      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {studentStories.map((student, index) => (
          <StudentCard 
            key={index} 
            student={student} 
            onClick={handleCardClick} 
          />
        ))}
      </div>

      
      {selectedStudent && (
          <StudentModal 
            student={selectedStudent} 
            onClose={handleCloseModal} 
          />
      )}
    </div>
  );
}

export default StudentStories;