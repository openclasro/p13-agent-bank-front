import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import AccountList from "../components/AccountList"
import ProfilePage from "./ProfilePage"

export default function UsersPage() {
  const me = useSelector((state) => state.me)
  console.log("-----------------------------------------------------", me)
  const navigate = useNavigate()
  const [showMyProfile, setShowMyProfile] = useState(false)

  useEffect(() => {
    if (!me) {
      navigate("/signin")
    }
  }, [])

  if (!me || !me.profile) {
    return null
  }

  return (
    <main className="main bg-dark">
      {showMyProfile ? (
        <ProfilePage onCancel={() => setShowMyProfile(false)} />
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {me.profile.firstName} {me.profile.lastName}!
          </h1>
          <button
            onClick={() => setShowMyProfile(!showMyProfile)}
            className="edit-button"
          >
            My profile
          </button>
        </div>
      )}

      <AccountList />
    </main>
  )
}
