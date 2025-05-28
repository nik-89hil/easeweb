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
        </div>
        <div className="foot2">
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

    </>
  )
}
