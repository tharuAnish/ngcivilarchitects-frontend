import Footer from "../../components/footer/footer"
import Loading from "../../components/loading/loading"
import Nav from "../../components/nav/nav"
import Header from "../../components/pageHeader/header"
import Tagline from "../../components/tagline/tagline"
import { useFetch } from "../../hooks/useFetch"
import s from "./projects.module.css"
import headerImage from "/carousel3.webp"
import { MdDateRange } from "react-icons/md"
import { FaTags } from "react-icons/fa"
import ChatSupport from "../../components/chatSupport/chatSupport"

export default function Projects() {
  const url = "https://namoanish.pythonanywhere.com/api/project/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const projects = apiResponse?.project || []

  // Create a new sorted array based on P_rank
  const sortedProjects = [...projects].sort((a, b) => b.p_rank - a.p_rank)

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
    <div>
      <Nav />
      <Header
        headerImg={headerImage}
        headerH2={"PROJECTS"}
        headerP={"Building Excellence, Inspiring Futures"}
      />
      <div className={`${s.projectWrapper} wrapper`}>
        <div className={s.heading}>
          <p className={s.titleP}>OUR PROJECTS</p>
          <h2 className={s.titleH2}>Showcasing Our Success</h2>
          <p className={s.servicePara}>
            NG-Group: Building Dreams, Creating Marvels From residential to
            commercial projects, our skilled professionals handle every detail.
            Exceptional results, client satisfaction, and architectural marvels
            are our priorities.
          </p>
        </div>
        {isPending && <Loading />}
        {error && (
          <div className={s.error}>
            <img src={error} alt="Error" />
          </div>
        )}
        {projects &&
          sortedProjects.map((project) => {
            return (
              <div className={s.projects} key={project.id}>
                <div className={s.project}>
                  <div className={s.projectImg}>
                    <img
                      className={s.img}
                      src={`https://namoanish.pythonanywhere.com${project.p_pic}`}
                      alt="project img"
                      loading="lazy"
                    />
                  </div>
                  <div className={s.projectDetail}>
                    <div className={s.subText}>
                      <div className={s.subTextContainner}>
                        <MdDateRange />
                        <p className={s.date}>
                          {formatDate(project.timestamp)}
                        </p>{" "}
                      </div>
                      <div className={s.subTextContainner}>
                        {" "}
                        <FaTags />
                        <p className={s.tags}>{project.tags}</p>
                      </div>
                    </div>
                    <hr className={s.hr} />
                    {/* <p className={s.projectType}>{project.p_type}</p> */}
                    <h4 className={s.projectName}>{project.p_name}</h4>
                    <div
                      className={s.projectDesc}
                      dangerouslySetInnerHTML={{ __html: project.p_desc }}
                    />
                    <li className={s.projectPoint}>{project.p_point1}</li>
                    {project.p_point2 && (
                      <li className={s.projectPoint}>{project.p_point2}</li>
                    )}
                    {project.p_point3 && (
                      <li className={s.projectPoint}>{project.p_point3}</li>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <ChatSupport />
      <Tagline
        tagH4="WE CAN HELP BUILD YOUR PROJECT"
        tagP="TELL US ABOUT YOUR PROJECT"
      />
      <Footer />
    </div>
  )
}
