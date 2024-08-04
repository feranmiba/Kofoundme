import React, { useState } from 'react'
import { AuthIMG, Logo, Vector  } from '../utils/Data'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Signup() {

  const [showPassword, setShowPassword] = useState(false)
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked) {
      // Logic to create the profile
      console.log("Profile created successfully!");
    } else {
      console.log("You must agree to the policy to create a profile.");
    }
  };


  return (
    <div>

    <section className='px-10 lg:pl-14 lg:flex justify-between gap-20'>



    <section className='mt-3'>
      <p><img src={Logo} alt='logo' /></p> 

      <div className='mt-5'>
      <h1 className='text-[#1211D7] text-3xl font-semibold pb-3'>Create An  Account </h1>
      <p className='font-bold text-lg'>Or click here to   <Link to='/signIn'><a className='text-[#4747ff]'>sign in</a></Link>  if you already have an account</p>
      </div>

      <form className='mt-5' onSubmit={handleSubmit}>
      <div>
      <label>Email</label>
      <p className='border py-3 px-2 mt-1'> <input type='email' className='outline-none w-[100%] bg-transparent' /> </p> 
      </div>
      
      <div className='mt-4'>
      <label>Mobile Number</label>
      <p className='border py-3 px-2 mt-1'> <input type='text' className='outline-none w-[100%] bg-transparent'  /> </p> 
      </div>
      

      <div className='mt-4'>
      <label>Password</label>
      <p className='border py-3 flex px-2 mt-1'> <input   type={showPassword ? "text" : "password"} className='outline-none w-[100%] bg-transparent' /> 
      <div
      className=" inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </div>
      </p> 
      </div>



      <div className='mt-4 flex'>
      <input type='checkbox'
      id='agree'
      checked={isChecked}
      onChange={handleCheckboxChange}
       className="form-checkbox h-5 w-5 text-blue-600"
      />

      <label htmlFor="agree" className="ml-2 text-gray-700 w-[400px]">
      By filling your registration form and checking the box, you agree to the Terms & Conditions and Privacy Policy.
    </label>
      
      </div>


      <div className='mt-4 flex'>
      <input type='checkbox'
      id='send'
      
       className="form-checkbox h-5 w-5 text-blue-600"
      />

      <label htmlFor="send" className="ml-2 text-gray-700 w-[400px]">
      By subscribing to koFounderme, you agree that we may send you marketing emails about kofoundme. You can unsubscribe anytime.
      Register
    </label>
      
      </div>



      <div className='mt-4 '>   
      <button
      type='submit'
      disabled={!isChecked}
      className={`px-4 py-2 bg-[#1211D7] w-[100%] text-white rounded ${
        !isChecked ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      >
      Sign Up
      
      </button>
      </div>
      
      </form>

      <div className='mt-4 flex justify-between'>
        <p className='mt-4'> <img src={Vector} alt='vec' /> </p>  <p className='text-2xl'>or</p>  <p className='mt-4'> <img src={Vector} alt='vec' /> </p>
      </div>

      <div className='mt-5 '>
      <button  className={`px-4 py-2 bg-[#9d9df5] w-[100%] text-white rounded ${
        !isChecked ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      >Sign Up with goggle</button>
      </div>
    
    
    </section>


    <div className='hidden lg:block'>
    <img src={AuthIMG} alt='ggg' />
    </div>




    </section>

    </div>
  )
}

export default Signup