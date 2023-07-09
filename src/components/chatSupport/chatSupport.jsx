import React, { useState, useEffect, useRef } from "react"
import "./chatSupport.css"
import { FiUser } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom"

//quots
const quotes = [
  "“An optimist will tell you the glass is half-full; the pessimist, half-empty; and the engineer will tell you the glass is twice the size it needs to be.”",
  "“We're civil engineers, which means we're experts at turning 'oops' into 'aha!' and 'what the heck?' into 'look what we built!”",
  "“We civil engineers are like magicians; we transform raw materials into awe-inspiring structures, all while hoping no one asks how much it cost.”",
  "“Every great company started with a vision, fueled by determination, and supported by a team united in purpose.”",
  "“Being an engineer is like being a magician, except instead of pulling rabbits out of hats, we pull solutions out of thin air... with a lot of calculations and coffee.”",
  "“Believe in yourself, for you hold within you the power to achieve greatness. Embrace your strengths, conquer your fears, and let your passion guide you on the path to success.”",
  "“Success is not defined by the applause of others or the accumulation of wealth. True success lies in the impact we make, the lives we touch, and the positive change we bring to the world. Leave a legacy that resonates long after you are gone.”",
  "“Your potential knows no bounds. Dare to dream big, set audacious goals, and take bold action towards their realization. Believe in yourself, trust in your abilities, and let perseverance be the fuel that propels you forward.”",
]
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

//jokes
const jokes = [
  "How did the civil engineer propose to their partner? They got down on one knee and said, Will you be my foundation for life?",
  'A teacher asked her students to use the word "beans" in a sentence. "My father grows beans," said one girl. "My mother cooks beans," said a boy. A third student spoke up, "We are all human beans.',
  "What did the ocean say to the beach? Nothing, it just waved.",
  "What do you call a group of civil engineers at a party? A concrete mixer!",
  "Why did the construction company start offering yoga classes to its employees? Because they wanted to help them find balance between steel beams and inner peace!",
  "What did the big flower say to the little flower? Hi, bud!",
  "Why did the construction company's picnic get canceled? Because they couldn't find a good foundation for the potato salad!",
  "What did the big chimney say to the little chimney? You're too young to smoke.",
  "What did the construction company say when they accidentally built a door in the middle of a wall? We're just creating more opportunities for entry and exit!",
  "I was going to tell you a joke about boxing but I forgot the punch line.",
  'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
  "What month is the shortest of the year? May, it only has three letters.",
  "What did the stamp say to the envelope? Stick with me and we'll go places.",
  'Teacher: "Kids, what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!',
  "What did the tie say to the hat? You go on ahead. I'll hang around for a while.",
  "What did the tree say to the wind? Leaf me alone.",
  "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.",
  "What did the wall say to the ceiling? I'll meet you at the corner.",
]
const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  return jokes[randomIndex]
}

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
          <li>Operating hours.</li>
          <li>Tell me about yourself.</li>
          <li>Yes, I can tell some jokes too.</li>
          <li>Or, you can just ask for a quote.</li>
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
  } else if (lowercaseUserText.includes("operating")) {
    handleBotMessage({
      author: "bot",
      text: (
        <>
          Our office is open from 9:00 AM to 5:00 PM, Monday through Saturday.
          <br />
          Sunday: Closed
        </>
      ),
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
            Er.Anish Tharu
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
  } else if (lowercaseUserText.includes("joke")) {
    const randomJoke = getRandomJoke()
    handleBotMessage({
      author: "bot",
      text: randomJoke,
    })
  } else if (lowercaseUserText.includes("quote")) {
    const randomQuote = getRandomQuote()
    handleBotMessage({
      author: "bot",
      text: randomQuote,
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
          <li>Operating hours.</li>
          <li>Tell me about yourself.</li>
          <li>Yes, I can tell some jokes too.</li>
          <li>Or, you can just ask a quote.</li>
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
          <li>Operating hours.</li>
          <li>Tell me about yourself.</li>
          <li>Yes, I can tell some jokes too.</li>
          <li>Or, you can just ask for a quote.</li>
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
  const location = useLocation()

  const handleChatClick = () => {
    setIsChatOpen(true)
  }

  const handleCloseChat = () => {
    setIsChatOpen(false)
  }

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setIsChatOpen(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [location.pathname])

  return (
    <div className="App">
      <ChatCircle onClick={handleChatClick} />
      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </div>
  )
}
