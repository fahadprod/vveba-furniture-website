export default function Products() {
  return (
    <section className="products">
      <div className="products-top">
        <h3>SEARCH FOR</h3>
        <h2>15000</h2>
        <h1>PRODUCTS</h1>
      </div>
      <div className="products-icons">
        <div className="bedroom">
          <img src="/images/bedroom.png" alt="Bedroom furniture" />
          <span>Bedroom</span>
        </div>
        <div className="buffet">
          <img src="/images/buffet.png" alt="Buffet furniture" />
          <span>Buffet</span>
        </div>
        <div className="dining">
          <img src="/images/dining.png" alt="Dining furniture" />
          <span>Dining</span>
        </div>
        <div className="sofa">
          <img src="/images/sofa.png" alt="Sofa furniture" />
          <span>Sofa</span>
        </div>
        <div className="table">
          <img src="/images/table.png" alt="Table furniture" />
          <span>Table</span>
        </div>
        <div className="wardrobe">
          <img src="/images/wardrobe.png" alt="Wardrobe furniture" />
          <span>Wardrobe</span>
        </div>
      </div>
    </section>
  );
}