import React from 'react'
import d from "..//public/pic.svg"
import Image from 'next/image'
function Dreamproject(props) {
  return (
<>
    <div className=' h-fit lg:h-[650px] pb-[28px] flex justify-center item-center]' id='go'>
      <div className='  max-w-[1128px] px-[20px] items-center w-full grid grid-cols-1 md:grid-cols-2'>
      <div className='grid md:hidden pr-8'>
       <Image src={d} alt="image"/>
       </div>
        <div className=' '>
          <h1 className={`font-Epilogue tracking-[-1px] lg:tracking-[-2px]  font-extrabold text-[56px] lg:text-[72px] leading-[80px]  my-[24px]  ${props.text === "white" ? "text-[white]" : "text-[#391400]"}`}>
          Help To Build 
          Your Dream
          Project
          </h1>
          <p className={`font-Epilogue mb-[34px] max-w-[470px] w-full  ${props.second === "rgba(255,255,255,0.64)" ? "text-[rgba(255,255,255,0.64)]" : "text-[rgba(57,20,0,0.64)]"}`}>
           I would like to be involved in your project. You can also support me by clicking <a href="" className='text-black'>here</a>
          </p>
          <div>
            <button className={`w-[154px] h-[48px]  ${props.second === "rgba(255,255,255,0.64)" ? "bg-[rgba(255,255,255)]" : " bg-[#ef6d58] "}  rounded-[6px] font-Epilogue font-black text-[14px] leading-[14px] ${props.but === "#391400" ? "text-[#391400]" : " text-[#ffffff] "} `}>Contact Me</button>
          </div>
        </div>
       <div className='hidden md:flex '>
       <Image src={d} alt="image"/>
       </div>
      </div>
    </div></>
  )
}

export default Dreamproject
