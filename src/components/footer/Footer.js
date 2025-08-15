
import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
      <div className="item">
        <h3>Categories</h3>
        <Link className="link">Single Room</Link>
        <Link className="link">Double Room</Link>
        <Link className="link">SUITE</Link>
        <Link className="link"></Link>
        <Link className="link"></Link>
      </div>
      <div className="item">
        <h3>Links</h3>
        <Link className="link">FAQ</Link>
        <Link className="link">Pages</Link>
        <Link className="link">Stores</Link>
        <Link className="link">Compare</Link>
        <Link className="link">Cookies</Link>
      </div>
      
      <div className="item">
        <h3>About</h3>
        <p>Welcome to our luxurious hotel, where comfort meets elegance. Located in the heart of our hotel offers stunning views, world-class amenities, and impeccable service. Relax in our spacious and beautifully designed rooms, each equipped with modern conveniences and stylish furnishings..</p>
      </div>
      <div className="item">
        <h3>Contact</h3>
        <p>Phone: +1 123-456-7890<br/>
         Email: Afridi123@gmail.com<br/>
        Address: Nehar Speen Qabr, Bara Khyber Agency, Pakistan</p>
        <div className="payment">
        
       
      </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
