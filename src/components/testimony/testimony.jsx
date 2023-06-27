import { useFetch } from "../../hooks/useFetch"
import { useState, useEffect } from "react"
import s from "./testimony.module.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { RiDoubleQuotesL } from "react-icons/ri"
import Loading from "../loading/loading"

export default function Testimony() {
  const url = "http://127.0.0.1:8000/api/testimonials/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const testimonials = apiResponse?.testimonials || []

  // to show and hide arrow above 700px
  const [showArrows, setShowArrows] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setShowArrows(windowWidth > 700)
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Initial check for window width
    handleResize()

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={s.testimonials}>
      <div>
        <div className={s.testimonialsWrapper}>
          <h4 className={s.h4}>Testimonials</h4>

          {isPending && <Loading />}
          {error && <p>{error}</p>}
          <Carousel
            infiniteLoop
            autoPlay
            interval={20000}
            transitionTime={1000}
            showArrows={showArrows} // Dynamically set the showArrows prop based on window width
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            swipeable={false} // Disable default swipe gesture handling
          >
            {testimonials &&
              testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className={s.imgDiv}>
                    <img
                      className={s.clientImg}
                      src={`http://localhost:8000${testimonial.client_pic}`}
                      alt="client img"
                    />
                  </div>

                  <div
                    className={s.clientDesc}
                    dangerouslySetInnerHTML={{
                      __html: testimonial.client_desc,
                    }}
                  ></div>
                  <RiDoubleQuotesL className={s.doubleQuote} />
                  <h4 className={s.clientName}>- {testimonial.client_name}</h4>
                  <p className={s.clientPos}>{testimonial.client_pos}</p>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
