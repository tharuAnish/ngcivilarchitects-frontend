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
import ChatSupport from "../../components/chatSupport/chatSupport"
import Loading from "../../components/loading/loading"

export default function Blogs() {
  const url = "https://namoanish.pythonanywhere.com/api/blog/"
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
        {isPending && <Loading />}
        {error && (
          <div className={s.error}>
            <img src={error} alt="Error" />
          </div>
        )}
        {blogs &&
          sortedBlogs.map((blog) => (
            <div className={s.blog} key={blog.id}>
              <img
                className={s.img}
                src={`https://namoanish.pythonanywhere.com${blog.b_pic}`}
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
      <ChatSupport />
      <Footer />
    </>
  )
}
