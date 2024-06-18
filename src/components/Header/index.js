// Write your JS code here
import './index.css'
const Header = () => {
  return (
    <div className="header_bg">
      <div className="div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          className="header_img"
          alt="website logo"
        />
      </div>
      <div className="div2">
        <p>Home</p>
        <p>Product</p>
        <p>Cart</p>
        <button className="btn">Logout</button>
      </div>
    </div>
  )
}
export default Header
