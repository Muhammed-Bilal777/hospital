import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };
  
  return (
    <div className="fixed w-full  z-10 text-white">
      <div >
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-[#00C9A7] shadow-[rgba(0,_0,_0,_0.24)_0_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer txr"
            >
              <h1 className="text-2xl font-semibold">HEALTHCARE</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#845ec2]"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#845ec2]"
            >
              About Us{" "}
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#845ec2] "
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#845ec2]"
            >
              Doctors
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-[#845ec2]"
            >
              Blog
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <button
              className="bg-slate-600 text-white px-4 py-2 rounded-md hover:text-[#845ec2] transition duration-300 ease-in-out "
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

         

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
       
          {showForm && <Contact closeForm={closeForm} />}
         
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden   flex flex-col bg-[#009EFA] text-white z-30 absolute  left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#845ec2]"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#845ec2]"
            onClick={closeMenu}
          >
            About Us{" "}
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#845ec2] "  onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#845ec2]"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer hover:text-[#845ec2]"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <div className="  lg:hidden">
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:text-[#845ec2] transition duration-300 ease-in-out " onClick={openForm}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
