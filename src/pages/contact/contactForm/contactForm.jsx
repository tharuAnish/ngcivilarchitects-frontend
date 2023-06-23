import React, { useState } from "react"
import axios from "axios"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    query_description: "",
  })

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
    } catch (error) {
      console.error(error)
      // Handle error, show error message to the user, etc.
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
      />
      <textarea
        name="query_description"
        placeholder="Query Description"
        value={formData.query_description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}
