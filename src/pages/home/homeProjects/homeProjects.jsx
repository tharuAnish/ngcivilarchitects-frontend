import { Link } from "react-router-dom"
import Loading from "../../../components/loading/loading"
import { useFetch } from "../../../hooks/useFetch"
import s from "./homeProjects.module.css"
import { BsArrowRightCircle } from "react-icons/bs"

export default function HomeProjects() {
  const url = "http://127.0.0.1:8000/api/project/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const projects = apiResponse?.project || []

  // Create a new sorted array based on P_rank
  const sortedProjects = [...projects].sort((a, b) => a.p_rank - b.p_rank)

  // Create a new array with limited projects based on P_rank
  const limitedProjects = sortedProjects.slice(0, 3)

  return (
    <div className={` ${s.projectWrapper} wrapper`}>
      <h4 className={s.h4}>Our Recent Projects</h4>
      {isPending && <Loading />}
      {error && <p>{error}</p>}
      <div className={s.projects}>
        {projects &&
          limitedProjects.map((project) => {
            return (
              <div key={project.id} className={s.project}>
                <div className={s.projectImg}>
                  <img
                    className={s.img}
                    src={`http://localhost:8000${project.p_pic}`}
                    alt="project img"
                  />
                </div>
                <div className={s.desc}>
                  <p className={s.projectType}>{project.p_type}</p>
                  <h4 className={s.projectName}>{project.p_name}</h4>
                  <p className={s.projectPoint}>{project.p_point1}</p>
                </div>
              </div>
            )
          })}
      </div>
      <Link className={s.button} to="/projects">
        View All
        <BsArrowRightCircle className={s.icon} />
      </Link>
    </div>
  )
}
