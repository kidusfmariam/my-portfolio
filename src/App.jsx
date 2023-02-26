import Home from "./Pages/Home"
import ProjectDetail from "./Pages/ProjectDetail"
import Contact from "./Pages/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
function App() {

  return (
      <>
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
      </>
      
  )
}

export default App
