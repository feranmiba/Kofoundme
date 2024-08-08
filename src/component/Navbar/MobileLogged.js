import React, { useState } from 'react'
import Logo from '../utils/image/kofundme_logo-removebg-preview 1.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Nav } from '../utils/Data';


function MobileLogged({ picture }) {

    const url = "https://kofounme-backend.onrender.com/"
    // const url ="https://ticket-feranmibas-projects.vercel.app/"

  const [visible, setVisible] = useState(false)
 

  const toggleMenu = () => {
    setVisible(!visible)
  }

  return (
    <div className='px-5 py-5 sm:px-10 bg-[#ffff] lg:hidden'>
  <div className='relative'>
    <section className='flex justify-between lg:hidden'>
     <Link to="/"><p className='w-[80%]'> <img src={Logo} alt='logo' /></p></Link> 
     <div className='flex self-start gap-4'>
     <p className='w-[50%]'><img src={`${url}${picture}`} alt='profile_pic' className='rounded-full w-[80px] h-[60px]' /></p>
     <p  onClick={toggleMenu}> <FaBars className='text-2xl mt-5'/> </p>
     </div>
    </section>  
  </div>



  <AnimatePresence>
  {visible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='fixed z-50 bg-[#fff] shadow-2xl  right-0 top-0 w-full lg:hidden'
    >
      <div className='px-10 w-full h-screen pt-10 lg:hidden'>
        <div className='flex justify-between'>
          <p onClick={toggleMenu} className='duration-100 mt-10'>
            <FaTimes className='text-3xl text-black' />
          </p>
          <div>
          </div>
        </div>
        <div className='flex justify-center text-center gap-5 flex-col mt-5'>
          {Nav.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.to}
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-slate-900 text-xl' : 'text-black text-xl'
              }
            >
              <p>{nav.name}</p>
            </NavLink>
          ))}
         
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

</div>
  )
}

export default MobileLogged