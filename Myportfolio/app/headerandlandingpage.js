import React from 'react'
import Header from './header'
import Landingpage from './landingpage'

function Headerandlandingpage(props) {
  return (
    <div className='bg-[#28293E]'>
      <Header state={props.state} setstate={props.setstate}/>
      <Landingpage/>
    </div>
  )
}

export default Headerandlandingpage
