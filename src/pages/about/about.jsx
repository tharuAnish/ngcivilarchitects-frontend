import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import s from "./about.module.css"
import Team from "./team/team"
import logo from "/ngLogoNoBg.png"
import companyImg from "/company_about.png"
import ChatSupport from "../../components/chatSupport/chatSupport"
import Clients from "../../components/clients/clients"
import { useFetch } from "../../hooks/useFetch"
import { Link } from "react-router-dom"
import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

export default function About() {
  const url = "http://127.0.0.1:8000/api/team/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const teams = apiResponse?.team || []
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
              <h4 className={s.h4}>NAMOCHHIYA GROUP</h4>
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
      <div className={s.mdWrapper}>
        {teams &&
          teams.map(
            (team) =>
              team.is_md && (
                <div key={team.id} className={`wrapper ${s.md}`}>
                  <div className={s.mdLeft}>
                    <h4 className={s.mdh4}>Message From Managing Director</h4>
                    <div
                      className={s.mdDesc}
                      dangerouslySetInnerHTML={{ __html: team.staff_desc }}
                    />
                    <div className={s.staffLinks}>
                      Contact me:
                      {team.gmail && (
                        <Link
                          className={s.gmail}
                          to={`mailto:${team.gmail}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MdOutlineEmail />
                        </Link>
                      )}
                      {team.linkedin && (
                        <Link
                          className={s.linkedin}
                          to={team.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </Link>
                      )}
                      {team.twitter && (
                        <Link
                          className={s.twitter}
                          to={team.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </Link>
                      )}
                      {team.facebook && (
                        <Link
                          className={s.facebook}
                          to={team.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook />
                        </Link>
                      )}
                      {team.instagram && (
                        <a
                          className={s.instagram}
                          to={team.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className={s.mdRight}>
                    <div className={s.mdBorder}>
                      <img
                        className={s.mdImg}
                        src={`http://127.0.0.1:8000/${team.staff_pic}`}
                        alt="staff img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
      <Team />
      <Clients />
      <ChatSupport />
      <Footer />
    </div>
  )
}
