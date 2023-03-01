'use client'
import React from 'react'
import Image from 'next/image'
import star4 from "..//public/star4.png"
function Testimonialcard(props) {
    const pic = `${props.image}`

  return (
    <div>
      <div className='pt-[48px] pb-[48px] px-[18px] border border-[#F3D1BF] hover:bg-[white] ease-in duration-100'>
        <div>
           <Image src={pic} width={152} height={24} alt={props.name + "image"}/>
        </div>
        <div className='mt-[36px] text-[rgba(57,20,0,0.64)] font-Epilogue leading-8'>
            {props.details}
        </div>
        <div className='mt-[64px] flex items-center'>
            <div>
                <Image src={props.profilepic} width={80} height={80} className="rounded-[200%]" alt="image"/>
            </div>
            <div className='ml-[24px]'>
                <h4 className='font-[700] text-2xl font-Epilogue text-[#391400] leading-[32px]'>
                    {props.name}
                </h4>
                <div className='text-[#391400] font-Epilogue leading-8 mt-[3px]'>
                    {props.country}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonialcard
