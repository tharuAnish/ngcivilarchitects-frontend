import React from "react"
import { useParams } from "react-router-dom"
import Nav from "../../../components/nav/nav"
import { useFetch } from "../../../hooks/useFetch"
import s from "./blogDetails.module.css"
import Header from "../../../components/pageHeader/header"
import headerImage from "/carousel1.webp"
import { MdDateRange } from "react-icons/md"
import { FaTags } from "react-icons/fa"

export default function BlogDetails() {
  const { blogId } = useParams()

  const url = `http://127.0.0.1:8000/api/blog/${blogId}/`
  const { data: apiResponse, isPending, error } = useFetch(url)
  const blog = apiResponse?.blog || []

  // Function to format the timestamp
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    return formattedDate
  }

  return (
    <>
      <Nav />
      <Header
        headerH2="BLOG"
        headerP="A Glimpse into the Construction Realm"
        headerImg={headerImage}
      />
      <div className="wrapper">
        <div className={s.blog}>
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <h4 className={s.name}>{blog.b_name}</h4>
          <div className={s.subText}>
            <div className={s.subTextContainner}>
              <MdDateRange />
              <p className={s.date}>{formatDate(blog.timestamp)}</p>{" "}
            </div>
            <div className={s.subTextContainner}>
              {" "}
              <FaTags />
              <p className={s.tags}>{blog.tags}</p>
            </div>
          </div>
          <img
            className={s.img}
            src={`http://localhost:8000${blog.b_pic}`}
            alt="blog img"
          />
          <div
            className={s.desc}
            dangerouslySetInnerHTML={{ __html: blog.b_desc }}
          />
          <hr className={s.hr} />

          <p className={s.blogType}>{blog.b_type}</p>
        </div>
      </div>
    </>
  )
}
