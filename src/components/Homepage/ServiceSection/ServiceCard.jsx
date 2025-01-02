import React from "react";

function ServiceCard({
  serviceNumber = "01",
  serviceName = "ServiceOne",
  serviceDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  return (
    <div className="bg-gray-200 w-full shadow-lg shadow-gray-700 px-6 py-14 group hover:bg-cyan-950 hover:shadow-gray-500 transition-all ease-in-out duration-300 rounded-lg ">
      <p className="font-montserrat font-extrabold text-8xl text-gray-400 mt-10 -mb-10 group-hover:mt-0 group-hover:-mb-0 group-hover: transition-all duration-300">
        {serviceNumber}
      </p>
      <div className="text-gray-600 group-hover:text-gray-200 transition-all duration-300">
        <h3 className="text-3xl font-montserrat font-bold group-hover:scale-105 group-hover:text-gray-200 transition-all duration-300">
          {serviceName}
        </h3>
        <p>{serviceDescription}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
