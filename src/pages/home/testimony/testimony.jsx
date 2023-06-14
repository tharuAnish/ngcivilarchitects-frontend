import { useFetch } from "../../../hooks/useFetch"
import s from "./testimony.module.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { RiDoubleQuotesL } from "react-icons/ri"

export default function Testimony() {
  const url = "http://127.0.0.1:8000/api/testimonials/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const testimonials = apiResponse?.testimonials || []

  return (
    <div className={s.testimonials}>
      <div>
        <div className={s.testimonialsWrapper}>
          <h1>Testimonials</h1>
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <Carousel
            infiniteLoop
            autoPlay
            interval={20000}
            transitionTime={1000}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
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
