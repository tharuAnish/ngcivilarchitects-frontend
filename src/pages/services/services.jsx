import Nav from "../../components/nav/nav"
import headerImage from "/carousel2.jpg"
import Testimony from "../../components/testimony/testimony"
import Header from "../../components/pageHeader/header"
import s from "./services.module.css"
import { useFetch } from "../../hooks/useFetch"
import Footer from "../../components/footer/footer"
import Tagline from "../../components/tagline/tagline"

export default function Services() {
  const url = "http://127.0.0.1:8000/api/services/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const services = apiResponse?.services || []
  return (
    <>
      <Nav />
      <Header
        headerImg={headerImage}
        headerH2={"SERVICES"}
        headerP={"We provide the best construction services"}
      />
      <div className={`${s.servicesContainner} wrapper`}>
        <p className={s.titleP}>OUR SERVICES</p>
        <h2 className={s.titleH2}>Explore Our Services</h2>
        <p className={s.servicePara}>
          At NG-Group, we take pride in providing an extensive range of
          construction services with skilled professionals and tailored
          solutions. From residential to commercial projects, we handle every
          aspect of construction.
          {/* Whether you're looking to build your dream
          home or transform your commercial space, trust NG-Group for top-notch
          construction services that exceed expectations. */}
        </p>
        <div className={s.services}>
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {services &&
            services
              .sort((a, b) => a.s_rank - b.s_rank) // Sort services based on s_rank in ascending order
              .map((service) => (
                <div className={s.service} key={service.id}>
                  <img
                    className={s.serviceImg}
                    src={`http://localhost:8000${service.s_pic}`}
                    alt="service img"
                  />
                  <h2 className={s.serviceTitle}>{service.s_name}</h2>
                  <div
                    className={s.serviceDesc}
                    dangerouslySetInnerHTML={{
                      __html: service.s_desc,
                    }}
                  ></div>
                </div>
              ))}
        </div>
      </div>
      <Testimony />
      <Tagline
        tagH4="We Are Provinding Best Construction Services"
        tagP="Crafting Perfection: Elevating Construction Standards with Uncompromising Quality and Unparalleled Expertise"
      />

      <Footer />
    </>
  )
}
