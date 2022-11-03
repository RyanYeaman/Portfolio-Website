import NavMenu from "./NavMenu"

const NavBar = (props) => {


  return (
    <nav id='navbar'>
        <div className='navbar-container'>
            <NavMenu currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
            <div className='navbar-icon-container'>
              <img className='github-logo' src='/img/github.svg' alt='' />
              <img className='linkedin-logo' src='/img/linkedin.svg' alt='' />
              <img className='resume-logo' src='/img/file.svg' alt='' />
            </div>
        </div>
    </nav>
  )
}

export default NavBar