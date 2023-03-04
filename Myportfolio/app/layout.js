"use client"
import './globals.css'
import Header from './header'
import Footer from './footer'
import "prismjs/themes/prism-tomorrow.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>

    {

    }
    <head />
    <body>
      
      {children}
      
    </body>
    </html>
  );
}
