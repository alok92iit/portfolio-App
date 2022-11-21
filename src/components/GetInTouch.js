import React from 'react'
import '../static/css/getintouch.css'
import { card } from './animation'
import {motion} from "framer-motion"
const GetInTouch = () => {
  return (
    <motion.section className='connectContainer' id='contact'
    initial='hidden'
    whileInView='visible'
    variants={card}
    viewport={{ once: true }}
    >
    <p className='subheading'>04. What’s Next?</p>   
    <h2 className='Genralheading'>Get In Touch</h2>
    <p className='greetingLine'>I’m  currently looking for opportunity in a service based company, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    <a href='mailto:alok92iit@gmail.com' target='_blank' className='mailButton'>Say Hello</a>
   
    </motion.section>
  )
}

export default GetInTouch