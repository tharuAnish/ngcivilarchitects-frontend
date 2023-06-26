import Carousel from "../../components/carousel/carousel"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Feature from "./feature/feature"
import HomeAbout from "./homeAbout/homeAbout"
import Testimony from "../../components/testimony/testimony"
import Tagline from "../../components/tagline/tagline"
import HomeProjects from "./homeProjects/homeProjects"
import Clients from "../../components/clients/clients"

export default function Home() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Feature />
      <HomeAbout />
      <HomeProjects />
      <Clients />
      <Testimony />
      {/* <Tagline
        tagH4="WE CAN HELP BUILD YOUR PROJECT"
        tagP="TELL US ABOUT YOUR PROJECT"
      /> */}
      <Footer />
    </div>
  )
}
