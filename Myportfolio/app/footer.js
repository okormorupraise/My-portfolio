import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import useDownloader from 'react-use-downloader';
function Footer() {
    const { size, elapsed, percentage, download,
        cancel, error, isInProgress } =
    useDownloader();
    const cvv = "/okormorupraiseportfolio.vercel.app.pdf"
const filename = "/okormorupraiseportfolio.vercel.app.pdf";
  return (
    <div className=' flex  justify-center bg-[#28293E] pt-20'>
        <div className='max-w-[1128px] px-[20px] w-full'>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1128px] w-full'>
        <h4 className='text-[24px] text-center md:text-left font-Epilogue font-bold leading-8 text-white'>
            Okormoru Praise
        </h4>
        <div className='text-center md:text-left pt-[30px] md:pt-[0px]'>

            <ul className='grid justify-center '>
                <div className='text-[#EF6D58] leading-[32px] uppercase font-Epilogue tracking-[3px] mb-[16px]'>
                    MENU
                </div>
                <li  className='text-white font-Epilogue leading-8 mt-[12px]'>
                    <a href="/#About">
                        About
                    </a>
                </li>
                <li  className='text-white font-Epilogue leading-8 mt-[12px]'>
                    <a href="/#Services">
                        Services
                    </a>
                </li>
                <li  className='text-white font-Epilogue leading-8 mt-[12px]'>
                    <Link href="Blog">
                        Blog
                    </Link>
                </li>
                <li  className='text-white font-Epilogue leading-8 mt-[12px]'>
                    <a href="/#Contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
                <div className='text-center md:text-left pt-[90px] md:pt-[0px]'>

        <ul className='grid justify-center '>
            <div className='text-[#EF6D58] leading-[32px] uppercase font-Epilogue tracking-[3px] mb-[16px]'>
                Other
            </div>
            <li  className='text-white font-Epilogue leading-8 mt-[12px]'>
                <a href="/#Collaboration">
                    Collaboration
                </a>
            </li>
            <li  className='text-white font-Epilogue leading-8 mt-[12px]'>
                <a href="/#FAQ">
                    FAQ
                </a>
            </li>
            <li  onClick={() => download(cvv, filename)}  className='text-white cursor-pointer font-Epilogue leading-8 mt-[12px]'>
                <div>
                    View Resume
                </div>
            </li>
        </ul>
        </div>
        <div className='flex justify-end pt-[30px] md:pt-[0px]'>
            <div className='bg-[#EF6D58] p-[16px] flex justify-center items-center  h-[48px] w-[48px] rounded-full'>
                <FaLinkedin className='text-white text-[20px]'/>
            </div>
        </div>
      </div>
       <hr className='bg-[#3A3C56] outline-none border-none text-[#ff5900] h-[1px] mt-[68px] mb-[52px]'/>
       <div className='flex justify-between mb-[52px]'>
            <div className='text-[rgba(255,255,255,0.64)] font-Epilogue leading-8'>
                I would Like To Work With You
            </div>
            <div>
                <div className='text-white font-Epilogue leading-8'>
                    Hire Me
                </div>
            </div>
       </div>
        </div>
    </div>
  )
}

export default Footer
