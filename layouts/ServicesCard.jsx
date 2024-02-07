import React from "react";
import "./services.css";
import "./servicescard.css"

function ServicesCard({ icon, title ,content}) {
  return (
    <div className="services-div  group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0_3px_8px] rounded-lg cursor-pointer lg:hover:translate-y-6 transition duration-300 ease-in-out ">
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]  servicecs-icons">
        {icon}
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p>
        {content}
      </p>
      <h2 className="text-[#d5f2ec] cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
        Learn more
      </h2>
    </div>
  );
}

export default ServicesCard;
