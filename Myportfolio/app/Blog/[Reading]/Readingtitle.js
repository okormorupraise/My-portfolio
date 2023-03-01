import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const Reading = (props) => {
  return (
    <div className='flex justify-center w-full mt-[39px]'>
      <div className='max-w-[570px] px-[20px] w-full'>
        <Link href="/Blog" className='flex items-end'>
            <div className='flex h-fit items-end '>
                <FaArrowLeft size={20} strokeWidth={1} className='flex text-[#391400] font-[800] items-end'/>
            </div>
            <div className='text-[#391400]  text-[14px] leading-none  uppercase pl-[14px] font-[700] font-Epilogue'>
                Back To Blog
            </div>
        </Link>
        <div className='text-[#391400] mt-[45px]  sm:tracking-[-1px] text-[46px] sm:text-[56px] font-[800] font-Epilogue leading-[48px] sm:leading-[64px]'>
            {props.title}
        </div>
        <div className='grid gap-4 mt-[28px] grid-cols-1 sm:flex justify-between'>
            <div className=''>
                <span className='text-[rgba(57,20,0,0.64)] font-Epilogue leading-[32px]'>In </span> <span className='text-[#391400] font-Epilogue leading-[32px] '> {props.tag} </span>
                <span className='text-[rgba(57,20,0,0.64)] font-Epilogue leading-[32px]'>By</span> <span  className='text-[#391400] font-Epilogue leading-[32px] '> Okormoru Praise </span>
            </div>
            <div className='text-[rgba(57,20,0,0.64)] font-Epilogue leading-[32px]'>
                DATE <span  className='text-[#391400] font-Epilogue leading-[32px]'> {props.date}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reading
