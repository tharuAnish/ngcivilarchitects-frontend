import s from "./clients.module.css"
import img1 from "/client1.jpg"
import img2 from "/client2.jpg"
import img3 from "/client3.jpg"
import img4 from "/client4.jpg"

export default function Clients() {
  return (
    <div className="wrapper">
      <h2 className={s.clientsTitle}>Our Associates</h2>
      <div className={s.clients}>
        <div className={s.client}>
          <img className={s.img} src={img1} alt="client image" loading="lazy" />
        </div>

        <div className={s.client}>
          <img className={s.img} src={img2} alt="client image" loading="lazy" />
        </div>

        <div className={s.client}>
          <img className={s.img} src={img3} alt="client image" loading="lazy" />
        </div>

        <div className={s.client}>
          <img className={s.img} src={img4} alt="client image" loading="lazy" />
        </div>
        <div className={s.client}>
          <p className={s.clientText}>
            ShapeUp Engineering Consultant & Construction Company
          </p>
        </div>
      </div>
    </div>
  )
}
