import React, { useEffect, useState } from 'react'
import  './Nav.css'
const Nav = () => {

  const[sticky,setSticky]=useState(false)

  useEffect(()=>{
      window.addEventListener("scroll",()=>{
        window.scrollY > 50 ? setSticky(true):setSticky(false);
      })
  },[])
  return (
   <>
   <nav className={`Container ${sticky ?'dark-nav':''}`}>
    <img src="https://greatstack.in/assets/logo-DUdXW4nF.png" className='logo' alt="" />
    <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About US</li>
        <li>Capmpus</li>
        <li>Testimonials</li>
        <li><button className='contact-btn'>Contact US</button></li>
    </ul>
   </nav>
   </>  )
}

export default Nav
