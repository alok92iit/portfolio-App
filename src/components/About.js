import React from 'react'
import "./About.css"
import Alok from "../static/Alok.jpeg" 
import {motion} from "framer-motion"
import {card} from "./animation.js"
const About = () => {
  return (
    <motion.section className='aboutDiv' id='about'
      initial='hidden'
      whileInView='visible'
      variants={card}
      viewport={{ once: true }}
    
    >
        <h2 className='aboutHeading'>About Me</h2>
        <div className='aboutFlex'>
          <div className="content">
              <p>Hello! My name is Alok and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I know about power of Java Script and amazing excution process behind any small program after this I come to know about React.js.</p>
              <p>Fast-forward to today, I've worked for a start-up. My main focus these days is building accessible, inclusive products and digital experiences and work on different technologies for variety of clients.</p>
              <p>I also recently exploring <span style={{color:'var(--green)'}}>framer motion</span> libraury for amazing web animation.</p>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <ul className='skills'>
                <li>Java Script</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDb</li>
                <li>MySql</li>
                <li>Python</li>
              </ul>
          </div>
          <div className='profileImg'>
            <div className='floatBorder'></div>
            <div className='profileContainer'>
            <img  src={Alok} width="300px" height={300}></img>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default About