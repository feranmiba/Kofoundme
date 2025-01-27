import React, { useState} from 'react'
import { useEffect } from 'react';
import { People, Course, Discuss, Wave, Bag } from '../utils/Data'
import LoggedNav from '../Navbar/LoggedNav';
import MobileLogged from '../Navbar/MobileLogged';




function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    


  

    const [user, setUsers] = useState({
      user_id: "",
      first_name: '',
      last_name: '',
      pronouns: '',
      picture: null,
      tagline: '',
      role: '',
      looking_for: '',
      business: '',
      skill: '',
      interest: '',
    });

    const userData = localStorage.getItem("UserProfile")
   const parsedUserData = JSON.parse(userData);

   useEffect(() => {
    setUsers(parsedUserData); 
  }, [parsedUserData]);

   console.log(user.first_name)
   console.log("its working", user.skill)
   console.log("user is", user.user_id)
  


  return (
    <div>

    <LoggedNav  
      name={user.first_name}
      lastname={user.last_name}
      picture={user.picture}
      />
      <MobileLogged 
      picture={user.picture}
      />

  

    <section className='px-12 md:px-28 pb-24' style={{
        backgroundColor: "linear-gradient(to right, #FFFFFF 0%, #F6F3FE 100%)",
        marginBottom: 15
      }}>
        <div className='flex justify-center text-center py-14'>
        <div className='text-center justify-center flex flex-col items-center'>
        <h1 className='text-5xl font-bold pb-3'>Hi {user.first_name}</h1>
        <p className='border-t-2 w-[30%] border-[#7A4BEF]'></p>
        </div>
        </div>



        <section className='flex flex-wrap items-center lg:flex-nowrap justify-center gap-10 mt-10'>


            <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl lg:w-[32%]'>
            <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={People} alt='peple' width={60} /></p>
            <p>
            <span className='font-bold'>Find A Co-founder</span>
            <br/>
            Use Filters To Get The Perfect 
            Co-founder</p>
            </div>

            <div className=' w-[100%] bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl lg:w-[32%]'>
            <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={Course} alt='peple' width={50} /></p>
            <p>
            <span className='font-bold'>Start A Course</span>
            <br/> 15 Courses To Form</p>
            </div>


            <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl lg:w-[32%]'>
            <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={Discuss} alt='peple' width={50} /></p>
            <p>
            <span className='font-bold'>Find a co-founder</span>
            <br/>
            Endless Conversation With 
            Founders</p>
            </div>


            <div>
         <p className='z-0'><img src={Wave} alt='wave' className='transform -translate-y-96 -z-10 absolute right-2' /></p>
            </div>



        
        
        </section>
    
    
    </section>



    <section className='px-12 md:px-28 py-20 bg-white'>
    
    <section className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-20'>
    <div className='md:w-[50%] mt-10'>
   <h1 className='font-bold border-b-2 border-[#060606] w-[18%] text-2xl'>Meet</h1>
    <p className=' text-xl text-[#7474AE] mt-5'>There’s a reason why most companies are founded by multiple co-founders and not solo founders. They complement each other and have each others’ backs. </p>    </div>


    <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl self-start mt-14'>
    <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={Discuss} alt='peple' width={30} /></p>
    <p>
    <span className='font-bold'>Find A Co-founder</span>
    <br/>
    Join Endless Conversations With Entrepreneurs.</p>
    </div>
    </section>

    
    </section>



    <section  className='px-12 md:px-28 py-24' style={{
        backgroundColor: "linear-gradient(to right, #FFFFFF 0%, #F6F3FE 100%)",
        marginBottom: 15
      }}>



      <section className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-20'>
      <div className='md:w-[50%] mt-10'>
     <h1 className='font-bold border-b-2 border-[#060606] w-[18%] text-2xl'>Connect</h1>
      <p className=' text-xl text-[#7474AE] mt-5'>Find Co-founders, Team Members, Advisors, and Investors From A Community Of More Than 400K Members</p>    </div>
  
  
      <section className='self-start'>
      <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl self-start transform lg:-translate-x-10'>
      <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={People} alt='peple' width={30} /></p>
      <p>
      <span className='font-bold'>Find A Co-founder</span>
      <br/>
      Join Endless Conversations With Entrepreneurs.</p>
      </div>

      <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl self-start mt-14'>
      <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={Discuss} alt='peple' width={30} /></p>
      <p>
      <span className='font-bold'>Talk To An Advisor</span>
      <br/>
      Get professional advice from industry experts.</p>
      </div>



      </section>
      </section>
  
    
    
    
    </section>



    <section className='px-12 md:px-28 py-20 bg-white'>
    
    <section className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-20'>

    <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl self-start mt-14 lg:w-[50%]'>
    <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={Bag} alt='peple' width={80} /></p>
    <p>
    <span className='font-bold'>Find an investor</span>
    <br/>
    Potential To Connect You To More Than 200+ VCs That Are Actively Investing In Startups Just Like Yours</p>
    </div>


    <div className='md:w-[50%] mt-10'>
    <h1 className='font-bold border-b-2 border-[#060606] w-[18%] text-2xl'>Build </h1>
     <p className=' text-xl text-[#7474AE] mt-5'>Learn How To Pitch To Investors, Create A Pitch Deck, And Practice Your Pitch.</p>    </div>
    </section>

    
    </section>
      
    </div>
  )
}

export default Dashboard
