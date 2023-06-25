import s from "./loading.module.css"

export default function Loading() {
  return (
    <div className={s.loader}>
      <div className={s.primaryLoading}></div>
    </div>
  )
}
