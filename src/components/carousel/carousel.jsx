import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "./carousel.css"
import { Link } from "react-router-dom"

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        className="carousel"
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        transitionTime={1000}
        useKeyboardArrows
      >
        <div>
          <img
            className="carousel-img zoomIn"
            src="carousel1.webp"
            alt="Slide 1"
            loading="lazy"
          />
          <div className="carousel-text">
            <p className="carousel-subline">
              A Civil and Architectural Engineering Consultancy
            </p>
            <h1 className="carousel-h1">Welcome to NG-group</h1>
            <p className="carousel-para">
              Experienced construction company dedicated to delivering
              exceptional results. We specialize in residential and commercial
              construction, renovations, and remodeling. Contact us to bring
              your vision to life.
            </p>
            <div className="carouselBtnDiv">
              <Link href="/services" className="carouselBtnServices">
                Our Services
              </Link>

              <Link href="/contact" className="carouselBtnContact">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            className="carousel-img "
            src="../carousel2.jpg"
            alt="Slide 2"
            loading="lazy"
          />
          <div className="carousel-text">
            <p className="carousel-subline">
              A Civil & Architects Engineering Consultancy
            </p>
            <h1 className="carousel-h1">Welcome to NG-group</h1>
            <p className="carousel-para">
              Experienced construction company dedicated to delivering
              exceptional results. We specialize in residential and commercial
              construction, renovations, and remodeling. Contact us to bring
              your vision to life.
            </p>
          </div>
        </div>
        <div>
          <img
            className="carousel-img"
            src="../carousel3.jpg"
            alt="Slide 3"
            loading="lazy"
          />
          <div className="carousel-text">
            <p className="carousel-subline">
              A Civil & Architects Engineering Consultancy
            </p>
            <h1 className="carousel-h1">Welcome to NG-group</h1>
            <p className="carousel-para">
              Experienced construction company dedicated to delivering
              exceptional results. We specialize in residential and commercial
              construction, renovations, and remodeling. Contact us to bring
              your vision to life.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
