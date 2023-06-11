import s from "./featureCard.module.css"

export default function FeatureCard({ cardTitle, cardPara, cardIcon }) {
  return (
    <div className={s.featureCard}>
      <div className={s.cardImg}>{cardIcon}</div>
      <div className={s.cardPara}>
        <h4>{cardTitle}</h4>
        <p>{cardPara}</p>
      </div>
    </div>
  )
}
