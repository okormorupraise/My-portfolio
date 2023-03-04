"use client"
import React from 'react'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')


function Body(props){
 useEffect(() => {
    Prism.highlightAll()
  }, [Prism])
  return (
    <div className='flex justify-center mt-[65px]'>
      <div   className='max-w-[970px] w-full px-[20px] font-Epilogue leading-8 text-[rgba(57,20,0,0.64)] text-[20px] font-normal'>
        <ReactMarkdown >

          {props.body}
        </ReactMarkdown>
     
          
      

      </div>
    </div>
 )}

export default Body
