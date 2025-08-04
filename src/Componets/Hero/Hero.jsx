import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-txt">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
             Tempore quod quos delectus iure cumque. Incidunt soluta illo totam dolorem impedit ipsam possimus laboriosam unde mollitia tempora. Itaque error blanditiis enim.
            </p>
            <button className='btn '>Explore more<FaArrowRight className=' arrow'/></button>
      </div>
    </div>
  )
}

export default Hero
