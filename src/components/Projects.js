import React from 'react'
import "../static/css/projects.css"
import shoppingCart from "../static/shoppingCart.png"
import blogger from "../static/blogger.png"
import Github from './icons/Github'
import ExternalLink from './icons/ExternalLink'
import {motion } from 'framer-motion'
import { card } from './animation'
const Projects = () => {
  return (
    <motion.section className='projectContainer' id='projects'
    initial='hidden'
    whileInView='visible'
    variants={card}
    viewport={{ once: true,amount:'some'}}
    >
        <h2 className='aboutHeading projectLine'>Some Things I’ve Built</h2>
        <div  className='project'>
          <div className='imageContainer' style={{maxWidth: '100%', 'display': 'block'}}>
            <div className='imgBackgoundDiv' >
              <a href='https://shopping-day.herokuapp.com/' target='_blank'>
            <img src={shoppingCart} width="100%" height="375px"></img>
            </a>
              </div>
            </div>
            <div className='projectDesc'>
            <h5 className='subHeading'>Featured Project</h5>
            <h6 className='projectNameHeading'> <a href='https://shopping-day.herokuapp.com/' target='_blank'>Shopping Cart</a></h6>
            <div className='aboutProject'>
              It is a E-commerce web app with RazorPay payment gateway and authentcation using passport.js local strategy and google Oauth 2 strategy. The products fetch data from Fake Store Api.
            </div>
            <ul className='projectTech techName'>
              <li>Node.js</li>
              <li>Expres.js</li>
              <li>MonogoDb</li>
              <li>ejs</li>
              <li>passport.js</li>
            </ul>
            <ul className='projectTech'>
              <li><a href='https://github.com/alok92iit/Shopping-cart-' target='_blank'><Github/></a></li>
              <li><a href='https://shopping-day.herokuapp.com/' target='_blank'><ExternalLink/></a></li>
            </ul>

            </div>
            
        </div>
       {/* Project Second */}

       <div className='reverseProject'>
          
            <div className='projectDescReverse'>
            <h5 className='subHeadingReverse'>Featured Project</h5>
            <h6 className='projectNameReverse'><a href='https://belogger.netlify.app/' target='_blank'>Blogger App</a></h6>
            <div className='aboutProjectReverse'>
            It is a simple Blogger web app with CRUD operation fuctionality.Build on MERN Stack
            </div>
            <ul className='projectTechReverse techName'>
              <li><span>M</span>onogoDb</li>
              <li><span>E</span>xpres.js</li>
              <li><span>R</span>eact.js</li>
              <li><span>N</span>ode.js</li>
            </ul>
            <ul className='projectTechReverse'>
              <li><a href='https://github.com/alok92iit/Blogger' target='_blank'><Github/></a></li>
              <li><a href='https://belogger.netlify.app/' target='_blank'><ExternalLink/></a></li>
            </ul>

            </div>
            <div className='projectReverse' style={{maxWidth: '100%', 'display': 'block'}}>
            <div className='imgBackgoundDivReverse'>
              <a href='https://belogger.netlify.app/' target='_blank'>
                 <img src={blogger} width="100%" height={"375px"} ></img>
              </a>
            </div>
            </div>
        </div>

    </motion.section>
  )
}

export default Projects