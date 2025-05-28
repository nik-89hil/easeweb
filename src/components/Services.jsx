import React from 'react'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'
import Serv from "../assets/service2.png"

export const Services = () => {
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

        >Services</motion.h1>
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
        <h2>
          Our Services
        </h2>
        <br />
        <h3>
          Professional websites that work — beautifully and effectively.
        </h3>
        <br />
        <p className='serCont'>
          At easeweb, we offer a full range of web services tailored to help businesses grow online. Whether you need a simple landing page, a custom-built business website, or ongoing website maintenance, we provide solutions that are designed to perform and built to last.
        </p>
        <br />
        <p className='serCont'>
          We focus on clean design, responsive development, and search engine readiness — ensuring your website not only looks great but drives real results.
        </p>
        <br />
        <img src={Serv} alt="service2.png" className='fullImg' />
        <br />
        <p>
          Explore our services below to see how we can help bring your vision to life.
        </p>
        
        <br />
        <motion.ul className='servBox'

        initial={{scale:1,opacity:1}}

        whileTap={{scale:.8,opacity:.4,color:"blue"}}
        
        >
          <h1>Web Design & Development</h1>
          <li>
            Custom-designed websites for your business goals
          </li>
          <li>
            Mobile-responsive and user-friendly
          </li>
          <li>
            Built using the latest technologies
          </li>
        </motion.ul>
        <br />
        <motion.ul className='servBox'
        
        
        initial={{scale:1,opacity:1}}

        whileTap={{scale:.8,opacity:.4,color:"blue"}}

        >
          <h1>SEO Optimization</h1>
          <li>
            On-page SEO setup (meta tags, headings, structure)
          </li>
          <li>
            Performance and speed optimization
          </li>
          <li>
            Tools to improve your search rankings
          </li>
        </motion.ul>
        <br />
        <motion.ul className='servBox'
        initial={{scale:1,opacity:1}}

        whileTap={{scale:.8,opacity:.4,color:"blue"}}
        
        >
          <h1>Website Maintenance</h1>
          <li>
            Regular backups, updates, and bug fixes
          </li>
          <li>
            Content updates and feature enhancements
          </li>
          <li>
            Security monitoring and protection
          </li>
        </motion.ul>
        <br />
        <motion.ul className='servBox'
        
        initial={{scale:1,opacity:1}}

        whileTap={{scale:.8,opacity:.4,color:"blue"}}
        
        >
          <h1>E-commerce Solutions</h1>
          <li>
            Online store setup with payment gateways
          </li>
          <li>
            Product catalog design and management
          </li>
          <li>
            Easy-to-use admin panel
          </li>
        </motion.ul>
        <br />
        <br />
        <hr />
        <br />
        <motion.p

        className='pop'

        initial={{x:-40,scale:0}}
        whileInView={{
          x:-30,
          scale:1.1
        }}
        
        >
           Add Google Services on your web
        </motion.p>
        <br />
        <motion.p

        className='pop'
        
        initial={{x:60,scale:0}}
        whileInView={{
          x:50,
          scale:1.1
        }}
        transition={{
          delay:.5
        }}
        
        >
          Add Social Media link to your web
        </motion.p>
        <br />

         <motion.p

        className='pop'

        initial={{x:-40,scale:0}}
        whileInView={{
          x:-30,
          scale:1.1
        }}
        
        >
           Fast and Reliable
        </motion.p>
        <br />
         <motion.p

        className='pop'
        
        initial={{x:60,scale:0}}
        whileInView={{
          x:50,
          scale:1.1
        }}
        transition={{
          delay:.5
        }}
        
        >
          Latest Tools and Technology
        </motion.p>
        <br />
        <motion.p

        className='pop'

        initial={{x:-40,scale:0}}
        whileInView={{
          x:-30,
          scale:1.1
        }}
        
        >
           User Friendly UI/UX
        </motion.p>
        <br />
         <motion.p

        className='pop'
        
        initial={{x:60,scale:0}}
        whileInView={{
          x:50,
          scale:1.1
        }}
        transition={{
          delay:.5
        }}
        
        >
          Interactive websites
        </motion.p>
        <br />
         <motion.p

        className='pop'

        initial={{x:-40,scale:0}}
        whileInView={{
          x:-30,
          scale:1.1
        }}
        
        >
          At easeweb 
        </motion.p>
        <br />
        <motion.p

        className='pop'

        initial={{x:60,scale:0}}
        whileInView={{
          x:50,
          scale:1.1
        }}
        transition={{
          delay:.5
        }}

        >
        <Link to="/contact" style={{textDecoration:"underline"}}> contact us</Link>
        </motion.p>





      </div>
      <br />
      <br />
      <br />
      

    </>
  )
}
