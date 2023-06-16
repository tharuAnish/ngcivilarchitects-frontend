import s from "./header.module.css"

export default function Header({ headerH2, headerP, headerImg }) {
  return (
    <div className={s.header}>
      <img className={s.headerImg} src={headerImg} alt="header img" />
      <div className={s.headerText}>
        <h2>{headerH2}</h2>
        <p>{headerP}</p>
      </div>
    </div>
  )
}
