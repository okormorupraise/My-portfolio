"use client"
import React, { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import useDownloader from 'react-use-downloader'
import logo from "..//public/logo 1 (1).png"
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from "framer-motion"
import { useRef } from 'react'
import { FaBars, FaMinus, FaMoon, FaTimes } from 'react-icons/fa'
const Header = (props) => {
    const animation = useAnimation()
    const animation2 = useAnimation()
    const [ref, InView] = useInView({threshold: 0.3})
    useEffect(()=>{
      if(InView){
        animation.start({
          top:"0px",
               transition:{
            delay:0,
            duration:0.5
          },
          opacity:1,
          
        
          
        })
        animation2.start({
          y:"-50px",
               transition:{
            delay:0
            ,
            duration:0.5
          },
          opacity:1
          
          
        })
      }
      else{
        
        animation.start({
          top:"-50px",
          
               transition:{
            delay:0,
            duration:0.5,
          },
          
         
          
        })
              animation2.start({
          y:"50px",
          transition:{
            delay:0,
            duration:0.5
          },
          opacity:0
          
        })
      }
  
    },[InView, animation, animation2])
    const[color, setcolor] = React.useState("none")
   useEffect(() => {
        const scroll = () => {
            if(window.scrollY > 60){
               setcolor("unset")
            }
            else{
                setcolor("none")
            }
        }
        window.addEventListener('scroll', scroll)
   },[color, setcolor])
   const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
useDownloader();

const cvv = "/Okormorupraiseresume (4).pdf"
const filename = "/Okormorupraiseresume.pdf";
  return ( 
    <nav className='  flex top-0 justify-center  w-full  z-30 py-[24px] '>
            <motion.div ref={ref} initial={{opacity:0}} animate={animation} className='relative max-w-[1128px]  px-[20px] flex justify-between items-center w-full  py-[0] '>
                <div className="font-Epilogue text-[#ffffff] h-[48px]  font-bold text-[24px] w-[unset] lg:w-[30%]  flex items-center ">
                    <Link href="/"  className='flex items-center h-full'>
                        PRAISE OKORMORU
                    </Link>
                </div>
                <ul className='hidden items-center justify-between w-[40%] lg:flex'>
                <li>
                    <a href="/#About"   className='text-[#ffff] font-Epilogue font-normal text-base'>
                        About
                    </a>
                </li>
                <li>
                    <a href='/#Services'   className='text-[#ffff] font-Epilogue font-normal text-base '>
                        Services
                    </a>
                </li>
                <li>
                    <Link href="Blog"  className='text-[#ffff] font-Epilogue font-normal text-base'>
                        Blog
                    </Link>
                </li>
                <li>
                    <a href="/#Contact"  className='text-[#ffff] font-Epilogue font-normal text-base '>
                        Contact
                    </a>
                </li>
                </ul>
                <div className='w-[30%]  hidden lg:flex justify-end '>
                <button onClick={() => download(cvv, filename)} className="border-[1px] text-white font-Epilogue rounded-[6px] border-[rgba(255,255,255,0.295743)] w-[138px] h-[48px] font-[900] text-[14px]">
        View Resume
      </button>

            </div>  
            <div  style={{display : color}}  className=' p-[16px]  border bg-[#28293E] border-white rounded-[6px]  fixed top-[20px] z-[500] right-5' onClick={(() => props.setstate(!props.state))}>
        {props.state ? <FaBars className='text-white text-[20px]'/> : <FaTimes className='text-white text-[20px]'/>}
      </div>
      <div className='p-[16px] border bg-[#28293E] border-white rounded-[6px] flex lg:hidden right-5 z-[500]' onClick={(() => props.setstate(!props.state))}>
      {props.state ? <FaBars className='text-white text-[20px]'/> : <FaTimes className='text-white text-[20px]'/>}
      </div>
            </motion.div>
{/*  */}
        </nav>
  )
}


export default Header