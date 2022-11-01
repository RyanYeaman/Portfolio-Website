import './App.css';
import NavBar from './components/navComponents/NavBar';
import HomePage from "./components/homeComponents/HomePage"
import { useState } from "react"

function App() {

  const [pageToggled, setPage] = useState(false);
  const toggleHome = () => setPage((toggler) => !toggler);

  const aboutMePage = document.getElementsByClassName("about-me");
  const projectPage = document.getElementsByClassName("projects");
  const hirePage = document.getElementsByClassName("hire-me");
  let activePage = [aboutMePage, projectPage, hirePage];

  function getCurrentPage(arr, page) {
    return arr.indexOf(page) <= 0 ? true : false;
  };

  return (
    <div>
      <NavBar toggleHome={toggleHome} activePage={activePage} getCurrentPage={getCurrentPage} />
      <HomePage
        pageToggled={pageToggled}
        activePage={activePage}
        aboutMePage={aboutMePage}
        getCurrentPage={getCurrentPage}
      />
    </div>
  );
}

export default App;