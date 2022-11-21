import React, { useState } from 'react'
import "../static/css/header.css"
import resume from "../static/resume.pdf"
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion"

import Logo from './icons/Logo';
const NavHeader = ({toggle,setToggle}) => {
  const container ={
    hidden:{
      y:-100
    },
    visible:{

      y:0,
      transition: {
        staggerChildren: 1,
    
      }
    },
   
  }
  const item ={
    hidden:{
      // opacity:0
      y:-100

    },
    show:{
      y:0,
      // opacity:1,
     transition:{
      y:{
        type: 'spring',
        stiffness: 1000,
        duration:1,
      }    
      }
    }
  }
  const setToggleClass=()=>{
    setToggle(!toggle)
    console.log(toggle)
  }
  
  return (
    <header id='navheader' 

    style={{
      backgroundColor:'#0a192f',
      position:'fixed',width:'100vw',height:60,'marginBottom':'20px' ,zIndex:11}}
    >
       <Logo/>
           
      <label for='clicked' className='bars' onClick={setToggleClass}
        variants={item}
      >

        <div></div>
      </label>
      {/* <input type='checkbox' id='clicked'></input> */}
      <ul className= { toggle?'listHeader act':'listHeader' }>
      <label for='clicked' className='bars' onClick={setToggleClass} >
        <div></div>
      </label>
        <motion.li  
              initial={{
                y:"-20empx",
                opacity:0
              }}
              animate={{
                y:0,
                opacity:1
              }}
              transition={{
                 type: 'spring',
                 stiffness: 1000,
                 duration:.45,

              }} onClick={setToggleClass}><span>01.</span><HashLink smooth to='/#intro'> About</HashLink></motion.li>
        <motion.li 
        initial={{
                y:"-20empx",
                opacity:0
              }}
              animate={{
                y:0,
                opacity:1
              }}
              transition={{
                 type: 'spring',
                 stiffness: 1000,
                 duration:0.55,
                 delay:.1
              }}
        onClick={setToggleClass}><span>02.</span><HashLink smooth to='/#work'> Experience</HashLink></motion.li>
        <motion.li 
        initial={{
                y:"-20empx",
                opacity:0,

              }}
              animate={{
                y:0,
                opacity:1
              }}
              transition={{
                 type: 'spring',
                 stiffness: 1000,
                 duration:0.55,
                 delay:.25
              }}
        onClick={setToggleClass}><span>03.</span><HashLink smooth to='/#projects'> Work</HashLink></motion.li>
        <motion.li 
        initial={{
                y:"-20empx",
                opacity:0
              }}
              animate={{
                y:0,
                opacity:1
              }}
              transition={{
                 type: 'spring',
                 stiffness: 1000,
                 duration:0.55,
                 delay:.4
              }}
        onClick={setToggleClass}><span>04.</span><HashLink smooth to='/#contact'> Contact</HashLink></motion.li>
        <motion.li 
        initial={{
                y:"-20empx",
                opacity:0
              }}
              animate={{
                y:0,
                opacity:1
              }}
              transition={{
                 type: 'spring',
                 stiffness: 1000,
                 duration:0.55,
                 delay:.5
              }}
        onClick={setToggleClass}><a href={resume} target='_blank'>Resume</a></motion.li>
      </ul>
    </header>
  )
}

export default NavHeader