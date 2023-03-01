"use client"
import React from 'react'
import { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import axios from 'axios';
function Contactmeform() {

  const recaptchaRef = React.createRef();
const[state, setstate] = React.useState()
const[state2, setstate2] = React.useState()
const[state3, setstate3] = React.useState()
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setstate2(undefined)
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
if(inputs.email !== "" && inputs.subject !== "" && inputs.message !== ""){
  setstate(true)
  axios({
    method: "POST",
    url: "https://formbold.com/s/9kPZ0",
    data: inputs,
  })
    .then((r) => {
      setstate2(true)
    })
    .catch((r) => {
      setstate2(false)
    });}
    else{
      setstate(false)
    }
}

 
  return (

    <>
   
    <div className='bg-white rounded-[6px]'>
      <div className='p-[28px] sm:p-[48px]'>
        <h3 className='font-Epilogue text-[24px] leading-8 text-[#391400] font-bold'>Get In Touch</h3>
        <form  onSubmit={handleOnSubmit} >
            <div>
                <input  
                   onChange={handleOnChange}
                   value={inputs.email}
                   id="email"
                   type="email"
                   name="email"
                 placeholder='Your email
                 '
                 className={`${state == false && inputs.email == "" ? "border-red-600" : "border-[#F3D1BF]"} focus:outline-[0px] focus:border-[2px] focus:border-[#F3D1BF] pl-[20px] h-[48px] w-[100%] mt-[16px] md:mt-[28px] sm:w-[100%] rounded-[6px] border-[1px]  leading-8 text-[rgba(57,20,0,0.64)] font-Epilogue`}/>
            </div>
            <div className={`${state === undefined ? "hidden" : "block"} font-Epilogue text-red-600 text-[12px]`} >
                        <div className={`${state == false && inputs.email == "" ? "mt-[20px]" : "mt-[0px]"}`}>
                        {state == false && inputs.email == "" ? `Please put in the required detail "Email" ` : ""}
                        </div>  
              </div>
            
           
            
            <div>
                <input       onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        
           placeholder='Subject'   className={`${state == false && inputs.subject == "" ? "border-red-600" : "border-[#F3D1BF]"}   focus:border-[2px] pl-[20px] h-[48px] focus:outline-[0px] focus:border-[#F3D1BF]  w-[100%] mt-[16px] md:mt-[28px] sm:w-[100%] rounded-[6px] border-[1px]  leading-8 text-[rgba(57,20,0,0.64)] font-Epilogue`}/>
            </div>
            <div className={`${state === undefined ? "hidden" : "block"} font-Epilogue text-red-600 text-[12px]  `} >
                      
                      <div className={`${state == false && inputs.subject == "" ? "mt-[20px]" : "mt-[0px]"}`}>
                        {state == false && inputs.subject == "" ? `Please put in the required detail "Subject" ` : ""}
                        </div>  
              </div>
            <div>
              
              
                <input     onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
   
        
        
         
                  placeholder='Message'   className={`${state == false && inputs.message == "" ? "border-red-600" : "border-[#F3D1BF]"} pl-[20px] focus:outline-[0px]  focus:border-[2px] h-[128px] w-[100%]  mt-[16px] md:mt-[28px] sm:w-[100%] rounded-[6px] border-[1px]  leading-8 text-[rgba(57,20,0,0.64)] font-Epilogue`}/>
            </div>
            <div className={`${state === undefined ? "hidden" : "block"} font-Epilogue text-red-600 text-[12px]`} >
                        <div className={`${state == false && inputs.message == "" ? "mt-[20px]" : "mt-[0px]"}`}>
                        {state == false && inputs.message == "" ? `Please put in the required detail "Message" ` : ""}
                        </div>  
              </div>
         
            <div className='flex justify-end mb-[20px]'>
                <button type="" className='bg-[#ef6d58] rounded-[6px] w-[154px] h-[48px] text-white font-black text-[14px] font-Epilogue   leading-[14px] mt-[32px] uppercase'>
                    SUBMIT Now
                </button>
            </div>
            <ReCAPTCHA
        ref={recaptchaRef}
        sitekey = "6LfmKLgkAAAAAMimipSCIKDuA8lUm-idlghVVZ3M"
       
      />
      </form>
            
<div className={`${state2 === undefined ? "hidden" : "block" } font-Epilogue `}>
  {state2 ? "Email Sent" : "Unable to send email. Please check your network settings"}
</div>
      </div>

    </div> </>
  )
}

export default Contactmeform
