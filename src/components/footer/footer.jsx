import { Link } from "react-router-dom"
import s from "./footer.module.css"
import logo from "../../assets/ngLogoBuildingWhite.png"
import { LuPhoneCall } from "react-icons/lu"
import { AiOutlineMail } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdKeyboardArrowRight, MdAccessTime } from "react-icons/md"
import { BsBuildingLock } from "react-icons/bs"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.topFooterWrapper}>
        <div className={`${s.topFooter} wrapper`}>
          <div className={s.topLeft}>
            <Link
              href="https://ngcivilarchitects.com/"
              target="_blank"
              className={s.ngLogo}
            >
              {/* <span className={s.can}>Can</span>WeBe! */}
              {/* Nammochhiya Group */}
              <img className={s.logo} src={logo} alt="logo" />
            </Link>
            <p className={s.topPara}>
              We specialize in transforming everyday construction challenges
              into innovative solutions. Our civil construction company is
              dedicated to delivering modern, efficient, and high-quality
              results that benefit our clients
            </p>
          </div>

          <div className={s.topRight}>
            <div className={s.topRight1}>
              <div className={s.linksList}>
                <h4 className={s.h4}>COMPANY</h4>
                <Link className={s.linkFlex} to="/">
                  <MdKeyboardArrowRight className={s.icon} />
                  Home
                </Link>
                <Link className={s.linkFlex} to="/services">
                  <MdKeyboardArrowRight className={s.icon} />
                  Services
                </Link>
                <Link className={s.linkFlex} to="/projects">
                  <MdKeyboardArrowRight className={s.icon} />
                  Projects
                </Link>
                <Link className={s.linkFlex} to="/about">
                  <MdKeyboardArrowRight className={s.icon} />
                  About
                </Link>
                <Link className={s.linkFlex} to="/blogs">
                  <MdKeyboardArrowRight className={s.icon} />
                  Blog
                </Link>
              </div>
              <div className={s.linksList}>
                <h4 className={s.h4}>CONTACT INFO</h4>
                <Link
                  className={s.linkFlex}
                  to="https://goo.gl/maps/Qoub1dkW1AMmFb83A"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineLocationMarker className={s.icon} />
                  Ratna Rajmarg (Nepalganj-Surkhet Road) 10, Npj
                </Link>
                <Link className={s.linkFlex}>
                  <LuPhoneCall className={s.icon} />
                  +977 986-942-1800
                </Link>
                <Link
                  className={s.linkFlex}
                  to="https://mail.google.com/mail/?view=cm&fs=1&to=ngcivilarchitectures@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail className={s.icon} />
                  ngcivilarchitects@gmail.com
                </Link>
              </div>
            </div>
            <div className={s.topRight2}>
              <div className={s.linksList}>
                <h4 className={s.h4}>BUSINESS HOURS</h4>
                <div className={s.linkFlex} to="/blogs">
                  <MdKeyboardArrowRight className={s.icon} />
                  <div>
                    Our support team available to help you 24 hours a day, seven
                    days a week.
                  </div>
                </div>
                <div className={s.linkFlex} to="/blogs">
                  <MdAccessTime className={s.icon} />
                  <div>Sun-Fri: 9am to 5pm</div>
                </div>
                <div className={s.linkFlex} to="/blogs">
                  <BsBuildingLock className={s.icon} />
                  <div>Saturday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className={s.followUs}>
            {/* <h4 className={s.h4}>Follow Us:</h4> */}
            <p>Follow Us:</p>
            <Link
              className={s.facebook}
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              className={s.instagram}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              className={s.linkedin}
              href="https://www.linkedin.com/company/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              className={s.youtube}
              href="https://www.youtube.com/channel/"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </Link>
            <Link
              className={s.twitter}
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className={s.bottomFooter}>
        <h5 className={s.bottomLeft}>
          {" "}
          &#169; {new Date().getFullYear()} Designed and Developed by{" "}
          <Link
            to="https://www.linkedin.com/in/tharuanish/"
            target="_blank"
            rel="noreferrer"
            className={s.nameLink}
          >
            AnishTharu
          </Link>{" "}
        </h5>
      </div>
    </footer>
  )
}
