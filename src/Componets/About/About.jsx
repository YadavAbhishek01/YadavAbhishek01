import React from 'react'
import './About.css'
import { FaPlay } from "react-icons/fa";
const About = () => {
  return (
    <div className='about Container'>
      <div className="about-left">
    <img src="https://media.istockphoto.com/id/2132469145/photo/student-using-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=6gS9nOFamedRSsQd_ZldH3hOScFKbES-Z1J4_2hXYao=" alt="" />
    <FaPlay className='playicon'/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit incidunt iste, nesciunt in nobis atque eum eaque reiciendis iusto totam facere sint voluptatem nam dicta inventore modi dolore non voluptate?
        Doloribus impedit autem explicabo alias suscipit blanditiis, quod beatae vel at. Adipisci dicta distinctio dolorem iste voluptates. Voluptate rerum doloremque quis cupiditate, quas voluptas beatae, quaerat ex omnis esse aut?
        Modi nobis repudiandae neque doloremque maiores maxime impedit. </p>
        <p>Pariatur ex iste blanditiis dolores enim corrupti. Ea culpa qui cum, quisquam ratione officia vel, tenetur fugit laborum tempora ducimus mollitia dolore.
        Aliquam libero laborum itaque odit ad inventore atque enim ipsam adipisci ab natus aut, voluptatibus alias repellat labore velit reprehenderit ex in, nulla explicabo iste earum cupiditate quidem facilis.</p>
      </div>
    </div>
  )
}

export default About
