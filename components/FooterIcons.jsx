import React from 'react'
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
   
  import { RiAccountCircleLine } from "react-icons/ri";

function FooterIcons() {
  return (
    <div className="socialIcons">
                     
                   
    <span className="icon">
        <Link  className="link-icon" to="https://in.linkedin.com/in/muhammed-bilal-409343218" target="_blank"><FaLinkedin /></Link>
    </span>
    <span className="icon">
       <Link  className="link-icon" to="https://muhammed-bilal777.github.io/my-react-app/" target="_blank"> <RiAccountCircleLine /> </Link>
    </span>
    <span className="icon">
        
        <Link className="link-icon" to="https://www.instagram.com/muhammed_bilal_07_/"  target="_blank"  ><FaInstagram  /></Link>
       
    </span>
    
</div>
  )
}

export default FooterIcons