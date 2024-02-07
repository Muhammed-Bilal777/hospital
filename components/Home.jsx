import React from "react";
import Button from "../layouts/Button";
import "./home.css"

function Home() {
  return (
    <div  className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 text-white bg-[url('assets/images/home.png')] bg-no-repeat bg-cover opacity-90 ">
      <div className="w-full lg:w-4/5 space-y-5 mt-10 hero-banner">
        <h1  className="text-4xl font-bold leading-tight shadow-gray-500 txt-shadow">Empower Your Health, Empower Your Life.</h1>
        <p className="txt-shadow">
        A leading light in healthcare. A Passion for Healing. A passion for putting patients first. A state of mind. A Transforming, Healing Presence.
        </p>

        <Button title="see services"></Button>
      </div>
    </div>
  );
}

export default Home;
