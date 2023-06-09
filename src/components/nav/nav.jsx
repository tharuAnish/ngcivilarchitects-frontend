import styles from "./nav.module.css"
import {
  //   BrowserRouter as Router,
  //   Routes,
  //   Route,
  //   NavLink,
  Link,
} from "react-router-dom"
import { useEffect, useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import logo from "../../assets/ng-bgwhite.png"
import NavLink from "../navlink/navlink"

export default function Nav() {
  const [isMenu, setIsMenu] = useState(false)

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenu])
  return (
    <>
      <nav className={styles.nav}>
        <div className="wrapper">
          <div className={styles.navWrapper}>
            <Link href="/" className={styles.logo}>
              <div className={styles.img}>
                <img src={logo} alt="logo" placeholder="blur" />
              </div>
              <div>
                <span className={styles.cann}>NG</span>group
              </div>
            </Link>
            <div className={styles.linkWrapper}>
              <NavLink link="/" content="Home" />
              <NavLink link="/services" content="Services" />
              <NavLink link="/about" content="About" />
              <NavLink link="/project" content="Project" />
              <NavLink link="/blogs" content="Blogs" />
              <Link href="/contact" className={styles.contactBtn}>
                Contact
              </Link>
            </div>

            <div
              onClick={() => setIsMenu((prev) => !prev)}
              className={styles.menu}
            >
              {isMenu ? <MdClose /> : <MdMenu />}
            </div>
          </div>
        </div>
      </nav>
      {isMenu ? (
        // <div className={styles.sideMenuBg}>
        <div className={styles.sideMenu}>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/" content="Home" />
          </div>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/services" content="Services" />
          </div>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/about" content="About" />
          </div>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/project" content="Project" />
          </div>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/blogs" content="Blogs" />
          </div>

          <Link href="/form/contact" className={styles.contactBtn}>
            Contact
          </Link>
        </div>
      ) : null}
    </>
  )
}
