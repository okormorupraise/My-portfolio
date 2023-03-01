import React from 'react'
import Image from 'next/image'
import pic from "./Bitmap.png"
const Imagme = (props) => {
  return (
    <div className='flex justify-center mt-[60px]'>
      <div className='max-w-[970px] w-full px-[20px] h-fit sm:h-[500px]'>
        <Image src={props.image} width={50000} height={50000} className="w-full h-[100%] object-fill sm:object-cover" alt={"image"}/>
      </div>
    </div>
  )
}

export default Imagme
