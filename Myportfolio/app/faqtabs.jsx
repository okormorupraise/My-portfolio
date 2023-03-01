"use client"
import React from 'react'
import { FaAngleDown, FaCaretDown } from 'react-icons/fa'
function Faqtabs(props) {
  const [click, set] = React.useState(true)
  return (
    <div className={`border pb-[5px] border-[#3A3C56] px-[48px] ${click ? "bg-transparent" : "bg-white"}`}  onClick={(()=> set(!click))}>
      <div className='flex items-center justify-between py-[35px]'>
        <div className={`${click ? "text-white" : "text-[#391400]"} text-2xl font-bold leading-8 font-Epilogue`}>
          {props.name}
        </div>
        <div className={`bg-[#EF6D58] rounded-[300px] w-[32px] h-[32px] flex justify-center items-center`}>
         <FaCaretDown className='text-white text-[20px]'/>
        </div>
      </div>
      <div className={`${click ? "hidden" : "block"} pb-[35px] text-[rgba(57,20,0,0.64)] leading-8 font-Epilogue `}>
      {props.details}
      </div>
    </div>
  )
}

export default Faqtabs
