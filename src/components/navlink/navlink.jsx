import { Link, useLocation } from "react-router-dom"
import styles from "./navLink.module.css"
import classNames from "classnames"

export default function NavLink({ link, content }) {
  const location = useLocation()

  return (
    <Link
      to={link}
      className={classNames(
        styles.menu,
        location.pathname === link ? styles.active : ""
      )}
    >
      {content}
    </Link>
  )
}
