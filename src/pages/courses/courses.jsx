import { useNavigate } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Header from "../../components/pageHeader/header"
import s from "./courses.module.css"
import headerImage from "/course.webp"
import { useFetch } from "../../hooks/useFetch"
import Loading from "../../components/loading/loading"
import { BsArrowRightCircle } from "react-icons/bs"

export default function Courses() {
  const url = "http://127.0.0.1:8000/api/course/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const courses = apiResponse?.courses || []

  const sortedCourse = [...courses].sort((a, b) => b.c__rank - a.c__rank)

  const navigate = useNavigate()

  const handleBlogClick = (courseId) => {
    navigate(`/courses/${courseId}`)
  }

  return (
    <>
      <Nav />
      <Header
        headerImg={headerImage}
        headerH2={"COURSES"}
        headerP={"Empower your construction career today"}
      />
      <div className={`${s.title} wrapper`}>
        <p className={s.titleP}>OUR COURSES</p>
        <h2 className={s.titleH2}>Courses We Provide</h2>
        <p className={s.coursePara}>
          At our construction company, we offer courses that empower you to
          excel in your role. Gain the skills and knowledge needed to thrive in
          the industry. Join us and build a brighter future.
        </p>
      </div>
      <div className={`${s.courses} wrapper`}>
        {isPending && <Loading />}
        {error && (
          <div className={s.error}>
            <img src={error} alt="Error" />
          </div>
        )}
        {courses &&
          sortedCourse.map((course) => (
            <div className={s.course} key={course.id}>
              <img
                className={s.img}
                src={`http://127.0.0.1:8000${course.c_pic}`}
                alt="course img"
                loading="lazy"
              />
              <p className={s.courseName}>{course.c_name}</p>

              <button
                className={s.button}
                onClick={() => handleBlogClick(course.id)}
              >
                More Details
                <BsArrowRightCircle className={s.icon} />
              </button>
            </div>
          ))}
      </div>
      <Footer />
    </>
  )
}
