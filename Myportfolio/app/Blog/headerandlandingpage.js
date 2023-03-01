"use client"
import React from 'react'
import Header from '../header'
import { useEffect } from 'react'
import Landingpage from './Landingpage'
import './global.css'
import Bottomnavbar from '../bottomnavbar'
const Headerandlandingpage = () => {
   const[state, setstate]= React.useState(true)

  useEffect(()=>{
    function scroll(){
      if(window.scrollY < 90 && window.innerWidth > 1024){
        setstate(true)
      }
    }
    window.addEventListener("scroll", scroll)
  })
  useEffect(()=>{
    function scroll2(){
      
        setstate(true)
      
    }
    window.addEventListener("scroll", scroll2)
  })
  return (
    <>
    <div className='bg-[#28293E]'>
        <div className='bg-[#28293E]'>
            <Header  state={state} setstate={setstate}/>
        <Landingpage/>
        </div>

    </div>
    <Bottomnavbar  state={state} setstate={setstate}/>
    </>
  )
}

export default Headerandlandingpage
