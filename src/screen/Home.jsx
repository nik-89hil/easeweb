import React from 'react'
import { Navbar } from "../components/Navbar.jsx"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Front from "../assets/fonts.png"
import { About } from "../components/About.jsx"
import canva from "../assets/canva.png"
import figma from "../assets/figma.png"

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
        <p className='heading'>
          Building modern, responsive, and results-driven websites tailored to your business needs.
          Whether you're launching a startup, growing your brand, or refreshing your online presence — we’re here to turn your vision into a powerful digital experience.
        </p>
        <br />
        <img src={Front} className='cover' alt="cover.jpg" />
        <br />
        <br />
        <p className="heading">

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
                rotate: "-30deg",
                x: -100,
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
                rotate: "30deg",
                x: 100,
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





    </>
  )
}
