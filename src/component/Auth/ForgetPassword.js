import React, { useState } from 'react'
import { AuthIMG, Logo, Vector  } from '../utils/Data'
import { Link } from 'react-router-dom';




function ForgetPassword() {

  
  
   
  
    const handleSubmit = (event) => {
      event.preventDefault();
     
        console.log("Profile created successfully!");
     
        
    };

  return (
    <div>

    <section className='px-10 lg:pl-14 lg:flex justify-between gap-20'>



    <section className='mt-5 lg:w-[40%]'>
      <p><img src={Logo} alt='logo' /></p> 

      <div className='mt-24'>
      <h1 className='text-[#1211D7] text-3xl font-semibold pb-3'>Forgot password </h1>
      <p className='font-bold text-lg'>Go back to the  <Link to='/signIn'><a className='text-[#4747ff]'>sign In</a></Link>  page</p>
      </div>

      <form className='mt-5' onSubmit={handleSubmit}>
      <div>
      <label>Email</label>
      <p className='border py-3 px-2 mt-1'> <input type='email' className='outline-none w-[100%] bg-transparent' /> </p> 
      </div>




      <div className='mt-4 '>   
      <button
      type='submit'
      className='px-4 py-2 bg-[#1211D7] w-[100%] text-white rounded'
      >
      Submit
      </button>
      </div>
      
      </form>
    
    </section>


    <div className='hidden lg:block'>
    <img src={AuthIMG} alt='ggg' />
    </div>




    </section>

    </div>
  )
}

export default ForgetPassword