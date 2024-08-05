import React, { useState } from 'react'
import { AuthIMG, Logo, Vector  } from '../utils/Data'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ClipLoader} from 'react-spinners'
import axios from 'axios'

function SignIn() {
    const url = "https://kofounme-backend.onrender.com/"

  const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false);
    const [user, setUser] = useState({
      email: "",
      password: ""
    })
  
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser(prevUser => ({
        ...prevUser,
        [name]: value
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true)
      if (isChecked) {
        try {
          const response = await axios.post(`${url}/auth/login`, user);
          console.log(response.data);
          if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data.profile));
            localStorage.setItem('token', response.data.accessToken);
            setMessage(response.data.message);
            setIsSuccess(true) 
            navigate("/dashboard")
             }
        } catch (error) {
          setIsLoading(false)
          setMessage("incorrect password")
          console.log(error)
        }


      
      } else {
        console.log("error pooooooooo");
      }
    };



  return (
    <div>

    <section className='px-10 lg:pl-14  lg:flex justify-between gap-20'>



    <section className='mt-5'>
      <p><img src={Logo} alt='logo' /></p> 


      {message && (
        <div className={`fixed bottom-4 right-4 p-4 text-center text-white ${isSuccess ? 'bg-[#28a745]' : 'bg-[#dc3545]'} border rounded-md`}>
          {message}
        </div>
      )}

      <div className='mt-14'>
      <h1 className='text-[#1211D7] text-3xl font-semibold pb-3'>Log Into Your  Account </h1>
      <p className='font-bold text-lg'>Or click here to  <Link to="/signUp"><a href='/signIn' className='text-[#4747ff]'>sign Up</a></Link>   if you don't  have an account</p>
      </div>

      <form className='mt-5' onSubmit={handleSubmit}>
      <div>
      <label>Email</label>
      <p className='border py-3 px-2 mt-1'> <input type='email' className='outline-none w-[100%] bg-transparent' onChange={handleChange} name='email' value={user.email} required/> </p> 
      </div>
      
      <div className='mt-4'>
      <label>Password</label>
      <p className='border py-3 flex px-2 mt-1'> <input   type={showPassword ? "text" : "password"} className='outline-none w-[100%] bg-transparent' onChange={handleChange} name='password' value={user.password}  required/> 
      <div
      className=" inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </div>
      </p> 
      </div>


      <div className='flex justify-between'>
      
      
     

      <div className='mt-4 flex'>
      <input type='checkbox'
      id='agree'
      checked={isChecked}
      onChange={handleCheckboxChange}
       className="form-checkbox h-5 w-5 text-blue-600"
      />
      <label htmlFor="agree" className="ml-2 text-gray-700">
      Remember me 
    </label>
      
      </div>



      <div className=' mt-5'>
      <Link to='/forget'>
     <p>Forget Password ?</p> 
      </Link>
      </div>


      </div>




      <div className='mt-4 '>   
      <button
      type='submit'
      disabled={!isChecked}
      className={`px-4 py-2 bg-[#1211D7] w-[100%] text-white rounded ${
        !isChecked ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      >
      {loading ? <ClipLoader size={20} color='#ffff' /> : "Sign In"}
      
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
      >Sign in with goggle</button>
      </div>
    
    
    </section>


    <div className='hidden lg:block'>
    <img src={AuthIMG} alt='ggg' />
    </div>




    </section>

    </div>
  )
}

export default SignIn