import FeatureCard from "./featureCard/featureCard"
import Styles from "./feature.module.css"
import { MdMobileFriendly } from "react-icons/md"
import { BsBuildings, BsGraphUpArrow, BsCartCheck } from "react-icons/bs"
import { FaFeather } from "react-icons/fa"

export default function Features() {
  return (
    <div className={`${Styles.features} wrapper`}>
      <h2 className={Styles.featureTitle}>What make us different!</h2>
      <div className={Styles.featureContainner}>
        <FeatureCard
          cardTitle="Expertise and Experience"
          cardPara="With 10+ years of industry experience, our expert team delivers exceptional results. From diverse challenges to unrivaled expertise, we bring unmatched professionalism  to every project..
          "
          cardIcon={<BsBuildings />}
        />
        <FeatureCard
          cardTitle="Uncompromising Quality"
          cardPara="From the foundation to the finishing touches, we employ skilled craftsmen and use premium materials to ensure exceptional results that stand the test of time."
          cardIcon={<BsCartCheck />}
        />
        <FeatureCard
          cardTitle="Sustainable Construction"
          cardPara="We are dedicated to sustainable construction practices. By choosing us, you're not only investing in quality construction but also in a greener and more sustainable future."
          cardIcon={<BsGraphUpArrow />}
        />
      </div>
    </div>
  )
}
