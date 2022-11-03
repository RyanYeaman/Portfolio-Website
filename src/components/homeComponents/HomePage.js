import AboutMe from "../aboutComponents/AboutMe";
import ProjectPage from "../projectComponents/ProjectPage";
import HomeContent from "./HomeContent";

const Homepage = (props) => {

  return (
    <div id='home-page'>
      <div className='home-content-container'>
        <HomeContent 
          pageToggled={props.pageToggled} 
          currentPage={props.currentPage}
        />
        <AboutMe 
          currentPage={props.currentPage}
        />
        <ProjectPage 
          currentPage={props.currentPage}
        />
      </div>
    </div>
  )
}

export default Homepage