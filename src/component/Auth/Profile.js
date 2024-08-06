import React, { useState, useEffect } from 'react';
import { Profiles, Logo } from '../utils/Data';
import { FiCheck } from "react-icons/fi";
import { ClipLoader } from 'react-spinners'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const url = "https://kofounme-backend.onrender.com/"

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("Newuser"); 
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setUser(parsedUserData);
      setFormData(prevFormData => ({
        ...prevFormData,
        email: parsedUserData.email
      }));
    }
  }, []);

  console.log(user.email)
  const email = user.email

  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    pronouns: '',
    picture: null,
    tagline: '',
    class: '',
    role: '',
    looking_for: '',
    business: '',
    skill: '',
    interest: '',
  });
  const [message, setMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, isLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  


  const role = [ "Founder", "Advisor", "Intern", "Investor" ]
  const lookingFor = [ "Team Member", "Cofounder", "Investor", "Advisor", "Intern", "Startups" ]
  const business = [ "Launch", "Pre-Revenue", "Early", "Growth" ]
  const skill = [ "Analysis", "Business Planning/ Processes/ Systems", "Crypto", "Communities", "Corporate Strategy", "Engineering", "Finance", "Fundraising", "Graphics/ Design", "Human Resourcse", "Leadership", "Management", 
    "Marketing /Communications", "NFT", "Operations", "Programming", "Technical", "Team Building", "Web3" ]
    const interest  = [ "Education", "Networking", "Investment", "Mentorship" ]

  const handleProfilePic = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      picture: file,
    }));
  };

  const handleLookingFor = (look) => {
    setFormData((prevData) => ({
      ...prevData,
      looking_for: look,
    }));
  }

  const handleSkill = (skills) => {
    setFormData((prevData) => ({
      ...prevData,
      skill: skills
    }) )
  }

  const handleRoleClick = (role) => {
    setFormData((prevData) => ({
      ...prevData,
      role: role,
    }));
  };

  const handlebusiness = (bus) => {
    setFormData((prevData) => ({
      ...prevData,
      business: bus
    }))
  }

  const handleInterest = (inter) => {
    setFormData((prevData) => ({
      ...prevData,
      interest: inter,
    }))
  }

  console.log(formData)

  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep === 0 && formData.name) {
      setCurrentStep(1);
    } else if (currentStep === 1 && formData.picture) {
      setCurrentStep(2);
    } else if (currentStep === 2 && formData.role) {
      setCurrentStep(3);
    } else if (currentStep === 3 && formData.looking_for) {
      setCurrentStep(4)
    }  else if (currentStep === 4 && formData.business) {
      setCurrentStep(5)
    } else if (currentStep === 5 && formData.skill) {
      setCurrentStep(6)
    } else if (currentStep === 6 && formData.interest) {
      setCurrentStep(7)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    isLoading(true);
  
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
  
    try {
      const response = await axios.post(`${url}profile/create-profile`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
  
      if (response.data) {
        localStorage.setItem("UserProfile", response.data.profile);
        setIsSuccess(true);
        setMessage(response.data.message);
        navigate("/dashboard");
      } else {
        setMessage('Failed to create profile');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
    isLoading(false);
  };
  

  return (
    <div className="flex justify-center px-10 lg:pl-14 lg:px-0">

    {message && (
      <div className={`fixed bottom-4 right-4 p-4 text-center text-white ${isSuccess ? 'bg-[#28a745]' : 'bg-[#dc3545]'} border rounded-md`}>
        {message}
      </div>
    )}

    <section className='flex justify-between gap-10'>

    <section className='lg:w-[80%]'>
    <div> <img src={Logo} alt='jhb' /> </div>
    <section className='flex justify-between gap-10  mt-10'>
      <div className="flex flex-col items-center gap-20 mb-4">
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${formData.name ? 'bg-[#1c2697]' : 'border rounded-full px-5 py-3'}`}>
          <FiCheck className='text-white'/>
        </div>
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${formData.picture ? 'bg-[#1c2697]' : 'border rounded-full px-5 py-3'} `}>
        <FiCheck className='text-white'/>
        </div>
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${formData.role ? 'bg-[#1c2697]' : 'border rounded-full px-5 py-3'} `}>
        <FiCheck className='text-white'/>
        </div>
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${formData.looking_for ? 'bg-[#1c2697]' : 'border rounded-full px-5 py-3'} `}>
        <FiCheck className='text-white'/>
        </div>
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${formData.business ? 'bg-[#1c2697]' : 'border rounded-full px-5 py-3'} `}>
        <FiCheck className='text-white'/>
        </div>
        <div className={`rounded-full w-10 h-10 flex items-center justify-center ${formData.skill ? 'bg-[#1c2697]' : 'border rounded-full px-5 py-3'} `}>
        <FiCheck className='text-white'/>
      </div>
      <div className={`rounded-full w-10 h-10 flex items-center justify-center ${formData.interest ? 'bg-[#1c2697]' : 'border rounded-full px-5 py-3'} `}>
      <FiCheck className='text-white'/>
    </div>
      </div>
      <form className='flex flex-col gap-20' onSubmit={handleSubmit}>
       
          <div>
          <h1 className='font-bold'>Personal Information</h1>
           <p>Your account has been created and validated</p>
            {currentStep === 0 && (  
              <div>
              <div>
              <label>First Name</label>
              <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
            </div>
            <div>
            <label>Last Name</label>
            <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          </div>

          <div>
            <label>Pronoun</label>
            <input
            type="text"
            name="pronouns"
            placeholder='Her/Him'
            value={formData.pronouns}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          </div>

          <div>
            <label>City</label>
            <input
            type="text"
            name="city"
            placeholder='Her/Him'
            value={formData.city}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          </div>

          <div>
          <label>Tagline</label>
          <input
          type="text"
          name="tagline"
          placeholder='Your phone code'
          value={formData.tagline}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        </div>


        <div>
        <button className='border px-6 py-1 bg-[#1211D7] text-[#F1F1F1]' onClick={handleNextStep}>Save</button>
        </div>


              </div>
          
          
          )}
          </div> 
       
        
          <div>
          <h1 className='font-bold'>Profile Picture</h1>
            <label >Share the best version of yourself
            </label>
            {currentStep === 1 && ( 
              <section>
              
              <p><input type="file" id='upload-button' multiple={false} onChange={handleProfilePic} name='picture'  class=' border w-[70%] lg:w-[100%] px-10 py-5'/> </p>
              
              {currentStep === 1 && (  <div className='mt-5'>
        <button className='border px-6 py-1 bg-[#1211D7] text-[#F1F1F1]' onClick={handleNextStep}>Save</button>
              </div> )}
              </section>
              )}
          </div>  
       
      
          <div>
          <h1 className='font-bold'>Your Role</h1>
            <p>Whats is your role ?</p>
            {currentStep === 2 && (  
              <section className='flex flex-wrap gap-5'>
               {role.map((roles) => (

                <div className='px-6 py-3 border rounded-lg w-[45%] text-center' onClick={() => handleRoleClick(roles)}>
                {roles}
                </div>
              ))}
              
              </section>
                )}
                {currentStep === 2 && (   <div className='mt-5'>
                <button className='border px-6 py-1 bg-[#1211D7] text-[#F1F1F1]' onClick={handleNextStep}>Save</button>
                      </div>
                )}
          </div>



          <div>
          <h1 className='font-bold'>Looking For </h1>
          <p>What are you looking for ?</p>
          {currentStep === 3 && (
            <section className='flex flex-wrap gap-5'>
            {lookingFor.map((look) => (
              <div onClick={() => handleLookingFor(look)} className='px-6 py-3 border rounded-lg w-[45%] text-center'>
              {look}
              </div>
          ))}
            
            </section>
          )}

          {currentStep === 3 && ( <div className='mt-5'>
            <button className='border px-7 py-1 bg-[#1211D7] text-[#F1F1F1]' onClick={handleNextStep}>Save</button>
                  </div>
          )}


          </div>



          <div>
          <h1 className='font-bold'>Business Information</h1>
          <p>What Is Your Current Business Stage?</p>
          { currentStep === 4 && (
            <section className='flex flex-wrap gap-5'>
            {business.map ((bus) => (
              <div className='px-6 py-3 border rounded-lg w-[45%] text-center' onClick={() => handlebusiness(bus)}>
              {bus}
              </div>
        )  )}
       
            </section>

          )}
          { currentStep === 4 && ( <div className='mt-5'>
          <button className='border px-7 py-1 bg-[#1211D7] text-[#F1F1F1]' onClick={handleNextStep}>Save</button>
                </div> )}
          </div>

          <div>
          <h1 className='font-bold'>Your Skill ? </h1>
          <p>What Specific Skills Do You Have ?</p>
          { currentStep === 5 && (
            <section className='flex flex-wrap gap-5 mt-5'>
            {skill.map ((skills) => (
              <div className='px-6 py-3 border rounded-lg w-[45%] text-center self-start' onClick={() => handleSkill(skills)}>
              {skills}
              </div>
        )  )}
            </section>

          )}
          { currentStep === 5 && ( <div className='mt-5'>
          <button className='border px-6 py-1 bg-[#1211D7] text-[#F1F1F1]' onClick={handleNextStep}>Save</button>
                </div>
  )}

          
          </div>



          <div>
          <h1 className='font-bold'>Interest</h1>
          <p>What Are You Interested In Here At CoFoundersLab ?</p>
          { currentStep === 6 && (
            <section className='flex flex-wrap gap-5'>
            {interest.map ((inter) => (
              <div className='px-6 py-3 border rounded-lg w-[45%] text-center'onClick={() => handleInterest(inter)}>
              {inter}
              </div>
        )  )}
      
            </section>

          )}
      { currentStep === 6 && (
          <div className='mt-5'>
          <button className='border px-6 py-1 bg-[#1211D7] text-[#F1F1F1]' onClick={handleNextStep}>Save</button>
                </div> )}

          
          </div>


          <button type='submit' className='border bg-[#1211D7] text-white mb-5 px-5 py-3'>
          {loading ? <ClipLoader size={20} color='#ffff' /> : "Create Profile"}
          </button>
       
      </form>
      </section>
      </section>





      <div className='w-full hidden lg:block'>
      <img src={Profiles} alt='img' />
      </div>

      </section>
    </div>
  );
};

export default Profile;