import React from 'react'
import pic from "./Bitmap.png"
import Image from 'next/image'
import Link from 'next/link'
const Bigblogcards = (props) => {
  const card = props.data.props.data.postTs.map(thu=>{
    return(
      <Link href={`/Blog/` + thu.slug} key={thu.id}>
      <div className='h-[300px] sm:h-[350px] rounded-[6px] overflow-hidden'>
          <Image src={thu.img.url} width={3999} height={4999} className="object-cover h-full" alt={thu.title}/>
      </div>
      <div className='text-[20px] leading-8 font-Epilogue text-[#391400] mt-[26px]'>
      {thu.tag}
      </div>
      <div className='text-[#391400] text-[24px] max-w-[538px] w-full lg:text-[40px] font-[800] mt-[19px] leading-8 lg:leading-[48px] font-Epilogue'>
      {thu.title}
      </div>
      <div className='text-[rgba(57,20,0,0.64)] mt-[12px] font-Epilogue leading-8'>
         {thu.date}
      </div>
  </Link>
    )
  })
  return (
    <div className='grid justify-center mt-[40px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-0 max-w-[1128px] gap-8 px-[20px] w-full'>
        {card.reverse().slice(0, 2)}

      </div>
      <hr className='h-[1px] outline-none border-none border-[0px] mt-[68px] mb-[79px] bg-[#F3D1BF] max-w-[1128px] w-full hidden lg:block'/>
    </div>
  )
}

export default Bigblogcards
