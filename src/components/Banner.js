const Banner = () => {
  return (
    <section className="hero-content">
      {me ? <h1>Bonjour, {me.firstName}</h1> : null}
      <h2 className="sr-only">Promoted Content</h2>
      <p className="subtitle">No fees.</p>
      <p className="subtitle">No minimum deposit.</p>
      <p className="subtitle">High interest rates.</p>
      <p className="text">Open a savings account with Argent Bank today!</p>
    </section>
  )
}

export default Banner
