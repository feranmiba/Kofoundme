import React from 'react'
import { VectorZag, Hero, Wave, Group } from '../utils/Data'
import Body from './Body'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div>

    <Navbar />

    <section className='px-5 md:px-28'>
    <div className='flex flex-wrap-reverse md:flex-nowrap justify-between'>


    <div className='w-[100%] md:w-[50%] mt-32'>
    <div className='flex gap-2'>
    <p className='text-[#1211D7] font-bold text-5xl leading-[70px]'> <span className='text-[#060606]'>Find</span>  Your <br /> <span className='text-[#060606]'>Next</span> Cofounder</p>
    <p><img src={VectorZag} alt='dd' /></p>
    </div>
    
    <p className='text-2xl leading-10 font-semibold'>Are You An Entrepreneur Looking For An Amazing Idea To Be Part Of ?</p>
    <div className='flex justify-between mt-2'>
        <div className='flex gap-5 text-base '>
        <button className='border py-2  px-3 font-readex bg-[#1211D7] text-[#F1F1F1] flex justify-between  gap-1'>Get Strated</button> 
        <button className='border py-2 px-3  font-readex  flex justify-between  gap-1'>Learn More</button>
        </div>

        <p className='text-5xl text-[#1211D7]'>+</p>


    </div>
    </div>



    <div className='flex -mt-14'>

    <p className=''> <img src={Group} alt='hhh' className='absolute mt-28 right-[400px]' /> </p>
    <div>

     <img src={Hero} alt='hero'  className='w-[80%] z-50' /> 
     <p className='z-0'><img src={Wave} alt='wave' className='transform -translate-y-full -z-10 absolute right-2' /></p>
     </div>
    </div>
    </div>




    </section>
    

    <Body />
    </div>
  )
}

export default Home