import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";


export const Footer = () => {
  return (
    <>
    <div className="foot">
        <div className="foo1">
            <h3>easeweb</h3>
            <p>(makes your web easy)</p>
            <br />
            <p>
                Address: 
                Noida sector-2, Uttar Pradesh, India
            </p>
            <br />
            <p>
                +918384072633
            </p>
            <p>
              All Rights are reserved 2025.
            </p>
        </div>
        <div className="foot2">
            <div className="con-soc">
                        <p className='soc-box'>
                          <a href="https://www.instagram.com/easeweb_00/" target='_blank'>
                            <FaInstagram className='faceImg'/>
                          </a>
                        </p>
                        <p className='soc-box'>
                          <a href="https://www.facebook.com/people/Rohit-Verma/61577004861272/" target='_blank'>
                            <FaFacebook className='instaImg'/>
                          </a>
                        </p>
                        <p className='soc-box'>
                          <a href="https://wa.me/+918384072633?text=I want to know more about web services" target='_blank'>
                            <IoLogoWhatsapp className='whatImg' />
                          </a>
                        </p>
                        <p className='soc-box'>
                          <a href="mailto:object816@gmail.com">
                            <SiGmail className='emailImg'/>
                          </a>
                        </p>
            
                      </div>
        </div>

    </div>

    </>
  )
}
