import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/* Column1 */}
                <div className='col'>
                    <h4>INFORMATION</h4>
                    <ul className='list-unstyled'>
                        <li><Link to='aboutUs' className='footer-link'>About Us</Link></li>
                        <li><Link to='contactUs' className='footer-link'>Contact Us</Link></li>
                        <li><Link to='reviews' className='footer-link'>Reviews</Link></li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className='col'>
                    <h4>ACCOUNT</h4>
                    <ul className='list-unstyled'>
                        <li><Link to='/login' className='footer-link'>My Account</Link></li>
                        <li><Link to='/events' className='footer-link'>My Cart</Link></li>
                        <li><Link to='/events' className='footer-link'>Track Order</Link></li>
                    </ul>
                </div>
                {/* Column3 */}
                <div className='col'>
                    <h4>STAY CONNECTED</h4>
                    <ul  id="url-link" className='list-unstyled'>
                        <li className='icon'><a href="https://www.facebook.com/bloomsbymarra" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook fa-3x"></i></a></li>
                        <li className='icon'><a href="https://www.instagram.com/bloomsbymarra/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram fa-3x"></i></a></li>
                    </ul>
                </div>
            </div>
            <hr  />
            <div className='row'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} BLOOMS BY MARRA | All right reserved | Terms of Service | Privacy
                </p>
            </div>
        </div>      
    </div>
  )
}

export default Footer