import NavMenu from "./NavMenu"

const NavBar = (props) => {

  function changePosition(arr, e) {
    arr.splice(0, 1, e.target, arr.splice(arr.indexOf(e.target), 1))
    console.log(arr)
  }

  return (
    <nav id='navbar'>
        <div className='navbar-container'>
            <NavMenu changePosition={changePosition} activePage={props.activePage}/>
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