import React from 'react'
import Button from '../layouts/Button'
import ServicesCard from '../layouts/ServicesCard'
import {RiMicroscopeLine} from "react-icons/ri"
import {MdHealthAndSafety} from "react-icons/md"
import {FaHeartbeat} from "react-icons/fa"

function Services() {

const icon1 = <RiMicroscopeLine size={35} className="text-cyan-700  "/>
const icon2 = <MdHealthAndSafety  size={35} className="text-cyan-700  " />
const icon3 = <FaHeartbeat size={35} className="text-cyan-700  " />




  return (
    <div  className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 '>
             <div className='flex flex-col items-center lg:flex-row justify-between '>
                <div>
                    <h1  className='text-4xl font-semibold text-center lg:text-start'>Our Services</h1>
                    <p className='mt-2 text-center lg:text-start '>We are proud to be a part of our community and we look forward to serving you.</p>
                </div>
                <div className='mt-4 lg:mt-0'>
                    <Button title="see services"/>
                </div>
             </div>
             <div className='flex flex-col lg:flex-row gap-5 pt-14'>
                <ServicesCard icon={icon1} title="Lab Test"  content="Basic Metabolic Panel (BMP)
Comprehensive Metabolic Panel (CMP)
Lipid Profile.
Thyroid Test(s)
Complete Blood Count (CBC) with or without White Blood Cell (WBC) Differential."/>
                <ServicesCard icon={icon2} title="Health Check" content="We can help in the early detection of many conditions and diseases like diabetes, cardiovascular diseases and cancer."/>
                <ServicesCard icon={icon3} title="Hearth check" content="This test measures the electrical activity of the heart and can help to detect a wide range of heart conditions and problems."/>
             </div>
    </div>
  )
}

export default Services