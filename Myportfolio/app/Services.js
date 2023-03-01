import React from 'react'
import Image from 'next/image'
import pic from "..//public/Image (2).png"
import "./globals.css"
import Link from 'next/link'
import rating from "..//public/Rating.png"
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from "framer-motion"
import { useRef } from 'react'
import { useEffect } from 'react'
import { FaEnvelope, FaLaptop, FaPlus } from 'react-icons/fa'
function Services() {
  const animation = useAnimation()
  const animation2 = useAnimation()
  const [ref, InView] = useInView({threshold:0.1})
  useEffect(()=>{
    if(InView){
      animation.start({
       top:"-20px",
             transition:{
          delay:0,
        
        },
        opacity:1,
      
        
      })
      animation2.start({
      
             transition:{
          delay:0
          ,
      
        },
        opacity:1
        
        
      })
    }
    else{
      animation.start({
        top:"20px",
             transition:{
          delay:0,
          duration:1
        },
        opacity:0
        
      })
            animation2.start({
       
        transition:{
          delay:0,
          
        },
        opacity:0
        
      })
    }
  
  },[InView, animation, animation2])
  return (
    <>
    <motion.div ref={ref} animate={animation} initial={{top: "20px"}} className='relative flex w-full justify-center px-[20px] mt-[92px]' id="Services">
      <div className='max-w-[1095px] items-center w-full '>
        <div className='text-[#EF6D58] tracking-[3px] text-center'>
          SERVICE
        </div>
        <div className='flex justify-center mt-[20px]'>
          <div className='max-w-[435px] w-full text-[#391400] text-[45px] sm:text-[56px] font-Epilogue font-[800] leading-[64px] text-center'>
            What I Can Help You With
          </div>
        </div>
<div className='w-full mt-[64px]'>
  <div className='grid grid-cols-1 sm:grid-cols-2'>
    <div className='border-[1px] border-[#F3D1BF] rounded-tl-[6px] rounded-bl-[6px] p-[48px]'>
      <div id="g" className=' items-center'>
        <div className='bg-[#EF6C57] w-fit p-[24px] rounded-full'>
          <FaLaptop className='text-white text-[32px]'/>
        </div>
        <div id='text' className='text-[24px] pl-[24px] break-words font-Epilogue font-bold text-[#391400]'>
          Frontend Development
        </div>
      </div>
        <div className='font-Epilogue pt-[28px] font-normal leading-8 text-[rgba(57,20,0,0.64)]'>
        I have a good understanding of Frontend development and I am also skillfull in making responsive Websites and Webapps 
        </div>
        <a href="/#Contact" className='flex items-center mt-[30px]'>
            <div className='w-fit p-[14px] text-[#ef6c57] bg-[white] rounded-full'>
                <FaEnvelope/>
            </div>
            <div className='text-[#391400] font-Epilogue pl-[16px]'>
              Email ?
            </div>
        </a>
    </div>
    <div className='border-[1px] border-[#F3D1BF] rounded-tr-[6px] rounded-br-[6px] p-[48px]'>
      <div id='g' className=' items-center'>
        <div className='bg-[#EF6C57] w-fit p-[24px] rounded-full'>
          <FaLaptop className='text-white text-[32px]'/>
        </div>
        <div id='text'  className='text-[24px] break-words whitespace-[wrap] pl-[24px] font-Epilogue font-bold text-[#391400]'>
          Api Understanding
        </div>
      </div>
        <div className='font-Epilogue pt-[28px] font-normal leading-8 text-[rgba(57,20,0,0.64)]'>
          In addition to my Frontend skills i also have a good understanding of complex frameworks like Next js And APIs like Rapid Api, Apollo Client e.t.c. 
        </div>
        <a href='/#Latestwork' className='flex items-center mt-[30px]'>
            <div className='w-fit p-[14px] text-[#ef6c57] bg-[white] rounded-full'>
                <FaPlus/>
            </div>
            <div className='text-[#391400] font-Epilogue pl-[16px]'>
              Projects
            </div>
        </a>
    </div>
  </div>
</div>
<div className='text-[rgba(57,20,0,0.64)] font-Epilogue text-center mt-[60px]'>
  Need These Services? <a href="/#Contact" className='text-[#391400] font-Epilogue'>Contact Me</a>
</div>
      </div>
    </motion.div></>
  )
}

export default Services
