import { Link } from "react-router-dom"
import s from "./tagline.module.css"

export default function Tagline({ tagH4, tagP }) {
  return (
    <div className={s.tag}>
      <h4 className={s.tagH4}>{tagH4}</h4>
      <p className={s.tagP}>{tagP}</p>
      <Link to="/contact" className={s.contactBtn}>
        Contact Us
      </Link>
    </div>
  )
}
