import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";
import { useRef } from "react";
import images from "../src/assets/images/doc.jpg"

function Doctors() {

  const data = [
    {
      img: "/public/image/images/male.jpg",
      name: "Dr. Suheel",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "./src/assets/images/female.jpg",
      name: "Dr. Asma",
      specialties: "Cardiologist",
    },
    {
      img: "/src/assets/images/male.jpg",
      name: "Dr. Shameer",
      specialties: "Pediatrician",
    },
    {
      img: "/src/assets/images/female.jpg",
      name: "Dr. Shaban",
      specialties: "Neurologist",
    },
    {
     img: "/src/assets/images/male.jpg",
      name: "Dr. Girish",
      specialties: "Dermatologist",
    },
    {
      img: "/src/assets/images/female.jpg",
      name: "Dr. Namitha",
      specialties: "Ophthalmologist",
    },
  ];


    
  const slider = useRef(null)

  const settings = {
    accessibility :true,
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
        {
            breakpoint : 1023,
            settings:{
                slidesToShow:3,
                slidesToScroll:3,
                infinite:true,
                dots : true
            }
        },
        {
            breakpoint : 768,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                initialSlide : 2
            }
        },
        {
            breakpoint : 480,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                initialSlide : 2
            }
        }
    ],
  };





  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div className="">
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Doctors{" "}
          </h1>
          <p className="mt-2 text-center lg:text-start ">
            {" "}
            Medical Expert | Keynote Speaker | Passionate Doctor and Dynamic Speaker Inspiring Health and Wellness.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button className="bg-[#d5f2ec] text-red px-4 py-2  rounded-lg active:bg-[#ade9dc]"
          onClick={()=>slider.current.slickPrev()}>
            <FaArrowLeft size={25} />
          </button>
          <button className="bg-[#d5f2ec] text-red px-4 py-2  rounded-lg active:bg-[#ade9dc]"
          onClick={()=>slider.current.slickNext()}>
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0_3px_8px] mb-2 cursor-pointer "
              key={index}
            >
              <div>
                {/* <img src={e.img} alt="img"  className="h-56 rounded-t-xl w-full"/> */}
                <img src={images} alt="img"  className="h-56 rounded-t-xl w-full" />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <h2 className="pt-2">{e.specialties}</h2>
              </div>
            </div>
          ))}
        </Slider>
        ,
      </div>
    </div>
  );
}

export default Doctors;
