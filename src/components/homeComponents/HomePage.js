import AboutMe from "../aboutComponents/AboutMe";
import ProjectPage from "../projectComponents/ProjectPage";
import HomeContent from "./HomeContent";

const Homepage = (props) => {

  return (
    <div id='home-page'>
      <div className='home-content-container'>
        <HomeContent 
          pageToggled={props.pageToggled} 
          activePage={props.activePage} 
          currentPage={props.getCurrentPage} 
          aboutMePage={props.aboutMePage} 
          getCurrentPage={props.getCurrentPage}
        />
        <AboutMe />
        {/* <ProjectPage /> */}
      </div>
    </div>
  )
}

export default Homepage