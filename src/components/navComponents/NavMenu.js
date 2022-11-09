const NavMenu = (props) => {

    // // OPEN AND CLOSE MENU OPTIONS
    // const [menuToggled, setMenuToggle] = useState(false);
    // const menuToggler = () => setMenuToggle((toggler) => !toggler); 

    return (
        <div>
            <div className='nav-logo'>R</div>
            <p onClick={props.menuToggler} className={`nav-menu-button ${props.menuToggled ? " nav-menu-button-active" : ""}`}>
                MENU
            </p>
            <ul className='nav-menu'>
                <li onClick= { () => {props.setCurrentPage("home")} } className={`nav-menu-item home ${props.menuToggled ? "home-is-active" : ""}`}>
                    Home
                    <div className='underline'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </li>
                <li onClick= { () => {props.setCurrentPage("about")} } className={`nav-menu-item about-me ${props.menuToggled ? "about-me-is-active" : ""}`}>
                    About Me
                    <div className='underline'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </li>
                <li onClick={ () => {props.setCurrentPage("projects")} } className={`nav-menu-item projects ${props.menuToggled ? "projects-is-active" : ""}`}>
                    Projects
                    <div className='underline'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </li>
                <li onClick={ () => {props.setCurrentPage("hire")} } className={`nav-menu-item hire-me ${props.menuToggled ? "hire-me-is-active" : ""}`}>
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