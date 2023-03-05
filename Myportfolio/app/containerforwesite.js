"use client"
import React, { useEffect } from 'react'
import Landingpage from './landingpage'
import Header from './header'

import Newlook from './newlook'
import Services from './Services'
import Headerandlandingpage from './headerandlandingpage'
import Latestwork from './latestwork'
import Aboutme from './aboutme'
import Projectyears from './projectyears'
import Helpcompanies from './helpcompanies'
import Testimonials from './testimonials'
import Faq from './faq'
import Blog from './blog'
import Contactme from './contactme'
import Dreamproject from './dreamproject'
import Footer from './footer'
import Link from 'next/link'
import Supportme from './supportme'
import Bottomnavbar from './bottomnavbar'

function Containerforwesite(p) {
  
  const[state, setstate]= React.useState(true)

  useEffect(()=>{
    function scroll(){
      if(window.scrollY < 90 && window.innerWidth > 1024){
        setstate(true)
      }
    }
    window.addEventListener("scroll", scroll)
  },[setstate])
  useEffect(()=>{
    function scroll2(){
      
        setstate(true)
      
    }
    window.addEventListener("scroll", scroll2)
  },[setstate])
  return (
    <div>
    {/* <Headerandlandingpage state={state} setstate={setstate}/> */}
     <Services/>
     {/* <Latestwork work={p.work}/>
     <Aboutme/>
     <Projectyears/> 
     <Newlook/>
     <Helpcompanies/>
     <Faq/>
     <Blog data={p.c}/>
     <Contactme/>   
     <Dreamproject/>
     <Supportme/> 
  
     <Bottomnavbar state={state} setstate={setstate}/>  
     <Footer/> */}
    </div>
  )
}

export default Containerforwesite