import React, { useState, useEffect } from 'react';
import { AuthIMG, Logo, Vector } from '../utils/Data';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const url = "https://kofounme-backend.onrender.com/"
  const url ="http://localhost:3000/"


  const [showPassword, setShowPassword] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [user, setUser] = useState({
    email: "",
    phone_no: "",
    password: ""
  });

  const navigate = useNavigate();

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
    setIsLoading(true);

    if (isChecked) {
      try {
        const response = await axios.post(`${url}auth/signUp`, user);
        console.log(response.data);

        if (response.data) {
          setMessage(response.data.message);
          setShowVerify(true);
          setIsSuccess(true);
          localStorage.setItem("email", user.email)
        }
      } catch (error) {
        setIsLoading(false);
        setMessage(error.response?.data?.message || "Sorry for the inconvenience, please try again.");
        console.log(error);
      }

      setIsLoading(false);
    } else {
      console.log("You must agree to the policy to create a profile.");
    }

    setIsLoading(false);
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
    const email =  localStorage.getItem("email")
      const response = await axios.post(`${url}auth/verify-code`, { 
        email: email,
        code : emailCode
       });
      console.log(response.data);

      if (response.data) {
        localStorage.setItem('Newuser', JSON.stringify(response.data.profile));
        localStorage.setItem('token', response.data.accessToken);
        setMessage(response.data.message);
        navigate("/profile");
      }
    } catch (error) {
      setIsLoading(false);
      setMessage("Your profile couldn't be created now. Please check your internet and try again later.");
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <section className='px-10 lg:pl-14 lg:flex justify-between gap-20'>
        <section className='mt-3'>
          <p><img src={Logo} alt='logo' /></p> 

          {message && (
            <div className={`fixed bottom-4 right-4 p-4 text-center text-white ${isSuccess ? 'bg-[#28a745]' : 'bg-[#dc3545]'} border rounded-md`}>
              {message}
            </div>
          )}

          {!showVerify && (
            <section>
              <div className='mt-5'>
                <h1 className='text-[#1211D7] text-3xl font-semibold pb-3'>Create An Account</h1>
                <p className='font-bold text-lg'>
                  Or click here to 
                  <Link to='/signIn' className='text-[#4747ff]'> sign in</Link>
                  if you already have an account
                </p>
              </div>

              <form className='mt-5' onSubmit={handleSubmit}>
                <div>
                  <label>Email</label>
                  <p className='border py-3 px-2 mt-1'>
                    <input 
                      type='email'
                      className='outline-none w-[100%] bg-transparent'
                      name='email'
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                  </p>
                </div>
                
                <div className='mt-4'>
                  <label>Mobile Number</label>
                  <p className='border py-3 px-2 mt-1'>
                    <input 
                      type='text'
                      className='outline-none w-[100%] bg-transparent'
                      name='phone_no'
                      value={user.phone_no}
                      onChange={handleChange}
                      required
                    />
                  </p>
                </div>
                
                <div className='mt-4'>
                  <label>Password</label>
                  <p className='border py-3 flex px-2 mt-1'>
                    <input 
                      type={showPassword ? "text" : "password"}
                      className='outline-none w-[100%] bg-transparent'
                      name='password'
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                    <div
                      className="inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </p>
                </div>

                <div className='mt-4 flex'>
                  <input 
                    type='checkbox'
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
                  <input 
                    type='checkbox'
                    id='send'
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="send" className="ml-2 text-gray-700 w-[400px]">
                    By subscribing to koFounderme, you agree that we may send you marketing emails about kofoundme. You can unsubscribe anytime.
                  </label>
                </div>

                <div className='mt-4'>   
                  <button
                    type='submit'
                    disabled={!isChecked}
                    className={`px-4 py-2 bg-[#1211D7] w-[100%] text-white rounded ${
                      !isChecked ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? <ClipLoader size={20} color='#ffff' /> : "Submit"}
                  </button>
                </div>
              </form>

              <div className='mt-4 flex justify-between'>
                <p className='mt-4'><img src={Vector} alt='vec' /></p>
                <p className='text-2xl'>or</p>
                <p className='mt-4'><img src={Vector} alt='vec' /></p>
              </div>

              <div className='mt-5'>
                <button className='px-4 py-2 bg-[#9d9df5] w-[100%] text-white rounded'>
                  Sign Up with Google
                </button>
              </div>
            </section>
          )}

          {showVerify && (
            <section>
              <div>
                <h1>Check your email for a verification code</h1>
              </div>
              <form className='mt-10' onSubmit={handleVerify}>
                <div>
                  <label>Email Code</label>
                  <p className='border py-3 px-2 mt-1'>
                    <input 
                      type='text' 
                      placeholder='Email code' 
                      className='outline-none w-[100%] bg-transparent'
                      value={emailCode}
                      onChange={(e) => setEmailCode(e.target.value)}
                    />
                  </p>
                </div>

                <button
                  type='submit'
                  className='px-4 py-2 bg-[#1211D7] w-[100%] text-white rounded mt-10'
                >
                  Verify
                </button>
              </form>
            </section>
          )}
        </section>

        <div className='hidden lg:block'>
          <img src={AuthIMG} alt='ggg' />
        </div>
      </section>
    </div>
  );
}

export default Signup;
