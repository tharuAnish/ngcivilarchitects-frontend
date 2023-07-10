import { useFetch } from "../../../hooks/useFetch"
import s from "./team.module.css"
import { Link } from "react-router-dom"
import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
import Loading from "../../../components/loading/loading"

export default function Team() {
  const url = "https://namoanish.pythonanywhere.com/api/team/"
  const { data: apiResponse, isPending, error } = useFetch(url)
  const teams = apiResponse?.team || []

  // Create a new sorted array based on staff_rank
  const sortedTeams = [...teams].sort((a, b) => a.staff_rank - b.staff_rank)

  return (
    <div className={`${s.teams}wrapper`}>
      <h2 className={s.h2}>Our Team</h2>
      <p className={s.teamSubHeader}>Introducing Our Skilled Team Members</p>
      {isPending && <Loading />}
      {error && (
        <div className={s.error}>
          <img src={error} alt="Error" />
        </div>
      )}
      {teams &&
        sortedTeams.map((team) => (
          <div className={s.team} id={team.id} key={team.id}>
            <div className={s.teamLeft}>
              <img
                className={s.staffImg}
                src={`https://namoanish.pythonanywhere.com${team.staff_pic}`}
                alt="staff img"
                loading="lazy"
              />
            </div>
            <div className={s.teamRight}>
              <p className={s.staffPos}>{team.staff_pos}</p>
              <h4 className={s.staffName}>{team.staff_name}</h4>
              <div
                className={s.staffDesc}
                dangerouslySetInnerHTML={{ __html: team.staff_desc }}
              />
              <div className={s.staffLinks}>
                Contact me:
                {team.gmail && (
                  <Link
                    className={s.gmail}
                    to={`mailto:${team.gmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineEmail />
                  </Link>
                )}
                {team.linkedin && (
                  <Link
                    className={s.linkedin}
                    to={team.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </Link>
                )}
                {team.twitter && (
                  <Link
                    className={s.twitter}
                    to={team.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </Link>
                )}
                {team.facebook && (
                  <Link
                    className={s.facebook}
                    to={team.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>
                )}
                {team.instagram && (
                  <Link
                    className={s.instagram}
                    to={team.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
