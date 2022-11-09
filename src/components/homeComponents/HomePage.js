import AboutMe from "../aboutComponents/AboutMe";
import ProjectPage from "../projectComponents/ProjectPage";
import HomeContent from "./HomeContent";
import HirePage from "../hireComponents/HirePage";

const Homepage = (props) => {

  return (
    <div id='home-page'>
        <HomeContent
          currentPage={props.currentPage}
        />
        <AboutMe
          currentPage={props.currentPage}
        />
        <ProjectPage
          currentPage={props.currentPage}
        />
        <HirePage 
          currentPage={props.currentPage}
        />
    </div>
  )
}

export default Homepage