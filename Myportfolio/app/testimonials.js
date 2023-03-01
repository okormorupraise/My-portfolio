import React from 'react'
import Testimonialcard from './testimonialcard'
import Testimonialsdata from './testimonialsdata'

function Testimonials() {
  return (
    <div className='flex justify-center' id='Reviews'>
      <div className='max-w-[1128px] px-[20px] w-full'>
      <div className='text-[#EF6D58] tracking-[3px] text-center'>
          Testimonials
        </div>
        <div className='flex justify-center mt-[20px]'>
          <div className='max-w-[435px] w-full text-[#391400] text-[40px] sm:text-[56px] font-Epilogue font-[800] leading-[64px] text-center'>
            What My Clients Say
          </div>
        </div>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-[64px]'>
             {Testimonialsdata.map(thu=>{
              return(
                  <Testimonialcard name={thu.name} details={thu.details} country={thu.country} profilepic={thu.profilepic} image={thu.img} key={thu.id}/>
              )
             })
}
            </div>
        </div>
        <a href="/#Contact" className='flex justify-center'>
          <button className='mt-[64px] bg-white w-[138px] h-[48px] shadow-backshadow rounded-md text-[#391400] font-extrabold text-[14px] leading-[14px] uppercase'>
            Contact Me
          </button>
        </a>
      </div>
    </div>
  )
}

export default Testimonials
