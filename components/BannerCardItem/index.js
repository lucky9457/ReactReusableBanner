import './index.css'

const BannerCardItem = props => {
  const {list, key} = props
  const {headerText, description, className} = list
  console.log(key)
  return (
    <li className={className}>
      <h1 className="head_card">{headerText}</h1>
      <p className="para_card">{description}</p>
      <button className="buttoncard">Show more</button>
    </li>
  )
}
export default BannerCardItem
