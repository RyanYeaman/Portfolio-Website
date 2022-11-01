import { useState } from "react";

const NavMenu = (props) => {

    // OPEN AND CLOSE MENU OPTIONS
    const [menuToggled, setMenuToggle] = useState(false);
    const menuToggler = () => setMenuToggle((toggler) => !toggler); 

    return (
        <div>
            <div className='nav-logo'>R</div>
            <p onClick={menuToggler} className={`nav-menu-button ${menuToggled ? " nav-menu-button-active" : ""}`}>
                MENU
            </p>
            <ul className='nav-menu'>
                <li onClick= {(e) => {props.changePosition(props.activePage, e)}} className={`nav-menu-item about-me ${menuToggled ? "about-me-is-active" : ""}`}>
                    About Me
                    <div className='underline'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </li>
                <li onClick={(e) => {props.changePosition(props.activePage, e)}} className={`nav-menu-item projects ${menuToggled ? "projects-is-active" : ""}`}>
                    Projects
                    <div className='underline'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </li>
                <li className={`nav-menu-item hire-me ${menuToggled ? "hire-me-is-active" : ""}`}>
                    Hire Me
                    <div className='underline'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default NavMenu