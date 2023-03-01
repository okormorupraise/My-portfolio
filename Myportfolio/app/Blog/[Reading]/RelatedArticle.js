import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pic from "./Bitmap.png"
const RelatedArticle = (props) => {
  const card = props.data.props.data.postTs.map(thu=>{
    return(
      <Link href={`/Blog/` + thu.slug} key={thu.id}>
          <div className='h-[300px] sm:h-[200px] rounded-[6px] overflow-hidden'>
              <Image src={thu.img.url} width={5000} height={5000} className="h-full object-cover" alt={thu.title}/>
          </div>
          <div className='text-[20px] leading-8 font-Epilogue text-[#391400] mt-[26px]'>
              {thu.tag}
          </div>
          <div className='text-[#391400] text-[24px] font-[800] mt-[15px] leading-8  font-Epilogue'>
          {thu.title}

          </div>
          <div className='text-[rgba(57,20,0,0.64)] mt-[12px] font-Epilogue leading-8'>
              {thu.date}
          </div>
      </Link>
    )
  })
  return (
    <>
    <div className='flex justify-center mt-16'>
            <div className='font-[700] max-w-[1128px] w-full px-5  leading-8 text-[#391400 text-[24px] font-Epilogue mb-[39px] text-[#391400]'>
        Recent Articles
    </div>
    </div>

    <div className='grid justify-center mb-[132px] '>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1128px] gap-8 px-[20px] w-full'>

{card.reverse().slice(0, 3)}
    </div>
    
  </div></>
  )
}

export default RelatedArticle
