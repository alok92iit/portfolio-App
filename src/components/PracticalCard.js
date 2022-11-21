import React from 'react'
import Folder from './icons/Folder.js'
import ExternalLink from './icons/ExternalLink'
import Github from './icons/Github.js'
import { card } from './animation'
import {motion} from "framer-motion"
const PracticalCard = ({weblink,gitRep,heading,desc,tech}) => {
  return (
    <motion.li className='practicalContainer'
    initial='hidden'
    whileInView='visible'
    variants={card}
    viewport={{ once: true,amount:0 }}
    >
              <a href={gitRep} target='_blank'>  <div className='Header'>
                    <Folder/>
                    <ul className='redirectLink'>
                      <li> 
                        {
                        weblink?<a href={weblink} target='_blank'><ExternalLink/></a>:''
                        }
                      </li>
                      <li><a href={gitRep} target='_blank'><Github/></a></li>
                    </ul>
                </div>
                <div className='desc'>
                  <h5 className='cardHeading'>{heading}</h5>
                  <p>{desc}</p>
                </div>
                <ul className='Footer'>
                    {
                        tech.map((skills)=>{
                            return <li>{skills}</li>
                        })
                    }
                </ul>
                </a>
            </motion.li>
  )
}

export default PracticalCard