import React from 'react'
import { motion } from "framer-motion"
import ContactImg from "../assets/contact.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export const Contact = () => {

 

  return (
    <>
      <div className="box">
        <motion.h1

          initial={{
            y: -12,
            opacity: 0
          }}

          whileInView={{
            y: 0,
            opacity: 1
          }}

        >Contact</motion.h1>
        <motion.h4
          initial={{
            y: 12,
            opacity: 0
          }}

          whileInView={{
            y: 0,
            opacity: 1
          }}

        >start making your website with easeweb</motion.h4>
        <br />
        <br />
        <img src={ContactImg} alt="contact.png" className='aboutImg' />
        <br />
        <div className="cont-form">
          <div className="goog-form">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkhMird36r-E_teh9EX7vt8sw4N024at6eTX5B_97tQJrqcQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
         
          <br />
          <hr />
          <br />
          <div className="con-soc">
            <p className='soc-box'>
              <a href="">
                <FaInstagram className='faceImg'/>
              </a>
            </p>
            <p className='soc-box'>
              <a href="">
                <FaFacebook className='instaImg'/>
              </a>
            </p>
            <p className='soc-box'>
              <a href="">
                <IoLogoWhatsapp className='whatImg' />
              </a>
            </p>
            <p className='soc-box'>
              <a href="">
                <SiGmail className='emailImg'/>
              </a>
            </p>

          </div>

        </div>
      </div>
        <br />
        <br />



    </>
  )
}
