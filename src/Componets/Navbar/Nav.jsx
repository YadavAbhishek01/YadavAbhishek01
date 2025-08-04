import React, { useEffect, useState } from 'react'
import  './Nav.css'
import { Link } from 'react-scroll'
import { IoMenu } from "react-icons/io5";
const Nav = () => {

  const[sticky,setSticky]=useState(false)
  const [extend,setextend]=useState(true);

  const menubar=()=>{
    if(extend)
    {
      setextend(false)
    }
    else{
      setextend(true) ;
    }
  }
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
        window.scrollY > 50 ? setSticky(true):setSticky(false);
      })
  },[])
  return (
   <>
   <nav className={`Container ${sticky ?'dark-nav':''}`}>
    <img src="https://greatstack.in/assets/logo-DUdXW4nF.png" className='logo' alt="" />
    <ul className={extend ? '': 'hide-menu'}>
        <li><Link to="hero" smooth={true} offset={0}duration={500}>Home</Link></li>             
        <li><Link to="program" smooth={true} offset={-260}duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-130}duration={500}>About US</Link></li>
        <li><Link to="campus" smooth={true} offset={-180}duration={500}>Capmpus</Link></li>
        <li><Link to="tesimonmials" smooth={true} offset={-220}duration={500}>Testimonials</Link></li>
        <li><button className='contact-btn'><Link to="contact" smooth={true} offset={-260}duration={500}>Contact US</Link></button></li>
    </ul>
    <IoMenu className='menu-icon' onClick={menubar}/>     
   </nav>
   </>  )
}

export default Nav
