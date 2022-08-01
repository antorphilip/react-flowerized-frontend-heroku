import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/* Column1 */}
                <div className='col'>
                    <h4>INFORMATION</h4>
                    <ul className='list-unstyled'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Reviews</li>
                        <li>Policies</li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className='col'>
                    <h4>MY ACCOUNT</h4>
                    <ul className='list-unstyled'>
                        <li>Login</li>
                        <li>Signup</li>
                        <li>Profile</li>
                    </ul>
                </div>
                {/* Column3 */}
                <div className='col'>
                    <h4>STAY CONNECTED</h4>
                    <ul  id="url-link" className='list-unstyled'>
                        <li className='icon'><a href="https://www.facebook.com/bloomsbymarra"><i class="fa-brands fa-facebook fa-3x"></i></a></li>
                        <li className='icon'><a href="https://www.facebook.com"><i class="fa-brands fa-instagram fa-3x"></i></a></li>
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