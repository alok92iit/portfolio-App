import React, { useState ,useEffect} from 'react'
import './static/css/App.css';
import "./components/NavHeader"
import NavHeader from './components/NavHeader';
import Intro from './components/Intro';
import About from "./components/About";
import Github from './components/icons/Github'
import HackerRank from './components/icons/HackerRank'
import Linkedin from './components/icons/Linkedin'
import "./static/css/intro.css"
import Work from './components/Work';
import Projects from './components/Projects';
import Practicals from './components/Practicals';
import GetInTouch from './components/GetInTouch';
import {motion } from "framer-motion"
import Logo from './components/icons/Logo';

function App() {
  const [toggle,setToggle]=useState(false)
  const [splashScreen,setSplashScreen] =useState(true)

  const svgAnimation={
    hidden:{
      opacity:0,
      scale:0.5
    },
    visible:{
      opacity:1,
      scale:1.5,
      rotateY:180,
      transition:{
        rotateY:{
          // delay:0.5,
          duration:1,
          ease: [0.17, 0.67, 0.68, 1],
          repeat: 3,
    repeatType: "reverse",
          scale:{
            duration:3,
            ease: [0.17, 0.67, 0.63, 0.67,0.17],
          }
  },
       
        
      }
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setSplashScreen(false)
    },4000)
  },[])
  return (
      <div className='overflowControlActive'>
        {
          splashScreen
              ?<motion.div className='splashScreen'
              initial='hidden'
              animate='visible'
              variants={svgAnimation}

              >
             
                <Logo/>
              </motion.div>
              :
              <>
              <NavHeader toggle={toggle} setToggle={setToggle}/>
              <div className='outerContainer'>
                
                  <div orientation="left" className='sideBar'>
                    <motion.ul className='sideBarFirst'
        
                      initial={{opacity:0}}
                      animate ={{opacity:1}}
                      transition={{
                        type:'spring',
                        stiffness:100,
                        duration:0.55,
                        delay:3
                      }}
                    >
                      <li><a  href="https://github.com/alok92iit" target="_blank" rel="noopener noreferrer"><Github/></a></li>
                      <li><a href='https://www.hackerrank.com/alok92iit' target='_blank'><HackerRank/></a></li>
                      <li><a href='https://www.linkedin.com/in/alok-sharma-522725171/' target='_blank'><Linkedin/></a></li>
                    </motion.ul>
                  </div>
                <div className='introContainer' >
        
                  <Intro toggle={toggle} />
                  <About/>
                  <Work/>
                  <Projects/> 
                  <Practicals/>
                  <GetInTouch/>
                 
                </div>
                <div orientation="right" className='sideBar mailBar '>
                    <motion.ul  className='sideBarSecond'
                    
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      duration:0.55,
                      delay:3
                    }}
                    
                    >
                      <li>
                          <a href="mailto:alok92iit@gmail.com" className='mailLink' target='_blank'>
                              alok92iit@gmail.com
                          </a>
                      </li>  
                    </motion.ul>
                </div>
              </div>
              <footer>
                    <ul className='footerExternalLinks'>
                      <li><a  href="https://github.com/alok92iit" target="_blank" rel="noopener noreferrer"><Github/></a></li>
                      <li><a href='https://www.hackerrank.com/alok92iit' target='_blank'><HackerRank/></a></li>
                      <li><a href='https://www.linkedin.com/in/alok-sharma-522725171/' target='_blank'><Linkedin/></a></li>
                    </ul>
                      <p className='cradits'><a href='https://github.com/bchiang7' target="_blank">Design inspiration from Brittany Chiang</a></p>
                      <p className='cradits'><a href='https://github.com/alok92iit' target='_blank'>Built By Alok Sharma</a></p>
              </footer>
              </>
        }
      
    </div>
  );
}

export default App;
