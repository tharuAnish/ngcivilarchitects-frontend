import React from "react"
import { useParams } from "react-router-dom"
import Nav from "../../../components/nav/nav"
import { useFetch } from "../../../hooks/useFetch"
import s from "./blogDetails.module.css"
import Header from "../../../components/pageHeader/header"
import headerImage from "/carousel1.webp"

export default function BlogDetails() {
  const { blogId } = useParams()

  const url = `http://127.0.0.1:8000/api/blog/${blogId}/`
  const { data: apiResponse, isPending, error } = useFetch(url)
  const blog = apiResponse?.blog || []

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
          <span className={s.span}>{blog.timestamp}</span>
          <span className={s.span}>{blog.b_type}</span>
          <img
            className={s.img}
            src={`http://localhost:8000${blog.b_pic}`}
            alt="blog img"
          />
          <div
            className={s.desc}
            dangerouslySetInnerHTML={{ __html: blog.b_desc }}
          />
        </div>
      </div>
    </>
  )
}
