import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
    const handleSubmit = () => {
        setTimeout(() => {
            alert("Thank you for your feedback!")
        },2000)
    }
    return (
        <footer>
            <div className="main-content">
                <div className="left box">
                    <h2>About Us</h2>
                    <div className="content">
                        <p>Welcome to BeachHomes, where your dream beach vacation becomes a reality. We offer a range of accommodations to suit every preference and need. Our resort offers the perfect blend of luxury, comfort, and breathtaking natural beauty. </p>
                    </div>
                </div>
                <div className="center box">
                    <h2>Address</h2>
                    <div className="content">
                        <div className="place">
                            <span className="icons"><FaMapMarkerAlt /></span>
                            <span className="text"> Mumbai, Maharashtra, India</span>
                        </div>
                        <div className="phone">
                            <span className="icons"><FaPhoneAlt /></span>
                            <span className="text"> 9082331713</span>
                        </div>
                        <div className="email">
                            <span className="icons"><FaEnvelope /></span>
                            <span className="text"> harishrawat457@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="right box">
                    <h2>Contact Us</h2>
                    <div className="content">
                        <form >
                            <div className="email"><label>Email</label>
                                <input type="email" required />
                            </div>
                            <div className="msg">
                                <label>Message</label>
                                <textarea  cols="25" rows="2" required></textarea>
                            </div>
                            <button className="btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <center>
                    <span className="credit">Created By <Link onClick={()=> window.location.href = "https://www.linkedin.com/in/mangal-singh-rawat-870281177/"}>Mangal Singh Rawat</Link>| </span>
                    <span className="icons"><FaCopyright /></span><spam> 2021 All Rights Reserved.</spam>
                </center>
            </div>
        </footer>
    )
}
