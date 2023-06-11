import Carousel from "../../components/carousel/carousel"
import Nav from "../../components/nav/nav"
import Feature from "./feature/feature"
import HomeAbout from "./homeAbout/homeAbout"

export default function Home() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Feature />
      <HomeAbout />
    </div>
  )
}
