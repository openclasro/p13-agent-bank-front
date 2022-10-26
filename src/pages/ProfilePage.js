import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setMe } from "../features/me"
import { selectMe } from '../selectors'
import EditForm from "../components/EditForm"



export default function ProfilePage() {
  const me = useSelector(selectMe)
  const loggedIn = me && me.profile

  const [firstname, setFirstname] = useState(
    loggedIn ? me.profile.firstName : ""
  )
  const [lastname, setLastname] = useState(loggedIn ? me.profile.lastName : "")

  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedIn) {
      navigate("/signin")
    }
  }, [])
  const dispatch = useDispatch()
  function save() {
    console.log("envoyer", firstname, lastname)

    axios
      .put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: firstname,
          lastName: lastname,
        },
        {
          headers: {
            Authorization: `Bearer ${me.token}`,
          },
        }
      )
      .then((res) => {
        console.log(
          "66666666666666666666666666666666666666666666666666666666666666666666",
          res
        )
        navigate("/")
        dispatch(setMe(res.data.body))
        alert("Updated successfully!")
      })
  }
  if (!loggedIn) return navigate("/signin")

  return (<>  <section className="sign-in-content">
    <h1>Profile</h1>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        save()
      }}
    >
      <div className="input-wrapper">
        <label htmlFor="firstname">Firstname</label>
        <input
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastname">Lastname</label>
        <input
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      <button type="submit" className="sign-in-button">
        Update
      </button>
    </form>
    <EditForm />
  </section>

  </>



  )
}
