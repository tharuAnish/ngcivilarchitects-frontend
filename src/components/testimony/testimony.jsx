import { useFetch } from "../../hooks/useFetch"
import { useState, useEffect } from "react"
import s from "./testimony.module.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { RiDoubleQuotesL } from "react-icons/ri"
import Loading from "../loading/loading"

export default function Testimony() {
  const url = "https://namoanish.pythonanywhere.com/api/testimonials/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const testimonials = apiResponse?.testimonials || []

  const [showArrows, setShowArrows] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setShowArrows(windowWidth > 700)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={s.testimonials}>
      <div className={s.backgroundContainer}></div>
      <div className={s.testimonialsWrapper}>
        <h4 className={s.h4}>Testimonials</h4>
        {isPending && <Loading />}
        {error && (
          <div className={s.error}>
            <img src={error} alt="Error" />
          </div>
        )}
        <Carousel
          infiniteLoop
          autoPlay
          interval={20000}
          transitionTime={1000}
          showArrows={showArrows}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          swipeable={false}
        >
          {testimonials &&
            testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className={s.imgDiv}>
                  <img
                    className={s.clientImg}
                    src={`https://namoanish.pythonanywhere.com${testimonial.client_pic}`}
                    alt="client img"
                    loading="lazy"
                  />
                </div>
                <div
                  className={s.clientDesc}
                  dangerouslySetInnerHTML={{ __html: testimonial.client_desc }}
                ></div>
                <RiDoubleQuotesL className={s.doubleQuote} />
                <h4 className={s.clientName}>- {testimonial.client_name}</h4>
                <p className={s.clientPos}>{testimonial.client_pos}</p>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  )
}
