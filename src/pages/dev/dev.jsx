"use client"

import { useState, useEffect } from "react"

const DevPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Optional: Add scroll reveal effect for sections
    const handleScroll = () => {
      const sections = document.querySelectorAll(".reveal-section")
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add("revealed")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="dev-container">
      <div className="blueprint-overlay"></div>

      <header className={`dev-header ${isVisible ? "visible" : ""}`}>
        <div className="profile-container">
          <div className="profile-image">
            <img src="/dev.png" alt="Anish Tharu" />
            <div className="image-border"></div>
          </div>
          <div className="profile-info">
            <h1>ANISH THARU</h1>
            <h2>Software Engineer</h2>
            <div className="accent-bar"></div>
            <p className="tagline">
              Software Engineer | Full-Stack Developer | Expert in Next.js ,
              Typescript, Javascript, React.js ...
            </p>
          </div>
        </div>
      </header>

      <main className="dev-content">
        <section className="reveal-section about-section">
          <div className="section-header">
            <div className="section-icon"></div>
            <h3>ABOUT</h3>
          </div>
          <p>
            I am a skilled Software Engineer and Web Developer with 1.5 years of
            experience, specializing in frontend development and backend
            integrations. Proficient in Next.js, React.js, TypeScript, Python,
            SQL, Prisma ORM, Firebase, and GraphQL. Experienced in leading
            teams, optimizing SEO, and utilizing efficient Git workflows.
            Committed to delivering high-quality solutions and staying ahead of
            emerging technologies to provide value-driven results .
          </p>
        </section>

        {/* <section className="reveal-section achievements-section">
          <div className="section-header">
            <div className="section-icon"></div>
            <h3>ACHIEVEMENTS</h3>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon courses"></div>
              <div className="achievement-content">
                <h4>20+ Courses</h4>
                <p>Certifications in software development</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon projects"></div>
              <div className="achievement-content">
                <h4>20+ Projects</h4>
                <p>Created and contributed to open-source</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon award"></div>
              <div className="achievement-content">
                <h4>Hacktoberfest</h4>
                <p>Recognition in 2021 and 2022</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="reveal-section experience-section">
          <div className="section-header">
            <div className="section-icon"></div>
            <h3>EXPERIENCE</h3>
          </div>
          <div className="experience-card">
            <div className="experience-header">
              <h4>Software Engineer</h4>
              <span className="company">
                StartupHire | California, USA (Remote)
              </span>
            </div>
            <p>
              Developing innovative web solutions using modern technologies and
              best practices. Collaborating with cross-functional teams to
              deliver high-quality software products.
            </p>
          </div>
        </section>

        <section className="reveal-section contact-section">
          <div className="section-header">
            <div className="section-icon"></div>
            <h3>CONNECT</h3>
          </div>
          <div className="contact-grid">
            <a href="tel:+919902798611" className="contact-card">
              <div className="contact-icon phone"></div>
              <div className="contact-info">
                <h4>Phone</h4>
                <p>(+91) 9902798611</p>
                <p>(+977) 9869290907</p>
              </div>
            </a>
            <a href="mailto:namoanishtharu@gmail.com" className="contact-card">
              <div className="contact-icon email"></div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>
                  namoanishtharu <br />
                  @gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://github.com/tharuAnish"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon github"></div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p>github.com/tharuAnish</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/tharuanish"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon linkedin"></div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <p>
                  linkedin.com/in/ <br /> tharuanish
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="dev-footer">
        <p>
          © {new Date().getFullYear()} | Developed by Anish Tharu | NG-Civil &
          Architects
        </p>

        <div className="footer-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </footer>

      <style jsx>{`
        /* Global Styles */
        .dev-container {
          min-height: 100vh;
          background-color: #121212;
          color: #e0e0e0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          position: relative;
          overflow: hidden;
          padding-bottom: 2rem;
        }

        .blueprint-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(
              rgba(18, 18, 18, 0.92),
              rgba(18, 18, 18, 0.98)
            ),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg stroke='%23ffa000' strokeWidth='0.5' strokeOpacity='0.15'%3E%3Cpath d='M0 0h60v60H0z' /%3E%3Cpath d='M0 0h15v15H0z' /%3E%3Cpath d='M15 0h15v15H15z' /%3E%3Cpath d='M30 0h15v15H30z' /%3E%3Cpath d='M45 0h15v15H45z' /%3E%3Cpath d='M0 15h15v15H0z' /%3E%3Cpath d='M15 15h15v15H15z' /%3E%3Cpath d='M30 15h15v15H30z' /%3E%3Cpath d='M45 15h15v15H45z' /%3E%3Cpath d='M0 30h15v15H0z' /%3E%3Cpath d='M15 30h15v15H15z' /%3E%3Cpath d='M30 30h15v15H30z' /%3E%3Cpath d='M45 30h15v15H45z' /%3E%3Cpath d='M0 45h15v15H0z' /%3E%3Cpath d='M15 45h15v15H15z' /%3E%3Cpath d='M30 45h15v15H30z' /%3E%3Cpath d='M45 45h15v15H45z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: -1;
          pointer-events: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        p {
          margin: 0;
        }

        /* Header Styles */
        .dev-header {
          padding: 3rem 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .dev-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .profile-container {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding-inline: 24px;
        }

        .profile-image {
          position: relative;
          width: 150px;
          height: 150px;
          flex-shrink: 0;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          position: relative;
          z-index: 1;
        }

        .image-border {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 2px solid #ffa000;
          border-radius: 16px;
          z-index: 0;
        }

        .profile-info {
          flex: 1;
        }

        .profile-info h1 {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .profile-info h2 {
          font-size: 1.25rem;
          font-weight: 500;
          color: #bdbdbd;
          margin-bottom: 1rem;
        }

        .accent-bar {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ffa000, #ff6d00);
          margin-bottom: 1.25rem;
          border-radius: 2px;
        }

        .tagline {
          font-size: 1.1rem;
          color: #9e9e9e;
          max-width: 600px;
        }

        /* Content Styles */
        .dev-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .reveal-section {
          margin-bottom: 3.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal-section.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-icon {
          width: 24px;
          height: 24px;
          background-color: #ffa000;
          margin-right: 1rem;
          position: relative;
          transform: rotate(45deg);
        }

        .section-icon:after {
          content: "";
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          background-color: #121212;
          transform: rotate(0deg);
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #ffa000;
        }

        .about-section p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #bdbdbd;
          max-width: 800px;
        }

        /* Achievements Section */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-left: 3px solid #ffa000;
          padding: 1.5rem;
          border-radius: 8px;
          display: flex;
          align-items: flex-start;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .achievement-icon {
          width: 40px;
          height: 40px;
          margin-right: 1rem;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          flex-shrink: 0;
        }

        .achievement-icon.courses {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffa000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20'%3E%3C/path%3E%3Cpath d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'%3E%3C/path%3E%3C/svg%3E");
        }

        .achievement-icon.projects {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffa000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='16 18 22 12 16 6'%3E%3C/polyline%3E%3Cpolyline points='8 6 2 12 8 18'%3E%3C/polyline%3E%3C/svg%3E");
        }

        .achievement-icon.award {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffa000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E");
        }

        .achievement-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .achievement-content p {
          font-size: 0.95rem;
          color: #9e9e9e;
        }

        /* Experience Section */
        .experience-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .experience-header {
          margin-bottom: 1rem;
        }

        .experience-header h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .company {
          font-size: 0.95rem;
          color: #ffa000;
        }

        .experience-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #bdbdbd;
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .contact-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          text-decoration: none;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 160, 0, 0.1);
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          margin-right: 1rem;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          flex-shrink: 0;
        }

        .contact-icon.phone {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffa000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
        }

        .contact-icon.email {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffa000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E");
        }

        .contact-icon.github {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffa000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'%3E%3C/path%3E%3C/svg%3E");
        }

        .contact-icon.linkedin {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffa000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'%3E%3C/path%3E%3Crect x='2' y='9' width='4' height='12'%3E%3C/rect%3E%3Ccircle cx='4' cy='4' r='2'%3E%3C/circle%3E%3C/svg%3E");
        }

        .contact-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .contact-info p {
          font-size: 0.9rem;
          color: #bdbdbd;
          margin-bottom: 0.25rem;
        }

        .contact-info p:last-child {
          margin-bottom: 0;
        }

        /* Footer Styles */
        .dev-footer {
          max-width: 1000px;
          margin: 4rem auto 0;
          padding: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dev-footer p {
          font-size: 0.9rem;
          color: #757575;
        }

        .footer-decoration {
          display: flex;
          gap: 0.5rem;
        }

        .footer-decoration span {
          display: block;
          width: 8px;
          height: 8px;
          background-color: #ffa000;
          opacity: 0.7;
        }

        .footer-decoration span:nth-child(2) {
          background-color: #ff6d00;
        }

        .footer-decoration span:nth-child(3) {
          background-color: #ff3d00;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .profile-container {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .accent-bar {
            margin: 0 auto 1.25rem;
          }

          .tagline {
            margin: 0 auto;
          }

          .section-header {
            justify-content: center;
          }

          .about-section p {
            text-align: center;
            margin: 0 auto;
          }

          .achievements-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .dev-footer {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-decoration {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .dev-header {
            padding: 2rem 1rem;
          }

          .profile-info h1 {
            font-size: 2rem;
          }

          .profile-info h2 {
            font-size: 1.1rem;
          }

          .tagline {
            font-size: 1rem;
          }

          .dev-content {
            padding: 0 1rem;
          }

          .about-section p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default DevPage
