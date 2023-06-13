import styles from "./homeAbout.module.css"
import ngLogo from "../../../assets/ngLogoBuildingWhite.png"
import about1 from "/company_about.png"
import about2 from "/engineer_worker.png"
import about3 from "/about3.png"

export default function HomeAbout() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutleft}>
        <p className={styles.aboutleftp}>About Us</p>
        <img className={styles.aboutImg} src={ngLogo} alt="NG-logo" />
        <p className={styles.aboutleftsubp}>
          We are the best construction company
        </p>
      </div>
      <div className={styles.aboutright}>
        <div className={styles.point1}>
          {/* <div className={styles.point1Svg}><about1 /></div> */}
          <img className={styles.point1Svg} src={about1} alt="about image" />

          <p className={styles.point1P}>
            We are a dynamic team of consulting engineers offering comprehensive
            architectural and civil design services. With a strong emphasis on
            quality and client engagement, we are a rapidly growing company
            committed to delivering exceptional results through active
            collaboration and specialized expertise.
          </p>
        </div>
        <div className={styles.point1}>
          <h4 className={styles.point1H4}>Building Dreams</h4>
          <img className={styles.point2Svg} src={about2} alt="about image" />
          <p className={styles.point1P}>
            We are a construction company dedicated to turning your vision into
            reality. With our expertise, we bring your dream projects to life,
            creating spaces that inspire and delight.
          </p>
        </div>
        <div className={styles.point3}>
          <h4 className={styles.point1H4}>Excellence in Construction</h4>
          <img className={styles.point3Svg} src={about3} alt="about image" />
          <p className={styles.point1P}>
            At our core, we are driven by a passion for excellence. From concept
            to completion, we consistently deliver top-quality construction
            projects, exceeding client expectations every step of the way.
          </p>
        </div>
      </div>
    </section>
  )
}
