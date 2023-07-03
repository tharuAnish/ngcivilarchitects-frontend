import React, { useEffect, useState } from "react"

const FacebookChat = ({ appId, pageId }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
    script.async = true

    script.onload = () => {
      window.fbAsyncInit = function () {
        FB.init({
          appId,
          xfbml: true,
          version: "v13.0",
        })
      }

      setScriptLoaded(true)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [appId])

  if (!scriptLoaded) {
    return null // Render null or a loading indicator while the script is being loaded
  }

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id={pageId}
      ></div>
    </>
  )
}

export default FacebookChat
