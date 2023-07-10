import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

console.log(
  "%c╔════════════════════════════════════╗\n    Welcome to the Dev's Multiverse   \n      Your presence here indicates    \n               curiosity             \n             Lets Connect...          \n    email: namoanishtharu@gmail.com\n   Designed and Developed by Mr.Namo \n╚════════════════════════════════════╝",
  "color: green; font-family: monospace; font-size: 20px;"
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
