import { useState } from 'react'
import './Componets/Navbar/Nav.css'
import Navbar from './Componets/Navbar/Nav'
import Hero from './Componets/Hero/Hero'
import Programs from './Componets/Programs/Programs'
import Title from './Componets/Title/Title'
import About from './Componets/About/About'
import Campus from './Componets/Campus/Campus'
import Testimonials from './Componets/Testimonials/Testimonials'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
      <Navbar/>
      <Hero/>
      <Title  subtitle="Our Program" Title="What We Are Offer"/>
      <Programs/>
      <About/>
       <Title  subtitle="Gallery" Title="Campus Photos"/>
       <Campus/>
         <Title  subtitle="TESTIMONIALS" Title="What Student Says"/>
         <Testimonials/>
      </div>
      
    </>
  )
}

export default App
