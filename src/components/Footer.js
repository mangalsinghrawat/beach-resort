import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="main-content">
                <div className="left box">
                    <h2>About Us</h2>
                    <div className="content">
                        <p>This is Simple Resort Reservation Website. It is created using ReactJs. </p>
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
                            <span className="text"> +91-2222 222 222</span>
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
                        <form action="#">
                            <div className="email"><label>Email</label>
                                <input type="email" required />
                            </div>
                            <div className="msg">
                                <label>Message</label>
                                <textarea  cols="25" rows="2" required></textarea>
                            </div>
                            <button type="submit" className="btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <center>
                    <span className="credit">Created By <Link to="#">Mangal Singh Rawat</Link>| </span>
                    <span className="icons"><FaCopyright /></span><spam> 2021 All Rights Reserved.</spam>
                </center>
            </div>
        </footer>
    )
}
