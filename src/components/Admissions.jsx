
import React, { useState } from 'react';

const steps = [
  "Personal Details",
  "Contact Details",
  "Academic Details",
  "Course Details",
  "Documents Upload",
  "Declaration & Signature"
];
function Addmission() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    dateOfbirth: "",
    gender: "",
    fathersName: "",
    mothersName: "",
    parentContact: "",
    parentEmail: "",
    email: "",
    phone: "",
    address: ""
  });
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-4 ">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Father’s Name</label>
            <input
              type="text"
              placeholder="Enter father's name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Mother’s Name</label>
            <input
              type="text"
              placeholder="Enter mother's name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>
        </div>
      );
    }

    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Gender</label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Full Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>
        </div>
      );
    }


    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">
              Parent Contact Number
            </label>
            <input
              type="text"
              placeholder="Enter contact number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Last School / College Attended
            </label>
            <input
              type="text"
              placeholder="Enter school/college name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Marks / Percentage / CGPA
            </label>
            <input
              type="text"
              placeholder="Enter marks/percentage"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Year of Passing</label>
            <input
              type="text"
              placeholder="Enter year of passing"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
            />
          </div>
        </div>
      );
    }


    if (currentStep === 3) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">
              Course Applied For
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150">
              <option value="">Select Course</option>
              <option value="data-operator">Data Operator</option>
              <option value="sis">
                Security and Intelligence Services (SIS)
              </option>
              <option value="sewing">Sewing Course</option>
              <option value="programming">Programming</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-sm text-yellow-800 font-medium">
              Please upload clear copies of the following documents (PDF or Image).
            </p>
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Passport-size Photo
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Previous Marksheet / Certificates
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      );
    }


    if (currentStep === 4) {
      return (
        <div className="space-y-4">

          <div>
            <label className="block font-semibold mb-1">Identity Proof (Aadhaar/Passport/etc.)</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-sm text-green-800 font-medium">
              By proceeding, you declare that all information submitted is true and accurate.
            </p>
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Student Signature
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Parent Signature
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center space-x-3 mt-6">
            <input
              id="declaration-checkbox"
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400 accent-blue-600"
            />
            <label htmlFor="declaration-checkbox" className="text-gray-700 font-medium cursor-pointer">
              I agree to the declaration that all information is correct.
            </label>
          </div>
        </div>
      );
    }
    <div className="flex items-center space-x-3 mt-6">
      <input
        id="declaration-checkbox"
        type="checkbox"
        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400 accent-blue-600"
      />
      <label htmlFor="declaration-checkbox" className="text-gray-700 font-medium cursor-pointer">
        I agree to the declaration that all information is correct.
      </label>
    </div>

    return (
      <div className="text-center p-10 bg-green-100 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Application Complete!</h2>
        <p className="text-gray-600">Thank you for submitting your application. We will review your details shortly.</p>
      </div>
    );
  };


  return (

    <div
      className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 p-8 flex flex-col items-center"
      style={{ fontFamily: 'Georgia, serif' }}
    >

      <h1 className="text-center font-extrabold  mb-8 text-blue-800 tracking-wider text-4xl">
        Admission Form
      </h1>

      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-8">


        <div className="mb-8">
          <h3 className="text-center text-xl font-semibold text-gray-600 mb-4">Step {currentStep + 1} of {steps.length}: <span className="text-blue-700">{steps[currentStep]}</span></h3>
          <div className="flex justify-between items-center relative">

            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0 mx-4">
              <div
                className="h-1 bg-blue-500 transition-all duration-500 ease-in-out"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center z-10 w-1/12">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 
                            ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-400'} 
                            ${index === currentStep ? 'ring-4 ring-blue-300 scale-110' : ''}`}
                >
                  {index + 1}
                </div>

                <span className={`text-xs mt-2 text-center hidden sm:block ${index === currentStep ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>
                  {step.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 min-h-[300px]">
          <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-4 border-b-2 border-blue-100 pb-2">
            {steps[currentStep]}
          </h2>

          {renderStepContent()}
        </div>


        <div className="flex justify-between pt-6 border-t border-gray-200">

          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md 
                        ${currentStep === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg'}`}
          >
            &larr; Previous
          </button>


          <button
            onClick={currentStep === steps.length - 1 ? () => alert('Simulating Form Submission!') : nextStep}
            className="px-6 py-2 rounded-xl font-semibold transition-all duration-300  bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addmission;