import React from 'react'
import { Nav } from '../utils/Data'
import Logo from '../utils/image/kofundme_logo-removebg-preview 1.png'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className=' bg-white text-[#060606] px-28 py-5 justify-between font-sedan hidden lg:flex '>
      <div>
   <p className='w-full'><img src={Logo} alt='logo' className='w-[80%]'/> </p> 
      </div>


      <div className='flex justify-center text-center xl:gap-10 lg:gap-5 pt-5 text-xl'>
      {Nav.map((nav) => (
       
        <p>{nav.name}</p>
      ))}
      </div>
      <div className='flex gap-5 text-base'>
    <Link to='/signIn'><button className='border py-3 px-3  font-readex  flex justify-between  gap-1'> Sign in</button></Link>
   <Link to='/signUp'> <button className='border py-3 px-3 font-readex bg-[#1211D7] text-[#F1F1F1] flex justify-between  gap-1'>Sign Up</button> </Link>
    </div>
      </nav>
    </div>
  )
}

export default Navbar