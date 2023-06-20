import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Nav from "../../components/nav/nav"
import { useFetch } from "../../hooks/useFetch"
import s from "./blogs.module.css"
import Footer from "../../components/footer/footer"
import Header from "../../components/pageHeader/header"
import headerImage from "/carousel1.webp"
import { BsArrowRightCircle } from "react-icons/bs"

export default function Blogs() {
  const url = "http://127.0.0.1:8000/api/blog/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const blogs = apiResponse?.blog || []

  const sortedBlogs = [...blogs].sort((a, b) => b.b_rank - a.b_rank)

  const navigate = useNavigate()

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`)
  }

  // to shortern word
  const getShortenedDescription = (description, wordCount) => {
    const words = description.split(" ")
    const shortenedWords = words.slice(0, wordCount)
    return shortenedWords.join(" ")
  }

  return (
    <>
      <Nav />
      <Header
        headerH2="Blogs"
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
              />
              <div className={s.blogText}>
                <h4 className={s.name}>{blog.b_name}</h4>
                <p className={s.type}>{blog.b_type}</p>
                <div
                  className={s.desc}
                  dangerouslySetInnerHTML={{
                    __html: getShortenedDescription(blog.b_desc, 10),
                  }}
                />

                <p className={s.date}>{blog.b_date}</p>
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
