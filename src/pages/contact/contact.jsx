import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import Header from "../../components/pageHeader/header"
import ContactForm from "./contactForm/contactForm"
import headerImage from "/contact.webp"
import s from "./contact.module.css"
import { LuPhoneCall } from "react-icons/lu"
import { AiOutlineMail } from "react-icons/ai"
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"
import ChatSupport from "../../components/chatSupport/chatSupport"

export default function Contact() {
  return (
    <>
      <Nav />
      <Header
        headerImg={headerImage}
        headerH2="CONTACT US"
        headerP="We love to hear from you!"
      />
      <h4 className={s.contactTitle}>Hire Us Today</h4>
      <ContactForm />
      <div className={`${s.contact} wrapper`}>
        <h4 className={s.quickTitle}>Quick Contact</h4>
        <div className={s.quickContact}>
          <div className={s.quickContainner}>
            <div className={s.QCicon}>
              <LuPhoneCall />
            </div>
            <div className={s.QCdesc}>
              <p className={s.companyName}>Company Number</p>
              <p>+977-986 617 8195</p>
            </div>
          </div>
          <Link
            to="https://mail.google.com/mail/?view=cm&fs=1&to=ngcivilarchitectures@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={s.quickContainner}
          >
            <div className={s.QCicon}>
              <AiOutlineMail />
            </div>
            <div className={s.QCdesc}>
              <p className={s.companyName}>Company Email</p>
              <p>ngcivilarchitects@gmail.com</p>
            </div>
          </Link>
          <Link
            to="https://goo.gl/maps/Qoub1dkW1AMmFb83A"
            target="blank"
            className={s.quickContainner}
          >
            <div className={s.QCicon}>
              <MdLocationPin />
            </div>
            <div className={s.QCdesc}>
              <p className={s.companyName}>Company Location</p>
              <p>
                Ratna Rajmarg 10 <br /> (Nepalgunj - Surkhet road)
              </p>
            </div>
          </Link>
        </div>
        <h4 className={s.mapTitle}>You Can Find Us Here</h4>
        <iframe
          className={s.map}
          title="NG Civil & Architects Consulting Pvt. Ltd."
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.5037566145604!2d81.61606589355313!3d28.05479520941173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998675162f72d35%3A0xd7f21b0b3cf31d3f!2sNG%20Civil%20%26%20Architects%20Consulting%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1687412652955!5m2!1sen!2snp"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <ChatSupport />
      <Footer />
    </>
  )
}
