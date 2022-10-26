import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setMe } from "../features/me"
import { selectMe } from "../selectors"
import EditForm from "../components/EditForm"

export default function MyProfile({ onCancel }) {
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

  return (
    <div className="my-profile">
      <h1>Profile</h1>
      <div className="accountHeader">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            save()
          }}
        >
          <div className="inputs-wrapper">
            <div className="input-wrapper">
              <label htmlFor="firstName"></label>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Firstname"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName"></label>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Lastname"
                required
              />
            </div>
          </div>
          <div className="button-group">
            <button className="btn" type="button" onClick={onCancel}>
              Cancel
            </button>
            <button className="edit-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
