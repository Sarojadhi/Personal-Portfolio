import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div>
        <footer className='m-9 p-9 border-2 bg-blue h-30 w-auto bg-neutral-500 rounded-2xl'>
          <div >
            <p className="m-0 p-0 text-2xl flex justify-center font-bold ">&copy; {new Date().getFullYear()} Saroj. All rights reserved.</p>
            <div className='m-0 p-0 flex justify-center gap-5 cursor-pointer'>
              <Link className="font-bold text-amber-50 hover:text-amber-500 " to="/">Home</Link>
              <Link className="font-bold text-amber-50 hover:text-amber-500" to="/About">About</Link>
              <Link className="font-bold text-amber-50 hover:text-amber-500" to="/Contact">Contact</Link>

              <icon className = "m-0 p-0 gap-4 flex justify-around">

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-blue-800 text-2xl "
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-black text-2xl  "
                >
                  <FontAwesomeIcon icon={faGithub} />
                  
                </a>


                 <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-blue-900 text-2xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </icon>
            </div>

          </div>




        </footer>





      </div>
    </>
  )
}

export default Footer
