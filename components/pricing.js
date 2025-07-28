export default function Pricing() {
  const products = [
    {
      id: 1,
      name: "ARMCHAIR",
      price: "$99.00",
      image: "/images/pricing-armchair.png",
      stars: 5
    },
    {
      id: 2,
      name: "COUCH",
      price: "$129.00",
      image: "/images/pricing-couch.png",
      stars: 4
    },
    {
      id: 3,
      name: "LIGHTING",
      price: "$59.00",
      image: "/images/pricing-lighting.png",
      stars: 5
    },
    {
      id: 4,
      name: "SOFA",
      price: "$89.00",
      image: "/images/pricing-sofa.png",
      stars: 4
    },
    {
      id: 5,
      name: "TABLE",
      price: "$49.00",
      image: "/images/pricing-table.png",
      stars: 4
    },
    {
      id: 6,
      name: "WARDROBE",
      price: "$599.00",
      image: "/images/pricing-wardrobe.png",
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return Array(5).fill().map((_, i) => (
      <i 
        key={i} 
        className={i < count ? "fa-solid fa-star" : "fa-regular fa-star"}
      ></i>
    ));
  };

  return (
    <section className="pricing">
      <div className="pricing-top">
        <img src="/images/furniture2.png" alt="Christmas furniture" />
        <div className="pricing-top-content">
          <h1>GET READY FOR A CHRISTMAS</h1>
          <button>ACTUAL TRENDS</button>
        </div>
      </div>
      <div className="pricing-cards">
        {products.map(product => (
          <div key={product.id} className="pricing-card">
            <div className="pricing-card-icons">
              <i className="fa-solid fa-link"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <div className="stars">
              {renderStars(product.stars)}
            </div>
            <h4>{product.price}</h4>
          </div>
        ))}
      </div>
      <button>GO TO SHOP</button>
    </section>
  );
}