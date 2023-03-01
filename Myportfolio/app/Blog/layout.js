"use client"

import Header from '../header'


export default function RootLayout({ children }) {
  return (
    <>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      
   
        

     <div>
         {children}
     </div>
       

       
    </>
  )
}
