import React from 'react'
import {motion} from "framer-motion"
import {Link} from "react-router-dom"


export const About = () => {
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
      
      >About</motion.h1>
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
            <h1>Who We Are</h1>
            <br />
            <motion.h3 className='aboutCont'

            initial={{
              opacity:.2,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:2
            }}
            
            
            >
              easeweb is a professional web development service provider committed to helping businesses establish a strong and effective online presence. We specialize in crafting custom websites that are visually appealing, user-friendly, and optimized for performance.
            </motion.h3>
            <br />
            <br />
            <h1>
              Our Mission
            </h1>
            <br />
            <motion.h3 className='aboutCont'

            initial={{
              opacity:.2,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:2
            }}
            
          
            >
              Our mission is to empower small and medium-sized businesses with high-quality digital solutions that drive growth and deliver measurable results. We strive to combine creativity, technology, and strategy to meet each client’s unique needs.
            </motion.h3>
            <br />
            <br />
            <h1>Our Background</h1>
            <br />
            <motion.h3 className='aboutCont'

            initial={{
              opacity:.2,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:2
            }}
            
            
            >Founded in Jul 2024, our company was built on the principles of quality, reliability, and client-focused service. What began as an individual effort has evolved into a dedicated team of designers, developers, and digital strategists who share a common goal — to deliver excellence.</motion.h3>
            <br />
            <br />
            <h1>What Sets Us Apart</h1>
            <br />
            <ul>
              <li>Tailor-made websites designed for your business goals</li>
              <li>
                End-to-end service: from design and development to SEO and maintenance
              </li>
              <li>
                On-time delivery and professional communication
              </li>
              <li>
                Continued support and updates after project completion
              </li>
            </ul>
            <br />
            <br />
            <h1>Our Values</h1>
            <br />
            <ul>
              <li>Integrity – We believe in honest communication and transparent processes.</li>
              <li>
                Quality – We focus on delivering work that meets the highest standards.
              </li>
              <li>
                Client Satisfaction – Our clients’ success is our top priority.
              </li>
              <li>
                Innovation – We continuously explore new technologies and best practices.
              </li>
            
            
            </ul>
            <br />
            <br />
            <h1>Let’s Work Together</h1>
            <br />
            <motion.h3 className='aboutCont'
            initial={{
              opacity:.2,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:2
            }}
            >
              Whether you're launching a new venture or upgrading your existing website, we’re here to help you succeed online. <Link to="/contact" className='texlink'>Contact us</Link> or <Link to="/quote" className='texlink'>Request a Quote</Link> to discuss your project today.
            </motion.h3>
            <br />
            <hr />
            <br />
            <br />
    
    </div>

    </>
  )
}
