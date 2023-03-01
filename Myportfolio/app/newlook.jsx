import React from 'react'
import { FaCheck } from 'react-icons/fa'
import picgure from "..//public/pic3.png"
import star from "..//public/Group 4.png"
import card from "..//public/Group 3c.png"
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from "framer-motion"
import { useRef } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
function Newlook() {
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
    <motion.div initial={{opacity:0, transitionDelay:0}} animate={animation} ref={ref} className='flex justify-center relative bg-[#28293E] mt-[110px] py-[77px] lg:py-[100px] pb-[165px] lg:pb-[77px]' id='Newlook'>

 <div className='grid grid-cols-1 md:grid-cols-2 items-center max-w-[1128px] px-[20px] w-full'>
 <div  className='flex md:hidden'>
        <Image src={picgure} alt="image"/>
      </div>
    <div className=' '>
        <div className='text-[#ef6d58] font-Epilogue mb-[20px]'>
            Features
        </div>
        <h5 className='font-[Epilogue] font-extrabold text-[40px] md:text-[56px] tracking-[-1px] text-white max-w-[397px] w-full mb-[26px]'>
            Let me join your team
            
        </h5>
        <div className='text-white font-Epilogue mb-[21px] text-[20px] leading-8 max-w-[470px] w-full'>
        I have the following features or characteristics
        </div>
        <div className='flex items-center'>
            <div className='text-[white] p-[9px] bg-[#ef6c57] rounded-full'>
                <FaCheck/>
            </div>
            <div className='text-[rgba(255,255,255,0.64)] font-Epilogue ml-[16px]'>
                Good understanding of Figma
            </div>
        </div>
        <div className='flex items-center py-[16px]'>
            <div className='text-[white] p-[9px] bg-[#ef6c57] rounded-full'>
                <FaCheck/>
            </div>
            <div className='text-[rgba(255,255,255,0.64)] font-Epilogue ml-[16px]'>
                I am always willing to learn more
            </div>
        </div>
        <div className='flex items-center'>
            <div className='text-[white] p-[9px] bg-[#ef6c57] rounded-full'>
                <FaCheck/>
            </div>
            <div className='text-[rgba(255,255,255,0.64)] font-Epilogue ml-[16px]'>
                I am very co-operative
            </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <Image src={picgure} alt="image"/>
      </div>
          <div className='absolute bottom-[-69px] z-40'>
        <Image src={star} alt="image"/>
        </div>
    </div>

    </motion.div>
   
  )
}

export default Newlook
