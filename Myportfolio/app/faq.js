import React from 'react'
import Faqtabs from './faqtabs'
import Image from 'next/image'
import logo from "..//public/mediafire.png"
import logo2 from "..//public/fuzion.png"
import logo3 from "..//public/digital.png"
import logo4 from "..//public/vortex.png"
import logo5 from "..//public/travel.png"
import Faqdata from './faqdata'

function Faq() {
  return (
    
    <div className='bg-[#28293E] grid justify-center py-[140px] mt-[96px]' id='FAQ'>
      <div  className='grid grid-cols-1 md:grid-cols-2 gap-[36px]   max-w-[1128px] px-[20px] w-full'>
        <div>
            <div className='text-[#EF6D58] font-Epilogue leading-[32px] tracking-[3px]'>
                FAQ
            </div>
            <h3 className='pt-[17px] text-white font-extrabold pb-[31px] font-Epilogue text-[40px] leading-[48px]'>
                Frequently Asked Question
            </h3>
            <div className='text-[rgba(255,255,255,0.64)] pb-[29px] font-Epilogue leading-8'>
            These are some questions about me. Feel free to contact me for any other information
            </div>
            <div className='font-Epilogue leading-[32px] text-white'>
                Contact Me
            </div>
        </div>
        <div>
          {Faqdata.map(thu=>{
            return(
              
             <Faqtabs name={thu.name} details={thu.Details} key={thu.id}/>
            )
          })
          }
          
        </div>
      </div>
      {/* <div className='my-[117px] grid text-center grid-cols-2 sm:grid-cols-2 justify-center  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center pl-[20px] gap-[90px] '>

         , ,, , ,, 
        <Image src={logo2} alt="image"/>
        <Image src={logo3} alt="image"/>
        <Image src={logo4}  alt="image"/>
        <Image src={logo5}alt="image"/> 
        
      </div> */}
    </div>
    
    
  )
}

export default Faq
