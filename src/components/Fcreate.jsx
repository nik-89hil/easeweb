import React from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

import {motion, AnimatePresence} from "framer-motion"

export const Fcreate = ({ ques, ans }) => {

    const [visible, setVisible] = React.useState(false);




    return (
        <>
            <div className="fa-box">
                <motion.div className="fl" onClick={()=>setVisible(!visible)}
                initial={{
                    scale:1
                }}

                whileTap={{
                    scale:0.9
                }}
                    
                    
                    
                    
                    >
                    <h2>{ques}</h2>
                    <p><button className='btn-fa' onClick={()=>setVisible(!visible)}>{(visible)?(<FaAngleUp  className='ic-fa' />):(<FaChevronDown className='ic-fa' />
)}</button></p>
                </motion.div>
                <AnimatePresence>

                {
                    (visible) ? (
                        <motion.div className="detail"

                        initial={{
                            opacity:0,
                            y:-50
                        }}
                        animate={{
                            opacity:1,
                            y:0
                        }}

                        exit={{
                            opacity:.2,
                            y:-60
                        }}

                        transition={{
                            duration:.7,
                            delay:.2,
                            ease:"easeInOut"
                        }}



                        >
                            <h4>
                                {ans}
                            </h4>
                        </motion.div>

                    ) : (null)
                }

                </AnimatePresence>
            </div>

        </>
    )
}
