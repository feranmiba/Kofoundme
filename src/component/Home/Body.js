import React, { useEffect } from 'react'
import { Dot, Meet, BigBlue, Connect, Built, Fund, Message1, Collaboration, Connected } from '../utils/Data'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


function Body() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 });

  const ref3 = useRef(null)
  const isInView3 = useInView(ref3, { once: true, amount: 0.1 });

  const ref4 = useRef(null)
  const isInView4 = useInView(ref4, { once: true, amount: 0.1 });

 


  return (
    <div>

    <section className='flex justify-center mt-10'>
    <p className='w-[20%]'> <img src={Dot} alt="jhhh" className='w-[8%] transform lg:-translate-y-10 absolute' /> </p>
    </section>

    <section>

    <motion.section className='px-12 md:px-28 py-20' 
    ref={ref}
    initial={{ opacity: 0, y: 100 }} // Initial state before the animation
    animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation triggered when in view
    transition={{ duration: 1 }}
    >
    
    <section className='flex flex-wrap md:flex-nowrap justify-between'>
    <div>
    <p> <img src={BigBlue} alt='jsjh' className='transform -translate-x-28 absolute' /> </p>

    <p> <img src={Meet} alt='jhs' /> </p>
    </div>


    <div className='md:w-[50%] mt-10'>
   <h1 className='font-bold border-b-2 border-[#060606] w-[10%] text-2xl'>Meet</h1>
    <p className=' text-xl text-[#7474AE] mt-5'>There’s a reason why most companies are founded by multiple co-founders and not solo founders. They complement each other and have each others’ backs. </p>

   <p className='mt-5 text-xl text-[#7474AE]'>  Find your match today.Get the funding your startup needs to get your startup to the next level. OR Receieve the funding your startup needs by pitching infront of over 200 VCs actively investing in startups.</p>
    </div>
    </section>

    
    </motion.section>


    <section className='px-12 md:px-28 py-10 md:py-20 bg-white'>
    
    <section className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-20'>
    <motion.div className='md:w-[50%] mt-10' 
    ref={ref2}
    initial={{ opacity: 0, x: 10 }} // Initial state before the animation
    animate={isInView2 ? { opacity: 1, x: 0 } : {}} // Animation triggered when in view
    transition={{ duration: 1 }}>
   <h1 className='font-bold border-b-2 border-[#060606] w-[18%] text-2xl'>Connect</h1>
    <p className=' text-xl text-[#7474AE] mt-5'>Building a startup is not an easy feat. However, it doesn’t have to be that hard either. Enter kofoundme, the global community enabling members to discuss ideas, find co-founders, launch startups, connect with freelancers, get startup resources, and so much more.</p>

   <p className='mt-5 text-xl text-[#7474AE]'> From advisors, investors, mentors, entrepreneurs, cofoundme provides you with multiple solutions to find the perfect fit for your startup.</p>
    </motion.div>

    <div>
    <p> <img src={Connect} alt='jhs' /> </p>
    </div>
    </section>

    
    </section>


    <section className='px-12 md:px-28 py-10 lg:py-20 bg-white'  >
    
    <motion.section className='flex flex-wrap md:flex-nowrap justify-between md:gap-40' 
    ref={ref3}
    initial={{ opacity: 0, y: 100 }} // Initial state before the animation
    animate={isInView3 ? { opacity: 1, y: 0 } : {}} // Animation triggered when in view
    transition={{ duration: 1 }}
    >

    <div className='w-[150%] -mt-10 -ml-20'>
     <img src={Built} alt='jhs'  /> 
    </div>


    <div className='md:mt-14'>
   <h1 className='font-bold border-b-2 border-[#060606] w-[18%] text-2xl'>Build</h1>
    <p className=' text-xl text-[#7474AE] mt-5'>Curated programs and courses to help you expand your startup knowledge from zero to one.</p>

   

   <p className='mt-5 text-xl text-[#7474AE]'>  From advisors, investors, mentors, entrepreneurs, kofoundme
   provides you with multiple solutions to find the perfect fit for your startup.</p>
    </div>

 
    </motion.section>

    
    </section>


    <motion.section 
    ref={ref4}
    initial={{ opacity: 0}} // Initial state before the animation
    animate={isInView4 ? { opacity: 1 } : {}} // Animation triggered when in view
    transition={{ duration: 1.5 }} className='px-12 md:px-28 pb-36 bg-white'>
    
    <section className='flex flex-wrap lg:flex-nowrap justify-between gap-24'>
      <div className='bg-white'>

      <div> <img src={Dot} alt='had' className='transform translate-x-40 hidden lg:block'/> </div>
      <div className='mt-20'>
      <p className='bg-[#FBF8EF] text-3xl font-extrabold '>Join the Community  and Get All These Benefits</p>
      </div>
      <p className='mt-10'>Get access to hundreds of thousands of potential co-founders, teammates, and advisors on the world's largest startup platform.</p>
      
      </div>


      <section className='flex justify-between flex-wrap  gap-10' style={{
        backgroundColor: "linear-gradient(to right, #FFFFFF 0%, #F6F3FE 100%)"
      }}>

        <div className='bg-white shadow-2xl flex flex-col gap-6 justify-center items-center text-center py-6 rounded-xl  px-5 md:w-[45%] transform lg:translate-y-32'>
          
        
       <p className='bg-[#F1F7FF] px-5 py-4 rounded-xl'>  <img src={Message1} alt='hgs' /> </p> 

            <h1 className='text-xl font-bold'>Discussions</h1>
            <p>Let our community help out and answer all your questions</p>
        </div>

        <div className='bg-white shadow-2xl flex flex-col gap-6 justify-center items-center text-center py-6 rounded-xl  px-5 md:w-[45%]'>
          
        
        <p className='bg-[#F1F7FF] px-5 py-4 rounded-xl'>  <img src={Collaboration} alt='hgs' /> </p> 
 
             <h1 className='text-xl font-bold'>Collaboration tools</h1>
             <p>Tools to help ease collaboration and ideas between our members.</p>
         </div>


         <div className='bg-white shadow-2xl flex flex-col gap-6 justify-center items-center text-center py-6 rounded-xl  px-5 md:w-[45%] transform lg:translate-y-32'> 
        <p className='bg-[#F1F7FF] px-5 py-4 rounded-xl'>  <img src={Connected} alt='hgs' /> </p> 
 
             <h1 className='text-xl font-bold'>Stay connected</h1>
             <p>Search and message with thousands of members across the globe.</p>
         </div>

         <div className='bg-white shadow-2xl flex flex-col gap-6 justify-center items-center text-center py-6 rounded-xl  px-5 md:w-[45%]'>
          
        
        <p className='bg-[#F1F7FF] px-5 py-4 rounded-xl'>  <img src={Message1} alt='hgs' /> </p> 
 
             <h1 className='text-xl font-bold'>Weekly webinars </h1>
             <p>Join weekly webinars open to all members. Ask questions about your startup, pitch deck, and where to find funding.</p>
         </div>
      
      </section>
    </section>
    
    
    </motion.section>
  


    <section className='px-12 md:px-28 pb-10 bg-white lg:pt-32'>
    
    <section className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-20'>
    <div className='md:w-[50%] mt-10'>
   <h1 className='font-bold border-b-2 border-[#060606] w-[34%] text-2xl'>Get Funded</h1>
    <p className=' text-xl text-[#7474AE] mt-5'>Get the funding your startup needs to get your startup to the next level. OR Receieve the funding your startup needs by pitching infront of over 200 VCs actively investing in startups.</p>
    </div>

    <div>
    <p> <img src={Fund} alt='jhs' /> </p>
    </div>
    </section>

    
    </section>












 
    </section>


    </div>
  )
}

export default Body