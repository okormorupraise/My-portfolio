import React from 'react'
import './globals.css'
import { FaCheck, FaEnvelope, FaPhone, FaSearchLocation } from 'react-icons/fa'
import Contactmeform from './contactmeform'
const Contactme = () => {
  return (
    <div id='Contact' className='flex justify-center relative bg-[#28293E] mt-[110px] py-[50px] lg:py-[100px] lg:pb-[77px]'>

 <div className='grid grid-cols-1 lg:grid-cols-2 items-center max-w-[1128px] px-[20px] w-full gap-[100px]'>
 <div>
       <Contactmeform/>
      </div>
    <div className=' '>
        <div className='text-[#ef6d58] font-Epilogue mb-[20px]'>
           CONTACT
        </div>
        <h5 className='font-[Epilogue] font-extrabold text-[40px] md:text-[56px] tracking-[-1px] text-white max-w-[397px] w-full mb-[26px]'>
            Contact Me
        </h5>
        <div className='text-[rgba(255,255,255,0.64)] font-Epilogue mb-[21px] text-[20px] leading-8 max-w-[470px] w-full'>
            Contact me via E-mail, cellphone, or by using the form.
        </div>
        <div className='flex items-center'>
            <div className='text-[white] p-[9px] bg-[#ef6c57] rounded-full'>
                <FaSearchLocation/>
            </div>
            <div className='text-[rgba(255,255,255,0.64)] font-Epilogue ml-[16px]'>
                Delta State, Nigeria
            </div>
        </div>
        <div className='flex items-center py-[16px]'>
            <div className='text-[white] p-[9px] bg-[#ef6c57] rounded-full'>
                <FaPhone/>
            </div>
            <div className='text-[rgba(255,255,255,0.64)] font-Epilogue ml-[16px]'>
                08121414474
            </div>
        </div>
        <div className='flex items-center'>
            <div className='text-[white] p-[9px] bg-[#ef6c57] rounded-full'>
                <FaEnvelope/>
            </div>
            <div className='text-[rgba(255,255,255,0.64)] font-Epilogue ml-[16px]' id="Email">
                Okormorupraisecoding@gmail.com
            </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contactme
