import React, { useEffect, useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setMe } from "../features/me"
import { Link } from "react-router-dom"
import { selectMe } from "../selectors"
import FeatureItem from "../components/FeatureItem"
import Hero from "../components/Hero"
import FeatureList from "../components/FeatureList"

export default function HomePage() {
  const me = useSelector(selectMe)
  console.log("***************************", me)
  const dispatch = useDispatch()

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
