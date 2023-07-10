import React from "react"
import { useParams } from "react-router-dom"
import Nav from "../../../components/nav/nav"
import { useFetch } from "../../../hooks/useFetch"
import s from "./blogDetails.module.css"
import Header from "../../../components/pageHeader/header"
import headerImage from "/blog_header.webp"
import { MdDateRange } from "react-icons/md"
import { FaTags } from "react-icons/fa"
import ChatSupport from "../../../components/chatSupport/chatSupport"
import Loading from "../../../components/loading/loading"

export default function BlogDetails() {
  const { blogId } = useParams()

  const url = `https://namoanish.pythonanywhere.com/api/blog/${blogId}/`
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
          {isPending && <Loading />}
          {error && (
            <div className={s.error}>
              <img src={error} alt="Error" />
            </div>
          )}
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
            src={`https://namoanish.pythonanywhere.com${blog.b_pic}`}
            alt="blog img"
            loading="lazy"
          />
          <div
            className={s.desc}
            dangerouslySetInnerHTML={{ __html: blog.b_desc }}
          />
          <hr className={s.hr} />

          <p className={s.blogType}>{blog.b_type}</p>
        </div>
      </div>
      <ChatSupport />
    </>
  )
}
