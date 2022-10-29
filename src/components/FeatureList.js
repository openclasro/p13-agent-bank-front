import FeatureItem from "./FeatureItem"
import chatIcon from "../assets/images/icon-chat.png"
import moneyIcon from "../assets/images/icon-money.png"
import securityIcon from "../assets/images/icon-security.png"

const FEATURES = [
  {
    name: "You are our #1 priority",
    description:
      " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    image: chatIcon,
    alt: "Chat Icon",
  },
  {
    name: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
    image: moneyIcon,
    alt: "Money Icon",
  },
  {
    name: "Security you can trust",
    description:
      " We use top of the line encryption to make sure your data and money is always safe.",
    image: securityIcon,
    alt: "Security Icon",
  },
]

export default function FeatureList() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {FEATURES.map(({ name, image, description, alt }) => (
        <FeatureItem
          key={name}
          name={name}
          image={image}
          description={description}
          alt={alt}
        />
      ))}
    </section>
  )
}
