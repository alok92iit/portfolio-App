import React from 'react'
import "./work.css"
import {motion } from 'framer-motion'
import { card } from './animation'
const Work = () => {
  return (
    <motion.section className='workContainer' id='work'
    initial='hidden'
    whileInView='visible'
    variants={card}
    viewport={{ once: true }}>
        <h2 className='aboutHeading workLine'>Where I've worked</h2>
        <div className='jobDesc'>
            <h3 className='companyName'>Full Stack Developer</h3>
            <p>Apr 2022 – Sep 2022</p>
            <ul className='workDone'>
                <li>During this journey I learn and worked on CodeIgniter and PHP for backend and for frontend worked on Java Script. MySQL Database for storing the data and use MySQL Workbench to handle it.</li>
                <li>Develop Broomees worker App on Cordova, Worked on all Api development as well as some frontend work with multi language support.</li>
                <li>Create a worker Journey module for broomees operations Team so that they easily track worker history.</li>
                <li>create a Payout module for our finance team so that they can easily sent salary to worker.</li>
                <li>worked on Semantic Tag for SEO purpose.</li>
            </ul>
        </div>
    </motion.section>
  )
}

export default Work