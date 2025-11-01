
 import React from 'react'
 
 const About = () => {
   return (

     <>
       <div className="m-10 p-8 max-w-4xl bg-gradient-to-br from-amber-200 to-amber-300 shadow-xl rounded-2xl flex flex-col justify-center">
        <h4 className="text-3xl font-bold text-cyan-800 mb-6 border-b-9 border-cyan-700 pb-2">
          ABOUT ME :
        </h4>

        <pre className="bg-white p-6 rounded-xl text-sm leading-relaxed text-gray-800 font-mono overflow-x-auto shadow-inner">
          <code >
            {`const portfolio = {
  Name: "SAROJ ADHIKARI",
  title: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  projects: [
    {
      Name: "react-LoginForm",
      description: "A web app that gives user to submit form .",
      link: "https://github.com/Sarojadhi/react-LoginForm"
    },
    {
      Name: "testiomonial-slider-project",
      description: "simple project . ",
      link: "https://github.com/Sarojadhi/testiomonial-slider-project-"
    }
  ],
  contact: {
    email: "sarojadh1111@gmail.com",
    github: "https://github.com/Sarojadhi" 
  }
};`
            }

            
          </code>
        </pre>
      </div>
     </>
   )
 }
 export default About
 