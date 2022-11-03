import './App.css';
import NavBar from './components/navComponents/NavBar';
import HomePage from "./components/homeComponents/HomePage"
import { useState } from "react"

function App() {

  const [pageToggled, setPage] = useState(false);
  const toggleHome = () => setPage((toggler) => !toggler);


  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div>
      <NavBar toggleHome={toggleHome} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <HomePage
        pageToggled={pageToggled}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;