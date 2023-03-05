"use client"
import React from 'react'
import { FaBook, FaHome, FaInfo, FaPhone } from 'react-icons/fa'
import "./globals.css"
import useDownloader from 'react-use-downloader'
import Link from 'next/link'//  ${props.state ? "hbidden" : "block"} 
function Bottomnavbar(props) {
  const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
useDownloader();

const cvv = "/Okormorupraiseresume (4).pdf"
const filename = "/Okormorupraiseresume.pdf";
  return (
    <div className={`h-[100vh] 
    ease-in-out duration-300ms 
 w-full fixed bottom-0 flex ${props.state ? "opacity-0" : "opacity-1"} ${props.state ? "invisible" : "visible"} items-end bg-[rgb(0,0,0,0.8)]`} id="tr">
        
       <div className={`h-fit w-full z-50 py-[8px]  ${props.state ? "bottom-[-200px]" : "bottom-[0px]"} fixed bg-[#28293E] px-[15px]`} id="gid">
       <button  onClick={() => download(cvv, filename)} className='border-[1px]  font-Epilogue rounded-[6px] border-[rgba(255,255,255,0.295743)] w-[138px] h-[48px] font-[900] text-[14px] text-white fixed top-[25%] right-[20px]'>
          View Resume
        </button>
            <ul className={`grid grid-cols-4`}>
              <li className=''>
                <Link href="/" className='text-center'>
                  <div className='flex justify-center'>
                    <FaHome className='text-[26px] text-[#9db2ce]'/>
                  </div>
                  <div className='mt-[5px] text-[12px] leading-[18px] tracking-[-0.165px] font-[500] text-[#9db2ce] font-Epilogue'>
                    Home
                  </div>
                </Link>
              </li>
                            <li className=''>
                <a href="/#Services" className='text-center'>
                  <div className='flex justify-center'>
                    <FaInfo className='text-[26px] text-[#9db2ce]'/>
                  </div>
                  <div className='mt-[5px] text-[12px] leading-[18px] tracking-[-0.165px] font-[500] text-[#9db2ce] font-Epilogue'>
                  Services
                  </div>
                </a>
              </li>
              <li className=''>
                <Link href="/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Blog" className='text-center'>
                  <div className='flex justify-center'>
                    <FaBook className='text-[26px] text-[#9db2ce]'/>
                  </div>
                  <div className='mt-[5px] text-[12px] leading-[18px] tracking-[-0.165px] font-[500] text-[#9db2ce] font-Epilogue'>
                    Blog
                  </div>
                </Link>
              </li>
              <li className=''>
                <a href="/#Contact" className='text-center'>
                  <div className='flex justify-center'>
                    <FaPhone className='text-[26px] text-[#9db2ce]'/>
                  </div>
                  <div className='mt-[5px] text-[12px] leading-[18px] tracking-[-0.165px] font-[500] text-[#9db2ce] font-Epilogue'>
                    Contact
                  </div>
                </a>
              </li>
            </ul>
       </div>
    </div>
  )
}

export default Bottomnavbar
