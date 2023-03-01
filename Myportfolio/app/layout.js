"use client"
import './globals.css'
import Header from './header'
import Footer from './footer'
export const revalidate = 10

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>

    {

    }
    <head />
    <body>
      
      {children}
      
    <Footer/></body>
    </html>
  );
}
