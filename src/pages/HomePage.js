import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectMe } from "../selectors"
import Hero from "../components/Hero"
import FeatureList from "../components/FeatureList"

export default function HomePage() {
  const me = useSelector(selectMe)
  console.log("***************************", me)

  useEffect(() => {
    if (me && me.token) {
    }
  }, [])

  return (
    <main>
      <Hero />
      <FeatureList />
    </main>
  )
}
