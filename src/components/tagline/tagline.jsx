import s from "./tagline.module.css"

export default function Tagline({ tagH4, tagP }) {
  return (
    <div className={s.tag}>
      <h4 className={s.tagH4}>{tagH4}</h4>
      <p className={s.tagP}>{tagP}</p>
      <button className={s.tagBtn}>Contact Us</button>
    </div>
  )
}
