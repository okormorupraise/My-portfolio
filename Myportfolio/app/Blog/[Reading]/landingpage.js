"use client"
import Bottomnavbar from '@/app/bottomnavbar'
import Header from '@/app/header'
import React from 'react'
import { useEffect } from 'react'
function Landingpage() {
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
    <div>
      <Header setstate={setstate} state={state}/>
      <Bottomnavbar setstate={setstate} state={state}/>
    </div>
  )
}

export default Landingpage
