import React from 'react'
import pic from "./Bitmap.png"
import Image from 'next/image'
import Link from 'next/link'

const Smallblogcards = (props) => {
  const card = props.data.props.data.postTs.map(thu=>{
    return(
      <Link href={`/Blog/` + thu.slug} key={thu.id}>
      <div className='h-[300px] sm:h-[200px] rounded-[6px] overflow-hidden'>
          <Image src={thu.img.url} width={4000} height={4000} className="h-[100%] object-cover" alt={thu.title}/>
      </div>
      <div className='text-[20px] leading-8 font-Epilogue text-[#391400] mt-[26px]'>
         {thu.tag}
      </div>
      <div className='text-[#391400] text-[24px] font-[800] mt-[15px] leading-8  font-Epilogue'>
      {thu.title}

      </div>
      <div className='text-[rgba(57,20,0,0.64)] mt-[12px] font-Epilogue leading-8'>
          12 Jan 2022
      </div>
  </Link>
    )
  })
  return (
    <div className='grid justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1128px] gap-8 px-[20px] w-full'>
{card.reverse().slice(2)}

      </div>
      
    </div>
  )
}

export default Smallblogcards