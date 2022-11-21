import React from 'react'
import Folder from './icons/Folder.js'
import ExternalLink from './icons/ExternalLink'
import Github from './icons/Github.js'
const PracticalCard = ({weblink,gitRep,heading,desc,tech}) => {
  return (
    <li className='practicalContainer'>
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
            </li>
  )
}

export default PracticalCard