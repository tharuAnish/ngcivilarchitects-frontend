import { Link, useLocation } from "react-router-dom"
import styles from "./navlink.module.css"
import classNames from "classnames"

export default function NavLink({ link, content }) {
  const location = useLocation()

  // Ensure Home ("/") is only active when exactly on the homepage
  const isActive =
    link === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(link)

  return (
    <Link
      to={link}
      className={classNames(styles.menu, isActive ? styles.active : "")}
    >
      {content}
    </Link>
  )
}
