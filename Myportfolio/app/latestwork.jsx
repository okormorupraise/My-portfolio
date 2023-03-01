
import React from 'react'
import Image from 'next/image'
import pic from "..//public/Bitmap2.png"
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from "framer-motion"
import { useRef } from 'react'
import { useEffect } from 'react'
import { BsCaretDown } from 'react-icons/Bs'
function Latestwork(props) {
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
    const card= props.work.props.data.posts.map(thu=>{
        return(
            <a href={`${thu.link}`} className='relative h-fit' key={thu.id}>
            <div className='w-full h-[300px]'>
                <Image src={thu.image.url} width={800} height={800} className="w-full brightness-[0.6] h-full object-cover rounded-[6px]" alt={thu.name + "image"}/>
            </div>
            <div className=' left-[48px] bottom-[28px] absolute text-[white] font-[800]  text-[30px] font-Epilogue'>
                <div className='bg-white w-fit h-[38px] text-[#391400] font-Epilogue flex justify-center items-center rounded-full mb-[24px] px-[16px] text-[16px]'>
                    {thu.language}
                </div>
                {thu.name}
            </div>
        </a>
        )
    })
  return (
    <motion.div ref={ref} initial={{opacity:0, transitionDelay:0}}  animate={animation} className='bg-[#28293e] mt-[100px] pt-[108px] flex justify-center relative' id="Latestwork">
      <div className=' max-w-[1128px] px-[20px] w-full pb-[80px]'>
        <div className='flex justify-center mb-[80px]'>
            <div className='w-full'>
                <h5 className='font-Epilogue pb-[20px] text-[#ef6d58] tracking-[3px] leading-[32px] '>
                    Portfolio
                </h5>
                <div className='grid-cols-1  justify-between  sm:flex  '>
                    <div className='text-white font-extrabold text-[40px] sm:text-[56px] tracking-[-1px] leading-[64px] font-Epilogue'>
                        Latest Work
                    </div>
                    <a href=''>
                        <button className='mt-[35px] sm:mt-[0px] border-[rgba(255,255,255,0.295743)] w-[170px] h-[48px] rounded-[6px] font-Epilogue font-black text-[14px] border-[2px] text-[white]'>
                            Support Me
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-1 gap-[30px] md:grid-cols-2 w-full'>
{card}
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Latestwork
