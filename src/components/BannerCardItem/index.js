import './index.css'

const BannerCardItem = props => {
  const {BannerDetails} = props
  const {headerText, description, className} = BannerDetails
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
