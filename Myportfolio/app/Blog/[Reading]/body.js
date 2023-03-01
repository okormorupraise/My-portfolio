import React from 'react'
import ReactMarkdown from 'react-markdown'
const Body = (props) => {
  return (
    <div className='flex justify-center mt-[65px]'>
      <div className='max-w-[570px] w-full px-[20px] font-Epilogue leading-8 text-[rgba(57,20,0,0.64)] text-[16px] font-normal'>
        <ReactMarkdown>
          {props.body}
        </ReactMarkdown>

      </div>
    </div>
  )
}

export default Body
