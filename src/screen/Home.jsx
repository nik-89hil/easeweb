import React from 'react'
import { Navbar } from "../components/Navbar.jsx"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { About } from "../components/About.jsx"
import {Services} from "../components/Services.jsx"
import canva from "../assets/canva.png"
import figma from "../assets/figma.png"
import HomeImg from "../assets/home.png"
import {Contact} from "../components/Contact.jsx"
import {Faq} from  "../components/Faq.jsx"






export const Home = () => {
  const [visible, setVisible] = React.useState(true)

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

        >Home</motion.h1>
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
        <br />
        <h1 style={{textAlign:"center"}}>Professional Web Development & SEO Services</h1>
        <h2 style={{textAlign:"center"}}>Custom Website Solutions</h2>
        <h3 style={{textAlign:"center"}}>Mobile-Friendly and SEO-Optimized</h3>
        <br />
        <img src={HomeImg} alt="Responsive website design services for small businesses" className='fullImg' />
        <br />
        <p className='serCont'>
          Building modern, responsive, and results-driven websites tailored to your business needs.
          Whether you're launching a startup, growing your brand, or refreshing your online presence — we’re here to turn your vision into a powerful digital experience.
        </p>
        <br />
        <br />
        <p className="heading">
          Buy Starter Plan just Rs.3,999/- only
          get full details : <Link to={"/contact"}>click here</Link>
        </p>
        <h1>Simple & Complex Designs</h1>
        <motion.h4

          style={{
            textAlign:"center"
          }}

          initial={{
            y: 20,
            opacity: 0
          }}

          whileInView={{
            y: 0,
            opacity: 1
          }}

          transition={{
            duration: .9,
            ease: "linear"
          }}

        >we will create your figma and canva designs into live interactive website</motion.h4>
        <br />
        <br />
        <div className="createBox">
          <div className="figma">
            <motion.img

              initial={{
                rotate: "-5deg",
                x: -6,
                scale: 1,
                opacity:0
              }}

              whileInView={{
                rotate: "0deg",
                x: 0,
                opacity:1
              }}

              whileHover={{
                scale: .8
              }}

              transition={{
                duration: .4,
                delay: .4,
                ease: "easeInOut"
              }}


              src={figma} alt="figma.png" />
            <br />
            <hr />
            <br />
            <h4>Convert Figma Designs into Real Websites</h4>
            <br />
            <hr />
            <br />
            <motion.p className="tex"

            initial={{
              y:250,
              opacity:.4
            }}

            whileInView={{
              y:0,
              opacity:1
            }}

            transition={{
              duration:.7,
              ease:"circInOut"
            }}
            
            
            
            >
              Have a beautiful layout in Figma? We’ll turn it into a responsive, production-ready website with clean, optimized code.
              Every detail — colors, spacing, typography — matched with precision.
              Seamless transition from design to development, guaranteed.
            </motion.p>
          </div>
          <div className="canva">
            <motion.img

              initial={{
                rotate: "5deg",
                x: 6,
                opacity:0
              }}

              whileInView={{
                rotate: "0deg",
                x: 0,
                opacity:1
              }}

              whileHover={{
                scale: .8
              }}

              transition={{
                duration: .4,
                delay: .1,
                ease: "easeInOut"
              }}



              src={canva} alt="canva.png" />
            <br />
            <hr />
            <br />
            <h4>Bring Your Canva Designs to Life</h4>
            <br />
            <hr />
            <br />
            <motion.p className="tex"
            
             initial={{
              y:250,
              opacity:.4
            }}

            whileInView={{
              y:0,
              opacity:1
            }}

            transition={{
              duration:.7,
              ease:"circInOut"
            }}
            
            
            
            >
              Already created a design in Canva? We transform your visuals into fully functional, responsive websites.
              Maintain your brand's exact look and feel — with pixel-perfect accuracy.
              Let us turn your creativity into a real, working website.
            </motion.p>
          </div>
        </div>
      </div>
      <br />
      <About/>
      <br />
      <br />
      <Services/>
      <br />
      {/* <br />
      <Contact/>
      <br /> */}
      <br />
      <Faq/>
      <br />
      <br />



    </>
  )
}
