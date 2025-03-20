import { useFetch } from "../../hooks/useFetch"
import { useState, useEffect, useCallback } from "react"
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

  // Use useCallback for the resize handler to ensure it's stable between renders
  const handleResize = useCallback(() => {
    setShowArrows(window.innerWidth > 700)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    // Set initial state on mount
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])

  return (
    <div className={s.testimonials}>
      <div className={s.backgroundContainer}></div>
      <div className={s.testimonialsWrapper}>
        <h4 className={s.h4}>Testimonials</h4>
        {isPending && <Loading />}
        {error && (
          <div className={s.error}>
            {/* Display error as text assuming error is a message */}
            <p>{error}</p>
          </div>
        )}
        {!isPending && !error && testimonials.length === 0 && (
          <p>No testimonials available at the moment.</p>
        )}
        {testimonials.length > 0 && (
          <Carousel
            infiniteLoop
            autoPlay
            interval={10000}
            transitionTime={1000}
            showArrows={showArrows}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            swipeable={false}
          >
            {testimonials.map((testimonial) => (
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
        )}
      </div>
    </div>
  )
}
