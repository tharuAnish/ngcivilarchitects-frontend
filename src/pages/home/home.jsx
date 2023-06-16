import Carousel from "../../components/carousel/carousel"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Client from "./client/client"
import Feature from "./feature/feature"
import HomeAbout from "./homeAbout/homeAbout"
import Testimony from "../../components/testimony/testimony"

export default function Home() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Feature />
      <HomeAbout />
      <Testimony />
      {/* <Client /> */}
      <Footer />
    </div>
  )
}
