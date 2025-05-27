import React from 'react'
import {motion} from "framer-motion"
import FAQ from "../assets/faq.png"
import { Fcreate } from './Fcreate';


export const Faq = () => {

  const fa = [
    {
      ques:"How long does it take to build a website?",
      ans:"Timelines vary depending on the project's complexity, but most websites are completed within 1 to 3 weeks. We'll provide a clear schedule after understanding your requirements."
    },
    {
      ques:"Do I need to provide content and images?",
      ans:"Yes, we recommend you provide your own content to ensure it's accurate and aligned with your brand. However, we can also assist with copywriting and stock imagery if needed."
    },
    {
      ques:"Can you convert my Canva or Figma design into a website?",
      ans:"Absolutely. We specialize in transforming Canva and Figma designs into responsive, SEO-friendly websites while maintaining visual accuracy."
    },
    {
      ques:"Will my website be mobile-friendly?",
      ans:"Yes, every website we build is fully responsive and optimized to work seamlessly on all devices — phones, tablets, and desktops."
    },
    {
      ques:"Do you offer ongoing support and maintenance?",
      ans:"Yes. We offer flexible maintenance plans that include updates, backups, security checks, and performance monitoring to keep your website running smoothly."
    }
  ];


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
          {
            fa.map((item,id)=>{
              return (
                <Fcreate key={id} ques={item.ques} ans={item.ans}/>
              )
            })
          }
          <br />
          <br />
          
    </div>


    </>
  )
}
