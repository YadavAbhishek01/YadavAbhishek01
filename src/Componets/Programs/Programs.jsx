import React from 'react'
import './Programs.css'
import { FiBookOpen } from "react-icons/fi";
import { GiBookmarklet } from "react-icons/gi";
import { BiSolidBookReader } from "react-icons/bi";
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src="https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnR8ZW58MHwxfDB8fHww" alt="" />
        <div className="caption">
            <FiBookOpen className='text-9xl'/>
            <p>Graduation Degree</p>
        </div>
      </div>
        <div className="program">
        <img src="https://images.unsplash.com/photo-1717508900594-f4739b32eaee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8" alt="" />
       <div className="caption">
            <GiBookmarklet className='text-9xl'/>
            <p>Master Degree</p>
        </div>
      </div>
        <div className="program">
        <img src="https://images.unsplash.com/photo-1717508900326-6407533185e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8" alt="" />

            <div className="caption">
                <BiSolidBookReader className='text-9xl'/>
            <p> Post Graduation Degree</p>
           </div>
      </div>
    </div>
  )
}

export default Programs
