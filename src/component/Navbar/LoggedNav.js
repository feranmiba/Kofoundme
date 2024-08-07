import React from 'react'
import { Nav } from '../utils/Data'
import Logo from '../utils/image/kofundme_logo-removebg-preview 1.png'
import { olaSam, Mail, Peoples  } from '../utils/Data'
import { FiMail } from 'react-icons/fi';
import { FaUserFriends } from "react-icons/fa";

function LoggedNav({ name, lastname, picture }) {
 const url = "https://kofounme-backend.onrender.com/"
  return (
    <div>

    <nav className='bg-white text-[#060606] px-28 py-5 justify-between font-sedan hidden lg:flex items-center'>
    <div>
      <p className='w-full'><img src={Logo} alt='logo' className='w-[80%]'/> </p>
    </div>
  
    <div className='flex justify-center text-center xl:gap-10 lg:gap-5 text-xl'>
      {Nav.map((nav, index) => (
        <p key={index}>{nav.name}</p>
      ))}
    </div>


    <div className='flex gap-5 text-base'>

    <div className='flex gap-3 self-start'>
    <FiMail className='text-3xl'/>
    <FaUserFriends className='text-3xl'/>
    </div>

    <div className='flex gap-2 items-center'>
    <p className='w-[30%]'><img src={`${url}${picture}`} alt='profile_pic' className='rounded-full w-[40px] h-[40px]' /></p>
    <p>{name} {lastname}</p>
    </div>
    </div>
    
   
  </nav>
      
    </div>
  )
}

export default LoggedNav
