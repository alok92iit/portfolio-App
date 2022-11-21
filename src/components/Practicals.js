import React from 'react'
import "../static/css/practicals.css"
import PracticalCard from './PracticalCard'

const Practicals = () => {
  const practicalArray=[
    {
      weblink:'https://fascinating-chimera-9733e7.netlify.app/',
      gitRep:"https://github.com/alok92iit/AuthenticationI-On-CSR-App",
      heading:"Authentication On React App",
      desc:"Implement authentication in react app using express session with the help of passpot.js library and protect the routes with the help of session Id.",
      tech:['React.js','Mongodb','Express.js','PassPort.js']
    },
    {
      weblink:null,
      gitRep:"https://github.com/alok92iit/cashfree-nodejs-integration",
      heading:"Cashfree Payment gateway in React",
      desc:"Implement Cashfree Payment gateway in Mern stack use sequelize ORM for connecting the database and Joi library for form validation",
      tech:['React.js','Mysql','Joi','Express.js']
    },
    {
      weblink:null,
      gitRep:'https://github.com/alok92iit/Authentication-with-google',
      heading:'Authentication with google',
      desc:'User can easily login/signUp using Gmail account no need to enter email id and password for login /signUp process',
      tech:['Ejs','Express','Passport']
    },
    {
      weblink:'https://vibrant-golick-f8e3a4.netlify.app/',
      gitRep:'https://github.com/alok92iit/Weather-forecast',
      heading:'Weather forecast App',
      desc:'simpla weather forcasting app using vanilla Javascript fetching data via openweathermap',
      tech :['Javascript']
    }
  ]
  const cards=practicalArray.map((item)=>{
    return <PracticalCard weblink={item.weblink} gitRep={item.gitRep} heading ={item.heading} desc ={item.desc} tech={item.tech}/>
  }) 
  return (
    <section id='practicals'

    >
        <h5 className='projectName centerAlign'>Other Noteworthy Projects</h5>
        <ul className='practicalGrid'>
            {cards}
        </ul>
    </section>
  )
}

export default Practicals