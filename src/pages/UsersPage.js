import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import AccountList from "../components/AccountList"

export default function UsersPage() {
  const me = useSelector((state) => state.me)
  console.log("-----------------------------------------------------", me)
  const navigate = useNavigate()

  useEffect(() => {
    if (!me) {
      navigate("/signin")
    }
  }, [])

  return (
    <main className="main bg-dark">
      {me && me.profile ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {me.profile.firstName} {me.profile.lastName}!
          </h1>
          <Link to="/profile" className="edit-button">
            My profile
          </Link>
        </div>
      ) : null}

      <AccountList />
    </main>
  )
}
