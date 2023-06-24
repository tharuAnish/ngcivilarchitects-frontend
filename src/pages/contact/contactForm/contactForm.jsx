import React, { useState } from "react"
import axios from "axios"
import s from "./contactForm.module.css"
import ngLogo from "/ngLogoNoBg.png"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"
import { Link } from "react-router-dom"

export default function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    phone_number: "",
    query_description: "",
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData
      )
      console.log(response.data) // Response from the Django API
      // Handle success, show success message to the user, etc.

      // Reset the form data
      setFormData(initialFormData)
    } catch (error) {
      console.error(error)
      // Handle error, show error message to the user, etc.
    }
  }

  return (
    <div className="wrapper">
      <div className={s.formContainner}>
        <div className={s.leftForm}>
          <img className={s.nglogo} src={ngLogo} alt="NGLogo" />
          <h4 className={s.formH4}>Welcome to our Contact Form!</h4>
          <p className={s.formPara}>
            We're thrilled that you're considering our construction company for
            your project. Whether you have questions, need an estimate, or want
            to discuss your construction needs, we're here to help. Just fill
            out the form, and we'll be in touch soon to provide the information
            you need. We're dedicated to delivering outstanding results and
            ensuring your satisfaction to bring your construction vision to
            life.
          </p>
          <div className={s.mediaLinks}>
            {/* <h4 className={s.h4}>Follow Us:</h4> */}
            <p>Follow Us:</p>
            <Link
              className={s.facebook}
              href="https://www.facebook.com/TeamCanWeBe"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              className={s.instagram}
              href="https://www.instagram.com/canwebeofficial/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              className={s.linkedin}
              href="https://www.linkedin.com/company/canwebe"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              className={s.youtube}
              href="https://www.youtube.com/channel/UCZQme48ejS0QY3C4JmWgI4Q"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </Link>
            <Link
              className={s.twitter}
              href="https://twitter.com/teamcanwebe"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className={s.rightForm}>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.inputContainer}
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className={s.inputContainer}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={s.inputContainer}
              type="tel"
              required
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
            />
            <textarea
              className={s.textArea}
              required
              name="query_description"
              placeholder="Share the details of your project or any questions you may have"
              value={formData.query_description}
              onChange={handleChange}
            ></textarea>
            <button className={s.submit} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
