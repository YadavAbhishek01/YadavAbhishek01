import React from 'react'
import './Contact.css'
import { IoMailSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b0e8d9f8-20d8-4596-b63e-1b9a9c5270d5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully !!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-call">
        <h3>Send us a message  <img src="https://greatstack.in/assets/msg-icon-ClKDHhj8.png" alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <div className="details">
          <div className="mail">
            <IoMailSharp className='mail-icon' />
            <p>Contact@GreatStack.dev</p>
          </div>
          <div className="call">
            <IoIosCall className=' call-icon' />
            <p>+1 123-456-7890</p>
          </div>
          <div className="location">
            <FaLocationDot className='location-icon' />
            <p>77 Massachusetts Ave, Cambridge
              MA 02139, United States</p>
          </div>
        </div>



      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>  
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder='Name' required />

          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder='Email' required />

          <label htmlFor=""> Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter Your mobile number' maxLength="10" required />

          <label htmlFor="">Write your messages here</label>
          <textarea name="textarea" id="" rows="6" placeholder='Enter your message' required></textarea>

          <button className='btn' type='submit' >See More Here<FaArrowRight className=' arrow' /></button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
