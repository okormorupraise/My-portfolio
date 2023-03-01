"use client"
import React, { useState } from 'react'
import './globals.css'
function Newsletter() {
  const[state, setstate] = useState(true)
  function handleclick(e){

      e.preventDefault()
      setstate(false)

  }
  return (
    <>
    <hr className='bg-[#F3D1BF] outline-none border-none text-[#ff5900] h-[1px] mt-[100px] mb-[35px]'/>
    <div className='w-full'>
      <div className='grid grid-cols-1 justify-between lg:flex items-center w-full'>
        <div>
            <div className='text-[#391400] font-Epilogue text-[24px] font-bold leading-8'>
                Newsletter
            </div>
            <div className='font-Epilogue leading-8 text-[rgba(57,28,0,64)] mt-[3px]'>
                Sign up to Newsletter and be on of the first people to read my blog post.
            </div>
        </div>
        <div className=' block pt-[36px] sm:pt-[0px]'>
            <form onSubmit={handleclick} className='grid grid-cols-1 lg:flex w-full'>
                <div className='w-full'>
                    <input type="text" className='border-[#F3D1BF] focus:outline-[0px] focus:border-[#F3D1BF] pl-[20px] h-[48px] w-[100%] lg:w-[370px] rounded-[6px] border-[1px]  leading-8 text-[rgba(57,20,0,0.64)] font-Epilogue' placeholder='Your Email' id="placeholder"/>
                </div>
                <div className='ml-[0px] lg:ml-[30px]  pt-[16px] lg:pt-[0px]'>
                    <button type="submit" className='w-[100%] lg:w-[170px] h-[48px] shadow-backshadow rounded-[6px] bg-white font-Epilogue text-[14px] leading-[14px] text-[#391400] font-[900]'>SUBSCRIBE</button>
                </div>
            </form>
        </div>

      </div>

    </div>
    <div className={`${state ? "hidden" : "block"} text-right font-Epilogue text-zinc-700`}>
          Sorry, this feature is not available right now
        </div>
    </>
  )
}

export default Newsletter
