import React from 'react'
import {motion} from "framer-motion"
import FAQ from "../assets/faq.png"


export const Faq = () => {
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
      
      >Faq</motion.h1>
      <motion.h4
            initial={{
              y:12,
              opacity:0
            }}
      
            whileInView={{
              y:0,
              opacity:1
            }}
            
            >(Frequently Asked Questions), start making your website with easeweb</motion.h4>
          <br />
          <br />
          <img src={FAQ} alt="faq.png" className='aboutImg'/>
          <br />
    </div>


    </>
  )
}
