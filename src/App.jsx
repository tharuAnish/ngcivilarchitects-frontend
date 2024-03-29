import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import Services from "./pages/services/services"
import Projects from "./pages/projects/projects"
import About from "./pages/about/about"
import Blogs from "./pages/blogs/blogs"
import Contact from "./pages/contact/contact"
import BlogDetails from "./pages/blogs/blogPage/blogDetails"
import s from "./App.module.css"
import ScrollToTop from "./components/scrollToTop/scrollToTop"
import Courses from "./pages/courses/courses"
import CourseDetail from "./pages/courses/courseDetail/courseDetail"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
