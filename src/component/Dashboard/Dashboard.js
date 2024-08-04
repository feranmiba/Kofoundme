import React from 'react'
import Navbar from '../Navbar/Navbar'
import { People, Course, Discuss, Wave, Bag } from '../utils/Data'

function Dashboard() {
  return (
    <div>

    <Navbar />

    <section className='px-28 pb-24' style={{
        backgroundColor: "linear-gradient(to right, #FFFFFF 0%, #F6F3FE 100%)",
        marginBottom: 15
      }}>
        <div className='flex justify-center text-center py-14'>
        <div className='text-center justify-center flex flex-col items-center'>
        <h1 className='text-5xl font-bold pb-3'>Hi Ola Sam</h1>
        <p className='border-t-2 w-[30%] border-[#7A4BEF]'></p>
        </div>
        </div>



        <section className='flex justify-center gap-10 mt-10'>


            <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl w-[32%]'>
            <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={People} alt='peple' width={60} /></p>
            <p>
            <span className='font-bold'>Find A Co-founder</span>
            <br/>
            Use Filters To Get The Perfect 
            Co-founder</p>
            </div>

            <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl w-[32%]'>
            <p className='bg-[#1211D7] py-4 px-4 rounded-lg self-start'><img src={Course} alt='peple' width={50} /></p>
            <p>
            <span className='font-bold'>Start A Course</span>
            <br/> 15 Courses To Form</p>
            </div>


            <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl w-[32%]'>
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



    <section className='px-5 md:px-28 py-20 bg-white'>
    
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



    <section  className='px-28 py-24' style={{
        backgroundColor: "linear-gradient(to right, #FFFFFF 0%, #F6F3FE 100%)",
        marginBottom: 15
      }}>



      <section className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-20'>
      <div className='md:w-[50%] mt-10'>
     <h1 className='font-bold border-b-2 border-[#060606] w-[18%] text-2xl'>Connect</h1>
      <p className=' text-xl text-[#7474AE] mt-5'>Find Co-founders, Team Members, Advisors, and Investors From A Community Of More Than 400K Members</p>    </div>
  
  
      <section className='self-start'>
      <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl self-start transform -translate-x-10'>
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



    <section className='px-5 md:px-28 py-20 bg-white'>
    
    <section className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-20'>

    <div className=' bg-[#ffff] shadow-2xl py-4 px-3 flex gap-4 rounded-xl self-start mt-14 w-[50%]'>
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
