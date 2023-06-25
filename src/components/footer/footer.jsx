import { Link } from "react-router-dom"
import s from "./footer.module.css"
import logo from "../../assets/ngLogoBuildingWhite.png"
import { LuPhoneCall } from "react-icons/lu"
import { AiOutlineMail } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
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
              href="https://canwebe.in"
              target="_blank"
              className={s.canwebe}
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
            <div className={s.linksList}>
              <h4 className={s.h4}>BUSINESS HOURS</h4>
              <div href="https://www.canwebe.in/form/contact/" target="_blank">
                Our support team available to help you 24 hours a day, seven
                days a week.
              </div>
              <div
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=teamcanwebe@gmail.com"
                target="_blank"
              >
                Sun-Fri: 9am to 5pm
              </div>
              <div href="https://www.canwebe.in/form/review" target="_blank">
                Saturday: Closed
              </div>
            </div>
          </div>

          <div className={s.bottomRight}>
            {/* <h4 className={s.h4}>Follow Us:</h4> */}
            <p>Follow Us:</p>
            <Link
              className={s.facebook}
              href="https://www.facebook.com/TeamCanWeBe"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              className={s.instagram}
              href="https://www.instagram.com/canwebeofficial/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              className={s.linkedin}
              href="https://www.linkedin.com/company/canwebe"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              className={s.youtube}
              href="https://www.youtube.com/channel/UCZQme48ejS0QY3C4JmWgI4Q"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </Link>
            <Link
              className={s.twitter}
              href="https://twitter.com/teamcanwebe"
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
          &#169; {new Date().getFullYear()} Designed and Developed by namo{" "}
        </h5>
      </div>
    </footer>
  )
}
