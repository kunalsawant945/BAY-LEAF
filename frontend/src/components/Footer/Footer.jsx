import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Located in the heart of Kudal, Bay Leaf is a culinary haven known for its mouth-watering multi-cuisine menus and irresistible fast food delights. Whether you're craving traditional flavors or modern twists, we promise a dining experience that's fresh, flavorful, and unforgettable. Visit us for a taste that lingers long after the last bite.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>BAY LEAF</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH WITH US</h2>
            <ul>
                <li>+91 9823659179</li>
                <li>kunalsawant945@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © bayleaf.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
