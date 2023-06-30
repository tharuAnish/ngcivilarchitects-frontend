const MessengerCustomerChat = window.ReactMessengerCustomerChat.default

const pageId = "105457115937923"
const appId = "621826160041746"
const htmlRef = "my-messenger-chat"

const element = React.createElement(
  MessengerCustomerChat,
  { pageId, appId, htmlRef },
  null
)

ReactDOM.render(element, document.getElementById("root"))
