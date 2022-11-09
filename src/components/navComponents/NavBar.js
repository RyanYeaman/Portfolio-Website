import NavMenu from "./NavMenu"
import { useState } from "react";

const NavBar = (props) => {

  // OPEN AND CLOSE MENU OPTIONS
  const [menuToggled, setMenuToggle] = useState(false);
  const menuToggler = () => setMenuToggle((toggler) => !toggler); 


  return (
    <nav id='navbar'>
        <div className='navbar-container'>
            <NavMenu currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} menuToggler={menuToggler} menuToggled={menuToggled}/>
            <div className={`navbar-icon-container ${menuToggled ? "navbar-icon-container-active" : ""}`}>
              <a href="https://github.com/RyanYeaman" className='github-logo'><img className='github-logo' src='/img/github.svg' alt='' /></a>
              <a href="https://www.linkedin.com/in/ryan-yeaman-2415b824b/" className='linkedin-logo'><img className='linkedin-logo' src='/img/linkedin.svg' alt='' /></a>
              <a href="/img/Resume.pdf" download="Resume-RyanYeaman" className='resume-logo'><img className='resume-logo' src='/img/file.svg' alt='' /></a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar