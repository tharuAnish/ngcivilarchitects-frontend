import Footer from "../../components/footer/footer"
import Loading from "../../components/loading/loading"
import Nav from "../../components/nav/nav"
import Header from "../../components/pageHeader/header"
import Tagline from "../../components/tagline/tagline"
import { useFetch } from "../../hooks/useFetch"
import s from "./projects.module.css"
import headerImage from "/carousel3.jpg"

export default function Projects() {
  const url = "http://127.0.0.1:8000/api/project/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const projects = apiResponse?.project || []

  // Create a new sorted array based on P_rank
  const sortedProjects = [...projects].sort((a, b) => b.p_rank - a.p_rank)

  // Indexing for project flex direction
  let currentIndex = -1

  return (
    <div>
      <Nav />
      <Header
        headerImg={headerImage}
        headerH2={"PROJECTS"}
        headerP={"Building Excellence, Inspiring Futures"}
      />
      <div className={`${s.projectWrapper} wrapper`}>
        {isPending && <Loading />}
        {error && <p>{error}</p>}
        {projects &&
          sortedProjects.map((project) => {
            currentIndex++ // Increment the currentIndex for each iteration

            return (
              <div className={s.projects}>
                <div
                  key={project.id}
                  className={`${s.projectRow} ${
                    currentIndex % 2 === 0 ? s.projectRow : s.projectRowReverse
                  }`}
                >
                  <div className={s.projectImg}>
                    <img
                      className={s.img}
                      src={`http://localhost:8000${project.p_pic}`}
                      alt="project img"
                    />
                  </div>
                  <div className={s.projectDetail}>
                    <p className={s.projectType}>{project.p_type}</p>
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
      <Tagline
        tagH4="WE CAN HELP BUILD YOUR PROJECT"
        tagP="TELL US ABOUT YOUR PROJECT"
      />
      <Footer />
    </div>
  )
}
