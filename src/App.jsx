import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import Services from "./pages/services/services"
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
