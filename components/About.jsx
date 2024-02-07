import React from "react";
import img from "../src/assets/images/about.jpg";

function About() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 ">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          Our hospital is a state-of-the-art facility that provides
          comprehensive care for our patients. We have a team of highly skilled
          and experienced doctors, nurses, and other healthcare professionals
          who are dedicated to providing our patients with the best possible
          care.
        </p>
        <p className="text-justify lg:text-start">
          Our hospital offers a wide range of services, including inpatient and
          outpatient care, diagnostic testing, surgery, and rehabilitation. We
          also have a variety of programs and services that are designed to help
          our patients stay healthy and active
        </p>
        <p className="text-justify lg:text-start">
          Our hospital is committed to providing our patients with the highest
          quality care in a safe and comfortable environment. We are proud to be
          a part of our community and we look forward to serving you.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={img} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
}

export default About;
