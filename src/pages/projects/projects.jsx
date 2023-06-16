import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Header from "../../components/pageHeader/header"
import Tagline from "../../components/tagline/tagline"
import s from "./projects.module.css"
import headerImage from "/carousel3.jpg"

export default function Projects() {
  return (
    <div>
      <Nav />
      <Header
        headerImg={headerImage}
        headerH2={"PROJECTS"}
        headerP={"Building Excellence, Inspiring Futures"}
      />
      <Tagline
        tagH4="WE CAN HELP BUILD YOUR PROJECT"
        tagP="TELL US ABOUT YOUR PROJECT"
      />
      <Footer />
    </div>
  )
}
