"use client";
import { useState } from "react";

function ContactForm() {
  const services = [
    "Audit & Assurance",
    "Taxation",
    "Accounting",
    "Advisory",
    "Compliance",
    "Audit & Assurance",
    "Taxation",
    "Accounting",
    "Advisory",
    "Compliance",
    "Audit & Assurance",
    "Taxation",
    "Accounting",
    "Advisory",
    "Compliance",
  ];
  const [selectedService, setSelectedService] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected services:", selectedService);
    // Perform further actions
  };
  return (
    <div className=" w-1/3 h-full flex flex-col gap-4 p-4">
      <h3 className="text-white text-4xl font-bold font-montserrat">
        Contact Us
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="px-4  rounded-t-md focus-visible:outline-none py-4 border-b border-gray-400 "
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4   focus-visible:outline-none py-4 border-b border-gray-400 "
        />
        {/* Select available services with default set to none and multiple selection available*/}
        <select
          id="services"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="block w-full px-2 focus:outline-none focus:ring-0 py-4 border-b border-gray-400 "
        >
          <option value="none">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Message"
          className="p-4 rounded-b-md  focus-visible:outline-none"
        ></textarea>
        <button className="bg-cyan-800 text-white p-2 rounded-md mt-4 hover:bg-cyan-900 transition-all duration-300">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
