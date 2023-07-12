import React, { useRef } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import s from "./carousel.module.css"
import { Link } from "react-router-dom"

export default function CarouselComponent() {
  return (
    <div className={s.carousel_wrapper}>
      <Carousel
        className="carousel"
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={7000}
        transitionTime={1000}
        useKeyboardArrows
        swipeable={false} // Disable default swipe gesture handling
        showStatus={false}
      >
        <div>
          <img
            className={s.carousel_img}
            src="carousel1.webp"
            alt="Slide 1 - A Civil & Architectural Engineering Consultancy"
            loading="lazy"
          />
          <div className={s.carousel_text}>
            <p className={s.carousel_subline}>
              A Civil & Architectural Engineering Consultancy
            </p>
            <h2 className={s.carousel_h1}>WELCOME TO NG</h2>
            <p className={s.carousel_para}>
              Experienced construction company dedicated to delivering
              exceptional results. We specialize in residential and commercial
              construction, renovations, and remodeling. Contact us to bring
              your vision to life.
            </p>
            <div className={s.carouselBtnDiv}>
              <Link to="/services" className={s.carouselBtnServices}>
                Our Services
              </Link>

              <Link to="/contact" className={s.carouselBtnContact}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            className={s.carousel_img}
            src="../carousel2.webp"
            alt="Slide 2 - A Civil & Architectural Engineering Consultancy"
            loading="lazy"
          />
          <div className={s.carousel_text}>
            <p className={s.carousel_subline}>
              A Civil & Architects Engineering Consultancy
            </p>
            <h2 className={s.carousel_h1}>WELCOME TO NG</h2>
            <p className={s.carousel_para}>
              Experienced construction company dedicated to delivering
              exceptional results. We specialize in residential and commercial
              construction, renovations, and remodeling. Contact us to bring
              your vision to life.
            </p>
            <div className={s.carouselBtnDiv}>
              <Link to="/services" className={s.carouselBtnServices}>
                Our Services
              </Link>

              <Link to="/contact" className={s.carouselBtnContact}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            className={s.carousel_img}
            src="/carousel3.webp"
            alt="Slide 3 - A Civil & Architectural Engineering Consultancy"
            loading="lazy"
          />
          <div className={s.carousel_text}>
            <p className={s.carousel_subline}>
              A Civil & Architects Engineering Consultancy
            </p>
            <h2 className={s.carousel_h1}>WELCOME TO NG</h2>
            <p className={s.carousel_para}>
              Experienced construction company dedicated to delivering
              exceptional results. We specialize in residential and commercial
              construction, renovations, and remodeling. Contact us to bring
              your vision to life.
            </p>
            <div className={s.carouselBtnDiv}>
              <Link to="/services" className={s.carouselBtnServices}>
                Our Services
              </Link>

              <Link to="/contact" className={s.carouselBtnContact}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
