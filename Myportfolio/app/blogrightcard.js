import React from 'react'
import Image from 'next/image'
import pic from "..//public/side.png"
import pic2 from "..//public/pexels-alexandra-folster-13264460.jpg"
import Link from 'next/link'
function Blogrightcard(props) {

  return (
    <Link scroll={false}  href={`/Blog/` + props.slug} className='w-full'>
      <div className='w-full h-[280px] lg:h-[164px]'>
        <Image src={props.image} width={4000} height={4000} className=" object-cover h-full rounded-[6px]" alt={props.title + "image"}/>
      </div>
      <div className='font-Epilogue leading-8 text-[20px] text-[#391400] mt-[26px]'>
      {props.tag}
      </div>
      <div className='font-[700] text-[24px] font-Epilogue text-[#391400] leading-[32px] mt-[15px]'>
        {props.title}
      </div>
      <div className='text-[rgba(57,20,0,0.64)] font-Epilogue leading-8 mt-[12px]'>
        2 Dec 2022
      </div>
    </Link>
  )
}

export default Blogrightcard
