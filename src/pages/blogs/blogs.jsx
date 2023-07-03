import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Nav from "../../components/nav/nav"
import { useFetch } from "../../hooks/useFetch"
import s from "./blogs.module.css"
import Footer from "../../components/footer/footer"
import Header from "../../components/pageHeader/header"
import headerImage from "/blog_header.webp"
import { BsArrowRightCircle } from "react-icons/bs"
import { MdDateRange } from "react-icons/md"
import { FaTags } from "react-icons/fa"

export default function Blogs() {
  const url = "http://127.0.0.1:8000/api/blog/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const blogs = apiResponse?.blog || []

  const sortedBlogs = [...blogs].sort((a, b) => b.b_rank - a.b_rank)

  const navigate = useNavigate()

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`)
  }

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
        headerH2="BLOGS"
        headerP="A Glimpse into the Construction Realm"
        headerImg={headerImage}
      />
      <h2 className={s.h2}>Blogs</h2>
      <div className={`${s.blogs} wrapper`}>
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {blogs &&
          sortedBlogs.map((blog) => (
            <div className={s.blog} key={blog.id}>
              <img
                className={s.img}
                src={`http://localhost:8000${blog.b_pic}`}
                alt="blog img"
                loading="lazy"
              />
              <div className={s.blogText}>
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
                <hr className={s.hr} />
                <h4 className={s.name}>{blog.b_name}</h4>
                <p className={s.desc}>{blog.short_desc}</p>

                <button
                  className={s.button}
                  onClick={() => handleBlogClick(blog.id)}
                >
                  See More
                  <BsArrowRightCircle className={s.icon} />
                </button>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  )
}
