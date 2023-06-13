import React, { useEffect } from "react"
import Swiper from "swiper"
import "swiper/swiper-bundle.css"
import slide1 from "/about1.png"
import slide2 from "/about2.png"
import slide3 from "/about3.png"

const slides = [
  slide1,
  slide2,
  slide3,
  // Add more slide contents here
]

const Client = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000, // Adjust the delay as needed
      },
    })

    return () => {
      swiper.destroy() // Clean up the Swiper instance when the component unmounts
    }
  }, [])

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <img src={slide1} alt="slides" />
      </div>
    </div>
  )
}

export default Client
