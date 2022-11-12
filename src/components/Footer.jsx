import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="container">

    <div className="footer-container">
    <div className="about-container">
      <h2 className='about-heading'>About Us</h2>
      <p className='about-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos!!</p>
    </div>

    <div className="email-container">
      <form className='footer-form' action="#">
      <h2 className='email-heading'>Subscribe To Our Newsletter</h2>
      <input type="email" placeholder='@Email' name='email' autoComplete='off' minLength={7} />
      <input type="submit" value="Submit" />
      </form>
    </div>

    <div className="social-container">
      <NavLink to="#">Twitter</NavLink>
      <NavLink to="#">Facebook</NavLink>
      <NavLink to="#">Instagram</NavLink>
      <NavLink to="#">LinkedIn</NavLink>
      <NavLink to="#">Github</NavLink>
    </div>

    <div className="sponsor-img-container">
      <img className='sponsor-img' src="./sponsor1.png" alt="sponsor-img" />
      <img className='sponsor-img' src="./sponsor2.png" alt="sponsor-img" />
      <img className='sponsor-img' src="./sponsor3.png" alt="sponsor-img" />
      <img className='sponsor-img' src="./sponsor4.png" alt="sponsor-img" />
    </div>
  </div>
  </div>

  )
}

export default Footer;
