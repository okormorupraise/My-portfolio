import React from 'react'
import Image from 'next/image'
import star from "..//public/Group 4.png"
import card from "..//public/Group 3c.png"
import Link from 'next/link'

function Helpcompanies() {
  return (
    <div className='bg-[#F9E5DA] flex justify-center relative mb-[130px]'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  max-w-[1128px] pl-[20px] w-full justify-between items-center pb-[47px]'>
      <div>
        <h5 className='font-Epilogue mb-[13px]  leading-8 tracking-[3px] text-[#ef6d58] mt-[92px]'>
            Hire Me
        </h5>
        <div className='max-w-[217px] w-full font-Epilogue  text-[24px] font-extrabold text-[#391400]'>
            I Help Companies Move Faster
        </div>
        <div>
            <button className='bg-[#ef6d58] rounded-[6px] text-[14px] font-[800] text-white leading-[14px] uppercase font-Epilogue w-[154px] h-[48px] mt-[23px]'>
                Contact Me
            </button>
        </div>
      </div>
      <div className='text-[rgba(57,20,0,0.64)] font-Epilogue  w-full mt-[60px]'>
      With my help I believe your Company will have a massive growth. <Link href="/#Contact">Contact me Now !!!</Link>
      
      </div>
      <div className=' flex relative '>
        <div className='mt-[29px]'>
<Image src={card} alt="image"/>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Helpcompanies
