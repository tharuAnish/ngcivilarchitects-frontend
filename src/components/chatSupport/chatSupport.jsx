import React, { useState, useEffect, useRef } from "react"
import "./chatSupport.css"
import { FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

const handleUserResponse = (userText, handleBotMessage) => {
  // Convert userText to lowercase for case-insensitive matching
  const lowercaseUserText = userText.toLowerCase()

  // Check for keyword matches in user's input
  if (
    lowercaseUserText.includes("hi") ||
    lowercaseUserText.includes("hello") ||
    lowercaseUserText.includes("namaste")
  ) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          Hi, Hello, Namaste... <br />
          Welcome to the NG-CivilArchitects ChatSupport. How can I assist you
          today? You can ask me questions like:
          <br />
          <li>Tell me about the company.</li>
          <li>Give me contact details.</li>
          <li>Tell me about projects.</li>
          <li>What are the services I can get?</li>
          <li>Tell me about yourself.</li>
        </>
      ),
    })
  } else if (lowercaseUserText.includes("company")) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          We are a construction company dedicated to turning your vision into
          reality. With our expertise, we bring your dream projects to life,
          creating spaces that inspire and delight.You can learn more about us
          on our{" "}
          <Link
            className="botLink"
            to="/about"
            target="blank"
            rel="noopener noreferrer"
          >
            About page
          </Link>{" "}
          .
        </>
      ),
    })
  } else if (
    lowercaseUserText.includes("company contact") ||
    lowercaseUserText.includes("contact")
  ) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          You can reach us through the following contact details: <br />
          <strong>Phone:</strong> +977 081-538195
          <br />
          <strong>Email: </strong>
          <Link
            className="botLink"
            to="https://mail.google.com/mail/?view=cm&fs=1&to=ngcivilarchitectures@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ngcivilarchitects@gmail.com
          </Link>
          <br />
          <strong>Office address: </strong>
          <Link
            className="botLink"
            to="https://goo.gl/maps/Qoub1dkW1AMmFb83A"
            target="blank"
            rel="noopener noreferrer"
          >
            Ratna Rajmarg (Nepalganj-Surkhet Road-10)
          </Link>
          <br />
          Feel free to contact us from our{" "}
          <Link
            className="botLink"
            to="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Page
          </Link>{" "}
          for any inquiries or to discuss your construction needs.
        </>
      ),
    })
  } else if (lowercaseUserText.includes("project")) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          Yes, we have several ongoing projects that showcase our expertise. You
          can find more information about our projects on our website's{" "}
          <Link
            className="botLink"
            to="/projects"
            target="blank"
            rel="noopener noreferrer"
          >
            Project page.
          </Link>{" "}
          Would you like me to provide a direct link?
        </>
      ),
    })
  } else if (lowercaseUserText.includes("yes")) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          <Link
            className="botLink"
            to="/projects"
            target="blank"
            rel="noopener noreferrer"
          >
            https://ngcivilarchitects.com/projects
          </Link>
        </>
      ),
    })
  } else if (lowercaseUserText.includes("no")) {
    handleBotMessage({
      author: "bot",
      text: `Alright! If you have any specific questions or need further assistance, feel free to ask. Our team is here to help you.`,
    })
  } else if (lowercaseUserText.includes("thank")) {
    handleBotMessage({
      author: "bot",
      text: `You're welcome! If you have any more questions in the future, don't hesitate to reach out. Have a great day!`,
    })
  } else if (lowercaseUserText.includes("yourself")) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          I'm an AI ChatSupport created by{" "}
          <Link
            className="botLink"
            to="https://www.linkedin.com/in/tharuanish/"
            target="blank"
            rel="noopener noreferrer"
          >
            Anish Tharu
          </Link>{" "}
          to provide information about NG-CivilArchitects. They are a renowned
          architectural firm known for innovative designs, sustainability, and
          client satisfaction. I'm here to assist with any questions about their
          projects and services. Let's explore NG-CivilArchitects together!
        </>
      ),
    })
  } else if (lowercaseUserText.includes("service")) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          At NG-Group, we take pride in providing an extensive range of
          construction services with skilled professionals and tailored
          solutions. Our services include:
          <br />
          <li>Estimate and BOQ Preperations</li>
          <li>Design and Engineering</li>
          <li>Property Valuations</li>
          <li>Construction Management</li>
          <Link
            className="botLink"
            to="/services"
            target="blank"
            rel="noopener noreferrer"
          >
            and many more...
          </Link>
        </>
      ),
    })
  } else {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          I'm sorry, I didn't understand. Can you please rephrase your question
          or choose from the provided options:
          <br />
          <li>Tell me about the company.</li>
          <li>Give me contact details.</li>
          <li>Tell me about projects.</li>
          <li>What are the services I can get?</li>
          <li>Tell me about yourself.</li>
        </>
      ),
    })
  }
}

const ChatCircle = ({ onClick }) => {
  return (
    <div className="chat-circle" onClick={onClick}>
      <div className="chat-circle-inner">
        <span className="chat-icon"></span>
      </div>
    </div>
  )
}

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      author: "bot",
      text: (
        <>
          Hi, Hello, Namaste... <br />
          Welcome to the NG-CivilArchitects ChatSupport. How can I assist you
          today? You can ask me questions like:
          <br />
          <li>Tell me about the company.</li>
          <li>Give me contact details.</li>
          <li>Tell me about projects.</li>
          <li>What are the services I can get?</li>
          <li>Tell me about yourself.</li>
        </>
      ),
    },
  ])

  const messageContainerRef = useRef(null)

  const handleBotMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  useEffect(() => {
    // Scroll to the latest message
    messageContainerRef.current.scrollTop =
      messageContainerRef.current.scrollHeight
  }, [messages])

  const handleSubmit = (event) => {
    event.preventDefault()
    const userMessage = event.target.userMessage.value.trim()

    if (userMessage !== "") {
      const userMessageObj = {
        author: "user",
        text: userMessage,
      }
      setMessages((prevMessages) => [...prevMessages, userMessageObj])

      // Handle the user's message and generate a bot response
      handleUserResponse(userMessage.toLowerCase(), handleBotMessage)
    }

    event.target.userMessage.value = ""
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2 className="h2">NG-Chat Support</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="chat-container" ref={messageContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.author === "bot" ? "bot" : "user"}`}
          >
            <div className="avatar-msg">
              <div className="avatar-container">
                {message.author === "bot" && (
                  <img
                    src="./ngLogoWhiteBg.jpg"
                    alt="Bot Avatar"
                    className="avatar botAvatar"
                  />
                )}
                {message.author === "user" && (
                  <FiUser alt="User Avatar" className="avatar userAvatar" />
                )}
              </div>
              <div
                className={`message-text ${
                  message.author === "bot" ? "bot-text" : "user-text"
                }`}
              >
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatForm">
        <input
          className="chatInput"
          type="text"
          name="userMessage"
          placeholder="Type your message"
          required
        />
        <button className="chatBtn" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default function ChatSupport() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleChatClick = () => {
    setIsChatOpen(true)
  }

  const handleCloseChat = () => {
    setIsChatOpen(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {!isChatOpen && <ChatCircle onClick={handleChatClick} />}
      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </div>
  )
}
