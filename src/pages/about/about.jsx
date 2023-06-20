import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import s from "./about.module.css"
import Team from "./team/team"
import logo from "/ngLogoBuildingWhite.png"

export default function About() {
  return (
    <div>
      <Nav />
      <div className={s.about}>
        <div className={s.headerBg}>
          <div className={`${s.aboutHeader} wrapper`}>
            <div className={s.headerLeft}>
              <img className={s.logo} src={logo} alt="ng-logo" />
            </div>
            <div className={s.headerRight}>
              <h4 className={s.h4}>NAMMOCHHIYA GROUP</h4>
              <p>CIVIL & ARCHITECTS CONSULTING PVT.LTD</p>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  )
}
