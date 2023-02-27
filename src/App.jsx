import Home from "./Pages/Home"
import ProjectDetail from "./Pages/ProjectDetail"
import Contact from "./Pages/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
function App() {

  return (
      <>
        <Router>
          <ScrollToTop/>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route exact path='/:projectTitle' element={<ProjectDetail/>}></Route>
            </Routes>
        </Router>
      </>
      
  )
}

export default App
