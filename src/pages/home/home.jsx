import Carousel from "../../components/carousel/carousel"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Feature from "./feature/feature"
import HomeAbout from "./homeAbout/homeAbout"
import Testimony from "../../components/testimony/testimony"
import Tagline from "../../components/tagline/tagline"
import HomeProjects from "./homeProjects/homeProjects"
import Clients from "../../components/clients/clients"
// import ChatSupport from "../../components/chatSupport/chatSupport"
// import MessengerCustomerChat from "react-messenger-customer-chat"

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
      {/* <MessengerCustomerChat pageId="105457115937923" appId="621826160041746" /> */}
      {/* <ChatSupport /> */}
      <Footer />
    </div>
  )
}
