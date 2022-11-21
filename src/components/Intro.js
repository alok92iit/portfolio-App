import React from 'react'
import "./intro.css"
import resume from '../static/resume.pdf'
import {motion} from "framer-motion"
const Intro = ({toggle}) => {
const introContainer={
  hidden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.2,
      delayChildren:1.3
    }
  }
}
const child={
  hidden:{
    opacity:0,
    y:100
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      ease:[0.6,0.01,-0.05,0.95],
      duration:1
    }
  }
}
  return (
    <motion.section className='introDiv' id='intro'
    // initial={{y:'100em'}}
    // animate={{y:0}}
    // transition={{
    //   type:'tween',
    //   duration:.5,
    //   delay:1.8
    // }}
    initial='hidden'
    animate='show'
    variants={introContainer}
>
            <motion.h1 variants={child}>Hi, my name is</motion.h1>
            <motion.h2 variants={child}>Alok Sharma</motion.h2>
            <motion.h3 variants={child} >I build things for the web.</motion.h3>
            <motion.p variants={child} className='smallDesc'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</motion.p>
            <motion.p variants={child} className='resumetab'><a href={resume} target='_blank'>Check out my Resume</a></motion.p>
    </motion.section>
  )
}

export default Intro