import Carousel from "../../components/carousel/carousel"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Client from "./client/client"
import Feature from "./feature/feature"
import HomeAbout from "./homeAbout/homeAbout"
import Testimony from "../../components/testimony/testimony"
import Tagline from "../../components/tagline/tagline"
import HomeProjects from "./homeProjects/homeProjects"

export default function Home() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Feature />
      <HomeAbout />
      <HomeProjects />
      <Testimony />
      {/* <Tagline
        tagH4="WE CAN HELP BUILD YOUR PROJECT"
        tagP="TELL US ABOUT YOUR PROJECT"
      /> */}
      {/* <Client /> */}
      <Footer />
    </div>
  )
}
