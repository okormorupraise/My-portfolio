import React from 'react'
import Image from 'next/image'
import pic from "..//public/pic2.png"
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from "framer-motion"
import { useRef } from 'react'
import { useEffect } from 'react'
function Aboutme() {
  const animation = useAnimation()
  const animation2 = useAnimation()
  const animation3 = useAnimation()
  const [ref, InView] = useInView({threshold: 0.3})
  useEffect(()=>{
    if(InView){
      animation.start({
    
             transition:{
          delay:0,
          duration:0.5
        },
        opacity:1,
        
      })
      animation2.start({
       
        opacity:1,
             transition:{
          delay:0
          ,
          duration:0.5
        },
     
        
        
      })
      animation3.start({
        
             transition:{
          delay:0
          ,
          duration:0.5
        },
     
        
        
      })
    }
    else{
      
      animation.start({
    
        
             transition:{
          delay:0,
          duration:0.5,
        },
        
        opacity:0
        
      })
            animation2.start({
  
        transition:{
          delay:0,
          duration:0.5
        },
        opacity:0
        
      })
      animation3.start({
        
        transition:{
     delay:0
     ,
     duration:0.5
   },

   
   
 })
    }

  },[InView, animation, animation2, animation3])
  return (
    <motion.div ref={ref} initial={{opacity:0, transitionDelay:0}}  animate={animation} className='flex justify-center mt-[101px]' id='About'>
      <div className=' grid gap-[10px] grid-cols-1 sm:grid-cols-2 sm:gap-[100px] max-w-[1128px] px-[20px] w-max items-center'>
        <div>
        <Image className='' src={pic} alt={"okormorupraise"}/>
        </div>
        <div className=''>
            <div className='font-Epilogue text-[#ef6d58] mb-[20px]'>
                Okormoru Praise
            </div>
            <div className='font-Epilogue sm:text-[56px] text-[40px] font-extrabold tracking-[-1px] text-[#391400] leading-[64px] '>
                Frontend
                Web Developer
            </div>
            <div className="text-[#391400] text-[20px] sm:text-[30px] font-Epilogue mt-[26px]">
            Provides a full service range
            </div>
            <div className='mt-[26px]  text-[rgba(57,20,0,0.64)] leading-[32px] font-Epilogue max-w-[470px] w-full'>
            I am a web developer from Delta State Nigeria. I provide frontend services and i have a good understanding of web 3. <Link href="/#Contact" className='text-[#391400]'>Contact Me</Link>
            </div>
            <div className='mt-[34px]'>
                <button className='font-Epilogue text-[14px] font-black text-[#391400] w-[138px] h-[48px] rounded-[6px] bg-[white] shadow-backshadow'>
                    View Resume
                </button>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Aboutme
