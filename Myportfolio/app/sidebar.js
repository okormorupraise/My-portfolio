import Link from 'next/link'
import React from 'react'
import { FaHome, FaHouseUser, BiHome, CiHome, BsHouse, ImHome2 } from 'react-icons/all'

const Sidebar = () => {
  return (
    <aside className='fixed h-screen bg-[#28293E] w-[350px] pt-[34px] pl-[28px] text-[#EFF2F4]'>
      <div>
        <div className='text-[24.7983px] font-Epilogue font-[600] tracking-[0.005em]  leading-[26px]'>
          Okormoru Praise
        </div>
        <ul className='mt-[51px]'>
            <li>
                <Link href="" className='flex items-center'>
                    <div className='font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                               <FaHome className='text-[30px]'/>
                    </div>
                    <div className='ml-[8.63px] font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                        Home
                    </div>
                </Link>
            </li>
            <li className='mt-[17.25px]'>
                <Link href="" className='flex items-center'>
                    <div className='font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                               <FaHome className='text-[30px]'/>
                    </div>
                    <div className='ml-[8.63px] font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                        Home
                    </div>
                </Link>
            </li>
            <li className='mt-[17.25px]'>
                <Link href="" className='flex items-center'>
                    <div className='font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                               <FaHome className='text-[30px]'/>
                    </div>
                    <div className='ml-[8.63px] font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                        Home
                    </div>
                </Link>
            </li>
            <li className='mt-[17.25px]'>
                <Link href="" className='flex items-center'>
                    <div className='font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                               <FaHome className='text-[30px]'/>
                    </div>
                    <div className='ml-[8.63px] font-poppins text-[17.251px] leading-[26px] tracking-[0.01em]'>
                        Home
                    </div>
                </Link>
            </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
