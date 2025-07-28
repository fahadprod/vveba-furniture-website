export default function HeroHeader() {
  return (
    <section className="landing">
      <div className="landing-bg"></div>
      <div className="banner">
        <img src="/images/banner-img.jpg" className="banner-img" alt="Luxury Furniture Banner" />
        <h1 className="banner-heading">LUXURY FURNITURE</h1>
        <button className="banner-btn banner-btn-1">GO TO SHOP</button>
        <button className="banner-btn banner-btn-2">EXPLORE</button>
      </div>
    </section>
  );
}