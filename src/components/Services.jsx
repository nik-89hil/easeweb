import React from 'react'

import {motion} from 'framer-motion'


export const Services = () => {
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
      
      >Services</motion.h1>
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
    </div>

    </>
  )
}
