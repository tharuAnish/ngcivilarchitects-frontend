import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import s from "./about.module.css"
import Team from "./team/team"
import logo from "/ngLogoBuildingWhite.png"
import companyImg from "/company_about.png"

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
              <p className={s.ngP}>CIVIL & ARCHITECTS CONSULTING PVT.LTD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className={s.company}>
          <div className={s.companyImg}>
            <img src={companyImg} alt="company image" loading="lazy" />
          </div>
          <div className={s.companyDesc}>
            <h4 className={s.companyh4}>
              Welcome To Our Construction Company,
            </h4>
            <p className={s.companyP}>
              where we turn dreams into reality. With a passion for building
              exceptional structures, we are dedicated to delivering
              high-quality construction solutions. Our team of experienced
              professionals brings expertise, innovation, and attention to
              detail to every project. From residential to commercial, we
              specialize in creating functional and aesthetically pleasing
              spaces. With a focus on client satisfaction, we strive to exceed
              expectations and deliver projects on time and within budget. Trust
              us to handle your construction needs and embark on a journey of
              excellence and craftsmanship.
            </p>
            <p className={s.highlights}>Our Key Highlights</p>
            <ul className={s.companyUl}>
              <li>
                Dedicated to delivering high-quality construction solutions.
              </li>
              <li>Experienced professionals with expertise.</li>
              <li>
                Commitment to client satisfaction and exceeding expectations.
              </li>
              <li>Timely project delivery and adherence to budget.</li>
            </ul>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  )
}
