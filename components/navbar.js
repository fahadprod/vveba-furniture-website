export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <i className="fa-solid fa-couch"></i>
          <span>FURNITURE</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="user">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>$0.00</span>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
      <div className="nav-list">
        <div>
          <i className="fa-solid fa-house"></i>
          <span>HOME</span>
        </div>
        <div>
          <i className="fa-solid fa-couch"></i>
          <span>PRODUCTS</span>
        </div>
        <div>
          <i className="fa-solid fa-dollar-sign"></i>
          <span>PRICING</span>
        </div>
        <div>
          <i className="fa-brands fa-blogger"></i>
          <span>BLOG</span>
        </div>
        <div>
          <i className="fa-solid fa-star"></i>
          <span>SALES</span>
        </div>
        <div>
          <i className="fa-solid fa-message"></i>
          <span>CONTACT</span>
        </div>
      </div>
    </nav>
  );
}