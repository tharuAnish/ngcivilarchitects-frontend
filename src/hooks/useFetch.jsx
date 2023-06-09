import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // to abort the controller to abort the fetch
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError("/nodata.png")
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}
