import Nav from "../../components/nav/nav"
import headerImage from "/carousel2.jpg"
import Testimony from "../../components/testimony/testimony"
import Header from "../../components/pageHeader/header"
import s from "./services.module.css"
import { useFetch } from "../../hooks/useFetch"
import Footer from "../../components/footer/footer"

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
        <h2>OUR SERVICES</h2>
        <p>Explore our services</p>
        <div className={s.services}>
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {services &&
            services.map((service) => (
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
      <Footer />
    </>
  )
}
