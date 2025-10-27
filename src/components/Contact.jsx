import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const contactCards = [
    {
      emoji: "📍",
      title: "Address",
      color: "text-blue-900",
      text: "Skill Development Centre, Livelihood College, Jashpur, Chhattisgarh, 496331",
    },
    {
      emoji: "📞",
      title: "Phone",
      color: "text-amber-800",
      text: "+91 12345 67890\n+91 98765 43210",
    },
    {
      emoji: "✉️",
      title: "Email",
      color: "text-blue-900",
      text: "info@yourcollege.edu\nadmissions@college.edu",
    },
    {
      emoji: "⏰",
      title: "Office Hours",
      color: "text-amber-800",
      text: "Mon-Fri: 9:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12"
      style={{ fontFamily: "Georgia, serif" }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 text-center mb-3 p-10" >
        Get in Touch with Us
      </h1>

      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl gap-6">
        {contactCards.map((card, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center w-64 h-64 my-6 group"
          >
            <div className="absolute inset-0 rounded-full border-4 border-blue-900 border-b-transparent rotate-45"></div>
            <div className="text-4xl z-10 mb-2">{card.emoji}</div>
            <div className="text-center px-4 z-10">
              <p className={`${card.color} text-lg font-semibold leading-snug`}>
                <span className="font-extrabold block mb-1">{card.title}</span>
                {card.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden w-full max-w-6xl">
        <h3 className="px-6 pt-6 text-sm font-semibold text-gray-700">
          Find us on map
        </h3>
        <div className="p-6 w-full h-[400px]">
          <iframe
            title="College location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8300409057997!2d84.16677971003264!3d22.882735979185526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398a6735356b815d%3A0x26f267846411c51b!2sLivlihood%20college%20jashpur%20nagar!5e0!3m2!1sen!2sin!4v1760682718421!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </div>

      <div className="max-w-6xl w-full flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow p-6 w-full">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>

          {submitted && (
            <div className="mb-4 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
              Thanks — your message has been received. We will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "name",
                  label: "Full name",
                  placeholder: "Your full name",
                  required: true,
                },
                {
                  name: "email",
                  label: "Email address",
                  placeholder: "you@example.com",
                  type: "email",
                  required: true,
                },
                {
                  name: "phone",
                  label: "Phone",
                  placeholder: "+91 12345 67890",
                  required: true,
                },
                {
                  name: "subject",
                  label: "Subject (optional)",
                  placeholder: "Course enrollment query",
                  required: false,
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}{" "}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    name={field.name}
                    type={field.type || "text"}
                    value={form[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors[field.name]
                        ? "border-red-300 focus:ring-red-200"
                        : "border-gray-200 focus:ring-indigo-200"
                      }`}
                    placeholder={field.placeholder}
                    aria-invalid={!!errors[field.name]}
                  />
                  {errors[field.name] && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${errors.message
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-200 focus:ring-indigo-200"
                  }`}
                placeholder="Write your message here..."
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none"
              >
                Send Message
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                  });
                  setErrors({});
                  setSubmitted(false);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                Reset
              </button>

              <div className="ml-auto text-sm text-gray-500">
                <span className="font-medium">Privacy:</span> We never share
                your info.
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow p-4 w-full">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Quick Actions
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:info@yourcollege.edu"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50"
            >
              📧 Email Us
            </a>
            <a
              href="tel:+911234567890"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
