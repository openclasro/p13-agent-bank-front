export default function FeatureItem({ name, image, description, alt, icon }) {
  return (
    <div className="feature-item">
      <img src={image} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{name}</h3>
      <p>{description}</p>
    </div>
  )
}
