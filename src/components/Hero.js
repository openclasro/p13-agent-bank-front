import background from "../assets/images/bank-tree.jpeg"
import { selectMe } from "../selectors"
import { useSelector } from "react-redux"

export default function Hero() {
  const me = useSelector(selectMe)

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <section className="hero-content">
        {me ? <h1>Bonjour, {me.firstName}</h1> : null}
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}
