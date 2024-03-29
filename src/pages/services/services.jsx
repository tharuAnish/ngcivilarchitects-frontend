import Nav from "../../components/nav/nav"
import headerImage from "/serviceworker.webp"
import Testimony from "../../components/testimony/testimony"
import Header from "../../components/pageHeader/header"
import s from "./services.module.css"
import { useFetch } from "../../hooks/useFetch"
import Footer from "../../components/footer/footer"
import Tagline from "../../components/tagline/tagline"
import Loading from "../../components/loading/loading"
import ChatSupport from "../../components/chatSupport/chatSupport"

export default function Services() {
  const url = "https://namoanish.pythonanywhere.com/api/services/"
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
        </p>

        <div className={s.services}>
          {isPending && <Loading />}
          {error && (
            <div className={s.error}>
              <img src={error} alt="Error" />
            </div>
          )}
          {services &&
            services
              .sort((a, b) => a.s_rank - b.s_rank) // Sort services based on s_rank in ascending order
              .map((service) => (
                <div className={s.service} key={service.id}>
                  <img
                    loading="lazy"
                    className={s.serviceImg}
                    src={`https://namoanish.pythonanywhere.com${service.s_pic}`}
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
      <ChatSupport />
      <Testimony />
      <Tagline
        tagH4="We Provide Best Construction Services"
        tagP="Crafting Perfection: Elevating Construction Standards with Uncompromising Quality and Unparalleled Expertise"
      />

      <Footer />
    </>
  )
}
