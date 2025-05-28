import React from 'react'
import {motion} from "framer-motion"
import QuoteImg from "../assets/quote.png"


export const Quote = () => {
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
      
      >Quote</motion.h1>
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
            <img src={QuoteImg} alt="quote.png" className='aboutImg' />
            <br />
            <div className="goog-form">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd583J2S23GpzseGXUDBkmGVM4g5I3ofpzIfA6qZcGTkovCXQ/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
    </div>
    
    
    
    
    </>
  )
}
