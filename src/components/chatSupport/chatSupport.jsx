import React, { useState, useEffect, useRef } from "react"
import "./chatSupport.css"
import { FiUser } from "react-icons/fi"

const handleUserResponse = (userText, handleBotMessage) => {
  // Convert userText to lowercase for case-insensitive matching
  const lowercaseUserText = userText.toLowerCase()

  // Check for keyword matches in user's input
  if (lowercaseUserText.includes("hi") || lowercaseUserText.includes("hello")) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          Hello! Welcome to the NG-CivilArchitects chat support. How can I
          assist you today? You can ask me questions like:
          <br />
          1. Tell me about your company?
          <br />
          2. How can I contact?
          <br />
          3. What are your ongoing projects?
          <br />
          4. What are the services I can get?
          <br />
          5. Tell me about yourself?
          <br />
        </>
      ),
    })
  } else if (
    lowercaseUserText.includes("company") ||
    lowercaseUserText.includes("detail")
  ) {
    handleBotMessage({
      author: "bot",
      text: `We are a construction company dedicated to turning your vision into reality. With our expertise, we bring your dream projects to life, creating spaces that inspire and delight.`,
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
          <strong>Email:</strong> ngcivilarchitects@gmail.com <br />
          <strong>Office address</strong>: Ratna Rajmarg (Nepalganj-Surkhet
          Road-10)
          <br />
          Feel free to contact us for any inquiries or to discuss your
          construction needs.
        </>
      ),
    })
  } else if (lowercaseUserText.includes("projects")) {
    handleBotMessage({
      author: "bot",
      text: `Yes, we have several ongoing projects that showcase our expertise. You can find more information about our projects on our website's portfolio page. Would you like me to provide a direct link?`,
    })
  } else if (lowercaseUserText.includes("yes")) {
    handleBotMessage({
      author: "bot",
      text: `Sure! Here is the link to our portfolio page: [Provide the direct link to your portfolio page]. Feel free to explore our completed and ongoing projects to get a better sense of our work.`,
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
      text: `I'm an AI chat support created by Anish Tharu to provide information about NGCivil Architects. They are a renowned architectural firm known for innovative designs, sustainability, and client satisfaction. I'm here to assist with any questions about their projects and services. Let's explore NGCivil Architects together!`,
    })
  } else if (lowercaseUserText.includes("services")) {
    handleBotMessage({
      author: "bot",
      text: `I'm an AI chat support created by Anish Tharu to provide information about NGCivil Architects. They are a renowned architectural firm known for innovative designs, sustainability, and client satisfaction. I'm here to assist with any questions about their projects and services. Let's explore NGCivil Architects together!`,
    })
  } else {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          I'm sorry, I didn't understand. Can you please rephrase your question
          or choose from the provided options?
          <br />
          1. Tell me about your company?
          <br />
          2. How can I contact?
          <br />
          3. What are your ongoing projects?
          <br />
          4. What are the services I can get?
          <br />
          5. Tell me about yourself?
          <br />
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
          Hello! Welcome to the NG-CivilArchitects chat support. How can I
          assist you today? You can ask me questions like:
          <br />
          1. Tell me about your company?
          <br />
          2. How can I contact?
          <br />
          3. What are your ongoing projects?
          <br />
          4. What are the services I can get?
          <br />
          5. Tell me about yourself?
          <br />
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
