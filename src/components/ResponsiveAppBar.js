import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'



function ResponsiveAppBar(props) {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
           <a href='/'>
              <Link  activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}> <h3> Cecile </h3>
              </Link>
            </a> 
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/'>
              <Link  activeClass="active" to="aboutTwo" spy={true} smooth={true} offset={0} duration={500}> About me
              </Link>
            </a>

          </li>
          <li> <a href='/'>
              <Link  activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}> My Projects
              </Link>
            </a> </li>

          <li> <a href='/'>
              <Link  activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}> Contact me
              </Link>
            </a> </li>
        </ul>

      </div>

    </div>
  );
}

export default ResponsiveAppBar;


