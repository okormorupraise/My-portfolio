"use client"
import React from 'react'
import Link from 'next/link'
import Blogcard from './blogcard'
import Blogrightcard from './blogrightcard'
import Newsletter from './newsletter'
import './globals.css'
function Blog(props) {
  const big = props.data.props.data.postTs.map(thu=>{
    return(
      <Blogcard title={thu.title} body={thu.body} image={thu.img.url} tag={thu.tag} date={thu.date} slug={thu.slug} key={thu.id}/>
    )
  })
  const small = props.data.props.data.postTs.map(thu=>{
    return(
      <Blogrightcard title={thu.title} body={thu.body} image={thu.img.url}  tag={thu.tag} date={thu.date} slug={thu.slug} key={thu.id}/>
    )
  })
  return (
    <div className='grid justify-center w-full mt-[72px]'>
      <div className=' max-w-[1128px] px-[20px] w-full'>
        <div>
            <div className='font-Epilogue text-[#ef6d58] leading-[32px] tracking-[3px]'>
                My Blog
            </div>
            <div className='grid sm:flex grid-cols-1 gap-9 justify-between items-end mt-[20px]'>
                <div className='font-Epilogue text-[#391400] tracking-[-1px] leading-[64px] font-extrabold text-[40px] sm:text-[56px] '>
                    Latest Blog<br /> Article
                </div>
                <div>
                    <Link href="Blog" className='relative top-[-15px]'>
                        <button className='w-[170px] h-[48px] bg-white text-[#391400] font-[900] font-Epilogue text-[14px] uppercase shadow-backshadow rounded-[6px]'>
                            Discover All
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[42px] lg:gap-[105px] mt-[60px]'>
            <div className='col-span-1 lg:col-span-2'>
              {big.reverse().slice(0, 1)}
                
            </div>
           <div className='w-full grid gap-[52px]'>
           {small.reverse().slice(1, 4)}
            
           </div>
        </div>
        

      <Newsletter/>
      </div>

    </div>
  )
}

export default Blog
