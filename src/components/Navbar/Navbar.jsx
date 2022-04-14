import React,{useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <nav className="app__navbar">
      <div className='app__navbar-login'>
        {/* <a href="#login" className='p__opensans'></a>
          <div /> */}
        <a href="/" className='p__opensans'>Book a Table</a>
      </div>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app-logo" />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)} />

          {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p_opensans'><a href="#home">Home</a></li>
              <li className='p_opensans'><a href="#about"></a>About</li>
              <li className='p_opensans'><a href="#menu"></a>Menu</li>
              <li className='p_opensans'><a href="#awards">Awards</a></li>
              <li className='p_opensans'><a href="#contact">Contact</a></li>
              <li className='p_opensans'><a href="#Login">Log In / Register</a></li>
            </ul>
          </div>
          )}
      </div>
      
      
    </nav>

  )
}

export default Navbar;
