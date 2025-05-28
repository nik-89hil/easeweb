import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
// import { Main } from './Main';
import { Link , NavLink} from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
// import { PiProjectorScreenFill } from "react-icons/pi";
import { MdContactless } from "react-icons/md";
import { MdRequestQuote } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
// import { button } from 'framer-motion/client';

export const Navbar = () => {
  const [visible,setVisible] = React.useState(false)
  const routes = ["Home", "About","Services","Portfolio","Contact","Quote","Faq"];



  return (
    <>
    <div className="blur"
    >

      <div className="name">
        <h2>
          easeweb
        </h2>
        <p>
          {
            (visible)?(<button onClick={()=>setVisible(!visible)}><MdOutlineCancel className='icon'/></button>):(<button onClick={()=>setVisible(!visible)}><LuMenu className='icon'/></button>)
          }
          
        </p>
      </div>
      
      <AnimatePresence>
          
          
      {
        visible?(

        <motion.div className="links"

        initial={{
          opacity:.4,
          scale:.4
        }}

        animate={{
          opacity:1,
          scale:1,
        }}

        exit={{
          opacity:.2,
          scale:.2
        }}
        
        
        
        
        
        
        >
        <NavLink>
        <li>
        <Link to={"/"}><RiHome2Fill className='icon' /> Home</Link>
        </li>
        <li>
        <Link to={"/about"}><FaInfoCircle className='icon'/>
          About
        </Link>
        </li>
        <li>
        <Link to="/services"><MdMiscellaneousServices className='icon'/>
          Services
        </Link>
        </li>
        {/* <li>
        <Link to="/portfolio"><PiProjectorScreenFill className='icon' />
         Portfolio
        </Link>
        </li> */}
        <li>
        <Link to="/contact"> <MdContactless className='icon'/>
         Contact
        </Link>
        </li>
        <li>
        <Link to="/quote"> <MdRequestQuote className='icon'/>
         Quote
        </Link>
        </li>
        <li>
        <Link to="/faq"><FaQuestion className='icon'/>
         Faq
        </Link>
        </li>
        </NavLink>
        
        
      </motion.div>



        ):(null)
      }

      </AnimatePresence>
      
     
    </div>

    </>
  )
}
