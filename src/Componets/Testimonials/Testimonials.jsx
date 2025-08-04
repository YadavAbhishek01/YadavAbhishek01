import React, { useRef } from 'react'
import  './Testimonials.css'
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
const Testimonials = () => {

  const slider=useRef()
  let tx=0;

  const slideforword =()=>{
    if( tx>-50){
      tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slidebakword=()=>{
    if( tx < 0){
      tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  return (
    <div className='tesimonmials'>
      <IoChevronBackOutline  className='prev-icon' onClick={slidebakword}/>
      <MdNavigateNext  className='next-icon' onClick={slideforword}/>

      <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide " >
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus maiores reiciendis autem fugit sit fugiat consectetur numquam optio eveniet! Similique ex delectus sed veniam nesciunt necessitatibus perferendis expedita voluptas!
          </p>
          </div>
        </li>
         <li>
          <div className="slide">
            <div className="userinfo">
              <img src="https://media.istockphoto.com/id/2189153631/photo/indian-curly-hair-young-adult-gen-z-business-woman-staff-worker-standing-proud-look-cam.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRMHnummyM3LFj5rRukksY6hxyn07XxnAAhO1kjG64Y=" alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus maiores reiciendis autem fugit sit fugiat consectetur numquam optio eveniet! Similique ex delectus sed veniam nesciunt necessitatibus perferendis expedita voluptas!
          </p>
          </div>
        </li>
         <li>
          <div className="slide">
            <div className="userinfo">
              <img src="https://media.istockphoto.com/id/1303206644/photo/portrait-of-smiling-caucasian-man-pose-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=akRiOpll6XSlduMj09n9Zm11SsRpAjtdr85GbGJ99uM=" alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus maiores reiciendis autem fugit sit fugiat consectetur numquam optio eveniet! Similique ex delectus sed veniam nesciunt necessitatibus perferendis expedita voluptas!
           </p>
          </div>
        </li>
         <li>
          <div className="slide">
            <div className="userinfo">
              <img src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus maiores reiciendis autem fugit sit fugiat consectetur numquam optio eveniet! Similique ex delectus sed veniam nesciunt necessitatibus perferendis expedita voluptas!
           </p>
          </div>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Testimonials
