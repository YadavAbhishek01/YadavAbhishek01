import React from 'react'
import './Campus.css'
import { FaArrowRight } from "react-icons/fa";
const Campus = () => {
  return (
    <div className='campus Container'>
        <div className="galary">
            <img src="https://media.istockphoto.com/id/2163913253/photo/group-of-four-indian-asian-young-college-friends-with-backpack-books-laptop-standing-isolated.jpg?s=612x612&w=0&k=20&c=8U1oMphXNuOAGdguGHjE3hdMqWoWkc2bwtLQUu1fDpE=" alt="" />
            <img src="https://media.istockphoto.com/id/2075583750/photo/group-of-indian-village-students-in-school-uniform-sitting-in-classroom-doing-homework.webp?a=1&b=1&s=612x612&w=0&k=20&c=K1e9EsZQzb_-GPbYjMVMX1Sqnr8Uj9Az-PfD2gEFN8s=" alt="" />
            <img src="https://media.istockphoto.com/id/1160179474/photo/indian-university-student-stock-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=bt-K0byqkmGR2wXzrb9AgrPDphkqwaP2R_OzbU2mmMU=" alt="" />
            <img src="https://media.istockphoto.com/id/2171356684/photo/young-student-woman-isolated-purple-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=IUoI8ZCnMo0xrO2xs-BqL1OEM7q2CtbiICW4JYNiooA=" alt="" />
            
            
        </div>
        <button className='btn' >See More Here<FaArrowRight className=' arrow'/></button>
      
    </div>
  )
}

export default Campus
