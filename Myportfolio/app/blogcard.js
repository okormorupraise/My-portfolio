import React from 'react'
import Image from 'next/image'
import pic from "..//public/pexels-alexandra-folster-13264460.jpg"
import Link from 'next/link'
function Blogcard(props) {
  return (
    <Link  scroll={false} href={`/Blog/` + props.slug}>
      <div>
        <div className=' h-[280px] lg:h-[500px]
        '>
<Image src={props.image} width={4000} height={4000} className="object-cover h-full w-full rounded-[6px]" alt={props.title + "image"}/>
        </div>
        <div className='font-Epilogue leading-8 text-[20px] text-[#391400] mt-[26px]'>
{props.tag}
        </div>
        <div className='text-[#391400] leading-[32px] lg:leading-[48px] font-[700] lg:font-[800] text-[24px] lg:text-[40px] font-Epilogue mt-[31px]'>
{props.title}
        </div>
        <div className='text-[rgba(57,20,0,0.64)] font-Epilogue leading-8 mt-[12px]'>
{props.date}
        </div>
      </div>
    </Link>
  )
}

export default Blogcard
