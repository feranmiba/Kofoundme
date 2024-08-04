import React, { useState } from 'react'
import { AuthIMG, Logo, Vector  } from '../utils/Data'

function Verify() {
  return (
    <div>

    <section className='pl-14 flex justify-between gap-20'>

    <section className='mt-5'>
      <p><img src={Logo} alt='logo' /></p> 

      <div className='mt-14'>
      <h1 className='text-[#1211D7] text-3xl font-semibold pb-3'>Verification</h1>
      <p className='font-bold text-lg'>check your email and phone for verification code</p>
      </div>

      <form className='mt-5'>
      <div>
      <label>Email Code</label>
      <p className='border py-3 px-2 mt-1'> <input type='email' placeholder='Email code' className='outline-none w-[100%] bg-transparent' /> </p> 
      </div>


      <div className='mt-4'>
      <label>Phone Code</label>
      <p className='border py-3 px-2 mt-1'> <input type='email' placeholder='Email Code' className='outline-none w-[100%] bg-transparent' /> </p> 
      </div>

      
      <div className='mt-4 '>   
      <button
      type='submit'
      className='px-4 py-2 bg-[#1211D7] w-[100%] text-white rounded'
      >
      Verify
      </button>
      </div>
      
      </form>

    

      
    
    
    </section>


    <div>
    <img src={AuthIMG} alt='ggg' />
    </div>




    </section>

    </div>
  )
}

export default Verify