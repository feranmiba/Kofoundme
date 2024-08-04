import React from 'react'
import Logo from './utils/image/kofundme_logo-removebg-preview 1.png'

function Fotter() {
  return (

    <div>

    <div className='bg-[#ffffff] text-black not-italic font-readex '>
    <footer className=' py-28 px-3 md:px-20 flex justify-between flex-wrap lg:flex-nowrap gap-10 lg:gap-0'>


    <div>
    <img src={Logo} alt='logo' />
    <p className=' md:w-[424px] font-space font-light leading-8 mt-7'>Building a startup is not an easy feat. However, it doesn’t have to be that hard either. Enter kofoundme, the global community enabling members to discuss ideas</p>
    </div>

    <div className='mt-10'>
    <p className='text-x uppercase'>Company</p>
    <ul className='flex flex-col font-space gap-3 mt-5'>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </div>

    <div className='mt-10'>
    <p className='text-xl'>Privacy Policy</p>
    <ul className='flex font-space flex-col gap-3 mt-5'>
    <li>Terms of Service</li>
    <li>Help</li>
    </ul>
    </div>


    <div className='mt-10'>
    <p className='text-xl  uppercase'>Get In Touch</p>
    <ul className='flex font-space flex-col gap-3 mt-5'>
    <li> Twitter</li>
    <li>Facebook</li>
    <li> LinkedIn</li>
    <li>Instagram </li>
    </ul>
    </div>
    </footer>


    
    <div className='px-10 flex justify-center text-center font-space'>
    <p>
    Copyright © 2022 kofoundme.
    </p>


    </div>
    
      
    </div>
    </div>
  )
}

export default Fotter