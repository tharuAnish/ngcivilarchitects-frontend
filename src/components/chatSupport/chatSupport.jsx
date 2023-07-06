import React, { useState, useEffect } from "react"
import "./chatSupport.css"
import { FiUser } from "react-icons/fi"

const handleUserResponse = (userText, handleBotMessage) => {
  // Convert userText to lowercase for case-insensitive matching
  const lowercaseUserText = userText.toLowerCase()

  // Check for keyword matches in user's input
  if (lowercaseUserText.includes("hi") || lowercaseUserText.includes("hello")) {
    handleBotMessage({
      author: "bot",
      text: "Hello! How can I assist you today?",
    })
  } else if (
    lowercaseUserText.includes("company") ||
    lowercaseUserText.includes("detail")
  ) {
    handleBotMessage({
      author: "bot",
      text: `We are a construction company dedicated to turning your vision into reality. With our expertise, we bring your dream projects to life, creating spaces that inspire and delight.`,
    })
  } else if (lowercaseUserText.includes("contact")) {
    handleBotMessage({
      author: "bot",
      text: `You can reach us through the following contact details:
        Phone: [phone number]
        Email: [email address]
        Office address: [company physical address]
        Feel free to contact us for any inquiries or to discuss your construction needs.`,
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
  } else {
    handleBotMessage({
      author: "bot",
      text: `I'm sorry, I didn't understand. Can you please rephrase your question or choose from the provided options?`,
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
      text: "Hello! How can I assist you today?",
    },
  ])

  const handleBotMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

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
      <div className="chat-container">
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

  return (
    <div className="App">
      {!isChatOpen && <ChatCircle onClick={handleChatClick} />}
      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </div>
  )
}
