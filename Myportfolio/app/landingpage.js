"use client"
import React from 'react'
import Image from 'next/image'
import logo1 from "..//public/Lozenge.png"
import {FaEnvelope} from "react-icons/fa"
import logo2 from "..//public/Vector3.png"
import logo3 from "..//public/Vector.png"
import mail from "..//public/mail.png"
import Download from "..//public/Download.png"
import LineVector from "..//public/Line Vector.png"
import Image2 from "..//public/Image.png"
import bullet from "public/Bullet Points.png"
import darkdown from "..//public/icons/Download.png"
import round from "..//public/Rectangle 5.png"
import star from "..//public/Star.png"
import shape1 from "..//public/Combined Shape.png"
import shape2 from "..//public/Combined Shape2.png"
import shape3 from "..//public/Combined Shape3.png"
import pic from "..//public/Bitmap.png"
import d from "..//public/pic(20).png"
import './globals.css'
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from "framer-motion"
import { useRef } from 'react'
import { useEffect } from 'react'
function Landingpage(props) {
  const animation = useAnimation()
  const animation2 = useAnimation()
  const animation3 = useAnimation()
  const [ref, InView] = useInView({threshold: 0.3})
  useEffect(()=>{
    if(InView){
      animation.start({
        left:"0px",
             transition:{
          delay:0,
          duration:0.5
        },
        opacity:1,
        
      })
      animation2.start({
        right:"0px",
        opacity:1,
             transition:{
          delay:0
          ,
          duration:0.5
        },
     
        
        
      })
      animation3.start({
        opacity:1,
             transition:{
          delay:0
          ,
          duration:0.5
        },
     
        
        
      })
    }
    else{
      
      animation.start({
        left:"-50px",
        
             transition:{
          delay:0,
          duration:0.5,
        },
        
        opacity:0
        
      })
            animation2.start({
        right:"-50px",
        transition:{
          delay:0,
          duration:0.5
        },
        opacity:0
        
      })
      animation3.start({
        opacity: 0,
        transition:{
     delay:0
     ,
     duration:0.5
   },

   
   
 })
    }

  },[InView, animation, animation2,animation3,])
  return (<>
    <div ref={ref} className=' h-fit lg:h-[600px] flex justify-center items-end pb-[20px] bg-[#28293E]' id='FOT'>
      <div className='  max-w-[1128px] px-[20px] items-center w-full grid grid-cols-1 md:grid-cols-2'>
      <motion.div className='flex md:hidden' animate={animation3} initial={{opacity:0}}>
       <Image src={d} alt="image" className='h-full w-full'/>
       </motion.div>

        <motion.div className='relative' animate={animation} 
      initial={{opacity:0, transitionDelay:"0", left:"-50px"}}
        >
          <h5  className='font-Epilogue text-[#EF6D58]'>
          Frontend Developer
          </h5>
          <h1 className='font-Epilogue break-words sm:whitespace-nowrap font-extrabold text-[56px]  lg:text-[72px] leading-[80px] tracking-[-1px] lg:tracking-[-2px] text-[white] my-[24px] relative'>
          Hello, {"I'm" }<br /> Okormoru Praise
          </h1>
          <p className='font-Epilogue text-[rgba(255,255,255,0.64)] mb-[34px] max-w-[470px] w-full'>
          I provide a full service range including technical skills, design, with in-depth Web 3 understanding.
          </p>
          <a href='/#Latestwork'>
<button className='w-[154px] h-[48px] bg-[#ef6d58] rounded-[6px] font-Epilogue font-black text-[14px] leading-[14px] text-[white]'>SEE MY WORK</button>
          </a>
        </motion.div>
       <motion.div className='hidden md:flex relative' animate={animation2}   initial={{opacity:0, right:"-50px"}}>
       <Image src={d} alt="image" className='h-full w-full'/>
       </motion.div>
      </div>
    </div></>
  )}

export default Landingpage
