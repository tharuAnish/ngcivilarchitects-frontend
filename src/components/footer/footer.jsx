import { Link } from "react-router-dom"
import s from "./footer.module.css"

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
              Nammochhiya Group
            </Link>
            <p className={s.topPara}>
              We assist you to remodel everyday problems into modern techy
              solution.We help the society by presenting cost-free cutting edge
              applications.
            </p>
          </div>

          <div className={s.topRight}>
            <div className={s.linksList}>
              <h4 className={s.h4}>COMPANY</h4>
              <Link href="https://silentshare.netlify.app/" target="_blank">
                HOME
              </Link>
              <Link href="https://cwbedufeedback.netlify.app/" target="_blank">
                SERVICES
              </Link>
              <Link href="https://dailosocial.vercel.app/" target="blank">
                PROJECTS
              </Link>
              <Link href="https://dailosocial.vercel.app/" target="blank">
                ABOUT
              </Link>
              <Link href="https://dailosocial.vercel.app/" target="blank">
                BLOG
              </Link>
            </div>
            <div className={s.linksList}>
              <h4 className={s.h4}>CONTACT INFO</h4>
              <Link href="https://www.canwebe.in/form/contact/" target="_blank">
                Ratna Rajmarg (Nepalganj-Surkhet Road) 10, Npj
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=teamcanwebe@gmail.com"
                target="_blank"
              >
                +977 986-942-1800
              </Link>
              <Link href="https://www.canwebe.in/form/review" target="_blank">
                nggroup@gmail.com
              </Link>
            </div>
            <div className={s.linksList}>
              <h4 className={s.h4}>BUSINESS HOURS</h4>
              <Link href="https://www.canwebe.in/form/contact/" target="_blank">
                Our support team available to help you 24 hours a day, seven
                days a week.
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=teamcanwebe@gmail.com"
                target="_blank"
              >
                Sun-Fri: 9am to 5pm
              </Link>
              <Link href="https://www.canwebe.in/form/review" target="_blank">
                Sunday: Closed
              </Link>
            </div>
          </div>

          <div className={s.bottomRight}>
            <h4 className={s.h4}>Follow Us:</h4>
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
