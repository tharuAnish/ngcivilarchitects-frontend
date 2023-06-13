import Carousel from "../../components/carousel/carousel"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Client from "./client/client"
import Feature from "./feature/feature"
import HomeAbout from "./homeAbout/homeAbout"

export default function Home() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Feature />
      <HomeAbout />
      <Client />
      <Footer />
    </div>
  )
}
