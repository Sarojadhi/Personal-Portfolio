import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='m-3 p-5 flex gap-3 bg-amber-600 rounded-2xl'>
                <Link to= '/Logo'>Logo</Link>
                
            <div className='m-0 p-0 flex gap-10 justify-center flex-1 '>
                <Link to='/' >HOME</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact</Link>
          

        </div >
         <button className="m-0 p-2 flex flex-col bg-blue-500 text-white text-xl font-semibold rounded-full shadow-md ml-auto hover:bg-blue-600 hover:scale-105 transition duration-300">
  HIRE ME </button>
        </div>




            </>
  )
}

export default Navbar
