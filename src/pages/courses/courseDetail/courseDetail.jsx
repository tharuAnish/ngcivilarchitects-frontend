import { useParams } from "react-router-dom"
import Nav from "../../../components/nav/nav"
import s from "./courseDetail.module.css"
import { useFetch } from "../../../hooks/useFetch"
import headerImage from "/blog_header.webp"
import Header from "../../../components/pageHeader/header"
import Loading from "../../../components/loading/loading"
import Footer from "../../../components/footer/footer"

export default function CourseDetail() {
  const { courseId } = useParams()

  const url = `http://127.0.0.1:8000/api/course/${courseId}/`
  const { data: apiResponse, isPending, error } = useFetch(url)
  const course = apiResponse?.course || []
  return (
    <div>
      <Nav />
      <div>
        <div className={s.topBg}>
          <div className="wrapper">
            <div className={s.courseTop}>
              {isPending && <Loading />}
              {error && (
                <div className={s.error}>
                  <img src={error} alt="Error" />
                </div>
              )}
              <div className={s.topLeft}>
                <h4 className={s.name}>{course.c_name}</h4>
                <p className={s.courseTag}>{course.c_tags}</p>
              </div>
              <div className={s.topRight}>
                <img
                  className={s.img}
                  src={`http://127.0.0.1:8000${course.c_pic}`}
                  alt="course img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className={s.overview}>
            <p className={s.title}>What you'll learn</p>
            <p
              className={s.overviewP}
              dangerouslySetInnerHTML={{ __html: course.c_overview }}
            />
          </div>
          <div className={s.description}>
            <p className={s.title}>Course Description</p>
            <p
              className={s.descP}
              dangerouslySetInnerHTML={{ __html: course.c_desc }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
