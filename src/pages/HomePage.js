import React, { useEffect, useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { meSlice } from "../store"
import { Link } from "react-router-dom"

export default function HomePage() {
  const me = useSelector((state) => state.me)
  console.log(me)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(me)
    if (me && me.token) {
      axios
        .post("http://localhost:3001/api/v1/user/profile", null, {
          headers: {
            Authorization: `Bearer ${me.token}`,
          },
        })
        .then((res) => {
          dispatch(meSlice.actions.setMe(res.data.body))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  return (
    <main>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${require("../assets/images/bank-tree.jpeg")})`,
        }}
      >
        <section className="hero-content">
          {me && me.profile ? <h1>Bonjour, {me.profile.firstName}</h1> : null}
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <Link to="/users">Users</Link>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
          <img
            src={require("../assets/images/icon-chat.png")}
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={require("../assets/images/icon-money.png")}
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">
            More savings means higher rates
          </h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature-item">
          <img
            src={require("../assets/images/icon-security.png")}
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  )
}
