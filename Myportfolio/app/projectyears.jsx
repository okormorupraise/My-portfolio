import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaSuitcase} from 'react-icons/fa'
function Projectyears() {
    return (
        <>
        <div className='flex w-full justify-center px-[20px] mt-[92px]'>
          <div className='max-w-[1095px] items-center w-full '> 
    <div className='w-full mt-[64px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='border-[1px] border-[#F3D1BF] rounded-tl-[6px] rounded-bl-[6px] p-[48px]'>
          <div className='flex items-center  break-words' id='projectcontainer'>
            <div className='bg-[#EF6C57] w-fit p-[24px] rounded-full'>
              <FaCalendar className='text-white text-[32px]'/>
            </div>
            <div>
                <div id='project' className='text-[24px] pl-[24px] font-Epilogue font-bold text-[#391400]'>
                    1 +
                </div>
                <div  id='project' className='pl-[24px] mt-[13px] text-[#391400] text-[20px] font-Epilogue break-words break-all'>
                   Year of experience
                </div>
            </div>
          </div>
        </div>
        <div className='border-[1px] border-[#F3D1BF] rounded-tr-[6px] rounded-br-[6px] p-[48px]'  id='projectcontainer'>
          <div className='flex items-center' id='projectcontainer'>
            <div className='bg-[#EF6C57] w-fit p-[24px] rounded-full'>
              <FaSuitcase className='text-white text-[32px]'/>
            </div>
            <div >
                <div id='project' className='text-[24px] pl-[24px] font-Epilogue font-bold text-[#391400]'>
                    10 +
                </div>
                <div id='project' className='pl-[24px] mt-[13px] text-[#391400] text-[20px] font-Epilogue'>
                   Projects Done
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
        </>
  )
}

export default Projectyears
