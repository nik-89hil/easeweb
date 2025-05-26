import React from 'react'
import {motion} from "framer-motion"
import ContactImg from "../assets/contact.png"

export const Contact = () => {
  return (
    <>
    <div className="box">
      <motion.h1

      initial={{
        y:-12,
        opacity:0
      }}

      whileInView={{
        y:0,
        opacity:1
      }}
      
      >Contact</motion.h1>
      <motion.h4
            initial={{
              y:12,
              opacity:0
            }}
      
            whileInView={{
              y:0,
              opacity:1
            }}
            
            >start making your website with easeweb</motion.h4>
            <br />
            <br />
            <img src={ContactImg} alt="contact.png" className='aboutImg'/>
            <br />
    </div>
    
    
    </>
  )
}
